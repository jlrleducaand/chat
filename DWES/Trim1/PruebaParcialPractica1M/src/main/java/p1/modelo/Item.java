package p1.modelo;

import java.math.BigDecimal;

public class Item {
    private String descripcion;
    private BigDecimal weight;
    private BigDecimal price;


    public Item(String descripcion, BigDecimal weight, BigDecimal price) {
        this.descripcion = descripcion;
        this.weight = weight;
        this.price = price;
    }

    public BigDecimal getWeight() {
        return weight;
    }


    public BigDecimal getPrice() {
        return price;
    }



}
