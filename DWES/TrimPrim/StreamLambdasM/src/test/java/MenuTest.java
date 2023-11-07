import org.iesvdm.Dish;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

public class MenuTest {

    List<Dish> menu;

    @BeforeEach
    void setUp() {

        menu = Arrays.asList(
                new Dish("pork", false, 800, Dish.Type.MEAT),
                new Dish("beef", false, 700, Dish.Type.MEAT),
                new Dish("chicken", false, 400, Dish.Type.MEAT),
                new Dish("french fries", true, 530, Dish.Type.OTHER),
                new Dish("rice", true, 350, Dish.Type.OTHER),
                new Dish("season fruit", true, 120, Dish.Type.OTHER),
                new Dish("pizza", true, 550, Dish.Type.OTHER),
                new Dish("prawns", false, 300, Dish.Type.FISH),
                new Dish("salmon", false, 450, Dish.Type.FISH));
    }

    @Test
    void pruebaFilter() {   // Filtrado segun condicion en lambda o funcion a Metodo
        // Filter recorre todo  la Lista  hasta el final
        //Stream es una API LAZY (PEREZOSO) HASTA EL ÚLTIMO MOMENTO SE VA A RETRASAR LA EJECUCIÓN
        // LA MAYORÍA DE OPERACIONES INTERMEDIAS SON LAZY
        // LO CONTRARIO DE LAZY: EAGER //
        List<Dish> vegetarianDishes = menu.stream()
                .filter(Dish::isVegetarian)
                .toList();
        System.out.println("prueba Filter vegetarianDishes");
        vegetarianDishes.forEach(System.out::println);
        // .filter( dish -> dish.isVegetarian() )
        // en filter los elementos del stream que no cumplen el predicado se eliminan del fllujo
        //.collect(toList());


        List<Dish> nonVegetarianDishes = menu.stream()
                // en filter los elementos del stream que no cumplen el predicado se eliminan del flujo
                //.filter(d -> !d.isVegetarian())
                // .toList();

                // cuando utilizamos el collect(toList())  nos permite seguir haciendo operaciones
                // con la lista generada
                .filter(dish -> dish.isVegetarian())
                .collect(Collectors.toList());
        System.out.println("prueba Filter noVegetarianDishes");
        nonVegetarianDishes.forEach(System.out::println);   //Funcion a Metodo sout
        // Opcion con lambda simple <->  d -> System.out.println(d)
    }

    @Test
    void sortedTest() {  // Ordenacion del flujo

        List<Dish> lowCaloricDishesName = menu
                .parallelStream()    //Multi hilos pueden llegar en orden segun se terminen
                .filter(d -> d.getCalories() < 400)
                .sorted(Comparator.comparing(Dish::getCalories))
                //// .sorted(// Comparator.comparing(d -> d.getCalories())// )   Comparator con lambda Simple
                //// comparing genera una lambda de tipo Comparator<T> sobre el método de getCalories de Dish .collect(toList());
                //// .sorted((d1, d2) -> d1.getCalories() - d2.getCalories())
                .collect(Collectors.toList());
        // aqui termina el flujo pero gracias a collect(toList())   podemos seguir trabajando con el resultado

        System.out.println("Test de Sorted lowCaloricDishesName ");
        lowCaloricDishesName.forEach(System.out::println);  //  <->   nuevo  trabajo  con funcion a Metodo
        // lowCaloricDishesName.forEach(dish -> System.out.println(dish));
    }


    @Test
    void distinct() {
        List<Integer> numbers = Arrays.asList(1, 2, 1, 3, 3, 2, 4);
        System.out.println("Test para dar todos los pares excepto los Repetidos (2)");
        numbers.stream()
                .filter(number -> number % 2 == 0)                      // Filtramos solo los que sean pares
                .peek(number -> System.out.println("Peek: " + number))  // peek no modifica nada por eso salen todos

                .distinct()                     // Excluimos los que estan repetidos
                .forEach(System.out::println);  // Operacion Terminal

        System.out.println("Test para diferenciar con peek");
        numbers.stream()
                .peek(number -> System.out.println("Peek: " + number))  // Da los valores leidos no hace nada con ellos
                .forEach(number -> System.out.println("Doble: " + (number * 2)));
    }


