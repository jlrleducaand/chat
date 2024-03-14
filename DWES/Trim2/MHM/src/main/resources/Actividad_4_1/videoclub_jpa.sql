create table if not exists producto
(
    id_producto         bigint auto_increment
        primary key,
    nombre               varchar(255) null,
    ultima_actualizacion datetime(6)  null
);

create table if not exists cliente
(
    id_cliente            bigint auto_increment
        primary key,
    nombre               varchar(255) null,
    ultima_actualizacion datetime(6)  null
);

create table if not exists pedido
(
    id_pedido                bigint auto_increment
        primary key,
    anyo_lanzamiento           datetime(6)    null,
    caracteristicas_especiales varchar(255)   null,
    clasificacion              varchar(255)   null,
    descripcion                varchar(255)   null,
    duracion                   int            not null,
    duracion_alquiler          int            null,
    rental_rate                decimal(38, 2) null,
    replacement_cost           decimal(38, 2) null,
    titulo                     varchar(255)   null,
    ultima_actualizacion       datetime(6)    null,
    id_cliente                  bigint         not null,
    id_cliente_original         bigint         null,
    constraint FK3e6ndurdgkc1qxq221r50i4ny
        foreign key (id_cliente) references cliente (id_cliente),
    constraint FKc6ih5f7kvuomg8expij334wif
        foreign key (id_cliente_original) references cliente (id_cliente)
);

create table if not exists pedido_producto
(
    id_pedido  bigint not null,
    id_producto bigint not null,
    primary key (id_pedido, id_producto),
    constraint FK5str8bg5ud479tyhsk4tsawcc
        foreign key (id_pedido) references pedido (id_pedido),
    constraint FKihinh62000sduyaij8nvrf1c2
        foreign key (id_producto) references producto (id_producto)
);

create table if not exists tarjeta
(
    numero    bigint auto_increment
        primary key,
    caducidad date not null
);

create table if not exists socio
(
    dni        varchar(9)   not null
        primary key,
    apellidos  varchar(255) null,
    nombre     varchar(255) null,
    id_tarjeta bigint       null,
    constraint UK_7a5twu9ps6qob6s1axnyl7adv
        unique (id_tarjeta),
    constraint FKiixvdlq6oevx0vbf0v5bwijl0
        foreign key (id_tarjeta) references tarjeta (numero)
);

create table if not exists tutorial
(
    id_tutorial       bigint auto_increment
        primary key,
    descripcion       varchar(256) null,
    fecha_publicacion datetime(6)  not null,
    public            bit          null,
    titulo            varchar(50)  null
);

create table if not exists comentario
(
    id                   bigint auto_increment
        primary key,
    texto                varchar(255) null,
    tutorial_id_tutorial bigint       null,
    tutorial_id_fk       bigint       not null,
    constraint FK27081oehrtaf8cqq4ak8ijc2e
        foreign key (tutorial_id_tutorial) references tutorial (id_tutorial),
    constraint FK_TUTO
        foreign key (tutorial_id_fk) references tutorial (id_tutorial)
);

create index title_Index
    on tutorial (titulo);

