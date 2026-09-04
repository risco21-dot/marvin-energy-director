# Marvin v3 architecture

Marvin is a layered Home Assistant energy director used by the Night City card.
It separates planning from action so the UI can explain what the controller is
thinking without making the renderer itself responsible for control decisions.

```mermaid
flowchart LR
    PV[PV + forecast] --> P[Planning]
    B[Battery SOC/power] --> P
    L[House load] --> P
    W[Weather / daylight] --> P
    P --> D[Desired mode]
    D --> M[Mode manager]
    M --> C[Marvin v3 controller]
    C --> EV[EV apply script]
    C --> HVAC[HVAC apply script]
    P --> R[Stable reason / hourly briefing]
    M --> R
    R --> UI[Night City card]
    B --> UI
    EV --> UI
    HVAC --> UI
```

## Modes

- **Normal**: default balanced operation.
- **Conservation**: protect morning SOC / avoid projected grid need.
- **Abundant**: spend excess solar before clipping or curtailment.
- **Storm**: reserve-focused behavior for weather risk.
- **Outage**: grid unavailable.
- **Fault**: required data/control path is unhealthy.

The v3 mode manager uses immediate transitions for safety states and manual
modes, while normal energy-state changes use stability delays to avoid mode
thrashing.

## Main controller

`automation.marvin_v3_controller` runs on a one-minute cadence and on relevant
state changes. When Live Control is enabled, it delegates actions to:

- `script.energy_director_apply_ev`
- `script.marvin_v3_apply_hvac`

The scripts own the hardware-specific actuation details. This is deliberate:
planning logic should not know how a particular EVSE button or thermostat API
works.

## Commentary

`input_text.marvin_hourly_briefing` holds the hourly terminal-style message used
by the card. The text is condition-aware but deterministic and intentionally
avoids copied dialogue.
