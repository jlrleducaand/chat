package org.iesvdm.mhm.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.apache.commons.lang3.builder.ToStringExclude;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "producto")
@AllArgsConstructor
@NoArgsConstructor
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    @EqualsAndHashCode.Include
    private long id;

    //@NaturalId
    @EqualsAndHashCode.Include
    private String nombre;

    private double precioCompra;
    private double precioVenta;
    private String categoria;
    private String proveedor;
    private long stock;
    private long stockMinimo;
    private boolean descatalogado;
    private long unidadesServidas;


    @ManyToMany(mappedBy = "productos", cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE,
    },fetch = FetchType.EAGER)
    @ToStringExclude  //Para Romper el lazo y bucle
    @JsonIgnore       //Para Romper el lazo
    Set<Pedido> pedidos = new HashSet<>();

    @Column(name = "ultima_compra")
    @JsonFormat(pattern = "yyyy-MM-dd-HH:mm:ss",  shape = JsonFormat.Shape.STRING)
    private Date ultimaCompra;



    //Constructores para los tests
    public  Producto(long id, String nombre, HashSet<Pedido> pedidos) {
        this.id = id;
        this.nombre = nombre;
        this.pedidos = pedidos;
    }
    public  Producto(long id, String nombre, HashSet<Pedido> pedidos, Date ultimaCompra) {
        this.id = id;
        this.nombre = nombre;
        this.pedidos = pedidos;
        this.ultimaCompra = ultimaCompra;
    }
    public  Producto(long id, String nombre, HashSet<Pedido> pedidos
            , Date ultimaCompra, String categoria, String proveedor, int stock ){
        this.id = id;
        this.nombre = nombre;
        this.pedidos = pedidos;
        this.ultimaCompra = ultimaCompra;
        this.categoria = categoria;
        this.proveedor = proveedor;
        this.stock = stock;
    }

}