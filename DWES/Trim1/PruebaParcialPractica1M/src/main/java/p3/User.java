package p3;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Repeatable;
import java.lang.annotation.Target;

//restringido el uso de esta anotacion a clases no a metodos ni a campos
@Target(ElementType.TYPE)
// esta anotacion puede ser tepetida varias veces en el mismo lugar o clase
@Repeatable(Usersss.class)
// Queremos que se documente por los programas generadores de documentacion como JavaDoc
@Documented

public @interface User {

    String user();
    String password();



}
