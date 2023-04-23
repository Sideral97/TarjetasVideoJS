const calcularEdadPromedio = (personas) => {
    let sumaEdades = 0;
    let cantidadEdadesValidas = 0;
  
    for (let i = 0; i < personas.length; i++) {
      const edad = Number(personas[i].edad);
      if (typeof edad === "number" && !isNaN(edad)) {
        sumaEdades += edad;
        cantidadEdadesValidas++;
      }
    }
  
    if (cantidadEdadesValidas === 0) {
      alert("No se encontraron edades válidas");
    } else {
      const edadPromedio = sumaEdades / cantidadEdadesValidas;
      alert(`La edad promedio de las personas registradas es ${edadPromedio} años`);
    }
  };
  
  const obtenerDatosPersona = () => {
    const nombre = prompt("Ingrese el nombre de la persona:");
    const edad = prompt("Ingrese la edad de la persona:");
  
    return { nombre, edad };
  };
  
  const personas = [];
  let continuar = true;
  
  while (continuar) {
    const persona = obtenerDatosPersona();
  
    if (persona.nombre && persona.edad) {
      personas.push(persona);
    } else {
      continuar = false;
    }
  }
  
  calcularEdadPromedio(personas);
  

  
  