import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Jogo } from "src/app/models/jogo.model";
import { Selecao } from "src/app/models/selecao.model";

@Component({
  selector: "app-cadastrar-jogo",
  templateUrl: "./cadastrar-jogo.component.html",
  styleUrls: ["./cadastrar-jogo.component.css"],
})
export class CadastrarJogoComponent implements OnInit {

  selecoes!: Selecao[];
  
  selecaoA?: Selecao;
  selecaoB?: Selecao;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {  }

  cadastrar(): void {
    let jogo : Jogo = {
      selecaoA : this.selecaoA,
      selecaoB : this.selecaoB,    
      
    };
    console.log(jogo);

    this.http.post<Jogo>("https://localhost:5001/api/jogo/cadastrar", jogo)
    .subscribe({
      next: (jogo) => {
        this.router.navigate(["pages/jogo/listar"]);
      },
    });
  }
}