import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa {
    ra: number;
    media: number;

    constructor(nome: string, idade: number, email: string, fone: string, ra: number, media: number) {
        super(nome, idade, email, fone);
        this.ra = ra;
        this.media = media;
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

    situacao(): string {
        if (this.media < 5) {
            return "Reprovado";
        } else if (this.media < 6) {
            return "Exame";
        } else {
            return "Aprovado";
        }
    }

    // Formata a média com duas casas decimais
    getMediaFormatada(): string {
        return this.media.toFixed(2);
    }
}
