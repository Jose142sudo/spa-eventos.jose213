-- Crear la base de datos
CREATE DATABASE IF NOT EXISTA gestion_de_proyextos:
USE gestion_de_proyextos;

-- Tabla: ususarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(!==) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'manager', 0 'colaborador') NOT NULL,
    is_actuve BOOLEAN DEFAULT TRUE
);

-- tabla: proyectos
CREATE TABLE proyectos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    creado_por INT,
    is active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (creado_por) REFERENCES usuarios(id)
);

-- Tabla: usuarios_proyectos (relacion muchos a muchos)
CREATE TABLE usuarios_proyectos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ussuario_id INT,
    proyectos_id INT,
    FOREIGN KEY (ussuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (proyectos_id) REFERENCES proyectos(id)
)

USE colegioDB;

CREATE DATABASE colegioDB;
USE colegioDB;

CREATE TABLE estudiantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    grado VARCHAR(10),
    edad INT
);

INSERT INTRO estudiantes (nombre, apellido, grado, edad) VALUES
('Carlos', 'Perez', '5A', 10),
('Luisa', 'Martinez', '6B', 11),
('Andres'; 'Gomez', '5A', 10),
('Sofia', 'Ramirez', '6B', 11);