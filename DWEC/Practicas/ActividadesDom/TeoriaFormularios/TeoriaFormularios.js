// Las expresiones regulares, también conocidas como regex, son patrones de búsqueda utilizados para encontrar coincidencias dentro de cadenas de texto. En JavaScript, las expresiones regulares se crean utilizando la clase `RegExp` o se pueden escribir directamente entre barras diagonales (`/expresion_regular/`).Las expresiones regulares, también conocidas como regex, son patrones de búsqueda utilizados para encontrar coincidencias dentro de cadenas de texto. En JavaScript, las expresiones regulares se crean utilizando la clase `RegExp` o se pueden escribir directamente entre barras diagonales (`/expresion_regular/`).

// Aquí hay algunos elementos comunes utilizados en las expresiones regulares para la validación en JavaScript:

// 1. Caracteres literales: Los caracteres literales son aquellos que coinciden exactamente con el mismo carácter en la cadena de texto. Por ejemplo, `/abc/` buscará la secuencia "abc" en una cadena.

// 2. Metacaracteres: Los metacaracteres tienen un significado especial en las expresiones regulares. Algunos ejemplos comunes incluyen:
//    - `.`: Coincide con cualquier carácter, excepto los saltos de línea.
//    - `*`: Coincide con cero o más repeticiones del elemento anterior.
//    - `+`: Coincide con una o más repeticiones del elemento anterior.
//    - `?`: Coincide con cero o una repetición del elemento anterior.
//    - `\`: Se utiliza para escapar metacaracteres y tratarlos como caracteres literales.

// 3. Clases de caracteres: Las clases de caracteres se utilizan para definir un conjunto de caracteres que se pueden encontrar en una posición determinada en la cadena. Algunos ejemplos incluyen:
//    - `[0-9]`: Coincide con cualquier dígito numérico.
//    - `[a-z]`: Coincide con cualquier letra minúscula.
//    - `[A-Z]`: Coincide con cualquier letra mayúscula.
//    - `[aeiou]`: Coincide con cualquier vocal.

// 4. Cuantificadores: Los cuantificadores se utilizan para especificar la cantidad de repeticiones de un elemento. Algunos ejemplos incluyen:
//    - `{n}`: Coincide exactamente con n repeticiones del elemento anterior.
//    - `{n,}`: Coincide con al menos n repeticiones del elemento anterior.
//    - `{n,m}`: Coincide con entre n y m repeticiones del elemento anterior.

// Estos son solo algunos ejemplos básicos de cómo se pueden utilizar las expresiones regulares en JavaScript para realizar validaciones. Las expresiones regulares pueden volverse bastante complejas y poderosas, y hay muchos más elementos y técnicas que se pueden utilizar. Puedes consultar la documentación oficial de JavaScript para obtener más información sobre cómo utilizar expresiones regulares en tus validaciones.

// Aquí hay algunos elementos comunes utilizados en las expresiones regulares para la validación en JavaScript:

// 1. Caracteres literales: Los caracteres literales son aquellos que coinciden exactamente con el mismo carácter en la cadena de texto. Por ejemplo, `/abc/` buscará la secuencia "abc" en una cadena.

// 2. Metacaracteres: Los metacaracteres tienen un significado especial en las expresiones regulares. Algunos ejemplos comunes incluyen:
//    - `.`: Coincide con cualquier carácter, excepto los saltos de línea.
//    - `*`: Coincide con cero o más repeticiones del elemento anterior.
//    - `+`: Coincide con una o más repeticiones del elemento anterior.
//    - `?`: Coincide con cero o una repetición del elemento anterior.
//    - `\`: Se utiliza para escapar metacaracteres y tratarlos como caracteres literales.
//    - `\.`:Escapa de '.' por lo que lo literaliza.  

// 3. Clases de caracteres: Las clases de caracteres se utilizan para definir un conjunto de caracteres que se pueden encontrar en una posición determinada en la cadena. Algunos ejemplos incluyen:
//    - `[0-9]`: Coincide con cualquier dígito numérico.
//    - `[a-z]`: Coincide con cualquier letra minúscula.
//    - `[A-Z]`: Coincide con cualquier letra mayúscula.
//    - `[aeiou]`: Coincide con cualquier vocal.

// 4. Cuantificadores: Los cuantificadores se utilizan para especificar la cantidad de repeticiones de un elemento. Algunos ejemplos incluyen:
//    - `{n}`: Coincide exactamente con n repeticiones del elemento anterior.
//    - `{n,}`: Coincide con al menos n repeticiones del elemento anterior.
//    - `{n,m}`: Coincide con entre n y m repeticiones del elemento anterior.

// Estos son solo algunos ejemplos básicos de cómo se pueden utilizar las expresiones regulares en JavaScript para realizar validaciones. Las expresiones regulares pueden volverse bastante complejas y poderosas, y hay muchos más elementos y técnicas que se pueden utilizar. Puedes consultar la documentación oficial de JavaScript para obtener más información sobre cómo utilizar expresiones regulares en tus validaciones.

// A[A-F]{2} => AAA ..... AFF    dos DESPUES  de la primera obligatoria
// A[A-F]? =>  A, AA ....FF      A ES OBLIGATORIA  Y  OPCIONAL EL SEGUNDO CARACTER 
// A?[A-F]? =>  es diferente   