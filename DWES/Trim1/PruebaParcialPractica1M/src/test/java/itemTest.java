import org.junit.jupiter.api.Test;
import p1.modelo.Item;
import p1.modelo.Order;
import p1.modelo.OrderDetail;

import java.math.BigDecimal;
import java.time.LocalDate;


public class itemTest {

    @Test
    public void iemt1(){

        Item i1 = new Item("Western Digital Unidad interna de estado sólido SSD WD SN580 NVMe azul de 1 TB", new BigDecimal(0.395),new BigDecimal(52.99));
        Item i2 = new Item("Apple MacBook Pro M1 Pro", new BigDecimal(1.300),new BigDecimal(1758.95));

        OrderDetail detallesOrden = new OrderDetail(new BigDecimal(1),i1);
      Order nuevo =  new Order(LocalDate.now());

    }


}
