package org.iesvdm.mhm.service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import lombok.extern.slf4j.Slf4j;
import org.iesvdm.mhm.domain.Pedido;
import org.iesvdm.mhm.domain.Producto;
import org.iesvdm.mhm.exception.PedidoNotFoundException;
import org.iesvdm.mhm.repository.PedidoRepository;
import org.iesvdm.mhm.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Service
public class PedidoService {

    private final PedidoRepository pedidoRepository;
    private final ProductoRepository productoRepository;

    // para las consultas dinamicas  8 en una  logica de control para multiconsultas
    @PersistenceContext
    EntityManager em;

    @Autowired
    public PedidoService(PedidoRepository pedidoRepository, ProductoRepository productoRepository) {
        this.pedidoRepository = pedidoRepository;
        this.productoRepository = productoRepository;
    }

    public List<Pedido> all() {
        return this.pedidoRepository.findAll();
    }

    public Pedido save(Pedido pedido) {
        return this.pedidoRepository.save(pedido);
    }

    public Pedido one(Long id) {
        return this.pedidoRepository.findById(id)
                .orElseThrow(() -> new PedidoNotFoundException(id));
    }

    public Pedido replace(Long id, Pedido pedido) {

        return this.pedidoRepository.findById(id)
                .map( p -> (id.equals(pedido.getId()) ?
                        this.pedidoRepository.save(pedido) : null))
                .orElseThrow(() -> new PedidoNotFoundException(id));

    }

    public void delete(Long id) {
        this.pedidoRepository.findById(id).map(p -> {
            this.pedidoRepository.delete(p);
                                                        return p;})
                .orElseThrow(() -> new PedidoNotFoundException(id));
    }

    public Page<Pedido> getAll(Pageable pageable) {
        Page<Pedido> pageCat = this.pedidoRepository.findAll(pageable);

        return pageCat;
    }


    // ******************   CALCULOS y OPERACIONES SOBRE LA BASE DE DATOS     ******************


    public Producto addProductoAPedido(Long idPed, Long idProd){
        Pedido ped = one(idPed);
        Producto prod = this.productoRepository.findById(idProd).get();
        if(!prod.getPedidos().contains(ped)){
            ped.getProductos().add(prod);
            save(ped);
            numProductosPorPedido(idPed);
            log.info("producto" + prod + "añadido a pedido " + ped );
        }

        return prod;
    }

