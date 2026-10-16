function BuscadorClientes({ busqueda, setBusqueda }) {
  return (
    <input
      type="text"
      className="buscador"
      placeholder="Buscar cliente por nombre, NIT o ciudad..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
    />
  );
}

export default BuscadorClientes;