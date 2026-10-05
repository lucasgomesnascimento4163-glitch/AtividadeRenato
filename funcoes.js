const input = document.getElementById("texto");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado")

botao.addEventListener("click", function() {
    resultado.textContent = input.value;
});

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const butao = document.getElementById("somar");
const result = document.getElementById("resultadoSoma");

butao.addEventListener("click", function () {
    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);
    const resultado = n1 + n2;
    result.textContent = "A soma é: " + resultado;
})

const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const nota4 = document.getElementById("nota4");
const media = document.getElementById("calcular");
const resposta = document.getElementById("resultadoMédia");

media.addEventListener("click", function() {
    const n1 = Number(nota1.value);
    const n2 = Number(nota2.value);
    const n3 = Number(nota3.value);
    const n4 = Number(nota4.value);
    const somando = n1 + n2 + n3 + n4;
    const mediando = somando/4;
    resposta.textContent = "A sua média é: " + mediando;
})

const numero = document.getElementById("numerotabu");
const tabu = document.getElementById("tabuada");
const resultadoTabu = document.getElementById("tabuadaResultado");
const multi1 = document.getElementById("multiplica1");
const multi2 = document.getElementById("multiplica2");
const multi3 = document.getElementById("multiplica3");
const multi4 = document.getElementById("multiplica4");
const multi5 = document.getElementById("multiplica5");
const multi6 = document.getElementById("multiplica6");
const multi7 = document.getElementById("multiplica7");
const multi8 = document.getElementById("multiplica8");
const multi9 = document.getElementById("multiplica9");
const multi10 = document.getElementById("multiplica10");
tabu.addEventListener("click", function() {
    const numeroTabu = Number(numero.value);
    const x1 = numeroTabu * 1;
    const x2 = numeroTabu * 2;
    const x3 = numeroTabu * 3;
    const x4 = numeroTabu * 4;
    const x5 = numeroTabu * 5;
    const x6 = numeroTabu * 6;
    const x7 = numeroTabu * 7;
    const x8 = numeroTabu * 8;
    const x9 = numeroTabu * 9;
    const x10 = numeroTabu * 10;
    resultadoTabu.textContent = "A tabuada do número " + numeroTabu;
    multi1.textContent = numeroTabu + " x 1 = " + x1;
    multi2.textContent = numeroTabu + " x 2 = " + x2;
    multi3.textContent = numeroTabu + " x 3 = " + x3;
    multi4.textContent = numeroTabu + " x 4 = " + x4;
    multi5.textContent = numeroTabu + " x 5 = " + x5;
    multi6.textContent = numeroTabu + " x 6 = " + x6;
    multi7.textContent = numeroTabu + " x 7 = " + x7;
    multi8.textContent = numeroTabu + " x 8 = " + x8;
    multi9.textContent = numeroTabu + " x 9 = " + x9;
    multi10.textContent = numeroTabu + " x 10 = " + x10;
})

let valores = []
const valorInput = document.getElementById("maiorInput");
const adicionar = document.getElementById("adicionar");
const maiorResult = document.getElementById("vetorResult");

adicionar.addEventListener("click", function() {
    let valor = Number(valorInput.value);
    if (valor === -1) {
        if (valores.length === 3) {
            let maior = Math.max(...valores);
            maiorResult.textContent = "O maior valor é: " + maior;
        } else {
            maiorResult.textContent = "Digite 3 valores positivos antes do -1";
        }
        return
    }
    if (valor > 0) {
        valores.push(valor);
        maiorResult.textContent = "Valores digitados: " + valores.join(", ");
    } else {
        maiorResult.textContent = "Digite um valor positivo ou -1"
    }
    if (valores.length === 3) {
        maiorResult.textContent = "Já foram 3 dígitos, adicione o -1"
    }
    valorInput.value = "";
})

let algoritmo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = document.getElementById("impares");
const impar = document.getElementById("impar");
impares.addEventListener("click", function() {
    for (let i = 0; i < algoritmo.length; i++) {
        if (algoritmo[i] % 2 !== 0) {
            impar.textContent += algoritmo[i] + " ";
        }
    }
})

const nome = document.getElementById("nome");
const inverter = document.getElementById("inverter");
const tras = document.getElementById("tras");

inverter.addEventListener("click", function() {
    let texto = nome.value;
    let invertido = "";
    for (let i = texto.length -1; i >= 0; i--) {
        invertido += texto[i];
    }
    tras.textContent = invertido;
    console.log(invertido)
})

let funcionarios = []
const funcionario = document.getElementById("nomeFcnr");
const ano = document.getElementById("idadeFcnr");
const sexo = document.getElementById("sexoFcnr");
const salario = document.getElementById("salarioFcnr");
const cadastro = document.getElementById("cadastro");
const mostrar = document.getElementById("listagem");
cadastro.addEventListener("click", function() {
    let trabalhador = {
        nome: funcionario.value,
        idade: Number(ano.value),
        genero: sexo.value,
        pagamento: Number(salario.value)
    };
    funcionarios.push(trabalhador);
    if (funcionarios.length < 5) {
        mostrar.textContent = "Cadastrado!" + funcionarios.length + "/5"
    } else {
        mostrar.innerHTML = "<p>Funcionários que ganham mais que um salário mínimo:</p><br>";
        for (let i = 0; i < funcionarios.length; i++) {
            if (funcionarios[i].pagamento > 1621) {
                mostrar.innerHTML +=
                    "Nome: " + funcionarios[i].nome +
                    " | Idade: " + funcionarios[i].idade +
                    " | Sexo: " + funcionarios[i].genero +
                    " | Salário: R$" + funcionarios[i].pagamento.toFixed(2) +
                    "<br>"; 
            }
        }
    }
    funcionario.value = "";
    ano.value = "";
    sexo.value = "";
    salario.value = "";
})

const primeiro = document.getElementById("primeiro");
const segundo = document.getElementById("segundo");
const equacao = document.getElementById("equacao");
const realizado = document.getElementById("saida");
const mais = document.getElementById("adicao");
const menos = document.getElementById("subtracao");
const vezes = document.getElementById("multiplicacao");
const dividi = document.getElementById("divisao");
function adicao(a, b) {
    return a + b
};
function subtracao(a, b) {
    return a - b
};
function divisao(a, b) {
    return a / b
};
function multiplicacao(a, b) {
    return a * b
};
equacao.addEventListener("click", function() {
    let n1 = Number(primeiro.value);
    let n2 = Number(segundo.value);
    realizado.textContent = "Operações dos números " + n1 + " e " + n2;
    mais.textContent = "Soma: " + adicao(n1, n2);
    menos.textContent = "Subtração: " + subtracao(n1, n2);
    vezes.textContent = "Multiplicação: " + multiplicacao(n1, n2);
    dividi.textContent = "Divisão: " + divisao(n1, n2);
})

if ("serviceWorker" in navigator) {
 navigator.serviceWorker
 .register("sw.js")
 .then(() => {
 console.log("Service Worker registrado");
 })
 .catch(erro => {
 console.error("Erro no Service Worker:",erro);
 });
}