package p3;

public class UtilContexto {

    // Recibe como parametro la clase sobre la que se cargara el contenido
    public static void cargadorDeContexto(Login login) {

        // Accedemos a la imagen de las anotaciones
        Usersss anotUsersss = login.getClass().getAnnotation(Usersss.class);
        User[] anotUser = anotUsersss.value();

        // recorremos el Array imagen de Empleados  e instanciamos los objetos
        for (User anouser : anotUser) {

            String user = anouser.user();
            String password = anouser.password();


        }
    }
}

