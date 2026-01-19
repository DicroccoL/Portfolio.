from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse # Importamos para servir el HTML
import os
from fastapi.staticfiles import StaticFiles
# 1. Crea la instancia principal de la aplicación
app = FastAPI()

# 2. Configuración para servir archivos estáticos (CSS, JS, imágenes)
# La URL virtual "/static" apunta a la carpeta real "static"
# Esto detecta la carpeta exacta donde está tu proyecto en el disco C:
script_dir = os.path.dirname(__file__)
static_path = os.path.join(script_dir, "static")    

# Montamos la carpeta usando la ruta absoluta
app.mount("/static", StaticFiles(directory=static_path), name="static")
# 3. Define la ruta principal (el home) para entregar el HTML
# ESTO ES LO CRUCIAL: Reemplaza tu antigua ruta /
@app.get("/")
def serve_index():
    # La ruta es relativa a donde se ejecuta (test prog/)
    # Aquí le decimos: devuelve el archivo index.html dentro de la carpeta static
    return FileResponse('static/index.html')

@app.get("/verificar")
def verificar():
    return {"mensaje": "El servidor está cargando el archivo correcto"}

