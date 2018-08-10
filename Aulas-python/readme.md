## Aula 1

1) Atribua os valores 550 para a variável distância e o valor 7 para a variável tempo. Calcule a
velocidade média de um carro usando os valores atribuídos as variáveis distância e tempo.
Mostre uma mensagem informando a velocidade média encontrada.

```python

distancia = 100
tempo = 1

velMed = round(distancia/tempo)
print(velMed, 'km/h')

```

2) Resolva passo a passo a equação: 5 + 2 x 8 : (7 – 4) seguindo a precedência dos operadores
matemáticos e atribuindo os valores parciais a vaiáveis. Mostre uma mensagem com o
resultado encontrado.

```
a = 5
b = 2*8
c = (7-4)
d = b/c

total = a + d


```

3) Atribua os valores 3 e 17 a variáveis. Calcule usando as variáveis quantos bolos podem ser
feitos com 17 ovos se um bolo precisa de 3 ovos. Mostre somente a parte inteira do valor
encontrado sem a parte fracionária.

```
bolo = 3
ovos = 17

quantidade = rount(ovos/bolo)

```


4) Atribua os valores 4 e 3 a variáveis e calcule, usando essas variáveis, quantos pontos tem
um time que venceu 4 jogos (3 pontos) e empatou 3 jogos (1 ponto). Mostre o numero de
pontos calculado.

```
x = 4
y = 3
```

5. Comando de entrada de dados em um programa
O comando input é utilizado no Python 3 para entrada de dados no programa. Esse comando
somente recebe entrada de STRINGS. Para utilizar valores numéricos é necessário transformar
os valores em inteiro (int) ou real (float). Digite as linhas abaixo e verifique como usar o input e
como fazer a transformação da string em inteiro ou real.


1) Comando input para STRINGS: basta atribuir diretamente o valor digitado a uma variável do
programa usando uma mensagem para explicar ao usuário o que digitar. Digite as linhas a
seguir:
a) nome = input(“Digite seu nome: ”)
nome
sobrenome = input(“Digite seu último sobrenome: ”)
sobrenome
print(“Nome e sobrenome digitados:”, nome, sobrenome)

b) cidade = input(“Digite o nome de uma cidade: “)
transporte = input(“Digite um meio de transporte”)
frase = “a cidade é “ + cidade + “ e o meio de transporte é “ + transporte
frase
Escola de Engenharias, Tecnologia e Informação
Tecnólogo em Gestão da Tecnologia da Informação
2) Comando input para números: a atribuição é feita da mesma maneira que para a string,
mas é necessário transformar o valor em inteiro ou real durante ou depois da atribuição.
Digite as linhas a seguir, veja os erros que acontecem e como corrigi-los.
a) numero = input(“Digite um número inteiro: “)
numero
soma = numero + 10
numero = int(numero)
numero
soma = numero + 10
soma
outroNum = int(input(“Digite outro número: “))
outroNum
multiplica = numero * outroNum
multiplica
divisao = numero / outro
divisao
b) valor = input(“Digite um número real usando ponto (.): “)
valor
valor * 2.45
valor = float(valor)
valor * 2.45
juros = float(input(“digite a taxa de juros: ”))
valorAtual = valor * juros
valorAtual
