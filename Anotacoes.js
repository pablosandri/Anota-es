//Uteis
https://pablosandri.github.io/sandbox/android-dot-com/index.html?#screens
http://lucidada-brasil.github.io/clientes/template/naming-convention/
https://pablosandri.github.io/sandbox/documentacoes/camada-de-dados/
http://lucida-brasil.github.io/clientes/template/naming-convention/
http://desenvolvimentoparaweb.com/javascript/delegacao-de-evento-event-delegation-javascript/
https://github.com/lunametrics/youtube-google-analytics/blob/master/src/lunametrics-youtube.gtm.js
https://chrome.google.com/webstore/detail/launch-and-dtm-switch/nlgdemkdapolikbjimjajpmonpbpmipk
https://www.kirupa.com/html5/event_capturing_bubbling_javascript.htm
https://marketing.adobe.com/resources/help/en_US/sc/implement/query_parameters.html
https://marketing.adobe.com/resources/help/en_US/mobile/android/acquisition.html

ga('send', 'event', 'category ', 'click,', 'descrição', dimension5)
ga('send', 'dimension5');

  window.dataLayer = window.dataLayer || [];
  dataLayer.paraush({
    'dimension1' : 'Estado',
    'dimension2' : 'Regiao',
    'dimension3' : 'Cidade',
    'dimension4' : 'Grupo'
  });
    
// Usar essa função para não afetar nenhuma variavel ou algo do tipo do site.
;(function() {

}());