    @Test
    void takeWhile() {
        // difiere de Filter  y da resultado diferentes si no esta ordenado
        // Funciona como un disparador para no recorrer la lista completamente acortando tiempos
        List<Dish> specialMenu = Arrays.asList(

                new Dish("seasonal fruit", true, 120, Dish.Type.OTHER)
                , new Dish("prawns", false, 300, Dish.Type.FISH)
                , new Dish("rice", true, 350, Dish.Type.OTHER)
                , new Dish("chicken", false, 400, Dish.Type.MEAT)
                , new Dish("french fries", true, 530, Dish.Type.OTHER));
//Fíjate que specialMenu está ordenado de menor a mayor calorías..

        List<Dish> filteredMenu = specialMenu.stream()
                //Selecciona hasta que deja de cumplirse por 1a vez el predicado.
                .takeWhile(dish -> dish.getCalories() < 320)
                // Da resultados diferentes si no esta ordenado
                //tomaMientras (secuencialmente) -sólo con sentido en colecciones ordenadas.
                .sorted((o1, o2) -> o1.getCalories() - o2.getCalories())
                .collect(Collectors.toList());

        System.out.println("Test realizado con la Lista orden natural");
        for (Dish dish : filteredMenu) {
            System.out.println(dish.toString());
        }
// En filteredMenu tendremos solo: seasonal fruit, prawns

        List<Dish> filteredMenuReverso = specialMenu.stream()
                .takeWhile(dish -> dish.getCalories() < 320)  // Da resultados diferentes si no esta ordenado
                //Selecciona hasta que deja de cumplirse por 1a vez el predicado.
                //tomaMientras (secuencialmente) -sólo con sentido en colecciones ordenadas.
                .sorted((o1, o2) -> o2.getCalories() - o1.getCalories())
                .collect(Collectors.toList());

        System.out.println("Test realizado con la Lista orden Reverso");
        for (Dish dish : filteredMenuReverso) {
            System.out.println(dish.toString());
        }
// En filteredMenuReverso tendremos solo:  prawns, seasonal fruit

        List<Dish> filteredMenuDesorder = specialMenu.stream()
                //tomaMientras (secuencialmente) -sólo con sentido en colecciones ordenadas.
                .sorted((o1, o2) -> o1.getName().compareTo(o2.getName()))
                //Selecciona hasta que deja de cumplirse por 1a vez el predicado.
                .takeWhile(dish -> dish.getCalories() < 320)  // Da resultados diferentes si no esta ordenado
                // el resultado es ninguno por que salto como gatillo al momento de no encontrar el primero en el rango
                .collect(Collectors.toList());

        System.out.println("Test realizado con la Lista orden Desordenada de calorias");
        for (Dish dish : filteredMenuDesorder) {
            System.out.println(dish.toString());
        }
// En filteredMenuDesorder tendremos una lista vacia,  Saltó el gatillo al momento de no encontrar el primero en el rango deseado
    }


    @Test
    void dropWhile() {  // irá desestimando hasta que encuentre su rango deseado pero "tambien es gatillo"
        List<Dish> specialMenu = Arrays.asList(
                new Dish("seasonal fruit", true, 120, Dish.Type.OTHER)
                , new Dish("prawns", false, 300, Dish.Type.FISH)
                , new Dish("rice", true, 350, Dish.Type.OTHER)
                , new Dish("chicken", false, 400, Dish.Type.MEAT)
                , new Dish("french fries", true, 530, Dish.Type.OTHER));

//Fíjate que specialMenu está ordenado de menor a mayor calorías
        List<Dish> filteredMenu = specialMenu.stream()
                //Descarta hasta que deja de cumplirse por 1a vez el predicado, a partir de ahí devuelve todo.
                .dropWhile(dish -> dish.getCalories() < 320)   //Descarta hasta que deja de cumplirse por 1a vez el predicado, a partir de ahí devuelve todo.
                //descartaMientras (secuencialmente) -sólo con sentido en colecciones ordenadas
                .collect(Collectors.toList());
// En filteredMenu tendremos solo: rice, chicken, french fries  los >320  los <320 los habra desestimado

        System.out.println("Test de desestimacion hasta encontrar el <320");
        for (Dish dish : filteredMenu) {
            System.out.println(dish);
        }
    }


