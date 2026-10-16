import { useState, useEffect } from "react";
import BuscadorClientes from "./components/BuscadorClientes";
import TablaClientes from "./components/TablaClientes";
import "./App.css";

function App() {
  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/clientes")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la lista de clientes");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setClientes(datos);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  const clientesFiltrados = clientes.filter((cliente) => {
    const texto = busqueda.toLowerCase();
    return (
      cliente.nombre.toLowerCase().includes(texto) ||
      cliente.nit.toLowerCase().includes(texto) ||
      cliente.ciudad.toLowerCase().includes(texto)
    );
  });

  if (cargando) return <p className="mensaje">Cargando clientes...</p>;
  if (error) return <p className="mensaje error">Error: {error}</p>;

  return (
    <div className="contenedor">
      <h1>Listado de Clientes</h1>

      <BuscadorClientes busqueda={busqueda} setBusqueda={setBusqueda} />

      <p className="contador">
        Mostrando {clientesFiltrados.length} de {clientes.length} clientes
      </p>

      <TablaClientes clientes={clientesFiltrados} />
    </div>
  );
}

export default App;