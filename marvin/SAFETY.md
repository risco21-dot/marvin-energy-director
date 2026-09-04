# Marvin control safety

Marvin is not merely a display layer. The reference installation can actively
change EV charging current and thermostat setpoints. Treat it as control
software, not decoration.

Before enabling `input_boolean.energy_director_live` on another installation:

- Verify battery power sign convention (charge vs discharge).
- Verify grid import/export sign convention.
- Set battery capacity and reserve SOC for the actual battery.
- Set inverter/load limits for the actual equipment.
- Verify EVSE voltage, minimum current, maximum current, and start/stop actions.
- Verify thermostat entity, permitted setpoint range, and HVAC mode behavior.
- Test each control script manually with conservative limits.
- Confirm stale/unavailable data drives the system toward a safe mode rather than
  toward more load.
- Keep a manual override path outside Marvin.

The published values are examples from one tested home. They are not equipment
ratings for somebody else's installation.
