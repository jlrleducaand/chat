package Controler;

import modelo.Empleado;
import modelo.Empresa;
import modelo.UtilContexto;

public class Main {

    public static void main(String[] args) {
    // prueba para ver si funciona correctamente el cargador
        Empresa e1 = new Empresa("Mi Empresa1");

        UtilContexto.cargadorDeContexto(e1);

        for (Empleado emp1 : e1.getListaEmpleados()) {
            System.out.println(emp1);
        }
        // Segunda forma de Impresion
        System.out.println(e1.toString());
    }
}
