document.addEventListener("DOMContentLoaded", function () {
  const API_KEY = "AIzaSyC1PsjEtsCyqc1rS281F7hgRfk_RY41lpc";
  const SPREAD_SHEET_ID = "1Krf4_zMPI5Y4SxL7xAf4lbTXciexPooajJAZbEh3KjQ";
  const URL_GOOGLE_SHEET = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/testing`;

  // Tu código JavaScript de Grid.js aquí, incluyendo la creación de la tabla.
  function obtenerPrimerElemento(objAPI) {
    if (objAPI && objAPI.values && objAPI.values.length > 0) {
      return objAPI.values[0];
    } else {
      return null
    }
  }
  
  function obtenerElementosDesdeElSegundo(objeto) {
    if (objeto && objeto.values && objeto.values.length > 1) {
      return objeto.values.slice(1);
    } else {
      return null
    }
  }
  
  async function obtenerDatosDelServidor() {
    try {
      const apiKey = API_KEY; // Reemplaza esto con tu API key
      const params = {
        key: apiKey
      };
      const response = await axios.get(URL_GOOGLE_SHEET, { params });
      if (response.data) {
        manejarDatos(response.data)
      }
    } catch (error) {
      console.log('Mensaje de depuración');
    }
  }

  function manejarDatos(data) {
    console.log('Datos recibidos:', data);
    crearOActualizarTabla(data);
  }
  
  // Función para crear o actualizar la tabla
  function crearOActualizarTabla(data) {

    const columnas = obtenerPrimerElemento(data);
    const filas = obtenerElementosDesdeElSegundo(data);
    if(columnas && filas){
      const tablaExistente = document.getElementById("table");
    
      // Si la tabla ya existe, elimínala antes de crear una nueva
      if (tablaExistente) {
        tablaExistente.innerHTML = "";
      }

        // Crea una nueva instancia de la tabla Grid.js
      const nuevaTabla = new gridjs.Grid({
        columns: obtenerPrimerElemento(data),
        data: obtenerElementosDesdeElSegundo(data)
      });

      // Renderiza la nueva tabla en el contenedor
      nuevaTabla.render(tablaExistente);
      nuevaTabla.forceRender();

    } else {
      console.error('Los datos no tienen la estructura esperada.');
    }
  }

  
  // Agrega un manejador de eventos al botón para actualizar la tabla
  document.getElementById("actualizarTabla").addEventListener("click", () => {
    return obtenerDatosDelServidor();
  });

  obtenerDatosDelServidor();
  console.log("El código JavaScript se está ejecutando.");
});



