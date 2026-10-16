-- Tabla catálogo
CREATE TABLE ciudad (
    id_ciudad   INT AUTO_INCREMENT PRIMARY KEY,
    nombre      VARCHAR(60) NOT NULL UNIQUE
);

-- Tabla principal
CREATE TABLE cliente (
    id_cliente      INT AUTO_INCREMENT PRIMARY KEY,
    nombre          VARCHAR(100)  NOT NULL,
    nit             VARCHAR(15)   NOT NULL UNIQUE,
    correo          VARCHAR(120)  UNIQUE,
    telefono        VARCHAR(15),
    direccion       VARCHAR(200),
    fecha_registro  DATE          NOT NULL,
    activo          BOOLEAN       NOT NULL DEFAULT TRUE,
    id_ciudad       INT           NOT NULL,

    CONSTRAINT fk_cliente_ciudad
        FOREIGN KEY (id_ciudad) REFERENCES ciudad(id_ciudad)
);

SELECT c.id_cliente, c.nombre, c.nit, ci.nombre AS ciudad
FROM cliente c
INNER JOIN ciudad ci ON c.id_ciudad = ci.id_ciudad
WHERE c.activo = TRUE;