// Ga jQuery

   //jQuery
    $('div .mdl-card').not('.something-else').on('mousedown', function() {
        var nomeElemento = $(this).find('h3').text()
        ga('send', 'event', 'div do post', 'click', nomeElemento)
    })

     $('a .mdl-navigation__link .mdl-typography--text-uppercase').on('mousedown', function() {
        var nomeElemento = $(this).find('h3').text()
        console.log('send', 'event', 'div do post', 'click', nomeElemento)
    })


     $('div.mdl-layout__header-row').find('a,i').on('mousedown', function() {
        var nomeElemento = $(this).text()
        ga('send', 'event', 'menu_header', 'click', nomeElemento)
        // testar console.log ('send', 'event', 'menu_header', 'click', nomeElemento)
    })
    ga('')
    ga('send', 'event', 'div do post', 'click', nomeElemento)

    $('div.mdl-cell.mdl-cell--3-col.mdl-cell--4-col-tablet.mdl-cell--4-col-phone.mdl-card.mdl-shadow--3dp').find('a').on('mousedown', function () {
        var NameElem = $(this).parents().eq(1).find('h4').text().
        NameElem = lucida.string.sanitize(NameElem)
        ga('send', 'event', 'div do post', 'click', NameElem)
    })

    /*
    this = elemento que você clicou.
    parents() os parents do elemento html.
    eq () a posição que o elemento que você quer.
    find() buscar elemento dentro de um elemento.
    siblings() pegar elemento primos ou de da estrutura html
    text() pegar o txt.
    */
    // GA JSnb 

    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName('mdl-card')[i].addEventListener('mousedown', function() {
            var nomeElemento = this.getElementsByTagName('h3')[0].textContent

            // console.log(nomeElemento);

            ga('send', 'event', 'div do post', 'click', nomeElemento)
        })
    }



     document.getElementsByClassName('logo-font android-create-character')[0].getElementsByTagName('a')[0].addEventListener ('mousedown', function () {
       ga('send', 'event', 'create your', 'click', 'create android')
   });

   //

   var element = document.getElementsByClassName('android-screen')
    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener('mousedown', function() {
            var nomeElemento = this.getElementsByTagName('a')[1].textContent

            // console.log(nomeElemento);
            ga('set', 'dimension1', '[Variável titulo-banner}}');
            ga('send', 'event', 'div do post', 'click', nomeElemento)
            ga('set', 'dimension1', undefined);
        })
    }

    //cookie
    // AJAX


      function() {
        var banner = $('.logo-font.android-slogan').text()
        return banner;
      }


       function() {
        var banner = $('.logo-font.android-slogan').text()
        banner = banner.replace('R$','').replace(',','.').trim()
        return banner;
      }


    console.log( '[Variável titulo-banner}}') // variavel, macro

    // Aprendendo Cookie //


    //  lucida.cookie.get('hussuh') =   pegar o valor de um cookie
    //  lucida.cookie.set('nome','valor')

    lucida.cookie.set('site','versão1.0')
    var teste = lucida.cookie.get('site1')
     if (teste === lucida.cookie.get('site1')) {
     	 console.log('set', 'versão_do_site', 'teste')
     }

    // Fim cookie

   	// Datalayer//
   	É um array onde o back-end pode colocar infos para o front, o proprio GTM que cria,

   	//Customdata//

		Customdata é um objeto, onde os devs coloca infos como, produto, cidade e etc.


			var customData = {
        site: {
            isMobile: true
        },
        page: {
            template: "home",
            department: "",
            category: "home",
            subcategory: "",
            productviewed: [],
            promotions: []
        },
        session: {
            logged: true,
            user: {
                age: 21,
                gender: "M",
                type: "PF",
                country: "BR",
                city: "caieiras",
                state: "sp"
            }
        }
    };

    // como usar a customdata

    console.log('set' 'dimension1' customdata.session.user.age)

		Objeto {}

		Array []

		// data//
		elemento HTML data-produto={produdoid,cor,tals}

		$('class').data().attrr()



			$('div.android-screen').find('a').on('mousedown', function() {
        var nomeElemento = $(this).find('a').eq(1).text()
        ga('set', 'dimension1', '[Variável titulo-banner}}');
        ga('send', 'event', 'menu_header', 'click', nomeElemento)
    	})

		// !important replace tratando data3

		valor = $(this).parent().siblings('.panel-body').find('.valor-new').text().replace('R$','').replace(',','.').trim()



		// anotações de url

		acessar a url: document.location.pathname
		acessar o parametro ?: document.location.search

		ga('send', 'pageview', pathname);

		// pegat tecla enter //

    // Buscar completa click, enter e change
    //Atualização v1
 ;(function() {
        var searchInputs = $('.input-primary.search-field')
        var buscar = $('.btn.btn-radius.btn-primary')

        function e (a){
          if (a === true) {
            var ac = 'topo:click'
          } else if (a === false) {
            var ac = 'topo:preencheu'
          }
          var category  = 'institutoportoseguro:resultado_busca'
          var action    =  ac
          var label     = 'busca:' + $('.input-primary').val().trim()
          var label     = lucida.string.sanitize(label)
          ga('send', 'event', category, action, label)
        }

          buscar.on('mousedown', function(){
            e(true)
          })

          for (var i = 0; i < searchInputs.length; i++){
           searchInputs[i].addEventListener('keydown', function(evt) {
            if (evt.keyCode == 13) {
             e(false)
            }
           })
          }

          searchInputs.on('change',function(){
           e(false)
          })
      }());




	// Disparo de evento no GA via templete

	$('div .content-footer a').not('.logo-footer').on('mousedown', function() {
	        var self = $(this);
	        var nomeElemento = self.attr('href');
	        dataLayer.push({
			event: 'ga.event',
			'eventCategory'  : 'menu-superior',
			'eventAction'	 : 'clique',
			'eventLabel'	 : nomeElemento
	  })
	    });

			//
			;(function () {
			  var testeCookie = lucida.cookie.get('chaordic_testGroup')
			  if (testeCookie.match(/BUSCA_AB/g) != null && testeCookie.match(/BUSCA_AB/g).length > 0 ) {
			    var dimension18 = "busca atual"
			    var dimension18 = lucida.string.sanitize(dimension18)
			    ga('set', 'dimension18', 'dimension');
			  } else if (testeCookie.match(/BUSCA_CD/g) != null && testeCookie.match(/BUSCA_CD/g).length > 0  ) {
			    var dimension18 = "busca intersect"
			    var dimension18 = lucida.string.sanitize(dimension18)
			    ga('set', 'dimension18', 'dimension');
			    }
			})();

			//
			//dimensão do cokkie 'chaordic_testeGroup'
			;(function() {
				var subdominio = window.location.hostname
				  if (subdominio.indexOf('busca') === 0 || subdominio.indexOf('pesquisa') === 0) {

			  		  var buscacookie = JSON.parse(lucida.cookie.get('chaordic_testGroup'))

			   			 if (buscacookie.group === 'A' || buscacookie.group === 'B') {
			     			 var group_busca = "busca atual"
			     			 var group_busca = lucida.string.sanitize(dimension18)
			     			 ga('set', 'dimension18', group_busca);

			    		} else if (buscacookie.group === 'C' || buscacookie.group === 'D' || buscacookie.group === 'E' ) {
			    		  var group_busca = "busca intersect"
			    		  var group_busca = lucida.string.sanitize(dimension18)
			    		  ga('set', 'dimension18', group_busca);
			  	  	  }
					}
			}());

        // estudar a pedido do will página 44 até 50


        //Regex

        //Operação de atribuição

        x = ""
        x += "Olá"
        x += "Mundo"
        x += "!!"

          // estudar JS https://www.schoolofnet.com/curso-inciando-javascript/?utm_source=facebook&utm_campaign=java_iniciante_br&utm_medium=cpc&utm_content=img
        
        //regex Url
        
        //
		^(www\.)?alelopme(.*)?\.com\.br\/condominios$

        .*alelo\.com\.br/?(index\.(jsp|html))?(\?.+)?$

        /(http(\?)?:\/\/)?(alelo\.com\.br)\/(form\/|servicos-ao-estabelecimento\/)?(index|cartao-beneficio-vale-refeicao-alelo|cartao-beneficio-vale-alimentacao-alelo|home|adquira-nossos-produtos|ProspectEmpresaForm|novo-e-commerce)?(\.jsp|\.html)?


        //(https?:\/\/)?(inscricoes\.estacio\.br)\/(vestibular|enem|segundagraduacao|transferencia|novo)(\.aspx)?/
        //4
        /(https?:\/\/)?(portaldocandidato\.estacio\.br)\/(boasvindas)(\-enem\.aspx|\-)?/
        // Pathname
        /^\/(home|(mobile\/|livelo\/)?alivelo\/junte-pontos\/clube-livelo)?$/

        ^(nova)?pos(novo)?\.estacio\.br.*|^(www\.)?estacio\.br\/pos\/webform.*

        // ultimo caracter 

        var b = ''
        for(var i = 0;i < 10; i++){ 
         b += i + ',';
        }
        console.log(b.slice(0,-1))

        // ou
        var b = ''
        for(var i = 0;i < 10; i++){
         b += i + ',';
        }
        console.log(b.substr(0,b.length-1))


        //Identificar IsMobile desktop
        http://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
        m    
        /(\/transferencia|\/segunda-graduacao)/

     

        try { 

          var path = document.location.pathname
          var hash = document.location.hash

              if(hash.indexOf('?') > - 1) {
                  hash = hash.substring(1,(document.location.hash.indexOf('?')))
                   console.log(path + "/" + hash)
              } else {
                   console.log(path + "/" + hash.substring(1))
              }
        } catch(e) {

        }


        // Aulas de github

        // mkdir
        
        git deff - verificar versões  

        git status - status

        git commit -a -m "comentario" - commit

        ls - itens no diretorio 

        mkdir - criar diretorio

        touch - criar novo arquivo



   //change elements GTM Form
  document.querySelector('body').addEventListener("change", function(e){
   dataLayer.push({
   	event:'gtm.change',
   	change: {
   	 	element:e.target
   	 	}
   	});
   	}
  });

  function(){
  	try {
		  var changeText = {{Change Element}};
		  changeText = changeText.options[changeText.selectedIndex].text;
		  changeText = lucida.string.sanitize(changeText)
		  return changeText;
	}catch(e){}
}


ScrollDistanve Lib

