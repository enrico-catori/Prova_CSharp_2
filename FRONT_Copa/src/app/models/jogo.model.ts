import { Selecao } from "./selecao.model";

export interface Jogo {
  id?: number;
  selecaoA?: Selecao;
  selecaoB?: Selecao;
  criadoEm?: string;
  scoreTimeAId?: number;
  scoreTimeBId?: number;
  selecaoAId?: number;
  selecaoBId?: number;
}
