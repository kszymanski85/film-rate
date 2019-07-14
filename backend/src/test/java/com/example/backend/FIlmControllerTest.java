package com.example.backend;

import com.example.backend.controllers.FilmController;
import com.example.backend.models.FilmUtils;
import com.example.backend.models.RateUtils;
import com.example.backend.services.FilmService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.result.UpdateResult;
import org.bson.BsonBoolean;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.mockito.Mockito.*;

@WebMvcTest(value = FilmController.class)
public class FIlmControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private ObjectMapper mapper;

    @MockBean
    private FilmService filmService;

    private MockMvc mockMvc;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
    }

    @Test
    @DisplayName("Check response from films endpoint")
    void verifyFilms() throws Exception {
        when(filmService.getFilms()).thenReturn(FilmUtils.getTestFilms());
        mockMvc.perform(get("/films")).andExpect(status().isOk());
    }

    @Test
    @DisplayName("Check response from rate endpoint")
    void verifyRate() throws Exception {
        UpdateResult updateResult = UpdateResult.acknowledged(1L, 1L, BsonBoolean.valueOf(true));
        when(filmService.addRate(anyLong(), anyInt())).thenReturn(updateResult);

        String json = mapper.writeValueAsString(RateUtils.getRate());
        mockMvc.perform(post("/rate")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

}