Tag  lib scrolldeph.js

    try {  
      //PLUGIN EDITED BY GUS BASED ON http://scrolldepth.parsnip.io/
      !function(a,b,c,d){!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var i,d={minHeight:0,elements:[],percentage:true,userTiming:!1,pixelDepth:!1,gtmOverride:!1,dataLayer:"dataLayer"},e=a(b),f=[],g=!1,h=0;return a.scrollDepth=function(j){function l(a,b,c,d){i&&(i({event:"ScrollDistance",scrollAction:a,scrollLabel:b}),j.pixelDepth&&arguments.length>2&&c>h&&(h=c,i({event:"ScrollDistance",scrollAction:"Pixel Depth",scrollLabel:p(c)})),j.userTiming&&arguments.length>3&&i({event:"ScrollTiming",scrollAction:a,scrollLabel:b,scrollTiming:d}))}function m(a){return{"25%":parseInt(.25*a,10),"50%":parseInt(.5*a,10),"75%":parseInt(.75*a,10),"100%":a-5}}function n(b,c,d){a.each(b,function(b,e){-1===a.inArray(b,f)&&c>=e&&(l("Percentage",b,c,d),f.push(b))})}function o(b,c,d){a.each(b,function(b,e){-1===a.inArray(e,f)&&a(e).length&&c>=a(e).offset().top&&(l("Elements",e,c,d),f.push(e))})}function p(a){return(250*Math.floor(a/250)).toString()}function q(){s()}function r(a,b){var c,d,e,f=null,g=0,h=function(){g=new Date,f=null,e=a.apply(c,d)};return function(){var i=new Date;g||(g=i);var j=b-(i-g);return c=this,d=arguments,j<=0?(clearTimeout(f),f=null,g=i,e=a.apply(c,d)):f||(f=setTimeout(h,j)),e}}function s(){g=!0,e.on("scroll.scrollDepth",r(function(){var d=a(c).height(),h=b.innerHeight?b.innerHeight:e.height(),i=e.scrollTop()+h,l=m(d),p=+new Date-k;if(f.length>=j.elements.length+(j.percentage?4:0))return e.off("scroll.scrollDepth"),void(g=!1);j.elements&&o(j.elements,i,p),j.percentage&&n(l,i,p)},500))}var k=+new Date;j=a.extend({},d,j),a(c).height()<j.minHeight||("function"==typeof j.eventHandler?i=j.eventHandler:void 0===b[j.dataLayer]||"function"!=typeof b[j.dataLayer].push||j.gtmOverride||(i=function(a){b[j.dataLayer].push(a)}),a.scrollDepth.reset=function(){f=[],h=0,e.off("scroll.scrollDepth"),s()},a.scrollDepth.addElements=function(b){void 0!==b&&a.isArray(b)&&(a.merge(j.elements,b),g||s())},a.scrollDepth.removeElements=function(b){void 0!==b&&a.isArray(b)&&a.each(b,function(b,c){var d=a.inArray(c,j.elements),e=a.inArray(c,f);-1!=d&&j.elements.splice(d,1),-1!=e&&f.splice(e,1)})},q())},a.scrollDepth})}(jQuery,window,document);
    } catch(e) {
       dataLayer.push({'siteError':e});
    }
    




Tag Scroll Page 
try {  
  (function (jQuery) {
    jQuery.scrollDepth({
      elements: ['div.footer-template', 'div #escolha-estado'],
    });
  })(jQuery, window, document);
} catch(e) {
   dataLayer.push({'siteError':e});
}

 

 Trigger
  Event personalizado "ScrollDistance"
  variavel da camada de dados que a lib preenche ScrollLabel 
rm remove
  variavel da camada de dados que a lib preenche ScrollActionv


function aprendendoLinux() {
   aprendendoLinux : [
         'pwd' : 'Exibe a pasta atual na qual o usuário se encontra. Exemplo: Se o usuário baixaki digitar cd ~/ e em seguida digitar pwd, o retorno será /home/baixaki.',
         'cp' :  'Copia arquivos – o famoso CTRL+C + CTRL+V. Exemplo: $ cp Exemplo.doc /home/baixaki/Trabalho/EXEMPLO.doc  - O arquivo EXEMPLO.doc foi copiado para a pasta /home/baixaki/Trabalho com o mesmo nome.'
         'mv'  :  'O comando "mv" tem a função de mover arquivos. A utilização dele é praticamente igual  a do comando cp. Exemplo: $ mv MV.txt /home/baixaki/Trabalho/MV.txt  - O arquivo MV.txt foi movido para a pasta /home/baixaki/Trabalho com o mesmo nome. $ mv MV.txt  VM.txt – O arquivo MV.txt continuou onde estava, porém, agora possui o nome de VM.txt.'
         'mkdir'  : 'Enquanto o rmdir remove, este comando cria diretórios. Exemplo: mkdir DIRETORIO – A pasta DIRETORIO foi criada no local onde o usuário se encontrava.'
         'cat'  :  'to be continue'
     }}  
  }}


fbq('track', 'ViewContent', { content_name: [curso}}, content_id: [idCurso}}, content_type: 'product' });


fbq('track', 'AddToCart', { content_name: [curso}}, content_id: [idCurso}}, content_type: 'product' });


fbq('track', 'Purchase', {
  content_name: [cookieCursoSelecionado}},
  content_id: [lucida cookie idcurso}},
  content_type: 'product', order_id: [codInscricao}}, currency: 'BRL', value: 1.00 
 });

 
  window.onload = function () {
    var date = new Date();
  var minutes = 30;
  date.setTime(date.getTime() + (minutes * 60 * 1000));
    var idLead = document.getElementById('Id');
    var idLead = idLead.value;
    lucida.cookie.set('Id', idLead,{ expires: date })
  }


var az = ['a','b','c','d','e','f','g','h','i'];
var printuser = [];

for(i=0; i< az.length; i++){

  printuser.push(az[i])

}
console.log(printuser);


// 

var za = ['a','b','c','d','e','f','g','h','i'];
var printuser = [];

