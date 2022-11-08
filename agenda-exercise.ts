// 1. Crie uma classe para representar uma pessoa, com os atributos privados de nome,
//data de nascimento e altura. Crie os métodos públicos necessários para sets e gets e
//também um método para imprimir todos dados de uma pessoa. Crie um método para calcular
//a idade da pessoa

// 2. Crie uma classe Agenda que pode armazenar 10 pessoas e que seja capaz de realizar
//as seguintes operações:
//      armazenaPessoa(nome, dataNascimento, altura);
//      removePessoa(nome);
//      buscaPessoa(nome); -> informa em que posição da agenda está a pessoa
//      imprimeAgenda(); -> imprime os dados de todas as pessoas da agenda
//      imprimePessoa(index); -> imprime os dados da pessoa que está na posição “i” da agenda.

// 3. Crie as entidades de um sistema para gerenciar Alunos, Professores
// Professores e alunos deve herdar de uma mesma classe pai
// Alunos e Professores deve possuir dados pessoais(nome, idade, etc.)
// Um professor deve possuir uma disciplina na qual ele ministra
// Um aluno deve possuir um atributo nota do tipo ARRAY.
// A classe aluno deve conter um metodo para adicionar notas.
// A classe aluno deve conter um metodo calcular a média das notas.


//EXERCICIO 1
class Person {
    private _name: string;
    private _birthDate: string[];
    private _height: number;

    constructor(name: string, birthDate: string, height: number) {
        this._name = name;
        this._birthDate = birthDate.split('/');
        this._height = height;
        this.verifyDate();
    }

    get name() {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get birthDate() {
        return this._birthDate.join("/");
    }

    set birthDate(newDate: string) {
        this._birthDate = newDate.split('/');
        this.verifyDate();
    }

    get height() {
        return this._height;
    }

    set height(newHeight: number) {
        this._height = newHeight;
    }

    get age() {
        return this.getAge();
    }

    private verifyDate() {
        let verified = true;
        if (Number.isNaN(Number(this._birthDate[0])) || Number.isNaN(Number(this._birthDate[1])) ||
        Number.isNaN(Number(this._birthDate[2])))
            verified = false;
        if (Number(this._birthDate[0]) > 31 || Number(this._birthDate[0]) <= 0 ||
        Number(this._birthDate[1]) > 12 || Number(this._birthDate[1]) <= 0) {
            verified = false;
        }
        if (this._birthDate.join('/').length !== 10)
            verified = false;
        if (!verified) {
            console.log("The date you entered is wrong.\nThe date was set to 01/01/0001.");
            this._birthDate = "01/01/0001".split("/");
            return false;
        }
        return true;        
    }

    private monthToNumber(month: string): number {
        const monthes = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return Number(monthes.findIndex((m) => m === month)) + 1;
    }

    private getAge(): number {
        const currentDate = Date().split(' ').splice(1, 3);
        let age: number = 0;
        age = Number(currentDate[2]) - Number(this._birthDate[2]);
        if (Number(this._birthDate[1]) > Number(this.monthToNumber(currentDate[0])))
            age--;
        if (Number(this._birthDate[1]) === Number(this.monthToNumber(currentDate[0]))) {
            if (Number(this._birthDate[0]) > Number(currentDate[1]))
                age--;
        }
        return age;
    }

    public printInformation(): void {
        console.log(`Name: ${this._name}`);
        console.log(`Birth Date: ${this._birthDate.join("/")}`);
        console.log(`Height: ${this.height}`);
    }
}


//EXERCICIO 2
abstract class Agenda {
    private static listOfPeople: Person[] = [];

    static addPerson(person: Person): number {
        if (this.listOfPeople.length === 10) {
            console.log(`The list is full, ${person.name} couldn't be added.`);
            return -1;
        }
        this.listOfPeople.push(person);
        return 0;
    }

    static removePerson(nameToRemove: string): number {
        const newList = this.listOfPeople.filter((person) => person.name.toLowerCase() !== nameToRemove.toLowerCase());
        if (this.listOfPeople.length === newList.length) {
            console.log("There's no person with that name on the list.");
            return -1;
        }
        this.listOfPeople = newList;
        return 0;
    }

    static findPerson(nameToFind: string): number {
        const ret = this.listOfPeople.findIndex((person) => person.name.toLowerCase() === nameToFind.toLowerCase());
        if (ret < 0) {
            console.log(`${nameToFind} is not on the list.`);
            return ret;
        }
        console.log(`${nameToFind} is in the index ${ret}`);
        return ret;
    }

