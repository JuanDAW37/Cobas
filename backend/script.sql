CREATE DATABASE IF NOT EXISTS aserradero;

USE aserradero;

CREATE TABLE IF NOT EXISTS ivas(
	id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	tipo DECIMAL(4,2) NOT NULL,
	nombre varchar(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS familias(
	id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	nombre varchar(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS productos (
	idproductos BIGINT UNSIGNED auto_increment NOT NULL PRIMARY KEY,
	nombre varchar(100) NOT NULL,
	precio1 DOUBLE(4,2),
	precio2 DOUBLE(4,2),
	precio3 DOUBLE(4,2),
	precio4 DOUBLE(4,2),	
	precio5 DOUBLE(4,2),
	iva_id BIGINT UNSIGNED NOT NULL,
	familia_id BIGINT UNSIGNED NOT NULL,
	CONSTRAINT fk_prIva FOREIGN KEY (iva_id) REFERENCES ivas(id),
	CONSTRAINT fk_prFam FOREIGN KEY (familia_id) REFERENCES familias(id)
);

CREATE TABLE IF NOT EXISTS clientes (
	id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	nombreApellidos VARCHAR(100),
	nif VARCHAR(15),
	direccion VARCHAR(100),
	localidad VARCHAR(50),
	cp INT(4),
	provincia VARCHAR(50),
	pais VARCHAR(50),
	telefono1 VARCHAR(20),
	telefono2 VARCHAR(20),
	fax VARCHAR(20),
	email VARCHAR(50),
	web VARCHAR(50),
	contacto VARCHAR(100),
	fechaAlta Date
);

CREATE TABLE IF NOT EXISTS albaranes (
	id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	numero VARCHAR(5),
	fecha DATE,
	ano INT,
	cliente_id BIGINT UNSIGNED NOT NULL,
	total DOUBLE(6,2),
	CONSTRAINT fk_albCli FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE IF NOT EXISTS detalbar(
	id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	producto_id BIGINT UNSIGNED NOT NULL,
	albaran_id BIGINT UNSIGNED NOT NULL,
	unidades INT(6),
	L DOUBLE(4,2),
	A DOUBLE(4,2),
	E DOUBLE(4,2),
	cubicar BOOLEAN,
	metros DOUBLE(4,2),
	importe DOUBLE(6,2),
	CONSTRAINT fk_detAlbar FOREIGN KEY (albaran_id) REFERENCES albaranes(id),
	CONSTRAINT fk_detProd FOREIGN KEY (producto_id) REFERENCES productos(idproductos)
);

CREATE TABLE IF NOT EXISTS facturas (
	id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	numero VARCHAR(5),
	fecha DATE,
	ano INTEGER(4),
	albaran_id BIGINT UNSIGNED NOT NULL,
	cliente_id BIGINT UNSIGNED NOT NULL,
	base DOUBLE(4,2),
	cuota DOUBLE(4,2),
	total DOUBLE(6,2),
	CONSTRAINT fk_factuAlbar FOREIGN KEY (albaran_id) REFERENCES albaranes(id),
	CONSTRAINT fk_factuCli FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE IF NOT EXISTS detfactura(
	id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	producto_id BIGINT UNSIGNED NOT NULL,
	factura_id BIGINT UNSIGNED NOT NULL,
	detalbar_id BIGINT UNSIGNED NOT NULL,
	unidades INTEGER(6),
	L DOUBLE(4,2),
	A DOUBLE(4,2),
	E DOUBLE(4,2),
	cubicar BOOLEAN,
	metros DOUBLE(4,2),
	importe DOUBLE(6,2),
	CONSTRAINT fk_detFactu FOREIGN KEY (factura_id) REFERENCES facturas(id),
	CONSTRAINT fk_factuDetProd FOREIGN KEY (producto_id) REFERENCES productos(idproductos),
	CONSTRAINT fk_factuDetAlbar FOREIGN KEY (detalbar_id) REFERENCES detalbar(id)
);