package modelo;


import main.java.anotaciones1.*;

public class UtilContexto {

    // Recibe como parametro la empresa sobre la que se cargara el contenido
    public static void cargadorDeContexto(Empresa empresa) {

        // Accedemos a la imagen de las anotaciones
        AnotacionEmpleados anotEmpleadosPadre = empresa.getClass().getAnnotation(AnotacionEmpleados.class);
        AnotacionEmpleado[] anotEmpleadoHijas = anotEmpleadosPadre.value();

        // recorremos el Array imagen de Empleados  e instanciamos los objetos
        for (AnotacionEmpleado anoEmpleado : anotEmpleadoHijas) {

            String nombre = anoEmpleado.nombre();
            String apellidos = anoEmpleado.apellidos();
            String dni = anoEmpleado.dni();
            String direccion = anoEmpleado.direccion();
            String telefono = anoEmpleado.telefono();


            if (anoEmpleado.clase().toString().toUpperCase().equals("DIRECTIVO")) {

                int codigoDespacho = anoEmpleado.codigoDespacho();

                empresa.getListaEmpleados().add(new Directivo(nombre, apellidos, dni, direccion, telefono, codigoDespacho));

            } else if (anoEmpleado.clase().toString().toUpperCase().equals("OFICIAL")) {

                int codigoTaller = anoEmpleado.codigoTaller();
                String categoria = anoEmpleado.categoria();

                empresa.getListaEmpleados().add(new Oficial(nombre, apellidos, direccion, dni, telefono, codigoTaller, categoria));

            } else if (anoEmpleado.clase().toString().toUpperCase().equals("TECNICO")) {

                int codigoTaller = anoEmpleado.codigoTaller();
                String perfil = anoEmpleado.perfil();

                empresa.getListaEmpleados().add(new Oficial(nombre, apellidos, direccion, dni, telefono, codigoTaller, perfil));

            }

        }

    }
}
