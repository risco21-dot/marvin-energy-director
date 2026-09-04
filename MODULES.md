# Renderer module order

The live card was exported as eleven ordered JavaScript resources. The public source keeps that order and builds one distributable file.

| Order | Public source | Live resource ID | Live size | Purpose |
|---:|---|---|---:|---|
| 00 | `src/00-core.js` | `e25fa1843d7d49988f9216d4aa12ce48` | 59,252 B | Core card, layout, entities, base visuals/actions |
| 10 | `src/10-hardware-weather.js` | `59bd8a689fb349cdb0fcbaec52bff77b` | 28,029 B | Hardware identity, weather HUD, planning remap, first performance pass |
| 20 | `src/20-preview-chroma-ticker.js` | `9e0348801d884f578dab0bbdcd0e60ae` | 10,023 B | Chromatic slices and hourly terminal ticker |
| 30 | `src/30-thermal-store.js` | `6f35655aafe24f15ad282e5a4748c8bc` | 2,963 B | Thermal-storage telemetry |
| 40 | `src/40-permanent-chroma-edge.js` | `12a96b7d0c124d438e6eafabd6fa6f60` | 2,768 B | Static chromatic icon fringe |
| 50 | `src/50-ticker-static-chroma.js` | `fb10274ae3fc4762b1b6e1922a97f6fe` | 1,962 B | Static ticker chroma paint |
| 60 | `src/60-ticker-speed.js` | `4468898e6cba4b5896b0c836d9fe6db9` | 863 B | Marquee speed normalization |
| 70 | `src/70-perf-coordinator.js` | `7dfa8170f24e47b3bd2c8f79957d1978` | 17,749 B | Panel-local updates, clocks, visibility pause, DOM cache |
| 80 | `src/80-security-identity.js` | `715f7322fd0d4ba3a8362173105f97e8` | 9,917 B | Battery/thermostat identity and unified security chassis |
| 90 | `src/90-live-control.js` | `acf5aaa51ee345d7ab94878f16c868c1` | 3,807 B | Live-control status icon |
| 99 | `src/99-perf-governor.js` | `02196e8b118d49068de7b24ea59d383e` | 4,398 B | Filters unrelated HA state churn; compatibility refresh |

## Public-snapshot changes

The public source is not a byte-for-byte dump of the private installation. Intentional changes are limited to publication hygiene:

- household person IDs were replaced with `person.person_one` and `person.person_two`
- header initials were changed to `P1` and `P2`
- a remote avatar spritesheet URL was removed
- the avatar is rendered with Home Assistant's local `mdi:robot-industrial` icon

The remaining entity IDs are kept as reference names because they describe the tested integration points and are documented for remapping.
