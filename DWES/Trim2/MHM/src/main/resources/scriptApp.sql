create database mhm;

create table empleado
(
    id_empleado             bigint auto_increment
        primary key

);
create table cliente
(
    id_cliente            bigint auto_increment
        primary key
);

create table producto
(
    id_producto         bigint auto_increment
        foreign key
);

create table pedido
(
    id_pedido                bigint auto_increment
        primary key
);
create table empl_clientes;


