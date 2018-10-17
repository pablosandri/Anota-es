## Homologação Nova Home e LPs

#### Alterar DTM Staging e Produção:

links:

  Staging:
  
  ```html
  <!-- DTM -->
  <script src="//assets.adobedtm.com/5fb4a4ca2787b58aa33f33d1e808a50cf47cc1e0/satelliteLib-a7d32691cef9933bb94547afb02e06958cd9c968-staging.js"></script>
  <!-- End DTM -->
  ```
  
  Prod:
  
  ```html
  <!-- DTM -->
  <script src="//assets.adobedtm.com/5fb4a4ca2787b58aa33f33d1e808a50cf47cc1e0/satelliteLib-a7d32691cef9933bb94547afb02e06958cd9c968.js"></script>
  <!-- End DTM -->
  ```
  
#### Inserir a chave ```userInfo``` no DataLayer.

Ex:
```javascript
    document.DataLayer = {
        pageInfo:{ 
            pageName: "SA:NL:MEMEI:Institucional:Home",
            siteSection: "NL",
            subSection: "Institucional",
            tipoDeCanal: "WEB",
            url: "https://www.serasaempreendedor.com.br/?debug=true",
          },
        rule: "pageLoad",
        userInfo:{
            businessId: null,
            clientId: "5a71e736eb1cf54a9c106a8d",  // Valor fixo
            userId: null
        }
    }
```

#### Mapear os cliques ```CTAs``` com destino o cadastro.

Método: 

```javascript
  function analyticsCliquesGenericos(str1,str2){
    try{
     var str1 = document.sanitizeToCamelCase(str1); //clickText
     var str2 = document.sanitizeToCamelCase(str2); //Section

     var custom = {
         events: ['cliquesGenericos'],
         itemClicado: 'BTN:MEMEI:Institucional:'+ str1+':'+str2,
         customLink:  'Institucional | CliquesGenericos',
         }
      document.DataLayer.custom = custom;
      document.DataLayer.rule = 'customLink';
      
      document.dispatchEvent(new CustomEvent("CliquesGenericos",{'detail': document.DataLayer}));
      
      }catch(e){console.log(e);}
  }
```

###Python array

```python
def e01():
    ##exe1,2
    vetPrecos = []
    cont = 0
    while cont < 5:
        precoUnits = float(input('digite um valor:'))
        vetPrecos.append(precoUnits)
        cont += 1
    print(vetPrecos)

    ##exe3
    
    cont02 = 0
    while cont02 < 2:
        cont02 += 1
        precoUnits = float(input('digite outro valor:'))
        vetPrecos.insert(0, precoUnits)
    print(vetPrecos)

    ##exe4

    vetPrecos.pop(2)
    vetPrecos.pop(4)
    print(vetPrecos)

    ##exe5

    print(len(vetPrecos))

    #exe6

    for x in vetPrecos:
        print(x) 
    
```
