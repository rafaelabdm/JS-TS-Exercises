// #1 Exercício
const message = "SE UMA IMAGEM VALE MAIS QUE MIL PALAVRAS, ENTÃO DIGA ISSO COM UMA IMAGEM"
// Dado a mensagem acima, me forneca as seguintes respostas
// - Quantidade de caracteres da mensagem.
// - A primeira posição em quem a palavra "MIL" aparece.
// - Troque a palavra "mil" por "TRÊS MIL"
// - Imprima na tela a mesma mensagem trocando as palavras "IMAGEM" por "PALAVRA" e "PALAVRAS" por "IMAGENS"
// - Imprima na tela a expressão "ENTÃO DIGA ISSO COM UMA IMAGEM" utilizando função nativa.
// - Coloque a mensagem acima toda minúscula
// - Imprima a mensagem acima com apenas a primeira letra maiúscula. 

console.log("\n-----------EXERCÍCIO 1-------------\n");

console.log(`Quantidade de caracteres: ${message.length}`);
console.log(`Posição de "MIL": ${message.indexOf("MIL")}`);
let newMessage = message.replace("MIL", "TRÊS MIL");
console.log(newMessage);
newMessage = message.replaceAll("IMAGEM", "PALAVRA").replace("PALAVRAS", "IMAGENS");
console.log(newMessage);
console.log(message.slice(message.indexOf("ENTÃO")));
newMessage = message.toLowerCase()
console.log(newMessage.toLowerCase());
console.log(newMessage.replace(newMessage[0], newMessage[0].toUpperCase()));

// #2 Exercício
const email = "      USUAriO@EmAIL.COM.bR    "
// Um sistema de informação pretende capturar os emails de seus usuários através de um formulário,
//nós como desenvolvedores de backend precisamos garantir que os e-mails cadastrados sejam inseridos
//de forma correta em nosso banco de dados, independente se o usuário cadastrou-o com espaços em branco,
//com letras maiúscula. Diante disso, crie um algoritmo que "limpe" de forma coerente o e-mail acima

console.log("\n-----------EXERCÍCIO 2-------------\n");

let correctEmail = email.toLowerCase().trim();
console.log(correctEmail, correctEmail.length);

// #3 Exercício
const resultadoDaConta = '2' + 3 * 4 + '45' 
// Dado a conta acima, reescreva-a garantindo que o resultado seja 59 e não 21245,
//com está sendo impresso atualmente

console.log("\n-----------EXERCÍCIO 3-------------\n");

let result = Number('2') + 3 * 4 + Number('45');
console.log(result, Number.isInteger(result));

// #4 Exercício 
const umaString = "Hello World"
// Dado a string acima, retorne em uma nova const os valores invertidos. Exemplo: "droW olleH"

console.log("\n-----------EXERCÍCIO 4-------------\n");

let stringArray = umaString.split("");
stringArray = stringArray.reverse();
const newConst = stringArray.join("");
console.log(newConst);


// #5 Exercício
// Dados as variáveis
let varA = "A"
let varB = "B"
let varC = "C"
//Sobreescreva os valores de cada variável (perceba que ela estão declaradas com let) em que,
//varA receba o varB, varB receba o valor de varC e varC receba o valor de varA...
//Não pode colocar os valores manualmente, exemplo: varB = "C".
//Ao escrever o console.log(varA, varB, varC) imprima B, C, A

console.log("\n-----------EXERCÍCIO 5-------------\n");

let temp = varA;
varA = varB;
varB = varC;
varC = temp;
console.log(varA, varB, varC);

// #6 Exercício
const array = [1, 2, 3, 1, 2, 4, 5, 5, 4, 10, 12, 10, 1, 13, 12, 14]
// Dado o array acima:
// Retorne um novo array que retire os resultados duplicados
// Retorne a posição do primeiro número 2 
// Retorne a posição do último número 2
// Crie uma varável que verfique se existe o número 14. Retorne true ou false
// Crie uma variável que retorne uma string do array com os valores separados por traço,
//exemplo: 1 - 2 - 3 - 1 - 2 - 4 - 5 - 5 - 4 - 10 - 12 - 10 - 1 - 13 - 12 - 14

console.log("\n-----------EXERCÍCIO 6-------------\n");

//A set is a collection of items which are unique i.e no element can be repeated
const newArray = [...new Set(array)];
console.log(`New array:`);
console.log(newArray);

let res = array.indexOf(2);
console.log(`Index of 2: ${res}`);

res = array.lastIndexOf(2);
console.log(`Last index of 2: ${res}`);

let isFourteen = array.includes(14);
console.log(`Is there a 14? ${isFourteen}`);

let arrayinString = array.join(" - ");
console.log(arrayinString);

// #7 Exercício
const arr1 = ["Fev", "Mar", "Abr", "Mai", "Jun"]
const arr2 = ["Jul", "Ago", "Set", "Out", "Nov"]
// Concatene os arrays acima em um novo array
// Insira na última posição do novo array a string "Dez"
// Insira na primeira posição do novo array a string "Jan"
// Crie uma variável que mostre o tamanho do novo array.

