package p1.modelo;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class OrderDetail {
    private int quantity;
    private TaxType taxType;
    private List<Item> listaItems;
    private BigDecimal iva;


    public OrderDetail(int quantity, TaxType taxType, Item item) {
        this.quantity = quantity;
        this.taxType = taxType;
        this.listaItems = new ArrayList<>();
        this.iva = (taxType.equals("General")) ?
                BigDecimal.valueOf(0.21) : (taxType.equals("Reduced"))?
                BigDecimal.valueOf(0.1) : BigDecimal.valueOf(0.04);

    }


    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public TaxType getTaxType() {
        return taxType;
    }
    public void setTaxType(TaxType taxType) {
        this.taxType = taxType;
    }

    public BigDecimal calcSubTotal(){
        BigDecimal subtotal = BigDecimal.valueOf(0);

        for (Item item: listaItems) {
            BigDecimal fila = item.getPrice().multiply(new BigDecimal(getQuantity()).multiply(this.iva));
            subtotal = subtotal.add(fila);
        }
        return subtotal;
    }

    public BigDecimal calculoWeight(){
        BigDecimal totalWeight = BigDecimal.valueOf(0);

        for (Item item: listaItems) {
            BigDecimal weigt = item.getWeight().multiply(new BigDecimal(this.getQuantity()));
            totalWeight = totalWeight.add(weigt);
        }
        return totalWeight;
    }

}
