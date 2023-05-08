package com.backendFrameworkWeb.gerenciadorDocumentos.controller;

import com.backendFrameworkWeb.gerenciadorDocumentos.food.Manual;
import com.backendFrameworkWeb.gerenciadorDocumentos.food.ManualRepository;
import com.backendFrameworkWeb.gerenciadorDocumentos.food.ManualRequestDTO;
import com.backendFrameworkWeb.gerenciadorDocumentos.food.ManualResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("manual")
public class ManualController{
    @Autowired
    private ManualRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody ManualRequestDTO data){
       Manual foodData = new Manual(data);
        repository.save(foodData);
        return;
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<ManualResponseDTO> getAll(){

            List<ManualResponseDTO> foodList = repository.findAll().stream().map(ManualResponseDTO::new).toList();
            return foodList;

    }
}