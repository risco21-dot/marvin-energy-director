// Marvin renderer performance governor v5.
// Preserves every current visual/action. Filters unrelated HA state churn before
// it reaches the existing renderer, while retaining a slow compatibility refresh.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinPerfGovernorV5) return;
  Card.prototype.__marvinPerfGovernorV5 = true;

  const descriptor = Object.getOwnPropertyDescriptor(Card.prototype, 'hass');
  const originalSet = descriptor?.set;
  if (!originalSet) return;

  const watched = [
    'sensor.system_monitor_memory_usage',
    'sensor.system_monitor_uptime',
    'person.person_one',
    'person.person_two',
    'sensor.marvin_planning_energy_margin',
    'sensor.marvin_planning_morning_soc',
    'sensor.energy_director_energy_margin',
    'sensor.energy_director_projected_morning_soc',
    'sensor.marvin_stable_reason',
    'sensor.energy_director_reason',
    'input_text.marvin_hourly_briefing',
    'sensor.growatt_battery_battery_soc',
    'sensor.growatt_battery_battery_power',
    'input_select.energy_director_active_mode',
    'input_boolean.energy_director_live',
    'sensor.growatt_load_load_energy_today',
    'sensor.growatt_thor_ev_charger_status',
    'number.growatt_thor_ev_charger_max_current',
    'sensor.energy_director_ev_power',
    'sensor.growatt_battery_bms_warning',
    'sensor.growatt_battery_bms_error',
    'sensor.growatt_battery_bms_status',
    'climate.t10_plus_thermostat',
    'sensor.hvac_runtime_today',
    'sensor.marvin_ac_thermal_battery_today',
    'sensor.marvin_extra_cooling_runtime_today',
    'binary_sensor.marvin_extra_cooling_active',
    'weather.forecast_home',
    'input_text.weather_next_two_hours',
    'counter.camera_animals_today',
    'counter.camera_people_today',
    'counter.camera_vehicles_today',
    'cover.west_door',
    'cover.center_door',
    'cover.east_door',
    'input_datetime.west_door_last_opened',
    'input_datetime.center_door_last_opened',
    'input_datetime.east_door_last_opened',
    'light.kitchen_main_lights',
    'light.front_foyer_main_lights',
    'light.front_porch_overhead_light',
    'light.exterior_back_porch_lights',
    'light.office_main_lights',
    'light.master_bedroom_main_lights',
    'light.outside_camera_lights'
  ];

  const liveId = 'input_boolean.energy_director_live';
  const fallbackMs = 60000;

  const syncLiveOnly = (card, hass) => {
    const live = card.shadowRoot?.querySelector('.battery .live-control');
    if (!live) return;
    const on = hass?.states?.[liveId]?.state === 'on';
    live.classList.toggle('on', on);
    live.classList.toggle('off', !on);
    live.setAttribute('aria-label', `Live Control ${on ? 'On' : 'Off'}`);
    live.title = `Live Control: ${on ? 'ON' : 'OFF'}`;
  };

  const snapshot = (card, hass) => {
    const refs = card.__marvinGovernorRefs || (card.__marvinGovernorRefs = new Map());
    const changed = [];
    for (const id of watched) {
      const next = hass?.states?.[id];
      if (refs.get(id) !== next) changed.push(id);
      refs.set(id, next);
    }
    const tz = hass?.config?.time_zone || '';
    if (card.__marvinGovernorTz !== tz) {
      card.__marvinGovernorTz = tz;
      changed.push('@timezone');
    }
    return changed;
  };

  Object.defineProperty(Card.prototype, 'hass', {
    configurable: true,
    enumerable: descriptor.enumerable,
    get: descriptor.get,
    set(hass) {
      const first = !this.__marvinGovernorInitialized;
      const changed = snapshot(this, hass);
      this._hass = hass;

      if (first) {
        this.__marvinGovernorInitialized = true;
        this.__marvinGovernorFallbackAt = Date.now();
        originalSet.call(this, hass);
        return;
      }

      if (changed.length) {
        const stateChanges = changed.filter(id => id !== '@timezone');
        const liveOnly = stateChanges.length === 1 && stateChanges[0] === liveId && !changed.includes('@timezone');
        if (liveOnly) {
          syncLiveOnly(this, hass);
          return;
        }
        originalSet.call(this, hass);
        return;
      }

      const now = Date.now();
      if (now - (this.__marvinGovernorFallbackAt || 0) >= fallbackMs) {
        this.__marvinGovernorFallbackAt = now;
        originalSet.call(this, hass);
      }
    }
  });
});
