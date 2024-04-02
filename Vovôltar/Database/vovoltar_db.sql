CREATE DATABASE Vovoltar;

USE vovoltar;

CREATE TABLE usuarios (
	id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    nascimento DATE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    ft_perfil VARCHAR(255)
);

CREATE TABLE empresas (
	id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    cnpj VARCHAR(255) UNIQUE NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    senha VARCHAR(255)
);