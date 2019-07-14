package com.example.backend;

import com.example.backend.models.Film;
import com.example.backend.models.FilmUtils;
import com.example.backend.services.FilmService;
import com.mongodb.client.result.UpdateResult;
import org.bson.BsonBoolean;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.TypedAggregation;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import java.util.List;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

public class FilmServiceTest {

    @Mock
    private AggregationResults<Film> aggregationResults;
    @Mock
    private MongoTemplate mongoTemplate;
    @InjectMocks
    private FilmService filmService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    @DisplayName("Should return list of Films")
    void getFilmsListFromDb() {
        when(aggregationResults.getMappedResults()).thenReturn(FilmUtils.getTestFilms());
        when(mongoTemplate.aggregate(any(TypedAggregation.class), eq(Film.class))).thenReturn(aggregationResults);

        List<Film> films = filmService.getFilms();
        assertEquals(films.size(), 3);
    }

    @Test
    @DisplayName("Should add rate to array of rates")
    void updateFilmRate() {
        UpdateResult updateResult = UpdateResult.acknowledged(1L, 1L, BsonBoolean.valueOf(true));
        when(mongoTemplate.updateFirst(any(Query.class), any(Update.class), eq(Film.class))).thenReturn(updateResult);

        assertEquals(filmService.addRate(1L,10).getModifiedCount(), 1L);
    }

}
