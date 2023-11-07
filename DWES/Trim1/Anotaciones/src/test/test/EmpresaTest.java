package test;


import modelo.Empleado;
import modelo.Empresa;
import modelo.UtilContexto;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class EmpresaTest {
    private Empresa empresa;


    @Test
    @BeforeEach   // Test que se pasara antes de cada otro test
    public void before(){
        empresa = new Empresa("EmpresaTest");
        UtilContexto.cargadorDeContexto(empresa);
    }

    // comprobamos que se hayan cargado tres empleados
    @Test
    public void testProContexto() {
        Assertions.assertEquals(3, empresa.getListaEmpleados().size());

    }

    // comprobamos que el dato solicitado de un empleado se corresponda con el que recibe
    @Test
    public void testEmpleado(){

        // llamamos al metodo de busquedaEmpleado por DNI para comparar.
        Empleado empleadoBuscado = empresa.EmpleadoBuscadoPorDni("444 888 999");
        Assertions.assertEquals("Lopez", empleadoBuscado.getApellidos() );



    }

}
