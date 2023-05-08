package com.backendFrameworkWeb.gerenciadorDocumentos.food;

public record ManualResponseDTO(Long id, String nome, String descricao, String link) {
    public ManualResponseDTO(Manual food){
        this(food.getId(), food.getNome(), food.getDescricao(), food.getLink());
    }

}
