package org.iesvdm;

import java.math.BigDecimal;

public class mainBigDecimal {
    public static void main(String[] args) {

        //BigDecimal bdFromDouble = new BigDecimal(0.1d);

        //System.out.println(bdFromDouble);

        BigDecimal bdFromString = new BigDecimal("1");
        System.out.println(bdFromString);

        BigDecimal bdFromLong1 = BigDecimal.valueOf(123412345678901L);
        BigDecimal bdFromLong2 = BigDecimal.valueOf(123412345678901L, 2);
        BigDecimal bdFromDouble = BigDecimal.valueOf(0.1d);

        System.out.println(bdFromLong1);
        System.out.println(bdFromLong2);
        System.out.println(bdFromDouble);

    }
}
