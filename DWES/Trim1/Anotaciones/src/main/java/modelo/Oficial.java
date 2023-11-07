package modelo;

import modelo.Operario;

public class Oficial  extends Operario {

    // Atributos
    private String categoria;
    // atributo no necesario ya que se usa el discriminante clase en la anotacion
    //private String clase = "Oficial";

    //Constructor
    public Oficial(String nombre, String apellidos, String direccion, String dni, String telefono, Integer codigoTaller, String categoria) {
        super(nombre, apellidos, direccion, dni, telefono, codigoTaller);
        this.categoria = categoria;
    }

    // G & S
    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    @Override
    public String toString() {
        return super.toString() + " Oficial{" +
                "categoria='" + categoria + '\'' +
                '}';
    }
}
