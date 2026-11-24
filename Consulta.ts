import { Cliente } from "./Cliente";
import { Conta } from "./Conta";


const cliente1 = new Cliente("Ysa Oliveira de Hahaha", "111.222.333-44", "Rua das Flores, 10", 3000);
const conta1 = new Conta("12345", "0001", cliente1);


const cliente2 = new Cliente("Gustavo Lima Enrique", "555.666.777-88", "Av. Central, 50", 5000);
const conta2 = new Conta("67890", "0001", cliente2);

console.log("--- CONTA DE YSA O. ---");
conta1.depositar(500);
conta1.consultarSaldo();
conta1.sacar(600);
conta1.sacar(200);
conta1.consultarSaldo();

console.log("\n--- CONTA DO GUSTAVO L. ---");
conta2.depositar(1000);
conta2.consultarSaldo();
conta2.sacar(300);
conta2.consultarSaldo();
