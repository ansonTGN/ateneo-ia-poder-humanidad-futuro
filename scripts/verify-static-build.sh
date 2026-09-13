#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf dist
npm run build

test -s dist/index.html
for f in \
  visual-capability visual-work visual-trust visual-cyber visual-mental visual-consciousness visual-power visual-future; do :; done

for f in public/visuals/*.svg; do
  b="$(basename "$f")"
  test -s "dist/visuals/$b" || { echo "ERROR: falta dist/visuals/$b" >&2; exit 12; }
done

test -s dist/angel-urbina-profile-qr.png

grep -Rqs "Poder, humanidad y futuro" dist || { echo "ERROR: portada no encontrada en dist" >&2; exit 13; }
grep -Rqs "La dirección sigue siendo humana" dist || { echo "ERROR: cierre no encontrado en dist" >&2; exit 14; }

echo "OK: build estático 5.3.0 contiene portada, cierre, QR y SVG deterministas."
echo "Prueba: npx vite preview --host 0.0.0.0"
