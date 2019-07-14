package com.example.backend.models;

public class Rate {
    private Long id;
    private Integer rate;

    // Serialization()
    Rate() {}

    public Long getId() {
        return id;
    }

    public Integer getRate() {
        return rate;
    }
}
