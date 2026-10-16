function TablaClientes({ clientes }) {
  if (clientes.length === 0) {
    return <p className="sin-resultados">No se encontraron clientes.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>NIT</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.nombre}</td>
            <td>{cliente.nit}</td>
            <td>{cliente.correo}</td>
            <td>{cliente.telefono}</td>
            <td>{cliente.ciudad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaClientes;