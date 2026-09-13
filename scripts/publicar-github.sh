#!/usr/bin/env bash
set -euo pipefail

OWNER="ansonTGN"
REPO="ateneo-ia-poder-humanidad-futuro"
VISIBILITY="public"

case "${1:-}" in
  --private) VISIBILITY="private" ;;
  --public|"") VISIBILITY="public" ;;
  *) echo "Uso: $0 [--public|--private]" >&2; exit 2 ;;
esac

command -v git >/dev/null || { echo "ERROR: falta git" >&2; exit 10; }
command -v gh >/dev/null || { echo "ERROR: falta GitHub CLI (gh)" >&2; exit 11; }
command -v npm >/dev/null || { echo "ERROR: falta npm" >&2; exit 12; }

echo "==> GitHub CLI"
gh auth status

echo "==> Dependencias + build"
if [[ -x node_modules/.bin/slidev && "${FORCE_INSTALL:-0}" != "1" ]]; then
  echo "Reutilizando node_modules ya validado en este host."
else
  if [[ -f package-lock.json ]]; then
    npm ci --no-audit --no-fund
  else
    npm install --no-audit --no-fund
  fi
fi
npm run build
[[ -s dist/index.html ]] || { echo "ERROR: dist/index.html no existe" >&2; exit 13; }

echo "==> Comprobando nombre del repositorio"
if gh repo view "$OWNER/$REPO" >/dev/null 2>&1; then
  echo "ERROR: ya existe https://github.com/$OWNER/$REPO" >&2
  echo "Elige otro nombre antes de publicar para no sobrescribir nada." >&2
  exit 14
fi

if [[ ! -d .git ]]; then
  git init
fi

git branch -M main
git add .
if ! git diff --cached --quiet; then
  git commit -m "feat: presentación Slidev IA, robótica y gobernanza v5"
fi

ARGS=(repo create "$OWNER/$REPO" --source=. --remote=origin --push --description "Presentación Slidev sobre IA, poder, humanidad, robótica, ciberseguridad y gobernanza")
if [[ "$VISIBILITY" == "public" ]]; then
  ARGS+=(--public)
else
  ARGS+=(--private)
fi

gh "${ARGS[@]}"

echo
echo "Repositorio publicado: https://github.com/$OWNER/$REPO"
echo "Netlify: Add new project -> Import an existing project -> GitHub -> $OWNER/$REPO"
echo "Build command: npm run build"
echo "Publish directory: dist"
