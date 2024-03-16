package org.iesvdm.mhm.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.apache.commons.lang3.builder.ToStringExclude;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name="pedido")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
//@EqualsAndHashCode(of = "id_pedido")

public class Pedido {

    /*@Transient
    public SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");*/

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_pedido")
    @EqualsAndHashCode.Include
    private long id;

    @Column(name = "fecha_pedido")
    @JsonFormat(pattern = "yyyy-MM-dd-HH:mm:ss",  shape = JsonFormat.Shape.STRING)
    private Date fecha;

    @Column(name = "facturado")
    private boolean facturado;

    @Column(name = "fecha_factura")
    @JsonFormat(pattern = "yyyy-MM-dd-HH:mm:ss",  shape = JsonFormat.Shape.STRING)
    private Date fecha_factura;
    private String factura_;

    @Column(name = "enviado")
    private boolean enviado;
    private String observaciones;

    //Campo del que no queremos que se haga columna en la tabla
    //@Transient
    private int unidadesVendidas;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_cliente", nullable = true) //nulable para tests
    @ToString.Exclude
    //@JasonBackReference  solo en los one
    private Cliente cliente;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_empleado", nullable = true) //nulable para tests
    //@JasonBackReference solo en los one
    @ToString.Exclude
    private Empleado empleado;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "producto_pedido",
            joinColumns = @JoinColumn(name = "id_producto"),
            inverseJoinColumns = @JoinColumn(name = "id_pedido")
    )
    @ToStringExclude  //Para Romper el lazo y bucle
    @JsonIgnore       //Para Romper el lazo
    private Set<Producto> productos = new HashSet<>();

    private double importeTotal;


    //Constructores `para tests
    public <E> Pedido(long id, Cliente cliente, HashSet<Producto>  productos) {
        this.id = id;
        this.cliente = cliente;
        this.productos = productos;
    }
    public Pedido(long id, Cliente cliente, Empleado empleado, HashSet<Producto>  productos) {
        this.id = id;
        this.cliente = cliente;
        this.empleado = empleado;
        this.productos = productos;
    }
    public Pedido(int id, Cliente cliente, Empleado empleado) {
        this.id = id;
        this.cliente = cliente;
        this.empleado = empleado;
    }

    //Constructor Pedido Productos



}