console.log("\n-----------EXERCÍCIO 7-------------\n");

const bigArray = [...arr1, ...arr2];
bigArray.push("Dez");
bigArray.unshift("Jan");
const newLength = bigArray.length; 
console.log(bigArray, "\nTamanho do array:", newLength);


// #8 Exercício
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// Dado o array acima, utilizando o laço de repetição (for ou while)
// Crie um novo array que receba os valores pares
// Crie um novo array que receba os valores ímpares
// Mostre aos usuários quantos números pares e quantos números ímpares existem nesses dois novos arrays.
// Crie um novo array que receba os números multiplicados por 3.

console.log("\n-----------EXERCÍCIO 8-------------\n");

const evenArray = [];
const oddArray = [];

for(i = 0; i < numeros.length; i++){
   if (numeros[i] % 2 == 0)
      evenArray.push(numeros[i]);
   else
      oddArray.push(numeros[i]);
}

const arrayTimesTree = [];
for(i = 0; i < numeros.length; i++){
   arrayTimesTree.push(numeros[i] * 3);
}

console.log(`São ${evenArray.length} números pares e ${oddArray.length} números ímpares`);
console.log(`Array original * 3:`);
console.log(arrayTimesTree);


// #9 Exercício
// Utilizado o laço de repetição (for ou while)
// Crie uma variável que receba um número e imprima na tela sua tabuada
// Resultado esperado:
/*
   variável * 1 = resultado
   variável * 2 = resultado
   variável * 3 = resultado
   variável * 4 = resultado
   variável * 5 = resultado
   variável * 6 = resultado
   variável * 7 = resultado
   variável * 8 = resultado
   variável * 9 = resultado
   variável * 10 = resultado */

console.log("\n-----------EXERCÍCIO 9-------------\n");

const table = 2;
for(i = 1; i <= 10; i++){
   console.log(`${table} * ${i} = ${(table * i)}`);
}

// #10 Exercício
// Implemente uma função que receba uma string e informe ao usuário se é um palíndromo ou não.
// Certifique-se que o usuário pode escrever letras maiúsculas, trate essa questão.
// Palíndromo = Frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa”
// Exemplos de palíndromos: mirim, radar, ralar, reger, socos, sós, osso, Ana, radar, Renner

console.log("\n-----------EXERCÍCIO 10-------------\n");

function isPalindrome(word)
{
   word = word.toLowerCase();
   let reverseWord = word.split('').reverse().join('');
   return (word === reverseWord);
}

let word = "Renner";
console.log(isPalindrome(word));

// #11 Exercício
//calculaTodos(1, 5) // retorna a soma de 1 + 2 + 3 + 4 + 5 é 15
// Implemente a função acima que recebe dois números e retorne a soma dos números
//passados nos parâmetros, garanta que o número passado no primeiro parâmetro seja
//menor que o número do segundo parâmetro, mostre erro ao usuário caso essa condição seja verdadeira.

console.log("\n-----------EXERCÍCIO 11-------------\n");

function rangeSum(num1, num2)
{
   let sum = 0;

   if (num1 > num2)
      return ("error");
   for(i = num1; i <= num2; i++){
      sum += i;
   }
   return (sum);
}

console.log(rangeSum(1, 5));


// #12 Exercício
// removaDoArray([10, 20, 30, 40], 20) // Deve remover 20 e retornar [10, 30, 40]
// Implemente a função acima que recebe um array no primero parâmetro, e um número no segundo parâmetro.
// Deve remover "20" e retornar [10,30,40], Caso o segundo parâmetro não exista no array do primeiro parâmetro,
// informe ao usuário.

console.log("\n-----------EXERCÍCIO 12-------------\n");

function removeOfArray(array, remove){
   array.splice(array.indexOf(remove), 1);
   return (array);
}

console.log(removeOfArray([10, 20, 30, 40], 20));

// #13 Exercício
const notas = [7.5, 8, 3.7]
// Dado as notas acima, utilizando o laço de repetição for, mostre os seguintes valores em novas variáveis:
// - Calcule a média de todas as notas
// - A maior nota
// - A menor nota
// - Escreva uma condição que, se a média for maior ou igual a 6.5, escreva "Aluno aprovado", caso a condição não seja verdadeira, escreva "Aluno reprovado"

console.log("\n-----------EXERCÍCIO 13-------------\n");

let average = 0;
let greatest = 0;
let smallest = 10;

for(i = 0; i < notas.length; i++){
   average += notas[i];
   if (notas[i] < smallest)
      smallest = notas[i];
   else if (notas[i] > greatest)
      greatest = notas[i];
}
average = parseFloat((average / notas.length).toFixed(1));
console.log(average)
if (average >= 6.5)
   console.log("Aluno aprovado");
else
   console.log("Aluno reprovado");

// #14 Exercício 
//repitaString('ola', 4) // returns 'olaolaolaola
// implemente a função acima que simplesmente repita a string dado um número de vezes
// Se inserir dados de tipos incorretos como, "number" no primeiro parâmetro ou "string" no segundo parâmetro,
//a função retorne a mensagem de erro ao usuário

