# Reference values from the tested installation

These are **site-specific example values**, not defaults for arbitrary hardware.

| Setting | Tested value |
|---|---:|
| Battery nominal capacity | 16 kWh |
| Reserve SOC | 10% |
| Charge efficiency | 0.95 |
| Discharge efficiency | 0.94 |
| Inverter/load target | 8,500 W |
| EVSE voltage assumption | 240 V |
| EV minimum current | 6 A |
| EV maximum current | 32 A |
| Grid-import trim start | 250 W |
| Grid recovery threshold | 100 W |
| Minimum live solar for abundance | 1,500 W |
| Vacation/base cooling setpoint | 81 °F |
| Power stale window | 3 min |
| SOC stale window | 10 min |
| Solar stale window | 5 min |

The thermal-storage overlay estimates extra cooling using a 3.5 kW HVAC input
and a 0.55 storage factor. Replace those assumptions if you use that feature.
