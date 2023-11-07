package Anotaciones.src.main.java.modelo;

import Anotaciones.src.main.java.anotaciones1.*;

import java.util.LinkedHashSet;
import java.util.Set;

// Empleados pasados por notaciones para su procesamiento
@AnotacionEmpleado(
        nombre = "Amancio",
        apellidos = "Ortega",
        dni = "66554433F",
        direccion = "AV.DIPUTACION S/N, P.I. SABON 15142, ARTEIXO, LA CORUÑA",
        telefono = "981185596",
        clase = "Directivo",
        codigoDespacho = 1
)
@AnotacionEmpleado(
        nombre = "Jose Luis",
        apellidos = "Roman",
        dni = "333888666",
        direccion = "Granada 5",
        telefono = "555 555 555",
        clase = "Oficial",
        categoria = "Primera"
)
@AnotacionEmpleado(
        nombre = "Pepe",
        apellidos = "Lopez",
        dni = "444 888 999",
        direccion = "Bodegon 36",
        telefono = "666 666 666",
        clase = "Tecnico",
        perfil = "asesor"
)

public class Empresa {

    // Atributos
    private String nombre;
    private Set<Empleado> listaEmpleados;

    // Constructor
    public Empresa(String nombre) {
        this.nombre = nombre;
        this.listaEmpleados = new LinkedHashSet<>();
    }

    // G & S


    public String getNombre() { return nombre; }

    public void setNombre(String nombre) { this.nombre = nombre; }

    public Set<Empleado> getListaEmpleados() { return listaEmpleados; }

    public void setListaEmpleados(Set<Empleado> listaEmpleados) { this.listaEmpleados = listaEmpleados; }


    // Metodo para poder realizar test de Empleados
    public Empleado EmpleadoBuscadoPorDni(String dni){
        Empleado empBuscado = null;
        for (Empleado emp: this.getListaEmpleados()) {

            if (emp.getDni().equals(dni)){
                empBuscado = emp;
            }

        }
        return empBuscado;
    }

    @Override
    public String toString() {
        return "Empresa{" +
                "nombre='" + nombre + '\'' +
                ", listaEmpleados=" + listaEmpleados.toString() +
                '}';
    }
}
