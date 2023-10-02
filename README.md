# Integración de Google Sheets con una Aplicación Web

## Configuración en Windows

1. **Instalar Python 3**:
   
   - Descarga e instala Python 3 en tu computadora desde el sitio web oficial de Python en [python.org](https://www.python.org/downloads/windows). Esto proporcionará la base para ejecutar tu aplicación Flask.

2. **Crear un entorno virtual**:

   - Para mantener tu proyecto aislado de otros proyectos y evitar conflictos de dependencias, es una buena práctica crear un entorno virtual. Abre una ventana de PowerShell y ejecuta el siguiente comando para crear un entorno virtual llamado "venv":
   
     ```bash
     python -m venv venv
     ```

3. **Activar el entorno virtual**:

   - Activa el entorno virtual que acabas de crear. En PowerShell, ejecuta:

     ```bash
     .\venv\Scripts\Activate
     ```

     Esto asegura que las bibliotecas que instales se utilicen en el entorno virtual.

4. **Instalar Flask**:

   - Utiliza pip, el administrador de paquetes de Python, para instalar Flask en tu entorno virtual:

     ```bash
     pip install flask
     ```

     Puedes verificar que Flask se haya instalado correctamente con:

     ```bash
     flask --version
     ```

5. **Instalar Flask-CORS**:

   - Flask-CORS es una extensión para habilitar el manejo de solicitudes CORS en tu aplicación Flask. Instálalo ejecutando el siguiente comando:

     ```bash
     pip install flask-cors
     ```

6. **Ejecutar la aplicación Flask**:

   - Navega a la carpeta donde se encuentra el código fuente de tu aplicación Flask, específicamente a la ruta `\web_flaskk\api\v1\views`. Desde esta ubicación, ejecuta el siguiente comando para iniciar el servidor de desarrollo de Flask:

     ```bash
     flask run
     ```

     Esto iniciará la aplicación y te mostrará la dirección IP y el puerto en los que se ejecuta (por defecto, http://127.0.0.1:5000/).

7. **Acceder a la aplicación**:

   - Abre tu navegador web y visita la dirección IP y el puerto que se muestran en la línea de comandos para acceder a tu aplicación Flask. Agrega a la ruta `/googleAPI/`, por ejemplo: [http://127.0.0.1:5000/googleAPI/](http://127.0.0.1:5000/googleAPI/).

8. **Cerrar el entorno virtual**:

   - Para salir del entorno virtual cuando hayas terminado de trabajar en tu proyecto, simplemente ejecuta el siguiente comando:

     ```bash
     deactivate
     ```

Estas instrucciones deben permitir configurar y ejecutar la aplicación Flask en un entorno virtual en Windows. Asegúrate de que Python, Flask y Flask-CORS estén correctamente instalados en tu entorno virtual antes de ejecutar la aplicación.
