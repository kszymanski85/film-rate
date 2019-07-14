package com.example.backend.models;

import org.springframework.test.util.ReflectionTestUtils;

import java.util.LinkedList;
import java.util.List;


public final class FilmUtils {

    private FilmUtils() { }

    public static List<Film> getTestFilms() {
        Film film1 =  new Film();
        ReflectionTestUtils.setField(film1, "_id", 1L);
        ReflectionTestUtils.setField(film1, "title", "Title1");
        ReflectionTestUtils.setField(film1, "releaseDate", "01-01-2001");
        ReflectionTestUtils.setField(film1, "type", "A");
        ReflectionTestUtils.setField(film1, "rating", 1.111);

        Film film2 =  new Film();
        ReflectionTestUtils.setField(film2, "_id", 2L);
        ReflectionTestUtils.setField(film2, "title", "Title2");
        ReflectionTestUtils.setField(film2, "releaseDate", "02-02-2002");
        ReflectionTestUtils.setField(film2, "type", "B");
        ReflectionTestUtils.setField(film2, "rating", 2.222);

        Film film3 =  new Film();
        ReflectionTestUtils.setField(film3, "_id", 3L);
        ReflectionTestUtils.setField(film3, "title", "Title3");
        ReflectionTestUtils.setField(film3, "releaseDate", "03-03-2003");
        ReflectionTestUtils.setField(film3, "type", "C");
        ReflectionTestUtils.setField(film3, "rating", 3.333);

        List<Film> films = new LinkedList<>();
        films.add(film1);
        films.add(film2);
        films.add(film3);

        return films;
    }

}
