// #1 - Exercício
// Crie uma variável nome e substitua o texto abaixo com o valor da variável, faça a substituição
//com pelo menos duas formas, com vírgula, com o operador + ou com template string (``)
// console.log("NOME nasceu em 2000");
// console.log("Em 2019 NOME começou a programar");
// console.log("Em 2020 NOME ingressou na faculdade");
// console.log("Em 2022 como programador, NOME conquistou seu primeiro emprego");

console.log("----------Exercício 1----------\n");

let nome = "Rafaela";

console.log(`${nome} nasceu em 2000`);
console.log("Em 2019 " + nome + " começou a programar");
console.log("Em 2020", nome, "ingressou na faculdade");
console.log(`Em 2022, como programador, ${nome} conquistou seu primeiro emprego`);

// #2 - Exercí­cio
// - Declare uma const meuAnodeNascimento que recebe o ano de seu nascimento Ex: 2001
// - Declare uma const anoAtual que recebe o ano atual Ex: 2022
// - Exiba as constantes meuAnodeNascimento e anoAtual uma ao lado da outra no console.log()
// - Declare uma variável chamada minhaIdade que recebe anoAtual subtraÃ­do a meuAnodeNascimento.
//Imprima o valor no console. (Não digite o valore da variável minhaIdade de forma manual)
// - Declare uma variável chamada numeroCinco, que recebe 5 e:
      // - Descomente o console.log abaixo na terceira linha, Os números não devem ser digitados manualmente;
      // 1) Substitua a palavra "valor1" pelo anoAtual somado à  5;
      // 2) Substitua a palavra "valor2" pela minhaIdade somada à  5;
      // 3)console.log(`Em ${valor1}, estarei com ${valor2} anos.`)


console.log("\n----------Exercício 2----------\n");


const meuAnodeNascimento = 1997;
const anoAtual = 2022;
console.log(meuAnodeNascimento, anoAtual);

let minhaIdade = anoAtual - meuAnodeNascimento;
console.log(`Minha idade: ${minhaIdade}`);

let numeroCinco = 5;
console.log(`Em ${anoAtual + numeroCinco}, estarei com ${minhaIdade + numeroCinco} anos.`);


/* 3# - ExercÃ­cio
/* 
  Aqui no Brasil a temperatura é medida em Celsius. Porém, você foi contratado para uma empresa 
americana para trabalhar com programação JavaScript e agora deverá utilizar Fahrenheit no seu novo lar. 
Crie uma calculadora que faça essa conversão e escreva no terminal a seguinte mensagem.

  RETORNO:
  "A temperatura de **VARIAVEL_EM_CELSIUS** °C é igual a Fahrenheit: **VARIAVEL_QUE_FAZ_A_CONTA** °F"
  
  OBS:
  1) Fórmula para o cálculo ||  TC/5 = (TF – 32)/9 || TF = (TC / 5) * 9 + 32
  2) Para ver se seu algoritmo está correto, utilize o site https://www.metric-conversions.org/pt-br/temperatura/celsius-em-fahrenheit.htm
*/

console.log("\n----------Exercício 3----------\n");

let temperaturaCelsius = 20;
let temperaturaFehrenheit = (temperaturaCelsius / 5) * 9 + 32;

console.log(`A temperatura de ${temperaturaCelsius} °C é igual a Fahrenheit: ${temperaturaFehrenheit} °F`)

/* 4# - ExercÃ­cio
Crie uma calculadora de IMC que imprima a frase abaixo. Onde tem **___** substitua por variáveis.

  RETORNO ESPERADO:
  "
  **NOME** tem **IDADE** anos, pesa **KILOS** kg
  tem **ALTURA** de altura e seu IMC Ã© de **IMC**
  **NOME** nasceu em **ANO_NASCIMENTO**
  "
  OBS:
    1 - Crie variáveis(let/const) para nome, idade, peso, altura, imc e ano de nascimento
    2 - Para o resultado de altura utiliza em metros, exemplo: 1.63 | 1.85 | 1.76 e etc...
    3 - O cálculo do IMC é peso / (alturaEmMetros * alturaEmMetros)
*/

console.log("\n----------Exercício 4----------\n");

let nomeEx4 = "Rafaela";
let anoDeNascimento = 1997;
let idade = 25; //anos
let altura = 1.63; //metros
let peso = 52; //kilos
let IMC = peso / (altura * altura);

console.log(`${nomeEx4} tem ${idade} anos, pesa ${peso} kg\n\
tem ${altura} de altura e seu IMC é de ${IMC.toFixed(2)}\n\
${nome} nasceu em ${anoDeNascimento}`);

/* 5# - ExercÃ­cio
/* 
  Hoje em dia no Brasil os combustÃíveis estão bem caros, diante disso,
  precisamos desenvolver um novo sistema para os carros em que o usuário 
  digita o valor que ele tem em mãos para o abastecimento em um app e o 
  computador de bordo diz a ele quantos litros ele vai colocar de combustível e 
  quantos KM ele poderá percorrer com esse combustí­vel, queremos que o usuário 
  tenha a informação por tipo de combustí­vel, para que ele possa tomar a melhor 
  decisão de qual combustí­vel escolher.

  Escreva no console:
  "COLOCANDO R$**VALOR_** é possível:"
  "GASOLINA: Percorrer **___**KM e colocar **___** litros"
  "  ÃLCOOL: Percorrer **___**KM e colocar **___** litros"

  OBS:
   - Carros andam 10.2KM com gasolina
   - Carros andam 9.8KM com alcool
   - Os valores por litro atuais nos postos estÃ£o:  
        - GASOLINA = R$5.966
        - ÃLCOOL   = R$4.632
*/

console.log("\n----------Exercício 5----------\n");

let dinheiroDisponivel = 250; //reais

//gasolina
let gasolinaL = dinheiroDisponivel / 5.966;
let gasolinaKM = gasolinaL * 10.2;

//alcool
let alcoolL = dinheiroDisponivel / 4.632;
let alcoolKM = alcoolL * 9.8;

console.log(`Colocando R$${dinheiroDisponivel.toFixed(2)} é possível:\n\
GASOLINA: percorrer ${gasolinaKM} KM e colocar ${gasolinaL} litros\n\
ÁLCOOL: percorrer ${alcoolKM} KM e colocar ${alcoolL} litros`);