// Recebe 3 notas e retorna situação do aluno

// Objetivo do codigo: A entrada de cada aluno será seu nome e suas três notas.
// A saída deve ser "Enviar para nomedoestudante: suasituação"

class Boletim {
    constructor(name,grade1,grade2,grade3){
        this.name = name;
        this.grade1=grade1;
        this.grade2=grade2;
        this.grade3=grade3;
        this.notaTotal = (grade1+grade2+grade3)/3
    }
} 

let aluno = new Boletim ('André',5,5,10)

if (aluno.notaTotal<5) {
    console.log("Vc está reprovado") 
}

else if (aluno.notaTotal>= 5 && aluno.notaTotal<7){
    console.log("Vc está em recuperação")
}

else if(aluno.notaTotal>=7){
    console.log("Vc está aprovado")
}


//Quero criar um foreach para ele fazer a mensagem de cada aluno (usando ifstatement)
// Nao consegui fazer o foreach para todos os elementos da classe


