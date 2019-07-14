package com.example.backend.models;

import org.springframework.test.util.ReflectionTestUtils;

public final class RateUtils {

    private RateUtils() { }

    public static Rate getRate() {
        Rate rate = new Rate();
        ReflectionTestUtils.setField(rate, "id",  1L);
        ReflectionTestUtils.setField(rate, "rate",  5);
        return rate;
    }
}