for(i=za.length;i > 0; i--){

  printuser.push(za[i])

}
console.log(printuser);,


 //Escolheu Area
  $('#idSlcAreaConhecimento').on('change', function(){
      var area_raw = $(this).find('option:selected').text();
      area = lucida.string.sanitize( area_raw );

      dataLayer.push({'event': 'pos-escolheu-area', 'lucida-estado': area});
  });


      /*email
      
			Lucas,
 
			Finalizamos a validação técnica também dos Atributos HTML, de acordo com nossa documentação.
			Com isso, os dois arquivos – enviados na sexta-feira e agora em anexo, são referentes a todos os pontos do ambiente contemplados em nosso Documento Técnico. Considere ambos arquivos para realizar os ajustes apontados.
			 
			Pode compartilhar essa outra documentação com seu time, por favor?
			 
			Qualquer dúvida me avise.
			Obrigado e abs.
			------------------
			Boa noite Gustavo e André, tudo bem?

			Nosso time checou aqui e parece que nossa tag ainda não está implementada no revenda.eudora.com.br. Poderiam checar, por gentileza? Se precisarem podemos fazer um Skype para ajudá-los, ok?

			Obrigado!
			Abraços,
			------------------
			Boa tarde Alex, tudo bem?

			Notei que na página de conclusão da proposta, o dataLayer não está recebendo alguns valores como iDProposta, confirmacaoId, sku e outros.

			Sabe me informar se isso está ocorrendo por se tratar do ambiente de homologação?


			Alex Silva (alex-lemos.silva@itau-unibanco.com.br, alex-lemos.silva@itau-unibanco.com.br)
			boaa tarde Pablo!!
			prazer em conhecê-lo virtualmente
			ahaha
			tudo bem e com vc?

			Opaa, o prazer é meu!!

			Deixa eu te perguntar, notei que na página de conclusão da proposta, o dataLayer não está recebendo alguns valores como iDProposta, confirmacaoId, sku e outros.
			
			Sabe me informar se isso está ocorrendo por se tratar do ambiente de homologação?

			------------------
			Boa tarde Leo,
			Aguardo seu retorno.

			Abraço
			-------------------
			Bom dia Leo, tudo bem?
			Sempre que me enviar e-mail de demandas por favor manter o grupo digitalanalytics@zoly.com.br para que eles possam ir tocando as atividades e agilizar o fluxo.

			Sobre a demanda acima, quais são os ambientes? www.sadiakits.com.br e www.perdigaokits.com.br? 
			Se forem estes, até o momento eles não instalaram o Google Tag Manager e aí não conseguimos ajudar com a demanda acima.

			Abraço.
			--------------------------------
			Opa Rafa, tudo certo.
 
			Acredito que só seria necessário o tagbook que foi produzido para esse projeto, se possível. A documentação está limitada a poucas interações, diferentes do que ele está solicitando por e-mail. Pode me enviar, por favor?
			 
			Abs.
			------------------------------------
			Oi Adriano,
 
			A divergência está por conta do push de login.  
			 
			A documentação já foi ajustada e acredito que seja bem difícil visualizar o problema, por ser um erro bem mínimo.  
			 
			Vou detalhar abaixo para facilitar. Compartilhe essa explicação com seu desenvolvedor, por favor.
			//js
			Perceba que nesse o nome dos atributos eventAction e eventLabel não possuem esse caractere.
 
			Referência: http://lucida-brasil.github.io/clientes/Sesc/implementacao_camada_de_dados/#login
			 
			Pode verificar se essa explicação facilita o entendimento deles, por favor?
			 
			Qualquer dúvida estou à disposição.
			Obrigado e abs.
			-------------------------------------
			Bom dia Danilo,
			O acesso já foi concedido.

			Abraço.
			------------------------------------

			Olá Flávia e Laura,

			Estamos utilizando as seguintes views para a extração dos dados:
			Pós e MBA Executivo
			propriedade: estacio.br
			vista da propriedade: [Lúcida] pos.estacio.br

			Pós Executiva
			propriedade: Pós Executiva
			vista da propriedade: [Lúcida] - 01 | Filtrado


			Porém devemos reiterar, não aconselhamos a utilização direta dos dados do GA, pois é feito um tratamento dos dados pelo de-para que pode resultar em valores diferentes entre a utilização de filtros do GA e os dados do Qlikview.
		
			@Laura, para que a Artplan possa utilizar os dados tanto de Graduação como de Pós precisamos do acesso ao FTP da Artplan, para que esses dados sejam enviados automaticamente.

			Estou colocando em anexo os dados de setembro da tabela enviada para a Cortex.

			@Flávia, conforme combinamos o de-para foi terminado hoje, a partir de agora começaremos a fazer as validações dos dados para garantir que todas as regras da Artplan estejam sendo cumpridas.

			Assim que o acesso ao FTP for passado começaremos a enviar os dados para a Artplan, esse envio é feito todo dia pela manhã.

			Caso vocês tenham alguma dúvida sobre os dados fornecidos estamos a disposição.

			Att

      -------------------
              Como muitos de vcs já sabem, estou saindo da CI&T para trilhar outros rumos na minha carreira.
        Foram quatro anos e meio de muito aprendizado, parceria, e evolução. Levo daqui amigos, experiências e momentos incríveis que marcaram minha vida.

        Espero poder manter contato com todos, e encontrá-los sempre que possível para um almoço, cerveja ou mesmo um café. Agradeço à todos vcs por me ensinarem e compartilharem comigo conhecimento, experiências e boas risadas.

        Gostaria de agradecer de forma especial algumas pessoas que em momentos muito críticos, fizeram a diferença no minha vida. 

        +Julio Freitas
        +Andre Ramos
        +Silvio Andrade
        +Gabriel Marostegam

        Muito obrigado por acreditarem em mim, por me apoiarem em situações difíceis, e por ajudarem à abrir novos caminho na minha carreira. Vcs foram cruciais, e sempre serão lembrados.

        Grande Abraço

			
			---------------------------------------------
			Leo,
			Como sequência do cronograma desse projeto de BRF, segue abaixo as documentações que especificam a implementação da camada de dados. Essa implementação será necessária para o envio de todos os dados mapeados de navegação ao Google Analytics.
	
			www.sadiakits.com.br
			Link: http://lucida-brasil.github.io/clientes/BRF/sadia_kits_natalinos/camada_de_dados/
			 
			www.perdigaokits.com.br
			Link: http://lucida-brasil.github.io/clientes/BRF/perdigao_kits_natalinos/camada_de_dados/
			 
			Pode direcionar também esses links de documentações aos desenvolvedores do ambiente, por favor?
			 
			Qualquer dúvida, estamos à disposição.
			Obrigado e abs.

			-------------------------------------------

			Gustavo, boa tarde,
 
			Obrigada pelo retorno.
			Inseri alguns comentários abaixo e acho pertinente agendarmos uma visita de vocês aqui no Santander com o objetivo de alinhar a questão de acessos e esclarecimentos com a ZUP.
			 
			Minha sugestão é sexta-feira.
			Você pode?
			 
			Att.
			Luciana



        */
     return modalidade.options[modalidade.selectedIndex].innerText.toLowerCase()


  /*
  CryptoJS v3.1.2
  code.google.com/p/crypto-js
  (c) 2009-2013 by Jeff Mott. All rights reserved.
  code.google.com/p/crypto-js/wiki/License
  */
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=l.WordArray=t.extend( {init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();



/

function() {
  try {
      crypted = CryptoJS.AES.encrypt([Value}}, [Hash Password]});
      return crypted.toString();
    } catch (e){}
}

