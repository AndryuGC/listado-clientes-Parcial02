import { useState } from "react";
import { clientes } from "./data/clientes";
import BuscadorClientes from "./components/BuscadorClientes";
import TablaClientes from "./components/TablaClientes";
import "./App.css";

function App() {
  const [busqueda, setBusqueda] = useState("");

  const clientesFiltrados = clientes.filter((cliente) => {
    const texto = busqueda.toLowerCase();
    return (
      cliente.nombre.toLowerCase().includes(texto) ||
      cliente.nit.toLowerCase().includes(texto) ||
      cliente.ciudad.toLowerCase().includes(texto)
    );
  });

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