    @Test
    void limit() {     // pone limite numerico  a la seleccion
        List<Dish> specialMenu = Arrays.asList(
                new Dish("seasonal fruit", true, 120, Dish.Type.OTHER)
                , new Dish("prawns", false, 300, Dish.Type.FISH)
                , new Dish("rice", true, 350, Dish.Type.OTHER)
                , new Dish("chicken", false, 400, Dish.Type.MEAT)
                , new Dish("french fries", true, 530, Dish.Type.OTHER));

        List<Dish> dishesSelect = specialMenu.stream()
                .filter(dish -> dish.getCalories() > 300)
                .limit(3) //Se queda con los tres primeros del flujo, en este caso, que hayan pasado por el predicado de filter
                .collect(Collectors.toList());

        // aunque hay 4 platos solo se quedara con los tres primeros
        System.out.println("Test de desestimacion hasta encontrar el <320");
        for (Dish dish : dishesSelect) {
            System.out.println(dish);
        }
    }


    @Test
    void skip() {
        List<Dish> dishes = menu.stream()
                .filter(d -> d.getCalories() > 300)
                .skip(2) //Descarta los 2 primeros del flujo, en este caso, que hayan pasado por el predicado de filter
                .collect(Collectors.toList());

        System.out.println("Descartar con Skip el numero entre parentesis -> menu.size() " + menu.size());
        for (Dish dish : dishes) {
            System.out.println(dish.toString());
        }
        System.out.println("dishes. size() " + dishes.size());

    }

    @Test
    void map() {  // Mapear o Formatear o Transformar
        List<String> dishNames = menu.stream()
                // modifica la lista con el formato que damos.
                .map(Dish::getName)  //Aplica a cada elemento del flujo una función, en este caso, Dish::getName
                // Mapear se puede interpretar por transformar, el elemento se mapea con el resultado de la función (se transforma)
                .collect(toList());

        System.out.println("Uso de Map");
        for (String dish : dishNames) {
            System.out.println(dish);
        }

    }


    @Test
    void ArraysAsList() {  // con Arrays.asList  convertimos en una lista el array que disponemos
        List<String> words = Arrays.asList("Modern", "Java", "In", "Action");

        List<Integer> wordLengths =
                 words.stream()
                // convertimos el flujo de cadenas a un flujo de Integer con lambda o Metodo String::length
                .map(s -> s.length())
                .collect(toList());

        System.out.println("funcionamiento de Array.asList integers");
        for (Integer inte : wordLengths) {
            System.out.print( inte + " ");
        }
        System.out.println();

        System.out.println("funcionamiento de Array.asList Strings (cadena completa)");
        for (String word : words) {
            System.out.print(word + " ");
        }
    }

    @Test
    void flapmap() {  //Dado un array de palabras se quiere obtener un flujo sobre las letras de las palabras que las componen.

        // Array Simple de String con dos palabras "Hello"  "Words"
        String[] words = new String[]{"Hello", "World"};
        // la lista sera una lista de Arrays  que es el resultado que se busca
        // convertimos el array de cadenas en un Flujo de  cadenas
        List<String[]> listaStr = Arrays.stream(words)
                // para visualizar lo que tiene el flujo
                .peek(s -> System.out.println(s.toString()))
                // Se transforma a un Stream de Arrays de Cadenas
                .map(word -> word.split(""))
                // como son Arrays  da dos Referencias a cadenas
                .peek(s -> System.out.println(s.toString()))
                // este no hace nada ya que compara referencias y  son referencias diferentes
                .distinct()
                .collect(toList());

        for (String[] str: listaStr) {
            for (int i = 0; i < str.length; i++) {
                System.out.println(str[i]);
            }
        }
    }

