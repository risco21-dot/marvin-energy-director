# Changelog

## v0.1.0 - Public reference snapshot

Initial public snapshot of the live Marvin Night City Home project.

### Renderer

- Eleven ordered source modules captured from the running Home Assistant card.
- Single build output: `dist/marvin-night-city-card.js`.
- Battery, EV, HVAC, weather, camera counters, garage, lights, system status and Marvin commentary.
- Night City / Netrunner-inspired visual identity using original CSS and Home Assistant MDI icons.
- Performance coordinator and governor preserved from the live mobile-app installation.
- Reduced-motion handling retained.

### Marvin v3

- Reference planning equations for energy margin, projected morning SOC, grid need, daylight need and abundance factor.
- Desired-mode priority and v3 mode-manager reference.
- Sustained-grid-need latch.
- EV and HVAC actuation reference scripts.
- Two-hour weather cache and hourly-commentary example.

### Publication hygiene

- Household person IDs replaced with generic placeholders.
- Remote avatar asset removed and replaced with a local MDI icon.
- No screenshots fabricated; repository reserves `screenshots/` for captures from the real running system.
- Public reference does not auto-enable Live Control.