console.log("\n-----------EXERCÍCIO 14-------------\n");

function repeatString(string, times){
   let ret = "";

   if (typeof(string) !== "string" || typeof(times) !== "number")
      return ("error");
   for(i = 0; i < times; i++){
      ret = ret.concat(string);
   }
   return (ret);
}

console.log(repeatString("ola", 4));

// #15 Exercício
// Precisamos fazer o controle de acesso de entrada de clientes de um teatro, para isso
// temos que criar um sistema que atenda os seguintes requisitos:
// 1) Crianças com menos de 2 anos não podem entrar, mesmo que acompanhadas dos pais
// 2) Crianças com 12 anos só podem entrar acompanhadas dos pais
// 3) Pessoas acima de 60 anos ganham desconto.

// Dado os requisitos acima, crie uma função que receba dois parâmetros, 
   // 1º Parâmetro recebe a idade
   // 2º Parâmetro recebe um boolean que informa se está com os pais ou não

//Modelos de respostas:
   // acessoTeatro(2, true) // "Pessoas com menos de 2 anos não podem entrar no Teatro"
   // acessoTeatro(11, true) // "Entrada Liberada"
   // acessoTeatro(11, false) // "Menores de 12 anos não podem entrar no Teatro"
   // acessoTeatro(11) // "Menores de 12 anos não podem entrar no Teatro"
   // acessoTeatro(65) // "Entrada liberada, desconto fornecido"
   // acessoTeatro(21) // "Entrada liberada"

console.log("\n-----------EXERCÍCIO 15-------------\n");

function theaterAccess(age, parents){
   if (parents === undefined)
      parents = false;
   if (age === undefined || typeof(age) !== "number" || typeof(parents) !== "boolean")
      return ("Erro");
   if (age <= 2)
      return ("Pessoas com 2 ou menos anos não podem entrar no Teatro");
   else if (age <= 12){
      if (parents)
         return ("Entrada Liberada");
      else
         return ("Menores de 12 anos não podem entrar no Teatro");
   }
   else if (age >= 60)
      return ("Entrada liberada, desconto fornecido");
   else
      return ("Entrada liberada");
}

console.log(theaterAccess(2, true));
console.log(theaterAccess(11, true));
console.log(theaterAccess(11, false));
console.log(theaterAccess(11));
console.log(theaterAccess(65));
console.log(theaterAccess(21));

// #16 Exercício
const empresas = [
   { nome: "Empresa A", ramo: "financeiro", anoFundacacao: 1995 },
   { nome: "Empresa B", ramo: "alimentício", anoFundacacao: 2000 },
   { nome: "Empresa C", ramo: "financeiro", anoFundacacao: 2005 },
   { nome: "Empresa D", ramo: "educação", anoFundacacao: 1998 },
   { nome: "Empresa E", ramo: "alimentício", anoFundacacao: 1985 },
   { nome: "Empresa F", ramo: "financeiro", anoFundacacao: 1981 },
   { nome: "Empresa G", ramo: "tecnologia", anoFundacacao: 2006 },
   { nome: "Empresa H", ramo: "educação", anoFundacacao: 1986 },
   { nome: "Empresa I", ramo: "tecnologia", anoFundacacao: 1990 },
]
// Dado o array de objetos acima
// Filtre em um novo array apenas as empresas do ramo "financeiro"
// Filtre em um novo array apenas as empresas do ramo "educação" e "tecnologia"
// Filtre em um novo array apenas as empresas que foram fundadas nos anos 80 e 90
// Filtre em um novo array as empresas que foram fundadas entre 1998 e 2005
// Filtre em um novo array a soma de todos os anos de fundação de todas as empresas

console.log("\n-----------EXERCÍCIO 16-------------\n");

function isRightField (companies, field){
   return (companies.filter((company) => company.ramo === field));
}

function isRightYear (companies, year1, year2){
   return (companies.filter((company) => company.anoFundacacao >= year1 && 
   company.anoFundacacao < year2));
}

let financeArray = isRightField(empresas, "financeiro");
console.log("Empresas do ramo financeiro:");
console.log(financeArray);

let educationAndTecArray = isRightField(empresas, "educação");
let tecArray = isRightField(empresas, "tecnologia");
educationAndTecArray = [...educationAndTecArray, ...tecArray];
console.log("\nEmpresas dos ramos da educação e tecnologia:");
console.log(educationAndTecArray);

let companies8090 = isRightYear(empresas, 1980, 2000);
console.log("\nEmpresas fundadas nos anos 80 e 90:");
console.log(companies8090);

let companies9805 = isRightYear(empresas, 1998, 2006);
console.log("\nEmpresas fundadas entre os anos 1998 e 2005:");
console.log(companies9805);

let sum = 0;

for(i = 0; i < empresas.length; i++){
   sum += empresas[i].anoFundacacao;
}
console.log(`\nSoma dos anos de fundação: ${sum}`);


/*
// #17 Exercício
   // Esse último exercício vamos fazer um sistema completo, vou elaborar com mais calma e envio a vocês até quarta-feira

  */