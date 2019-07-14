package com.example.backend.controllers;

import com.example.backend.models.Film;
import com.example.backend.models.Rate;
import com.example.backend.services.FilmService;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FilmController {

    private final FilmService filmService;

    @Autowired
    FilmController(FilmService filmService) {
        this.filmService = filmService;
    }

    @GetMapping(value = "/films", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Film> getFilms() {
        return filmService.getFilms();
    }

    @PostMapping(value = "/rate")
    public UpdateResult addRate(@RequestBody Rate rate) {
      return filmService.addRate(rate.getId(), rate.getRate());
    }

}
