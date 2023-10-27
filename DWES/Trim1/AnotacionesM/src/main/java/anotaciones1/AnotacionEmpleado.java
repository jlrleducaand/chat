package Anotaciones.anotaciones1;

import java.lang.annotation.*;
// la anotacion estará disponible durante el tiempo de ejecucion para ser utilizada
// en la api reflextion de Java
@Retention(RetentionPolicy.RUNTIME)

//restringido el uso de esta anotacion a clases no a metodos ni a campos
@Target(ElementType.TYPE)
// esta anotacion puede ser tepetida varias veces en el mismo lugar o clase
@Repeatable(AnotacionEmpleados.class)

// Queremos que se documente por los programas generadores de documentacion como JavaDoc
@Documented
public @interface AnotacionEmpleado {
        // Solo admites tipos primitivos y sus arrays
        // se mapean todos los atributos de las clases
        String nombre();
        String apellidos();
        String direccion ();
        String dni ();
        String telefono ();
        // Atributo discriminante en la Anotacion
        String clase();
        // Atributos que se tomaran por defecto ya que no son comunes a todos
        int codigoDespacho () default -1;
        int codigoTaller() default -1;
        String categoria() default "";
        String perfil() default "";
}
