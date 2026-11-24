import { Cliente } from "./Cliente";
export class Conta {
  numero: string;
  agencia: string;
  dataAbertura: Date;
  saldo: number;
  cliente: Cliente;

  constructor(numero: string, agencia: string, cliente: Cliente) {
    this.numero = numero;
    this.agencia = agencia;
    this.dataAbertura = new Date();
    this.saldo = 0;
    this.cliente = cliente;
  }

  depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} feito! Saldo atual: R$ ${this.saldo}`);
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log(`ERRO! Saldo insuficiente. Saldo atual: R$ ${this.saldo}`);
      console.log("Não dá pra sacar mais do que tem!");
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor} feito! Saldo atual: R$ ${this.saldo}`);
    }
  }

  consultarSaldo(): void {
    console.log(`Cliente: ${this.cliente.nome} | Conta: ${this.numero} | Agência: ${this.agencia} | Abertura: ${this.dataAbertura.toLocaleDateString("pt-BR")} | Saldo: R$ ${this.saldo}`);
  }
}
