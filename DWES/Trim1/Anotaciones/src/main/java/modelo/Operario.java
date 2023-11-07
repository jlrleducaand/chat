package Anotaciones.src.main.java.modelo;

/**
 * no se instanciaran clases de los padres solo de las hojas
 */
public abstract  class Operario extends Empleado {
    // Atributos
   private Integer codigoTaller;

   // Constructor
    public Operario(String nombre, String apellidos, String direccion, String dni, String telefono, Integer codigoTaller) {
        super(nombre, apellidos, direccion, dni, telefono);
        this.codigoTaller = codigoTaller;
    }

    // G & S
    public Integer getCodigoTaller() {
        return codigoTaller;
    }

    public void setCodigoTaller(Integer codigoTaller) {
        this.codigoTaller = codigoTaller;
    }

    @Override
    public String toString() {
        return super.toString() + " Operario{" +
                "codigoTaller=" + codigoTaller +
                '}';
    }
}
