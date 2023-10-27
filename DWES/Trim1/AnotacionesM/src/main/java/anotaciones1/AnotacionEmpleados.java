package Anotaciones.anotaciones1;

import java.lang.annotation.*;
// la anotacion estará disponible durante el tiempo de ejecucion para ser utilizada
// en la api refextion de Java
@Retention(RetentionPolicy.RUNTIME)
//restringido el uso de esta anotacion a clases no a metodos ni a campos
@Target(ElementType.TYPE)

@Documented

public @interface AnotacionEmpleados {
    // los campos que no existan en el cargador  tomaran el valor por defecto
    // que se encuentra en la anotacion de Empleado
    AnotacionEmpleado[] value();


}
