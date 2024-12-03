import { Estudante } from "./Estudante";
import { Professor } from "./Professor";

var estudantes: Array<Estudante> = [];
var estudante = new Estudante("Joaquim Barbosa", 18, "joaquim.barbosa@fatec.sp.gov.br", "12996600022", 1, 5.5);
estudantes.push(estudante);
estudante = new Estudante("Marcos da Silva", 21, "marcos.silva@etec.sp.gov.br", "12912343567", 2, 7.5);
estudantes.push(estudante);
estudante = new Estudante("Ana Maria Brega", 25, "ana.brega@etec.sp.gov.br", "12999979999", 3, 10);
estudantes.push(estudante);
estudante = new Estudante("Paulo França", 18, "paulo.fraca@fatec.sp.gov.br", "12999967999", 4, 4.5);
estudantes.push(estudante);
estudante = new Estudante("Edson Arantes", 30, "edson.arantes@gmail.sp.gov.br", "999957999", 5, 9);
estudantes.push(estudante);

var professores: Array<Professor> = [];
var professor = new Professor("Antonio Marcos", 38, "antonio.marcos@etec.sp.gov.br", "12996600022", 1000, 2995.50);
professores.push(professor);
professor = new Professor("Erasmo Carlos", 45, "erasmo.carlos@fatec.sp.gov.br", "12996600022", 1001, 5554.81);
professores.push(professor);
professor = new Professor("José Augusto", 36, "jose.augusto@cps.sp.gov.br", "12996600044", 1003, 3661.95);
professores.push(professor);
professor = new Professor("Elis Regina", 25, "elis.regina@fatec.sp.gov.br", "12996600066", 1004, 4322.76);
professores.push(professor);
professor = new Professor("Gal Costa", 39, "meu_nome_eh_gal@gmail.com", "997996101", 1005, 7824.32);
professores.push(professor);

// Exibindo informações no console
estudantes.forEach(estudante => {
    console.log("<< ESTUDANTE >>");
    console.log(`Registro: ${estudante.ra}`);
    console.log(`Nome: ${estudante.nome}`);
    console.log(`Média: ${estudante.getMediaFormatada()}`);
    console.log(`Situação: ${estudante.situacao()}`);
    console.log(`Fone: ${estudante.phoneMask()} - ${estudante.validaFone() ? "Válido" : "Inválido"}`);
    console.log(`e-Mail: ${estudante.email} - ${estudante.validaEmail() ? "Válido" : "Inválido"}`);
});

professores.forEach(professor => {
    console.log("<< PROFESSOR >>");
    console.log(`Matrícula: ${professor.matricula}`);
    console.log(`Nome: ${professor.nome}`);
    console.log(`Salário: ${professor.getSalarioFormatado()}`);
    console.log(`Fone: ${professor.phoneMask()} - ${professor.validaFone() ? "Válido" : "Inválido"}`);
    console.log(`e-Mail: ${professor.email} - ${professor.validaEmail() ? "Válido" : "Inválido"}`);
});