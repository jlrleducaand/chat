package org.iesvdm.mhm.controller;

import lombok.extern.slf4j.Slf4j;
import org.iesvdm.mhm.domain.Pedido;
import org.iesvdm.mhm.service.PedidoService;
import org.iesvdm.mhm.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/v1/api/pedidos")
public class PedidoController {

    private final PedidoService pedidoService;
    private final ProductoService productoService;

    @Autowired
    public PedidoController(PedidoService pedidoService, ProductoService productoService) {
            this.pedidoService = pedidoService;
            this.productoService = productoService;    }


    @PostMapping({"","/"})
    public Pedido newPedido(@RequestBody Pedido pedido) {
        return this.pedidoService.save(pedido);
    }

    @GetMapping("/{id}")
    public Pedido one(@PathVariable("id") Long id) {
        return this.pedidoService.one(id);
    }

    @PutMapping("/{id}")
    public Pedido replacePedido(@PathVariable("id") Long id, @RequestBody Pedido pedido) {
        return this.pedidoService.replace(id, pedido); }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deletePedido(@PathVariable("id") Long id) {
        this.pedidoService.delete(id);
    }

    @GetMapping(value = {"","/"}, params = {"!page", "!size", "!buscar", "!sort", "!column", "!orden", "!orden_"})
    //opcion2  params={""} no funciona
    public List<Pedido> all() {
        log.info("Accediendo a pedidos sin parametros");
        return this.pedidoService.all();    }

    @PutMapping("/addpro")
    public Pedido addPedidoProducto(@RequestParam("idpe") Long idpe, @RequestParam("idpro") Long idpro) {
        log.info("Añadiendo producto con id "+ idpro +" al pedido con id " + idpe );
        return pedidoService.addAPedidoProducto(idpe, idpro);    }

    @GetMapping(value = {"", "/"}, params = {"page", "size", "sort"})
    // para los campos sort separar con coma (id, desc)
    public Page<Pedido> all(Pageable pageable) {
        log.info("Accediendo a pedidos paginadas 3 parametros: page size sort");
        return this.pedidoService.getAll(pageable);    }



/*
    // Ruta Para el Uso de JPQL  // *** no funcionó en insomnia no ordena  REVISAR ***
        @GetMapping(value = {"","/"}, params = {"campo", "subcampo", "valor", "ordenar", "dir"})
        public List<Pedido> all(
                @RequestParam(value = "campo", required = false) String campo,
                @RequestParam(value = "subcampo", required = false) String subcampo,
                @RequestParam(value = "valor", required = false) String valor,
                @RequestParam(value = "ordenar", required = false) String ordenar,
                @RequestParam(value = "dir", required = false) String dir)

        {
            Optional<String> campoOptional = Optional.ofNullable(campo);
            Optional<String> subcampoOptional = Optional.ofNullable(subcampo);
            Optional<String> valorOptional = Optional.ofNullable(valor);
            Optional<String> ordenarOptional = Optional.ofNullable(ordenar);
            Optional<String> dirOptional = Optional.ofNullable(dir);

            log.info("Accediendo a pedidos filtrados con  campo {}"
                    + "subcampo {} "
                    + "valor {}"
                    + "ordenar {}",
            campoOptional.orElse("VOID"),
            subcampoOptional.orElse("VOID"),
            valorOptional.orElse("VOID"),
            ordenarOptional.orElse("VOID"));
            return this.pedidoService.queryPedidoCustomJPQL(campoOptional, subcampoOptional,
                    valorOptional, ordenarOptional, dirOptional);

        }


    // Ruta Para el uso de QueryAutoJPA
    @GetMapping(value = {"","/"}, params = {"cliente"})
    public Page<Pedido> allCliente(Pageable pageable,
                        @RequestParam(value = "cliente", required = false) String cliente) {
        Optional<String> clienteNombreEmpresaOptional = Optional.ofNullable(cliente);

        log.info("Accediendo a pedidos con nombre cliente");
        if (clienteNombreEmpresaOptional.isPresent()) {
            return this.pedidoService.pedidosCliente(cliente, pageable);

        }else {
            return this.pedidoService.getAll(pageable);
        }
    }

    @GetMapping(value = {"","/"}, params = {"empleado"})
    public Page<Pedido> allEmpleado(Pageable pageable,
                        @RequestParam(value = "empleado", required = false) String empleado) {
        Optional<String> empleadoNombreOptional = Optional.ofNullable(empleado);

        log.info("Accediendo a pedidos con nombre empleado");
        if (empleadoNombreOptional.isPresent()) {
            return this.pedidoService.pedidosEmpleado(empleado, pageable);

        }else {
            return this.pedidoService.getAll(pageable);
        }
    }


    // Metodo de ordenacion con array de parametros orden
    @GetMapping(value = {"","/"}, params = {"orden"})
    public ResponseEntity<Map<String,Object>> allOrden(
            @RequestParam(value = "orden", required = false, defaultValue = "id, asc" ) String[] orden
    ){
        log.info("Orden recibido en el controlador orden1 y orden2:" + orden);
        Map<String, Object> responseAll = null;
        String[] ordenSplited_0 = orden[0].split(",");
        String[] ordenSplited_1 = orden[1].split(",");
        // Calcular la longitud total del nuevo array
        int totalLength = ordenSplited_0.length + ordenSplited_1.length;
        // Crear un nuevo array con la longitud total
        String[] ordenSplitedRes = new String[totalLength];
        // Copiar los elementos del primer array
        System.arraycopy(ordenSplited_0, 0, ordenSplitedRes, 0, ordenSplited_0.length);
        // Copiar los elementos del segundo array
        System.arraycopy(ordenSplited_1, 0, ordenSplitedRes, ordenSplited_0.length, ordenSplited_1.length);
        // Verificar si se recibió una ordenación de dos niveles (campo, sentido, campo2, sentido2)
        if (ordenSplitedRes.length == 4) {
            log.info("Orden:" + orden);
            log.info("Orden recibido en el controlador dos orden:" + Arrays.toString(orden)+ ordenSplitedRes.length);
            String campo1 = ordenSplitedRes[0];
            String sentido1 = ordenSplitedRes[1];
            String campo2 = ordenSplitedRes[2];
            String sentido2 = ordenSplitedRes[3];
            responseAll = pedidoService.procesarOrden2(campo1, sentido1, campo2, sentido2);
            return ResponseEntity.ok(responseAll);

            // Verificar si se recibió una ordenación de un nivel (campo1, sentido1)
        }else if (ordenSplitedRes.length == 2){
            log.info("Orden:" + orden);
            log.info("Orden recibido en el controlador un orden:" + Arrays.toString(ordenSplitedRes) + ordenSplitedRes.length);
            String campo1 = ordenSplitedRes[0];
            String sentido1 = ordenSplitedRes[1];
            responseAll = pedidoService.procesarOrden(campo1, sentido1);
            return ResponseEntity.ok(responseAll);
        }
        // Manejar caso de error o formato incorrecto de la solicitud
        else {
            return ResponseEntity.badRequest().build();
        }
    }

*/

}
