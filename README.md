# Marvin Night City Home

A high-density animated Home Assistant operating surface with an optional energy director called **Marvin**.

This repository is a public snapshot of a real, daily-used Home Assistant interface. It is intentionally a **reference implementation**, not a universal installer. The card is opinionated, hardware-aware, and built around a specific house. Fork it, map the entities to your own system, and keep the control layer disabled until you have verified every assumption.

## What it is

The project combines two pieces:

1. **Marvin Night City Card** — one custom Home Assistant card that renders battery, power flow, EV status, HVAC, weather, camera detections, garage doors, lights, system status, and Marvin's commentary in one phone-friendly surface.
2. **Marvin v3 Energy Director** — a Home Assistant planning/control layer that interprets solar, battery, load, forecast, grid availability, and reserve needs, then selects Normal, Conservation, Abundant, Storm, Outage, or Fault behavior.

The renderer is deliberately distributed as ordered source layers under `src/`. That mirrors the tested production installation. `tools/build.py` concatenates them into one browser-loadable file without changing their order.

## Highlights

- Battery SOC, usable energy, charge/discharge direction, BMS state, and operating mode
- Forecast-aware **Normal / Conservation / Abundant / Storm / Outage / Fault** planning
- EV charging target display and optional THOR control path
- Forecast-aware vacation HVAC targets and a thermal-storage overlay
- Hourly Marvin terminal commentary
- Home Assistant-timezone-aware weather clock and two-hour forecast cache
- Camera detection counters inside a unified `SECURITY://NET` chassis
- Three garage-door states with last-opened timestamps
- Fast access to household lights and actions
- Reduced-motion support
- Panel-local updates, visibility pausing, DOM caching, and state-change filtering to keep the animated card usable in the HA mobile app

## Status

**Experimental reference implementation.**

The UI portion is suitable for adaptation today. Marvin's active-control portion is included so the system can be studied and ported, but it should not be enabled blindly on different hardware.

There is no HACS release yet. The first public snapshot uses a normal `/local/` Home Assistant resource so the exact tested bundle can be published before inventing packaging abstractions for hypothetical hardware.

## Install the card

Build the single browser resource:

```bash
python3 tools/build.py
```

Copy:

```text
dist/marvin-night-city-card.js
```

to:

```text
/config/www/marvin-night-city-card.js
```

Register it in **Settings → Dashboards → Resources** as:

```text
/local/marvin-night-city-card.js
```

with resource type **JavaScript Module**.

Then add the card to a dashboard:

```yaml
type: custom:marvin-night-city-card
```

A minimal sections-view example is in [`examples/dashboard.yaml`](examples/dashboard.yaml).

## Before it will look useful

The reference renderer contains entity IDs from one installation. The public snapshot replaces household-person names with generic `person.person_one` / `person.person_two`, but the Growatt, thermostat, lights, garage, camera counters, and Marvin entities remain descriptive reference IDs.

Start with [`marvin/REQUIRED_ENTITIES.md`](marvin/REQUIRED_ENTITIES.md). Map those IDs to your own entities in the `src/` files, then rebuild.

For an AI-assisted port, a useful instruction is:

> Adapt this Home Assistant reference implementation to my entities. Preserve the source-module load order and the performance coordinator/governor. Do not enable active control until battery/grid sign conventions, EV limits, and thermostat behavior are verified.

That is a much better use of an AI coding assistant than asking it to recreate the entire interface from a screenshot and discovering three evenings later that the battery arrow is backwards.

## Marvin v3

Marvin is separated into **planning → mode selection → actuation → explanation**.

The public reference includes:

- the real energy-margin and projected-morning-SOC equations
- abundance scoring and abundance-opportunity threshold
- desired-mode logic
- the authoritative v3 mode-manager behavior
- sustained-grid-need confirmation
- the v3 controller pattern
- reference EV and HVAC apply scripts
- weather cache and commentary architecture

See:

- [`marvin/ARCHITECTURE.md`](marvin/ARCHITECTURE.md)
- [`marvin/REFERENCE_IMPLEMENTATION.md`](marvin/REFERENCE_IMPLEMENTATION.md)
- [`marvin/marvin-v3-reference.yaml`](marvin/marvin-v3-reference.yaml)
- [`marvin/automations-reference.yaml`](marvin/automations-reference.yaml)
- [`marvin/scripts-reference.yaml`](marvin/scripts-reference.yaml)
- [`marvin/hourly-briefing-example.yaml`](marvin/hourly-briefing-example.yaml)
- [`marvin/REFERENCE_VALUES.md`](marvin/REFERENCE_VALUES.md)
- [`marvin/SAFETY.md`](marvin/SAFETY.md)

Some upstream sensors remain adapter inputs rather than being fabricated generically, especially corrected solar forecast, night-energy need, grid-health, and hardware-specific EV controls. Their contracts are documented in the entity map.

## Active control warning

Marvin can change **EV charging current** and **thermostat setpoints**.

Keep `input_boolean.energy_director_live` **OFF** while adapting the project. Verify:

- battery charge/discharge sign convention
- grid import/export sign convention
- battery capacity and reserve SOC
- inverter/load limits
- EVSE voltage, minimum current, maximum current, and start/stop actions
- thermostat target range and HVAC behavior
- behavior when required sensors are stale or unavailable

Read [`marvin/SAFETY.md`](marvin/SAFETY.md) before enabling control. A dashboard typo is ugly. A control-system assumption is physics with admin privileges.

## Renderer source order

The source order is part of the tested behavior. Do not alphabetize it into oblivion.

See [`MODULES.md`](MODULES.md). The final bundle is generated by `tools/build.py`.

## Screenshots

The repository intentionally does not contain fabricated mockups. The initial package was exported from the live Home Assistant configuration while automated dashboard screenshots were disabled. Real running-system captures should be added under `screenshots/` when available.

## Tested reference installation

The original installation uses a Growatt battery/inverter stack, Growatt THOR EVSE, a Home Assistant climate entity, camera detection counters, three garage covers, and Home Assistant's weather/forecast services. Site-specific values are listed in [`marvin/REFERENCE_VALUES.md`](marvin/REFERENCE_VALUES.md).

Those are evidence of what has been tested, not claims about what every inverter, EVSE, or thermostat should do.

## Why the code is layered

The card evolved through small visual and performance passes against a running phone dashboard. Later modules intentionally override earlier behavior. Keeping the layers:

- preserves the tested load order
- makes regressions easier to bisect
- keeps experimental identity work separate from the stable core
- avoids a giant refactor immediately before the first public release, a beloved software tradition with a remarkably poor survival rate

A future release can consolidate modules once there is evidence that doing so is useful.

## License and names

Code in this repository is MIT licensed. See [`LICENSE`](LICENSE) and [`NOTICE.md`](NOTICE.md).

This is an independent, unofficial Home Assistant project. It is not affiliated with Home Assistant/Nabu Casa, CD PROJEKT RED, OpenAI, or rights holders associated with the cultural references behind the aesthetic/personality. No game artwork, copied dialogue, film/TV assets, or remote proprietary avatar asset is bundled.
