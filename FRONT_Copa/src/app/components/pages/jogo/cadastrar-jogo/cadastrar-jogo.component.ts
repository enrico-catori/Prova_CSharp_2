import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Jogo } from "src/app/models/jogo.model";
import { Selecao } from "src/app/models/selecao.model";

@Component({
  selector: "app-cadastrar-jogo",
  templateUrl: "./cadastrar-jogo.component.html",
  styleUrls: ["./cadastrar-jogo.component.css"],
})
export class CadastrarJogoComponent implements OnInit {

  sel!: Selecao[];
  
  selAId!: number;
  selBId!: number;

  constructor(private http: HttpClient, 
    private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.http.
    get<Selecao[]>("https://localhost:5001/api/selecao/listar")
    .subscribe({
      next: (selecoes) => {
        this.sel = selecoes;
      },
    });
  }

  cadastrar(): void {
    let jogo: Jogo = {
      selecaoA: this.sel.find(sel => sel.id == this.selAId),
      selecaoB: this.sel.find(sel => sel.id == this.selBId)
    }

    this.http.post<Jogo>("https://localhost:5001/api/jogo/cadastrar", jogo)
    .subscribe({next: (jogo) => {
        this._snackBar.open("Cadastrado", "Ok", { });
        this.router.navigate(["pages/jogo/listar"]);
      },
      error: (error) => { console.error("Erro"); }
    })
  }
}