(function ($) {
//Buscar por Curso
$(document).on('mousedown', '.btn.btn-block.btn-warning:eq(1)', function (){

  var campos = ['area.NomeArea','curso.NomeCurso','municipio.NomeMunicipio','CodCampus'];

  for(var i = 0;i < campos.length; i++) {
    var str1 = '[ng-options*="';
    var str2 = '"] :selected';
    var seletor =  str1+campos[i]+str2;
    console.log(seletor)
  }

  })(window.jQuery)
}


 
 http://dpos.estacio.rj.br/portal/?i=4910141&dn=21/04/1995
(|http://dpos.estacio.rj.br/portal/?i=4909968&dn=01/01/1970

Encontrei alguns pontos a serem corrigido no ambiente "http://dposnovo.estacio.rj.br/", segue o descritivo.

Todos os passos estão funcionando perfeitamente, com exceção do ultimo funil o "Finalizar inscrição", após preencher todos os campos e clicar em no botão "finalizar inscrição", não acontece nenhuma ação mas o CPF é gravado no banco de dados, após o segundo click aparece um pop up, com a msg que já existe esse CPF registrado no banco e é redirecionado para a página  "Campus Virtual".

Segue os prints com as evidencias.


(pos|dposnovo)\.estacio\.(rj)?br\/portal\/\?i=.+dn=.+

(gravaInscricao|dposnovo\.estacio\.rj\.br|posnovo\.estacio\.br)


^(nova)?pos(novo)?\.estacio\.br.*|^(www\.)?estacio\.br\/pos\/webform.*

  function() {
    try {

    } catch(e){}
  }

}


//Estacio
(function ($) {

//Buscar por Curso
$(document).on('mousedown', '.btn.btn-block.btn-warning:eq(1)', function (){

    try {

        //Valor dos campos
        
    	var area = $('[ng-options*="area.NomeArea"] :selected').get(1).innerText, 
        curso = $('[ng-options*="curso.NomeCurso"] :selected').get(1).innerText,
        idcampus = $('[ng-options*="campus.CodCampus"] :selected').get(1).value

        //Sanitize dos campos
        area = lucida.string.sanitize( area )
        curso = lucida.string.sanitize( curso )
        cidade = lucida.string.sanitize( cidade )

        //Criar cookies
        lucida.cookie.set('areaSelecionada', area, { domain: 'estacio.br' } )
        lucida.cookie.set('cursoSelecionado', curso, { domain: 'estacio.br' } )
        lucida.cookie.set('cidadeSelecionado', cidade, { domain: 'estacio.br' } )
        //push o dataLayer

     } catch(e) {}
   
  })
  })(window.jQuery)

  	$(document).on('mousedown', '[ng-click="ctrl.buscarClicked()"]', function (){  
		  var campos = ['curso.NomeCurso','municipio.NomeMunicipio','municipio.NomeMunicipio'];
		  
		  for(var i = 0;i < campos.length; i++) {
		    var elemento =  '[ng-options*="'+campos[i]+'"] :selected';
		    var valueSanitize = lucida.string.sanitize($(elemento).get(0).innerText);
		    var valueName = campus[i].toLowerCase();
		     lucida.cookie.set(valueName, valueSanitize, { domain: 'estacio.br' } )
		     console.log(valueSanitize,valueName)
		  } 
	 });




//Buscar por Curso
$(document).on('mousedown', '[ng-click="ctrl.buscarClicked()"]', function (){  
	  var campos = ['curso.NomeCurso','municipio.NomeMunicipio','municipio.NomeMunicipio'];
	  
	  for(var i = 0;i < campos.length; i++) {
	    var elemento =  '[ng-options*="'+campos[i]+'"] :selected';
	    var valueSanitize = lucida.string.sanitize($(elemento).get(0).innerText);
	    var valueName = campus[i].toLowerCase();
	     lucida.cookie.set(valueName, valueSanitize, { domain: 'estacio.br' } )
	     console.log(valueSanitize,valueName)
	  } 
 });

$(document).on('mousedown', '[ng-click="ctrl.buscarClicked()"]', function (){  
	  var campos = ["[ng-options*='curso.NomeCurso'] :selected", 
	  				"[ng-options*='municipio.NomeMunicipio'] :selected"
	  				];

	  campos.each(function(){
	  	var valueName = $(this).attr("ng-options").split('.')[0];
	  	var valueSanitize = lucida.string.sanitize($(this).get(0).innerText);
	    lucida.cookie.set(valueName, valueSanitize, { domain: 'estacio.br' } )
	  });
 });


(function ($) {
(window.jQuery)
}

pacote.Montesuaviagem
$('.item').get(0).innerText
$('.item').get(1).innerText

pacote.pacote
$('[placeholder="dd/mm/aaaa"]:visible')[0].value
$('[name="isAdmin":visible]':visible)[0].value

var adultoTotal = 0; 
var criancaTotal = 0;




  var _self = $({{Click Element}})
  var menu = _self.closest('section').attr('id');
  console.log()



function(){
  try {
      if([CVC - Options das abas}} == 'pacote') {
        return
      } if([CVC - Options das abas}} == 'passagemhotel') {
        return 'Tipo=[CVC - Options das abas}}/PO=[CVC - item 0 - ida}}PD=[CVC - item1 - volta}}'
      } if([CVC - Options das abas}} == 'passagem') {
        return 'Tipo=[CVC - Options das abas}}/PO=[CVC - item 0 - ida}}PD=[CVC - item1 - volta}}'
      } if([CVC - Options das abas}} == 'hotel') {
        return 'Tipo=[CVC - Options das abas}}/DH=[CVC - item1 - volta}}'d
      } if([CVC - Options das abas}} == 'carro') {
        return 'Tipo=[CVC - Options das abas}}/LR=[CVC - item 0 - ida}}LD=[CVC - item1 - volta}}'
      }
  }catch(e){}
}

