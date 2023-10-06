-- Active: 1696351185342@@127.0.0.1@3306

CREATE DATABASE EnCaminoPorPatitas

CREATE TABLE Refugios (
    Id_Refugio INT PRIMARY KEY NOT NULL,
    Nombre VARCHAR(50) NOT NULL,
    Direccion VARCHAR(50) NOT NULL,
    Contacto INT NOT NULL
);

CREATE TABLE Animal (
    Id_Animal INT PRIMARY KEY NOT NULL,
    Nombre VARCHAR(50) NOT NULL,
    Especie VARCHAR(50) NOT NULL,
    Raza VARCHAR(50) NOT NULL,
    Edad INT NOT NULL,
    FOREIGN KEY Id_Refugio REFERENCES Refugios(Id_Refugio)
);

CREATE TABLE Adoptante (
    Id_Adoptante INT PRIMARY KEY NOT NULL,
    Nombre VARCHAR(50) NOT NULL,
    Direccion VARCHAR(50) NOT NULL,
    Contacto INT NOT NULL
);

CREATE TABLE Veterinario (
    Id_Veterinario INT PRIMARY KEY NOT NULL,
    Nombre VARCHAR(50) NOT NULL,
    Contacto INT NOT NULL,
    Especialidad VARCHAR(50) NOT NULL
);

CREATE TABLE Donantes (
    Id_Donante INT PRIMARY KEY NOT NULL,
    Nombre VARCHAR(50) NOT NULL|,
    Contacto VARCHAR(50) NOT NULL
);

CREATE TABLE Donaciones (
    Id_Donacion INT PRIMARY KEY NOT NULL,
    Fecha VARCHAR(50) NOT NULL,
    Monto VARCHAR(50) NOT NULL,
    FOREIGN KEY id_Donante REFERENCES Donantes(id_Donante)
);

CREATE TABLE EstadosAdopcion (
    Id_EstadosAdopcion INT PRIMARY KEY NOT NULL,
    Descripccion NOT NULL
)

