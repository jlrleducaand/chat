package p1.modelo;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Order {

    private LocalDate date;
    private Status status;
    private OrderDetail orderDetail;
    private List<Order> listaOrdenes;


    public Order(LocalDate date, Status status, OrderDetail orderDetail) {
        this.date = date;
        this.status = status;
        this.orderDetail = orderDetail;
        this.listaOrdenes = new ArrayList<>();
    }

    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }
    public Status getStatus() {
        return status;
    }
    public void setStatus(Status status) {
        this.status = status;
    }


    public BigDecimal CalcNetTotal() {
        BigDecimal subtotal = BigDecimal.valueOf(0);
        for (Order item: listaOrdenes) {
            BigDecimal fila = item.orderDetail.calcSubTotal();
            subtotal = subtotal.add(fila);
        }
        return subtotal;
    }
}
