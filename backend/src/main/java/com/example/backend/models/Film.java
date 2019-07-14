package com.example.backend.models;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;

import java.util.List;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,
        getterVisibility = JsonAutoDetect.Visibility.NONE,
        setterVisibility = JsonAutoDetect.Visibility.NONE)
public class Film {

    @Id
    private Long _id;
    private String title;
    private String releaseDate;
    private String type;
    @JsonIgnore
    private List<Integer> rate;
    private Double rating;

    // deserialization
    Film() {}

    @Override
    public String toString() {
        return "id: " + _id +
                ", title: " + title +
                ", releaseDate: " + releaseDate +
                ", type: " + type +
                ", rating: " + rating;
    }
}
