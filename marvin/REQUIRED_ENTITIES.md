# Entity map

The first public version is intentionally a reference implementation rather
than a universal setup wizard. Replace these IDs with equivalents from your HA
instance, manually or with a coding assistant.

## System / presence

- `sensor.system_monitor_memory_usage`
- `sensor.system_monitor_uptime`
- `person.person_one`
- `person.person_two`

## Marvin / planning

- `sensor.marvin_planning_energy_margin`
- `sensor.marvin_planning_morning_soc`
- `sensor.marvin_stable_reason`
- `input_text.marvin_hourly_briefing`
- `input_select.energy_director_active_mode`
- `input_boolean.energy_director_live`

## Battery / energy / EV

- `sensor.growatt_battery_battery_soc`
- `sensor.growatt_battery_battery_power`
- `sensor.growatt_load_load_energy_today`
- `sensor.growatt_thor_ev_charger_status`
- `number.growatt_thor_ev_charger_max_current`
- `sensor.energy_director_ev_power`
- `sensor.growatt_battery_bms_warning`
- `sensor.growatt_battery_bms_error`
- `sensor.growatt_battery_bms_status`

## HVAC / thermal storage

- `climate.t10_plus_thermostat`
- `sensor.hvac_runtime_today`
- `sensor.marvin_ac_thermal_battery_today`
- `sensor.marvin_extra_cooling_runtime_today`
- `binary_sensor.marvin_extra_cooling_active`

## Weather

- `weather.forecast_home`
- `input_text.weather_next_two_hours`

## Security

- `counter.camera_animals_today`
- `counter.camera_people_today`
- `counter.camera_vehicles_today`
- `cover.west_door`
- `cover.center_door`
- `cover.east_door`
- `input_datetime.west_door_last_opened`
- `input_datetime.center_door_last_opened`
- `input_datetime.east_door_last_opened`

## Lights / action

- `light.kitchen_main_lights`
- `light.front_foyer_main_lights`
- `light.front_porch_overhead_light`
- `light.exterior_back_porch_lights`
- `light.office_main_lights`
- `light.master_bedroom_main_lights`
- `light.outside_camera_lights`
- `script.tray_cyberpunk_motion`