    @Test
    void flatmap2() {  //Dado un array de palabras se quiere obtener un flujo sobre las letras de las palabras que las componen.

        // Array Simple de String con dos palabras "Hello"  "Words"
        String[] words = new String[]{"Hello", "World"};

        // convertimos el array de cadenas en un Flujo de cadenas
        List<String> listaStr = Arrays.stream(words)
                // para visualizar lo que tiene el flujo
                .peek(s -> System.out.println(s.toString()))
                // Se transforma a un Stream de Arrays de Cadenas
                .map(word -> word.split(""))
                // como son Arrays  da dos Referencias a cadenas
                .peek(System.out::println)  // metodo a Referencia
                // junta todos los flujos en uno solo
                .flatMap(strings -> Arrays.stream(strings))
                // Ahora si efectua una accion eliminando los repetidos
                .distinct()
                .collect(toList());

        for (String str: listaStr) {
                System.out.println(str);
        }
    }


    @Test
    void anyAllNoneMatch (){
        // anyMatch comprueba que algún elemento cumpla con el predicado  devolviendo true en ese caso
        if(menu.stream().anyMatch(Dish::isVegetarian)) {
            //Predicado por referencia a método Dish::isVegetarian
            System.out.println("The menu is (somewhat) vegetarian half/friendly!!");
        }

        if (menu.stream().allMatch(dish -> dish.isVegetarian())){
            System.out.println("The menu is total friendly");
        }

        if (menu.stream().noneMatch(dish -> dish.isVegetarian())){
            System.out.println("The menu is not friendly");
        }

        // CONDICIONES PARA IMPLEMENTAR UNA CONDICION Y HACER VERIFICACIONES
        // es una funcion que siempre devuelve un boolean
        boolean isHealthy = menu.stream()
                //allMatch comprueba que todos los elementos cumplan con el predicado devolviendo true en ese caso
                .allMatch(dish -> dish.getCalories() < 1000);

        boolean isHealthy2 = menu.stream()
                .noneMatch(d -> d.getCalories() >= 1000); //noneMatch comprueba que ningún elemento cumpla con el predicado, devolviendo true en ese caso

        Assertions.assertTrue(isHealthy == isHealthy2);

        //otra forma de hacerlo
        // si todos los platos que se encuentren de menos de 1000 calorias son igual al numero de platos  =  true
        boolean isHealthyMatch = menu.stream().filter(dish -> dish.getCalories() < 1000).count() == menu.size();

        // si todos los platos que se encuentren de menos de 1000 calorias son los mismos que en la coleccion menu, (Toma en cuenta el orden)
        boolean isHealthyNoMatch2 = menu.stream().filter(dish -> dish.getCalories() < 1000).collect(toList()).equals(menu);

    }

    @Test
    void findYOptional(){
        // devolvera un dish o vacio (lo que dara u error si accedemos con .get()
        System.out.println("peek");
        Optional<Dish> dishOpt  = menu.stream()
                .filter(dish -> dish.isVegetarian())
                .peek(System.out::println)
                //Devuelve alguno, de tipo Optional<T>  pero este metodo es vacio
                .findAny();

        if (dishOpt.isPresent()){                               //dos formas de expresarlo
            System.out.println(dishOpt);
        }
        // dishOpt.ifPresent(dish -> System.out.println(dish));  //2ª Forma

        menu.stream()
                .filter(dish -> !dish.isVegetarian())                   // el primer plato no vegetariano
                .findAny().ifPresent(dish -> System.out.println(dish));

        String resultado = String.valueOf(menu.stream()
                .filter(dish -> dish.getCalories() > 300)
                // si hay alguno puede dar el plato  si no no dara nada (vacio)
                .findAny().map(dish -> dish.getName()).orElse("NoEncontrado"));  // esta es una final
        System.out.println(resultado + "  resultado");

        Optional optional = menu.stream()
                .filter(dish -> dish.getCalories()>300)
                .map(Dish::getCalories)
                .findAny();  // devuelve un boolean
        System.out.println(optional.isPresent());

    }

    @Test
    void reduce(){
        Integer[] numbers = {1,2,5,4,7};
        int suma = Arrays.stream(numbers)
                // sumatorio
                .reduce(0, (a, b) -> a + b);
        System.out.println(suma);

        int producto = Arrays.stream(numbers)
                //producto
                .reduce(1, (a, b) -> a * b);
        System.out.println(producto);

        String[] str = new String[]{"Hola ", "Mundo "};
                String cadena = Arrays.stream(str)
                        .reduce("",(s, s2) -> s.concat(s2) );
        System.out.println(cadena);

    }

}