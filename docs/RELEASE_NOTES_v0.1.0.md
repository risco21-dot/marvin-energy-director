# v0.1.0 — Public reference snapshot

The first public snapshot of Marvin Night City Home: the actual Home Assistant renderer architecture plus the Marvin v3 energy-planning/control reference used behind it.

This release intentionally favors a faithful, inspectable reference over a one-click universal installer. The renderer preserves the tested eleven-module load order and builds into one `/local/` JavaScript resource. The Marvin folder documents and exports the planning equations, mode manager, sustained-deficit logic, controller pattern, and hardware-specific EV/HVAC examples.

**Do not enable active control on another installation until battery/grid sign conventions, equipment limits, EVSE actions, thermostat behavior, and stale-data handling have been verified.**

Public-snapshot privacy changes are limited to generic household presence IDs and removal of a remote avatar asset. No fake screenshots are included.
