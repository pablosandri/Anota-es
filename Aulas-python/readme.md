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

## Input

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

======

1) Faça um programa que receba quatro números inteiros, calcule e mostre a soma desses
números.


num1 = float(input("Digite o primeiro numero"));
num2 = float(input("Mais 1"));
num3 = float(input("Mais 1"));
num4 = float(input("Outro"));
_self = num1 + num2 + num3 + num4;
print(_self)


a = 'Z';b = 'Y'

```python

def e01():
    num1 = int(input("Digite o primeiro numero"));
    num2 = int(input("Mais 1"));
    num3 = int(input("Mais 1"));
    num4 = int(input("Outro"));
    _self = 'Soma = ', num1 + num2 + num3 + num4;
    print(_self);

def e02():
    num1 = int(input("Digite a nota 01"));
    num2 = int(input("Digite a nota 02"));
    num3 = int(input("Digite a nota 03"));
    
    _self = [num1,num2,num3];
    total = len(_self);
    a = 0;
    
    for x in _self:
        a += x;
        
    media = a/total;
    
    print(media);

def e03(num1,num2,num3,pes1,pes2,pes3):
    MPonderada = (num1*pes1+num2*pes2+num3*pes3)/(pes1+pes2+pes3);
    print('Média Ponderada=',MPonderada);
    #10,10,5,5,3,2

    

```







# SQL


CREATE TABLE TESTE(
  CODIGO  NUMBER(5),
  DATA_HOJE DATE,
  NOME VARCHAR2(50),
  
  CONSTRAINT PK_TESTE PRIMARY KEY (CODIGO)
);

CREATE TABLE DEPT(
  DEPTNO NUMBER(2),
  DNAME CHAR(14),
  LOC CHAR(13),
  
  CONSTRAINT PK_DEPT PRIMARY KEY (DEPTNO)
);

CREATE TABLE EMP(
  EMPNO NUMBER(4),
  ENAME VARCHAR2(10),
  JOB CHAR(9),
  MGR NUMBER(4),
  HIREDATE DATE,
  SAL NUMBER(7,2),
  COMM NUMBER(7,2),
  DEPTNO NUMBER,
  
  CONSTRAINT PK_EMP PRIMARY KEY (EMPNO)
);

CREATE TABLE SALGRADE(
  GRADE NUMBER,
  LOSAL NUMBER,
  HISAL NUMBER,
  
  CONSTRAINT PK_SALGRADE PRIMARY KEY (GRADE)
);

CREATE TABLE CUSTOMER(
  CUSTID NUMBER(6),
  NAME VARCHAR(45),
  ADDRESS VARCHAR2(40),
  CITY VARCHAR2(30),
  STATE CHAR(2),
  ZIP CHAR(9),
  AREA NUMBER(3),
  PHONE CHAR(9),
  REPID NUMBER(4),
  CREDITLIMIT NUMBER(9,2),
  COMMENTS VARCHAR2(2000),
  
  CONSTRAINT PK_CUSTOMER PRIMARY KEY (CUSTID)
);

CREATE TABLE ORD(
  ORDID NUMBER(4),
  ORDERDATE DATE,
  COMMPLAN CHAR(1),
  CUSTID NUMBER(6),
  SHIPDATE DATE,
  TOTAL NUMBER(8,2),
  
  CONSTRAINT PK_ORD PRIMARY KEY (ORDID)
  );
 
 CREATE TABLE PRODUCT(
  PRODID NUMBER(6),
  DESCRIPT VARCHAR2(30),
  
  CONSTRAINT PK_PRODUCT PRIMARY KEY (PRODID)
 );
 
 CREATE TABLE PRICE(
  PRODID NUMBER(6),
  STDPRIVE NUMBER(8,2),
  MINPRICE NUMBER(8,2),
  BEGINDATE DATE,
  ENDDATE DATE,
  
  CONSTRAINT PK_PRODUCT PRIMARY KEY (PRODID)
 );
 
 CREATE TABLE ITEM(
  ORDID NUMBER(4),
  ITEMDID NUMBER(4),
  PRODID NUMBER(6),
  ACTUALPRICE NUMBER(8,2),
  QTY NUMBER(8),
  ITEMTOT NUMBER (8,2)
 );


