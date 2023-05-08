package com.backendFrameworkWeb.gerenciadorDocumentos.food;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Table(name = "manual")
@Entity(name = "manual")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Manual {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String descricao;

    private String link;

    public Manual(ManualRequestDTO data){

      this.nome = data.nome();
      this.descricao = data.descricao();
     this.link = data.link();
    }

}
