package Anotaciones.src.main.java.modelo;

public class Tecnico  extends  Operario{

    // Atributos
    private String perfil;
    // atributo no necesario ya que se usa el discriminante clase en la anotacion
    //private String clase = "Tecnico";

    // Constructor
    public Tecnico(String nombre, String apellidos, String direccion, String dni, String telefono, Integer codigoTaller, String perfil) {
        super(nombre, apellidos, direccion, dni, telefono, codigoTaller);

        this.perfil = perfil;
    }

    // DG & S
        public String getPerfil() {
            return perfil;
        }

        public void setPerfil(String perfil) {
            this.perfil = perfil;
        }

    @Override
    public String toString() {
        return  super.toString() + " Tecnico{" +
                "perfil='" + perfil + '\'' +
                '}';
    }
}
