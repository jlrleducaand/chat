package org.iesvdm.mhm.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.apache.commons.lang3.builder.ToStringExclude;

import java.util.Date;
import java.util.Set;

@Data

@Table(name="cliente")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Entity
//Si utilizo @OneToMany(FetchType.LAZY) además debo usar
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
// Para evitar que se envíe información de serialización
// JSON sobre los handler e hibernateLazyInitializer
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente")
    private Long id;

    private String nombre;
    private String direccion;
    private String ccc_empresa;
    private String tel_empresa;
    private String email_empresa;
    private String nombre_contacto;
    private String tel_contacto;
    private String email_contacto;
    private String observaciones;

    @ManyToMany(mappedBy = "clientes", fetch = FetchType.EAGER)
    @JsonIgnore         //Rompe el lazo de Serializacion
    @ToStringExclude    //Rompe el lazo de Serializacion
    private Set<Empleado> empleados;


    @Column(name = "fecha_alta")
    @JsonFormat(pattern = "yyyy-MM-dd-HH:mm:ss",  shape = JsonFormat.Shape.STRING)
    private Date fecha_alta;

    @OneToMany(mappedBy = "cliente", fetch = FetchType.EAGER)
    @JsonIgnore         //Rompe el lazo de Serializacion
    @ToStringExclude    //Rompe el lazo de Serializacion
    private Set<Pedido> clie_pedidos;



    // ******** CONSTRUCTOR PARA TESTS **************
    public Cliente(long id, String nombre, Set<Pedido> clie_pedidos) {
        this.id = id;
        this.nombre = nombre;
        this.clie_pedidos = clie_pedidos;

    }


}
