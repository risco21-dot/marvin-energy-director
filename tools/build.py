#!/usr/bin/env python3
"""Concatenate the live renderer modules in their tested load order."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
OUT = ROOT / "dist" / "marvin-night-city-card.js"

parts = sorted(SRC.glob("[0-9][0-9]-*.js"))
if not parts:
    raise SystemExit("No source modules found")

banner = "// Marvin Night City Home - generated bundle\n// Do not reorder modules without testing.\n\n"
body = [banner]
for path in parts:
    body.append(f"\n/* ===== {path.name} ===== */\n")
    body.append(path.read_text(encoding="utf-8"))
    if not body[-1].endswith("\n"):
        body.append("\n")

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text("".join(body), encoding="utf-8")
print(f"Wrote {OUT} from {len(parts)} modules")
