
export class Cliente {
  nome: string;
  cpf: string;
  endereco: string;
  renda: number;

  constructor(nome: string, cpf: string, endereco: string, renda: number) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.renda = renda;
  }
}
