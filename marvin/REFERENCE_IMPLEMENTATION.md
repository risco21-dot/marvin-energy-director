# Marvin v3 reference implementation

This folder ships the **decision architecture and tested control patterns**, not a promise that one YAML file can safely control arbitrary energy hardware.

## Control chain

1. **Input adapters** provide battery SOC/power, corrected solar remaining, current non-EV load, expected night need, grid availability, storm risk, EV state, and thermostat state.
2. **Planning helpers** calculate daylight need, energy margin, projected morning SOC, projected grid need, and abundance factor.
3. **Desired mode** applies safety/manual priorities, then selects Abundant, Conservation, or Normal.
4. **Mode manager** applies Fault/Outage/Storm/manual states immediately. Automatic Abundant has a pre-clipping path near full SOC and otherwise uses a stability dwell. Normal and Conservation also use dwell time to avoid thrashing.
5. **Controller** runs the hardware apply scripts only when Live Control is enabled.
6. **Explanation layer** feeds the card stable reasons and hourly commentary without putting control logic inside the renderer.

## Required adapter contracts

The reference package expects these upstream values to exist or be replaced:

| Entity / role | Contract |
|---|---|
| `sensor.growatt_battery_battery_soc` | Battery SOC, percent |
| `sensor.growatt_battery_battery_power` | Reference install uses positive = charging, negative = discharging |
| `sensor.energy_director_corrected_solar_remaining` | Expected remaining solar energy for the day, kWh |
| `sensor.energy_director_non_ev_load` | Current non-EV house load, W |
| `sensor.energy_director_night_load_estimate` | Baseline overnight load, kW |
| `sensor.energy_director_night_need` | Expected energy required through the night, kWh |
| `binary_sensor.energy_director_core_data_healthy` | On only when planning inputs are trustworthy |
| `binary_sensor.energy_director_grid_available` | Grid availability |
| `binary_sensor.energy_director_storm_risk` | Storm-reserve request |
| `sensor.growatt_solar_solar_total_power` | Live PV power, W |
| `sensor.energy_director_recommended_ev_amps` | Desired EV current from the EV planning layer |

The actual solar-forecast correction and EV recommendation systems are deliberately left as adapters in v0.1 because those pieces are the most site/tariff/hardware specific.

## Planning equations included

`marvin-v3-reference.yaml` contains the reference formulas for:

- baseline load with thermal-banking correction
- smoothed non-EV load contract
- daylight energy need
- end-of-day battery projection
- energy margin after reserve + night need
- projected grid need
- projected morning SOC
- abundance factor and threshold
- desired mode
- staged HVAC target

## Actuation patterns included

### EV

The reference EV script:

- stops immediately when target current falls below minimum
- decreases current immediately
- increases current by only 1 A per controller cycle
- uses a 90-second cooldown before issuing a start command
- keeps stop commands immediate

The entity IDs are Growatt THOR-specific. Replace them with actions appropriate to your EVSE.

### HVAC

The reference HVAC script only acts when vacation mode and Marvin HVAC control are enabled. It applies `sensor.marvin_v3_hvac_target` when the requested target differs by at least 0.5°F.

## Safety priority

The v3 desired-mode priority is:

1. unhealthy core data → **Fault**
2. grid unavailable → **Outage**
3. storm risk → **Storm**
4. manual override → selected manual mode
5. real abundance opportunity → **Abundant**
6. poor morning projection / confirmed grid deficit → **Conservation**
7. otherwise → **Normal**

That priority is intentional. Do not move “more solar fun” above “data is bad” unless your goal is to make fault handling exciting.

## Legacy configuration

The private Home Assistant installation has older Energy Director helpers and historical automations from earlier iterations. They are **not** part of the public v3 reference unless they are still upstream inputs. Duplicate legacy mode managers/controllers should remain disabled when using v3.