    static printBook() {
        if (this.listOfPeople.length === 0) {
            console.log('The list is empty.');
            return ;
        }
        for(let i = 0; i < this.listOfPeople.length; i++) {
            console.log(`==============Page ${i + 1}================`);
            this.listOfPeople[i].printInformation();
        }
    }

    static printPerson(index: number): number {
        if (index >= this.listOfPeople.length)
            return (-1);
        this.listOfPeople[index].printInformation();
        return 0;
    }
}


//EXERCICIO 3
class Teacher extends Person {
    private _subject: string;

    constructor(name: string, birthDate: string, height: number, subject: string) {
        super(name, birthDate, height);
        this._subject = subject;
    }

    get subject() {
        return this._subject;
    }

    set subject(newSub: string) {
        this._subject = newSub;
    }
}

class Student extends Person {
    private testScores: number[] = [];
    constructor(name: string, birthDate: string, height: number) {
        super(name, birthDate, height);
    }

    public addScore(testScore: number){
        this.testScores.push(testScore);
    }

    public average(): number {
        let average = 0;
        if (this.testScores.length === 0)
            return 0;
        for(let i = 0; i < this.testScores.length; i++) {
            average += this.testScores[i];
        }
        return Number((average / this.testScores.length).toFixed(1));
    }
}



//TESTES EXERCICIOS:

// console.log("===============Exercicio 1================\n");
// const person1 = new Person("Lais", "28/10/1996", 1.56);
// const person2 = new Person("Flavia", "20/12/1996", 1.70);
// const person3 = new Person("Rafaela", "04/02/1997", 1.63);
// const person4 = new Person("Denise", "03/07/1999", 1.59);
// const person5 = new Person("Pamela", "32/13/2022", 1.70);
// console.log("==============P1=============");
// console.log(person1.age);
// person1.printInformation();
// console.log("==============P2=============");
// console.log(person2.age);
// person2.printInformation();
// console.log("==============P3=============");
// console.log(person3.age);
// person3.printInformation();
// console.log("==============P4=============");
// console.log(person4.age);
// person4.printInformation();
// console.log("==============P5=============");
// console.log(person5.age);
// person5.printInformation();


// console.log("\n===============Exercicio 2================\n");
// Agenda.addPerson(person1);
// Agenda.addPerson(person2);
// Agenda.addPerson(person3);
// Agenda.addPerson(person4);

// Agenda.printBook();
// Agenda.findPerson("rafaela");
// Agenda.findPerson("Roberta");
// Agenda.printPerson(1); //Flavia
// Agenda.removePerson("flavia");
// Agenda.printBook();


// console.log("\n===============Exercicio 3================\n");

// const student1 = new Student("Leo", "09/08/2005", 1.56);
// const student2 = new Student("Caio", "07/12/2005", 1.86);
// const teacher = new Teacher("Amanda", "10/10/1980", 1.70, "Math");

// student1.addScore(7);
// student1.addScore(8.5);
// student1.addScore(9);
// student2.addScore(10);
// student2.addScore(6.5);
// student2.addScore(8);
// console.log(`Teacher's name: ${teacher.name}`);
// console.log(`Teacher's age: ${teacher.age}`);
// console.log(`Student 1 average: ${student1.average()}`);
// console.log(`Student 2 average: ${student2.average()}`);

//TESTE ESTOURAR AGENDA:

// const person6 = new Person("Pamela", "11/11/2022", 1.70);
// const person7 = new Person("Pamela", "11/11/2022", 1.70);
// const person8 = new Person("Pamela", "11/11/2022", 1.70);
// const person9 = new Person("Pamela", "11/11/2022", 1.70);
// const person10 = new Person("Pamela", "11/11/2022", 1.70);
// const person11 = new Person("Paula", "11/11/2021", 0.70);
// Agenda.addPerson(person1);
// Agenda.addPerson(person2);
// Agenda.addPerson(person3);
// Agenda.addPerson(person4);
// Agenda.addPerson(person5);
// Agenda.addPerson(person6);
// Agenda.addPerson(person7);
// Agenda.addPerson(person8);
// Agenda.addPerson(person9);
// Agenda.addPerson(person10);
// Agenda.addPerson(person11);

