import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa {
    matricula: number;
    salario: number;

    constructor(nome: string, idade: number, email: string, fone: string, matricula: number, salario: number) {
        super(nome, idade, email, fone);
        this.matricula = matricula;
        this.salario = salario;
    }

    validaEmail(): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const dominiosValidos = ["@etec", "@fatec", "@cps"];

        if (!regex.test(this.email)) {
            return false;
        }

        const dominioValido = dominiosValidos.some(dominio => this.email.includes(dominio));
        return dominioValido && this.email.endsWith(".sp.gov.br");
    }

    // Formata o salário como moeda brasileira
    getSalarioFormatado(): string {
        return this.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}
