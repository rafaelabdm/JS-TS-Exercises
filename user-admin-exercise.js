// PARTE 1
// Crie uma classe usuário que deve receber dois parâmetros no método construtor, e-mail e senha,
// e anotá-los em propriedades da classe.

// PARTE 2
// Crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".
// A classe "Admin" por sua vez não recebe parâmetros próprios apenas e-mail e senha da classe pai (super).
// Deve ser criada uma propriedade interna this.admin = true em seu construtor.

// PARTE 3
// Agora com suas classes formatadas, adicione um método(função) na classe Usuario chamado isAdmin que
// retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não. 


class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    isAdmin() {
        if (this.admin === true)
            return (true);
        return (false);
    }
}

class Admin extends User {
    constructor(email, password) {
        super(email, password);
        this.admin = true;
    }
}

const user1 = new User("rafaelabdm@hotmail.com", "SuperCoder32");
const admin = new Admin("administrator@gmail.com", "YouWillNeverGessIt");

console.log("");
console.log(user1);
console.log(`Has root access: ${user1.isAdmin()}`);
console.log("=============================");
console.log(admin);
console.log(`Has root access: ${admin.isAdmin()}`);

