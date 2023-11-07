package Anotaciones.src.main.java.modelo;

import modelo.Empleado;

public class Directivo extends Empleado {

    // Atributos
    private Integer codigoDespacho;
    // atributo no necesario ya que se usa el discriminante clase en la anotacion
    //private String clase = "Directivo";

    // Constructor
    public Directivo(String nombre, String apellidos, String direccion, String dni, String telefono,Integer codigoDespacho) {
        super(nombre, apellidos, direccion, dni, telefono);
        this.codigoDespacho = codigoDespacho;
    }

    // G & S
    public Integer getCodigoDespacho() {
        return codigoDespacho;
    }

    public void setCodigoDespacho(Integer codigoDespacho) {
        this.codigoDespacho = codigoDespacho;
    }


    @Override
    public String toString() {
        return super.toString() + " Directivo{" +
                "codigoDespacho=" + codigoDespacho +
                '}';
    }
}