    public int numProductosPorPedido(Long idPedido) {
        Pedido ped = one(idPedido);
        int cont = ped.getProductos().size();
        if  (cont > 0) {
            ped.setUnidadesVendidas(cont);
        }else{
            ped.setUnidadesVendidas(0);
            cont = 0;
        }
        return cont;
    }



/*
    public Page<Pedido> pedidosCliente(String nombreCliente, Pageable pageable){
        return this.pedidoRepository.findPedidoByCliente_NombreOrderByFechaDesc(nombreCliente, pageable);

    }

    public Page<Pedido> pedidosEmpleado(String nombreEmpleado, Pageable pageable){
        return this.pedidoRepository.findPedidoByEmpleado_NombreOrderByFechaDesc(nombreEmpleado, pageable);
    }

    // *****************    TRABAJANDO CON LA BASE DE DATOS     *******************

    //BLOQUE METHOD @Query JPQL CON OBJETOS DE ENTIDADES JPA
    //Notación para asociar peticiones JPQL o SQL a un método pasando parámetros por orden de entrada
    // de la firma del método o parametrizados con nombre

    public List<Pedido> queryEmpleadoCustomJPQL(Optional<String> nombreEmpleadoOptional, Optional<String>  ordenarOptional) {
        String queryBodyString = "select P from Pedido as P";  //cuerpo repetitivo
        if (nombreEmpleadoOptional.isPresent()){
            queryBodyString += " where P.empleado.nombre like :" + nombreEmpleadoOptional.get();
        }
        if (ordenarOptional.isPresent() && nombreEmpleadoOptional.isPresent()){
            if("asc".equalsIgnoreCase(ordenarOptional.get())){
                queryBodyString += " order by P.empleado.nombre ASC";
            }else if("desc".equalsIgnoreCase(nombreEmpleadoOptional.get())) {
                queryBodyString += " order by P.empleado.nombre desc";
            }
        }
        Query query = em.createQuery(queryBodyString.toString());
        if (nombreEmpleadoOptional.isPresent()){
            query.setParameter("nombre", "%"+nombreEmpleadoOptional.get()+"%");
        }
        return query.getResultList();
    }

    public List<Pedido> queryClienteCustomJPQL(Optional<String> nombreClienteOptional, Optional<String>  ordenarOptional) {
        String queryBodyString = "select P from Pedido as P";  //cuerpo repetitivo
        if (nombreClienteOptional.isPresent()){
            queryBodyString += " where P.cliente.nombre like :nombre";
        }
        if (ordenarOptional.isPresent() && nombreClienteOptional.isPresent()){
            if("asc".equalsIgnoreCase(ordenarOptional.get())){
                queryBodyString += " order by P.cliente.nombre ASC";
            } else if("desc".equalsIgnoreCase(ordenarOptional.get())) {
                queryBodyString += " order by P.cliente.nombre desc";
            }
        }
        Query query = em.createQuery(queryBodyString);

        if (nombreClienteOptional.isPresent()){
            query.setParameter("nombre", "%"+nombreClienteOptional.get()+"%");
        }
        return query.getResultList();
    }


    public List<Pedido> queryPedidoCustomJPQL(Optional<String> campoOptional,Optional<String> subcampoOptional,
                                              Optional<String> valorOptional, Optional<String>  ordenarOptional,
                                              Optional<String> dirOptional)
    {
        String queryBodyString = "select P from Pedido as P";  //cuerpo repetitivo

        if (campoOptional.isPresent()){
            queryBodyString += " where P." + campoOptional.get() ;
        }
        if (subcampoOptional.isPresent()){
            queryBodyString += "." + subcampoOptional.get();
        }
        if (valorOptional.isPresent()){
            queryBodyString += " like :" + valorOptional.get();
        }
        if (ordenarOptional.isPresent() && "asc".equalsIgnoreCase(dirOptional.get())){
            queryBodyString += " order by P."+ordenarOptional.get() + " ASC";
            }else if(ordenarOptional.isPresent() && "desc".equalsIgnoreCase(dirOptional.get())) {
                queryBodyString += " order by P."+ordenarOptional+"DESC";
            }else{
            queryBodyString = "select P from Pedido as P" ;

        }
        Query query = em.createQuery(queryBodyString.toString());
        if (campoOptional.isPresent()){
            query.setParameter("nombre", "%"+campoOptional.get()+"%");
        }
        return this.pedidoRepository.queryClienteCustomJPQL(query.toString());
    }

    //BLOQUE DE MÉTODOS @QUERY CON "SQL" NATIVO BASADO EN LAS TABLAS.
    //@Query nativeQuery = true, es decir, SQL:
    // Se Parametrizan con el nombre del parámetro:  (%:nombre%)
    public List<Producto> queryProductoCustomJPA(Optional<String> buscarOptional,Optional<String>  ordenarOptional ) {
        String queryBodyString = "select * from producto";
        if (buscarOptional.isPresent()){
            queryBodyString += "where nombre like :nombre";
        }
        if (ordenarOptional.isPresent()){
            if(buscarOptional.isPresent() && "asc".equalsIgnoreCase(buscarOptional.get())){
                queryBodyString += "order by nombre ASC";
            }else if(buscarOptional.isPresent() && "desc".equalsIgnoreCase(buscarOptional.get())) {
                queryBodyString += "order by nombre desc";
            }
        }
        Query query = em.createNativeQuery(queryBodyString.toString(),Producto.class);
        if (buscarOptional.isPresent()){
            query.setParameter("nombre", "%"+buscarOptional.get()+"%");
        }

        return query.getResultList();
    }

    //Bloque con Query de JPA auto
    public List<Pedido> findPedidoByEmpleadoNombre(String nombreEmpleado, String orden){
        return (orden.equalsIgnoreCase("asc"))?
            pedidoRepository.findPedidoByEmpleado_NombreOrderByClienteAsc(nombreEmpleado)
            : pedidoRepository.findPedidoByEmpleado_NombreOrderByFechaDesc(nombreEmpleado);
    }


    public Page<Pedido> findPedidoByClienteNombre(String nombreCliente, Pageable pageable){
        return  pedidoRepository.findPedidoByCliente_NombreOrderByEmpleado(nombreCliente, pageable);
    }

    public Page<Pedido> findPedidoByEmpleadoNombre(String nombreEmpleado, Pageable pageable){
        return  pedidoRepository.findPedidoByEmpleado_NombreOrderByCliente(nombreEmpleado, pageable);
    }

    // un orden  y mapeando pageable configurable
    public Map<String, Object> procesarOrden(String campo, String direccion) {

        Pageable pageable = (direccion.equals("desc")) ?
                PageRequest.of(0, 20, Sort.by(campo).descending()) :
                PageRequest.of(0, 20, Sort.by(campo).ascending());

        Page<Pedido> pageAll = this.pedidoRepository
                .findAll(pageable);

        Map<String, Object> response = new HashMap<>();
        response.put("pedidos",pageAll.getContent());
        response.put("currentPage",pageAll.getNumber());
        response.put("totalItems",pageAll.getTotalElements());
        response.put("totalPages",pageAll.getTotalPages());

        return response;
    }

    // dos orden  y pageable configurable
    public Map<String, Object> procesarOrden2(String campo1, String direccion1, String campo2, String direccion2) {

        Sort sort = Sort.by(
                Sort.Order.by(campo1).with(
                        direccion1.equals("desc") ? Sort.Direction.DESC : Sort.Direction.ASC
                ),
                Sort.Order.by(campo2).with(
                        direccion2.equals("desc") ? Sort.Direction.DESC : Sort.Direction.ASC
                )
        );

        Pageable pageable = PageRequest.of(0, 20,sort);


        Page<Pedido> pageAll = this.pedidoRepository.findAll(pageable);

        Map<String, Object> response = new HashMap<>();
        response.put("pedidos",pageAll.getContent());
        response.put("currentPage",pageAll.getNumber());
        response.put("totalItems",pageAll.getTotalElements());
        response.put("totalPages",pageAll.getTotalPages());

        return response;
    }

*/

}
