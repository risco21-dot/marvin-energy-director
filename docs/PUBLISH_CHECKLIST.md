# Publication checklist

## Already complete in v0.1.0 snapshot

- [x] Export the live eleven-layer renderer source.
- [x] Preserve tested load order.
- [x] Remove household person names/IDs from the public source.
- [x] Remove the remote avatar asset and use a local MDI icon.
- [x] Run JavaScript syntax checks on every module and the generated bundle.
- [x] Parse all YAML reference files.
- [x] Include Marvin v3 planning math and active controller reference configs.
- [x] Include safety, architecture, entity-map, release-note, and launch-post documentation.
- [x] Keep public Live Control as an explicit opt-in rather than auto-enabling it.
- [x] Build and round-trip-test the source archive.
- [x] Create a portable Git bundle with `main` and tag `v0.1.0`.

## External gates

- [ ] Create or select a clean public GitHub repository for this project.
- [ ] Push the prepared `main` history and `v0.1.0` tag.
- [ ] Set the repository description from `docs/GITHUB_DESCRIPTION.txt`.
- [ ] Add suitable topics such as `home-assistant`, `lovelace`, `custom-card`, `solar`, `battery`, `ev`, and `energy-management`.
- [ ] Capture real screenshots from the running `marvin-home` dashboard once HA dashboard screenshot mode is enabled.
- [ ] Add those real captures under `screenshots/` and reference them from the README.
- [ ] Publish the v0.1.0 release using `docs/RELEASE_NOTES_v0.1.0.md`.
- [ ] Post the project using `docs/LAUNCH_POST.md`.

Do not use generated mockups in place of screenshots of the running card. The fact that the thing actually exists is the useful part.
