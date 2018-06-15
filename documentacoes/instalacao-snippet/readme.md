![CI&T](https://pablosandri.github.io/sandbox/ciandt.png)

# CI&T -  Feirão de Renegociação

## Homologação da Camada de dados

Última atualização: 16/01/2018

Em caso de dúvidas, entrar em contato com: [psandri@ciandt.com](mailto:psandri@ciandt.com)

### Objetivo

Esse documento descreve os detalhes apara correção da camada de dados do site [Renegociação](https://homologacaorenegocie.pgd.to/index.php).

### Correções

#### Page Name dinâmico

Nomear as páginas dinamicamente de acordo com o usuário. 

Exemplo:

- Quando o usuário for PF, o pagename seguiria como  IT:LG:**PF**:Renegociacao..."

- Quando o usuário for NCC, o pagename seguiria como  IT:LG:**NCC**:Renegociacao..."


#### Atendimento

Descrição: Disparar as informações no dataLayer no momento do clique dos botões de atendimento, Facebook e Chat.


 ```javascript
window.analyticsData = {
    site: {
        "nome": "IT",
        "ambiente": "LG",
        "negocio": "NCC",
    },
    custom: {
    	"event": "BTN:NCC:RenegociacaoHub:Atendimento:SMS"        // Novo Atributo
    },
    page: {
        "secao": "Renegociacao",
        "subsecao1": "Hub",
        "url": "https://homologacaorenegocie.pgd.to",
        "nome": "IT:LG:NCC:Renegociacao:Hub:Home"
    },
    visitor: {
        "tipoCliente": "Nao Correntista"
    },
    rule: "pageLoad"
};

_satellite.track('click_attendance_action'); //Executar a função

	var sanitizeToCamelCase = function(str, only_word_character) {
	  if(typeof str !== 'string') return ''
	   str = str
	       .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
	       .replace(/\s/g, '')
	       .replace(/^(.)/, function($1) { return $1.toUpperCase(); })
	       .replace(/\s+/g, ' ')
	       .replace(/\s+/g, '')
	       .replace(/[áàâãåäæª]/g, 'a')
	       .replace(/[éèêëЄ€]/g, 'e')
	       .replace(/[íìîï]/g, 'i')
	       .replace(/[óòôõöøº]/g, 'o')
	       .replace(/[úùûü]/g, 'u')
	       .replace(/[ç¢©]/g, 'c')

	       if (only_word_character) {
	         str = str
	          .replace(/^\d+|\d+$/g, '')
	          .replace(/\d+/g, '_')
	          .replace(/_+/g, '_')
	  }

	  return str
	}
	```


 ```

| CHAVE | TIPO | DESCRIÇÃO |
| :---- | :--: | :-------- |
| event | string | Identificador único do botão, valores esperados `BTN:NCC:RenegociacaoHub:AtendimentoMessenger` ou `BTN:NCC:RenegociacaoHub:AtendimentoChat` |


Descrição: Disparar as informações no dataLayer no callback da função de atendimento, no momento do clique do botão `Enviar` do atendimento via E-mail e Mensagem por Celular.

```javascript
window.analyticsData = {
    site: {
        "nome": "IT",
        "ambiente": "LG",
        "negocio": "NCC",
    },
    custom: {
    	"event": "BTN:NCC:RenegociacaoHub:AtendimentoE-mailEnviar"        // Novo Atributo
    },
    page: {
        "secao": "Renegociacao",
        "subsecao1": "Hub",
        "url": "https://homologacaorenegocie.pgd.to",
        "nome": "IT:LG:NCC:Renegociacao:Hub:Home"
    },
    visitor: {
        "tipoCliente": "Nao Correntista"
    },
    rule: "pageLoad"
};

_satellite.track('click_attendance_action'); //Executar a função 
```

| CHAVE | TIPO | DESCRIÇÃO |
| :---- | :--: | :-------- |
| event | string | Identificador único do botão, valores esperados `BTN:NCC:RenegociacaoHub:AtendimentoE-mailEnviar` e `BTN:NCC:RenegociacaoHub:AtendimentoMensagemPorCelularEnviar`. |


#### Confirmar Renegociação

Descrição: Disparar as informações no dataLayer no callback da função de atendimento, no momento do clique do botão `Enviar` do atendimento via E-mail e Mensagem por Celular.
