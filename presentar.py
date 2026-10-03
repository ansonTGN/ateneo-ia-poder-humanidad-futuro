#!/usr/bin/env python3
from pathlib import Path
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
import argparse, webbrowser

p = argparse.ArgumentParser(description="Presentar la compilación local sin contraseña")
p.add_argument("--port", type=int, default=8081)
p.add_argument("--no-browser", action="store_true")
a = p.parse_args()
folder = Path(__file__).resolve().parent / "dist"
if not (folder / "index.html").is_file():
    raise SystemExit("No hay compilación en dist. Ejecuta npm run build.")
try:
    server = ThreadingHTTPServer(("127.0.0.1", a.port), partial(SimpleHTTPRequestHandler, directory=str(folder)))
except OSError as e:
    raise SystemExit(f"No se puede abrir el puerto {a.port}: {e}. Prueba --port 8082.")
url = f"http://127.0.0.1:{a.port}/#/1"
print("Presentación disponible en", url, flush=True)
print("Mantén esta terminal abierta. Ctrl+C para terminar.", flush=True)
if not a.no_browser:
    webbrowser.open(url)
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()
