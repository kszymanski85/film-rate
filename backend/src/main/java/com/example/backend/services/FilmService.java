package com.example.backend.services;

import com.example.backend.models.Film;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {

    private final MongoTemplate mongoTemplate;

    @Autowired
    FilmService(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public List<Film> getFilms() {
        TypedAggregation<Film> typedAggregation = Aggregation.newAggregation(Film.class,
                Aggregation.sort(Sort.Direction.ASC, "title"),
                Aggregation.project("title", "releaseDate", "type").and(AccumulatorOperators.Avg.avgOf("rate")).as("rating"));

        return mongoTemplate.aggregate(typedAggregation, Film.class).getMappedResults();
    }

    public UpdateResult addRate(Long id, Integer rate) {
        Query query = Query.query(Criteria.where("_id").is(id));
        Update update = new Update().push("rate", rate);

        return mongoTemplate.updateFirst(query, update, Film.class);
    }


}