$('[placeholder="dd/mm/aaaa"]:visible')[0].value

  


  switch ( {{Nome do campo id}} ){
        case "btn-busca-area":
          fbq('track', 'Area de conhecimento', { content_name: {{Click Text - Sanitizado}}, content_type: 'product' });
          break;
          
        case "btn-busca-curso":
         fbq('track', 'Curso', { content_name: {{Click Text - Sanitizado}}, content_type: 'product' });
          break;
      }

              var path = document.location.pathname

              if(hash.indexOf('?') > - 1) {
                  hash = hash.substring(1,(document.location.hash.indexOf('?')))
                   console.log(path + "/" + hash)
              } else {
                   console.log(path + "/" + hash.substring(1))
              }

              //delete cookie
              document.cookie = 'UserName=; domain=www.rico.com.vc; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';


              var quartoOption = "";
              $('.search-engine-static-rooms-pax').each(function(index, value){ 
                  var _self = $(this); 
                  var quartoAd = _self.closest('selected').find('.product-form-input.ember-view.x-select').eq(0).html(); 
                  var quartoCr = _self.closest('selected').find('.product-form-input.ember-view.x-select').eq(1).html(); 
                  var i = index+1;
                  quartoOption = quartoOption+"/Q"+i+"A="+quartoAd +":Q"+i+"C="+quartoCr;
              })

              var quartoOption = "";
              $('.search-engine-static-rooms-pax').each(function(index, value){ 
                  var _self = $(this); 
                  var quartoAd = _self.find('select.product-form-input.ember-view.x-select').eq(0).val()
                  var quartoCr = _self.find('select.product-form-input.ember-view.x-select').eq(1).val()
                  var i = index+1;
                  quartoOption += "Q"+i+"A="+quartoAd +":Q"+i+"C="+quartoCr+"/";
              });
              return (quartoOption)

              $('.buy-button.buy-button-ref').on('mousedown', function(){
                var _self = $(this); 
                var elemento = _self.parent().closest('#').attr('id')

                console.log(elemento)
              })


              dataLayer.push({
                'event':
                'page' : {
                    'conteudo' : ''
                    'assunto' : ''
                    'titulo': ''
                }
              });


              $('header .container li').on('mousedown',function(){
                var self = $(this);
                txt = self.text()
                txt = lucida.string.sanitize( txt )
                section = lucida.string.sanitize( section );
                ga('send', 'event', 'LP-PartiuEstacio', 'click:menu', txt)
              })

              $('.btn-inscreva').on('mousedown',function(){
                var self = $(this);
                txt = self.text()
                txt = lucida.string.sanitize( txt )
                section = $('header .container li.active').text()
                section = lucida.string.sanitize( section );
                ga('send', 'event', 'LP-PartiuEstacio', 'click:'+section, txt)
              })

              $('#vantagens a').on('mousedown',function(){
                var self = $(this);
                txt = self.text();
                txt = lucida.string.sanitize( txt );
                section = $('header .container li.active').eq(1).text();
                section = lucida.string.sanitize( section );
                ga('send', 'event', 'LP-PartiuEstacio', 'click:'+section, txt);
              })

                $('.btn-inscreva-par').on('mousedown',function(){
                var self = $(this);
                txt = self.text();
                txt = lucida.string.sanitize( txt );
                section = $('header .container li.active').eq(1).text();
                section = lucida.string.sanitize( section );
                ga('send', 'event', 'LP-PartiuEstacio', 'click:'+section, txt);
              })


	r = [];
	p.forEach(function(v){
		r.push(v.id);
	})

	r.join(',');


	//Buscar por Curso
	$(document).on('mousedown', '[ng-click="ctrl.buscarClicked()"]', function (){  
		  var campos = ['curso.NomeCurso','municipio.NomeMunicipio','municipio.NomeMunicipio'];
		  
		  for(var i = 0;i < campos.length; i++) {
		    var elemento =  '[ng-options*="'+campos[i]+'"] :selected';
		    var valueSanitize = lucida.string.sanitize($(elemento).get(0).innerText);
		    var valueName = campus[i].toLowerCase();
		     lucida.cookie.set(valueName, valueSanitize, { domain: 'estacio.br' } )
		     console.log(valueSanitize,valueName)
		  } 
	 });

 $(document).on('mousedown', '[modalidade] [plugin-scroll-to=".formulario"]', function (){
     console.log(''+$(this).parent().siblings('.panel-body').find('.valor-new ').text().replace('R$','').replace(',','.').trim())
 })

 //javaScript contem 
 var pagePath = {{Page Path}};
 var pageViagens = pagePath.includes("pages/viagens");

	if ( pageViagens ) {
		if () {
			
		}
	} else {
		return 'home'
	}

