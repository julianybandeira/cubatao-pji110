package com.backendFrameworkWeb.gerenciadorDocumentos.manual;

public record ManualResponseDTO(Long id, String nome, String descricao, String link) {
    public ManualResponseDTO(Manual manual){
        this(manual.getId(), manual.getNome(), manual.getDescricao(), manual.getLink());
    }

}
