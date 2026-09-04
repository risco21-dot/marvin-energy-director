# Launch post draft

## Marvin Night City Home: a cyberpunk Home Assistant operating surface + energy director

I finally cleaned up and published the Home Assistant dashboard I actually use at home.

It started as a single dense mobile card and gradually turned into a small home operating surface: battery and power flow, EV charging, HVAC, weather, camera detections, garage doors, lights, system status, and a condition-aware energy controller called Marvin.

The interesting part is not just the neon UI. Marvin v3 separates planning from actuation. It projects remaining solar, daytime load, battery reserve, night demand and morning SOC; selects Normal / Conservation / Abundant / Storm / Outage / Fault; and can optionally apply EV-current and HVAC targets. The public repo includes the reference planning math and the tested control patterns.

This is intentionally **not** a universal one-click dashboard. It is the real reference implementation with the private bits removed. The entity map is documented so you can fork it and adapt it to your own Home Assistant system, manually or with a coding assistant.

I also kept the renderer's ordered patch modules rather than doing a heroic pre-release refactor. That is how the running card was performance-tuned in the HA mobile app, and I prefer slightly odd working software to beautifully reorganized archaeology.

Active energy control is OFF-by-default territory for anyone porting it. Verify battery/grid sign conventions, equipment limits, EVSE actions and thermostat behavior before letting it touch hardware.

Screenshots in the repo are captures of the real running system, not mockups, once available.