dataLayer.push({
	'event': 'login',
	'uid' : '464466'
})

//CREATCOOKIE e DELETE
	var createCookie = function(cookieName, cookieValue, expiresDate) {
    	  
          	var cookie = cookieName + '=' + cookieValue + ';';
			
        	if (expiresDate) {
            	var d = new Date(); 
        		d.setTime(d.getTime() + expiresDate*24*60*60*1000);
				
				cookie += 'expires=' + d.toUTCString() + ';';
            }

       		document.cookie = cookie + 'path=/';
       	}

     //Para criar 
     createCookie('nome','value','expires');

     //Para excluir
     createCookie('nome','','-1');

     //algoritimo simples
	(function algoritimo(nota1,nota2){
		var resultado = (nota1 + nota2)/2;
		console.log(resultado)
		if(resultado >= 7){
			console.log('true');
		} else {
			console.log('false');
		}
	})(7,5)


	      // variavel sanitize
	      function () {
				return function (str, only_word_character) {
					try {

						if (typeof str !== 'string') return ''

						str = this.trim(str)
							.replace(/^\s+/, "")
							.replace(/\s+$/, "")
							.replace(/\s+/g, "_")
							.replace(/[\u00e1\u00e0\u00e2\u00e3\u00e5\u00e4\u00e6\u00aa]/g, "a")
							.replace(/[\u00e9\u00e8\u00ea\u00eb\u0404\u20ac]/g, "e")
							.replace(/[\u00ed\u00ec\u00ee\u00ef]/g, "i")
							.replace(/[\u00f3\u00f2\u00f4\u00f5\u00f6\u00f8\u00ba]/g, "o")
							.replace(/[\u00fa\u00f9\u00fb\u00fc]/g, "u")
							.replace(/[\u00e7\u00a2\u00a9]/g, "c")
							.replace(/[^a-z0-9_\-]/g, "_")
							.replace(/_+/g, "_");

						if (only_word_character) {
							str = str.replace(/[^a-z0-9\-]/g, '_')
							.replace(/_+/g, '_');
						}
						return str;
					}

					catch(e){}
				}
			}


			// tag sanitize lucida helper
				window.ciandt = window.ciandt || {}
				window.ciandt.string = window.ciandt.string || {}

				ciandt.string.sanitize = function(str, only_word_character) {
				    if(typeof str !== 'string') return ''

				    str = str
				        .trim(str)
				        .toLowerCase()
				        .replace(/\s+/g, ' ')
				        .replace(/\s+/g, '_')
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

				//url angular obs:finalizado
		 		(function(){
					var path = document.location.pathname
					var hash = document.location.hash

					  if(hash.indexOf('?') > - 1) {
					      hash = hash.substring(1,(document.location.hash.indexOf('?')))
					       var result = path + "/" + hash;
						   var result = result.replace(/\/\/(\/)?/,"")
						   console.log(result);
					 } else {
					       console.log(path + "/" + hash.substring(1))
					  }
				})()

				//javascript personalizado
				function(){
					try{

					}catch(e){}
				}


				//Aprendendo git

					/*
					echo "# mccount" >> README.md
					git init
					git add README.md
					git commit -m "first commit"
					git remote add origin https://github.com/pablosandri/mccount.git
					git push -u origin master
					Abs */

				Para voltar o arquivo para o commit da master(versão anterior) |  git checkout -- <file>;

				//Novas anotacoes ciandt

				// Senha Dtm: @Saifora1

				(function(){
					var p = document.querySelectorAll('.product-grid.box-product .name a');
					var r = []
					p.forEach(function(v){
						r.push(v.innerText);
					})
				})()

				https://solutionpartners.adobe.com/home.html



window.analyticsData = {
  custom: {
        "versaoDoCheckout":"v1",
        "renda":"YUIRY&EEYUE*(&",
        "preAprovado":"Sim",
        "email":"dkjshf37462fkjshfk348",
        "iDPropostaRedVentures":"HUDHUH47",
        "events": ["comprovante"]
  },
  product: {
        "confirmacao": {
              "id": "1234567"
        },
        "items": [{
              "merchandising":{ 
                      "bandeira": "Mastercard",
                      "portfolio": "Walmart",
                      "rendaminima": "R$1.000",
                      "variante": "Internacional"
                     },
              "nome": "TudoAzul Itaucard 2.0 Internacional MC",
              "sku": "9004",
              "quantidade": "1",
              "preco": "1"
        }],
        "event": "purchase"
  }
}


// Adobe Analyrics Product

var product = ';Itaucard 2.0 International MasterCard;;;;eVar19=Itaucard 2.0 International MasterCard|eVar20=cdc:bandeira Mastercard#cdc:portfolio Itaucard#cdc:variante Internacional#cdc:rendaminima R$800.00';
var merchandising = [];

var testProduct = function(str){
  var products = str.split(',');
    products.forEach(function(){
      var new_product = str.split('eVar');
      new_product.forEach()
      var teste = {
      'product': new_product[0].split(';'),
      'eVar1': new_product[1],
      'eVar2': new_product[2]
      }

    merchandising.push(teste);

    })
  
  console.log(merchandising)
}

testProduct(product);

//fim

document.querySelector('body').addEventListener("mousedown", function(e){
    var a = e.target.parentNode.parentNode.parentNode.className
    console.log(a)
});

Itau
  1669 15332 0


  Conta em PROD
Operador: 804504934
Pwd: 123002





// Pega o elemento e adiciona um listener para click
document.querySelector( 'body' ).addEventListener( 'click', function( e ) {
    // e.target é o elemento clicado
    // se ele for um item de lista
    if ( e.target && e.target.className == 'flex-home txt-no-bold relative' ) {
        console.log(this)
    }
}, false);



// Pega o elemento e adiciona um listener para click
document.querySelector( 'body' ).addEventListener( 'click', function( e ) {
    // e.target é o elemento clicado
    // se ele for um item de lista
    console.log(e.target.parentNode.className)
}, false);


try{
  document.querySelector( 'body' ).addEventListener( 'click', function( e ) {
      if(e.target && e.target.parentNode.className == 'flex-home txt-no-bold relative' && e.target.parentNode.parentNode.className == 'aberto'){
        var tagName = e.target.parentNode.innerText
        var tagId = e.target.parentNode.parentNode.id
        console.log('--------------------->' + tagId + tagName)
      }
  }, false);
}catch(e) {}


// funções

   
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


Estudar classification sent(se você tem 1 id você consegue subir um de/para e relacionar o id com o nome)


DTM-Adobe
  dataelement pagename Based Path

          var prefix = 'IT:NL:IN:';
          var path = document.location.pathname;

          switch(path){
            case '/':
              return prefix + 'Home';
              break;
              
            case (path.match(/\/personnalite\/investimentos\/(index.html)?$/) || {}).input:
              return prefix + 'Personnalite:LP:Investimento360'
              break;
              
            case (path.match(/\/personnalite\/lp\/investimento360mobile\/(index.html)?$/) || {}).input:
              return prefix + 'Personnalite:LP:Investimento360Mobile'
              break;
              
            case (path.match(/apple-pay/) || {}).input:
              return prefix + 'ApplePay'
              break;
              
            default:
              return prefix + path.slice(1,-1).replace(/\//g,':');
          }

  

  Scroll da página
    JS Non-sequential
    window.maxScroll = 0;

        function getDocHeight() {
            var D = document;
            return Math.max(
                D.body.scrollHeight, D.documentElement.scrollHeight,
                D.body.offsetHeight, D.documentElement.offsetHeight,
                D.body.clientHeight, D.documentElement.clientHeight
            )
        }
         
        var docheight = getDocHeight()


        function amountscrolled(){
            var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
            var docheight = getDocHeight()
            var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
            var trackLength = docheight - winheight
            var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

            if (window.maxScroll < pctScrolled) {
              if(pctScrolled > 5 && pctScrolled <= 25){
                window.maxScroll = 25;
              } else if(pctScrolled > 26 && pctScrolled <=50){
                window.maxScroll = 50;
              } else if(pctScrolled > 51 && pctScrolled <=75){
                window.maxScroll = 75;
              } else if(pctScrolled > 76 && pctScrolled <=100){
                window.maxScroll = 100;
              }
            }    
        }
         
        window.addEventListener("scroll", function(){
            amountscrolled()
        }, false)
  
      Configuração adobe
      window.onbeforeunload = function(e) {
          s.linkTrackVars = 'eVar64,prop41';
          if(window.maxScroll > 0){
            s.prop41 = window.maxScroll;
            s.eVar64 = window.maxScroll;
            s.tl();
            s.clearVars();
          }
      } 


  Direct Call Rules - Router

  var rule = _satellite.getVar("regra_disparo");

    if("pageLoad" === rule){
      _satellite.track('fire_analytics_pageview')
    }
    else if("customLink" === rule){
      _satellite.track('fire_analytics_custom_link')
    }





/*
Estudando campanhas do adobe analytics

RS edit settiing - Geral - Page Search detection (aqui informar todos os parametros de campanhas da url ex: s_cid - utmx e etc)
*/







=========================AAM DIL CODE=====================================



/* 
  AudienceManager Settings DIL CODE
*/



//Visitor ID service instantiation
/* var visitor = Visitor.getInstance("4435697753736FB20A490D45@AdobeOrg", {
    loadTimeout: 10000
});

var userId1 = s.eVar22; // Hash CPF
if(userId1!=undefined) {
  visitor.setCustomerIDs({
    "HashPFId":{
      "id": userId1,
    }
  });
}     */
var userId1 = s.eVar22;
if(userId1!=undefined) {
  var itauDil = DIL.create({
    partner : "itau",
    containerNSID : 0,
    uuidCookie:{
      name:'aam_uuid',
      days:30
    },
    visitorService: {
      namespace: '4435697753736FB20A490D45@AdobeOrg'
    },
    declaredId : {
      dpid : "61376" ,
      dpuuid : userId1
      }

  });
}
else {
  var itauDil = DIL.create({
    partner : "itau",
    containerNSID : 0,
    uuidCookie:{
      name:'aam_uuid',
      days:30
    },
    visitorService: {
      namespace: '4435697753736FB20A490D45@AdobeOrg'
    }
  });
}

var _scDilObj;
if(typeof s != 'undefined' && s === Object(s) && typeof s.account != 'undefined' && s.account){
  _scDilObj = s_gi(s.account);
} 
else {
  _scDilObj = s_gi(s_account);
}

DIL.modules.siteCatalyst.init(_scDilObj, itauDil, {
  names: ['pageName', 'channel', 'campaign', 'products', 'events', 'pe', 'referrer', 'server', 'purchaseID', 'zip', 'state'],
  iteratedNames: [{
    name: 'eVar',
    maxIndex: 100
  }, {
    name: 'prop',
    maxIndex: 75
  }, {
    name: 'pev',
    maxIndex: 3
  }, {
    name: 'hier',
    maxIndex: 4
  }, {
      name: "list",
      maxIndex: 3
    }]
});

function objIsEmpty(obj) { 
    for(var prop in obj) { 
        if(obj.hasOwnProperty(prop) && prop !== "") 
            return false; 
    }; 
        return true; 
};

var uriData = DIL.tools.decomposeURI(document.URL);
delete uriData.search;
delete uriData.href;
if(! objIsEmpty(uriData.uriParams)){ 
  itauDil.api.signals(uriData.uriParams, 'c_');
};
if(objIsEmpty(uriData.pathname)){ 
  delete uriData.pathname;
};
delete uriData.uriParams;
itauDil.api.signals(uriData, 'c_').submit();


if (itauDil)
{
  //itauDil.api.traits([7277123]);
  itauDil.api.signals({ d_referer : document.referrer });
}

//document.URL value
if (itauDil)
{
  itauDil.api.signals({ d_URL : document.URL });
}


====================FIM===================================================








