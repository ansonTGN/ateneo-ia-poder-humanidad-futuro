#!/usr/bin/env bash
set -euo pipefail

npm run build
[[ -s dist/index.html ]]

for marker in \
  CinematicLoop \
  '9Uch931cDx8' \
  'Nkh6RUocD8c' \
  'm1CH-mgpdYg' \
  'xXiTvnsi4EI' \
  'WrSpfnEtzPA' \
  'ffRaD7sY0TQ' \
  'Xt_RLNx1eBM' \
  '7vwgr4xIfsw' \
  '4lSQnrMC6nY'
do
  grep -q "$marker" slides.md || { echo "ERROR: falta $marker" >&2; exit 20; }
done

echo "OK: build y capa audiovisual v5 presentes"
