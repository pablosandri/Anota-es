<img src="https://pablosandri.github.io/sandbox/logo_lockup_analytics_icon_horizontal_black_2x.png" alt="Smiley face" height="100" width="300">

Área - Digital Analytics
Última atualização: 21/12/2018

#  - Catálogo

Em caso de dúvidas, entrar em contato com: [pablosandri@outlook.com](mailto:pablosandri@outlook.com)

## Índice
- [Objetivo](#objetivo)
- [Overview e Descrições Técnicas](#overview-e-descrições-técnicas)
    - [Google Tag Manager](#google-tag-manager)
    - [Camada de dados](#camada-de-dados-datalayer)
    - [Atributos HTML](#atributos-html-data-attributes)
    - [Eventos](#eventos)
- [Implementacao](#Implementacao)
    - [Botão Assistente de compra](#click-no-botão-assistente-de-compra)
    - [Botão Mostre os Melhores Presentes](#clique-no-botão-mostre-os-melhores-presentes)
    - [Enviar e-mail](#click-enviar-o-e-mail)

# Objetivo
Este documento tem como objetivo instruir a implementação do Google Tag Manager e a camada de dados para utilização de recursos de monitoramento do Google Analytics, referentes ao [Wireframe](https://app.zeplin.io/projects)

# Overview e Descrições Técnicas

## Google Tag Manager

É uma ferramenta da Google onde são inseridas pequenas instruções javascript com a finalidade de estruturar a coleta dados e unificar diversos fornecedores de tags terceiros sem a necessidade de várias implementações complexas de hardcode do projeto. 

- Instalação

  Para instalar o  Google Tag Manager é preciso que o desenvolvedor inclua os códigos abaixo no HTML do site, em todas as páginas do site proposto. Caso o site possua algum template comum que é inserido em todas as páginas, também pode ser utilizado.

Cole o código abaixo após a tag `<head>` do site:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WBQFHHR');</script>
<!-- End Google Tag Manager -->
```

Cole o código abaixo, após a tag `<body>` do site:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBQFHHR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## Camada de dados (DataLayer)

É um array de objetos javascript utilizado pelo Google Tag Manager para receber em seus atributos dados importantes do site.
Para implementar o dataLayer no site, o desenvolvedor pode utilizar formas diferentes para preencher os dados. Essas formas são dependentes da ação estabelecida na documentação e também do nível da interação. 

- Instalação

Inserir a camada de dados antes do snippet de instalação do Google Tag Manager. Exemplo:
    
```html
<script>
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'atributo1': 'valor1',
    'atributo2': 'valor2'
  });
</script>
```

## Atributos HTML (Data Attributes)

São atributos customizados inseridos nos elementos HTML da página que permite a inclusão de dados adicionais.

- Instalação

1. Elementos de link: ```<a href="..." class="minha_classe">Link</a>```

Elementos do tipo link que foram mapeados, precisam receber a classe **gtm-link-event** e os data attributes em sua estrutura.

```html
<a href="http://www.meudominio.com.br/page2"
  class="minha_classe gtm-link-event"
  data-gtm-event-category="exemplo valor categoria"
  data-gtm-event-action="exemplo valor acao"
  data-gtm-event-label="exemplo valor rotulo">Texto do link</a>
```

2. Elementos comuns: ```<div class="minha_classe">Elemento</div>```

Todos os elementos comuns do html que não são links e que foram mapeados, precisam receber a classe **gtm-element-event** em sua estrutura.
    
```html
<div class="minha_classe gtm-element-event" 
  data-gtm-event-category="exemplo valor categoria"
  data-gtm-event-action="exemplo valor acao"
  data-gtm-event-label="exemplo valor rotulo">Texto do elemento</div>
```

## Eventos

São estruturas de dados que muitas vezes são consideradas como conversões ou micro conversões e servem para identificar as interações do usuário que foram mapeadas para coleta. Esses eventos podem ser implementados através de Data Atributos ou Camada de Dados conforme descrito acima.

- Conversões (KPI’s) 

São os principais indicadores (métricas) do site e são utilizadas para acompanhar os resultados, por exemplo: cadastro de lead’s, transações.
As conversões geralmente serão implementadas através de Camada de Dados para garantir uma maior qualidade dos dados coletados.

- Micro-conversões (Interações)
São métricas secundárias utilizadas para entender as interações dos usuários até chegarem às conversões principais.
As micro-conversões geralmente serão implementadas através de Data Atributos.

---

# Implementação

A documentação foi descrita para algumas áreas especificas do site.

> Os valores entre colchetes `[]` são variáveis, devem ser preenchidas conforme a tabela de `chave e descrição`.

> Todos os valores enviados ao Google Analytics devem estar sanitizados, ou seja, sem espaços, acentuação ou caracteres especiais.

> *Obs:* Caso não houver algum valor preencher com `undefined`.

#### Click nos botões

Os botões devem ter em sua estrutura `html` a classe `gtm-link-event` se for um link `<a>` ou `gtm-element-event` se o elemento não for um link `<a>`, conforme já detalhado acima e os data-attributes `data-gtm-event-category`, `data-gtm-event-action` e `data-gtm-event-label`. 

```html
<!-- Use se o elemento for um link -->
<a href="#"
  class="gtm-link-event" 
  data-gtm-event-category="[link-externo]"
  data-gtm-event-action="[click]"
  data-gtm-event-label="[nome-do-botao ou destino]"
>Link</a>

<!-- Use se o elemento não for um link -->
<i class="gtm-element-event" 
  data-gtm-event-category="[link-externo]"
  data-gtm-event-action="[click]"
  data-gtm-event-label="[nome-do-botao ou destino]"
>Botão</i>
```
