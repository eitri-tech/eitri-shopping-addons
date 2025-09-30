# O que é Eitri?

Eitri é uma plataforma para desenvolver aplicativos móveis modulares poderosos com agilidade e escalabilidade.

Saiba mais sobre a [Eitri](https://www.eitri.tech/)

# Eitri App Shopping

Eitri App Shopping é a solução de ecommerce da Eitri que combina escalabilidade, customização e UX sem frição para incrementar sua conversão e engajamento.

## Eitri Shopping Addons

[Eitri Shopping Addons](https://github.com/eitri-tech/eitri-shopping-addons) são uma maneira rápida e fácil de integrar provedores de recursos e funcionalidades em suas aplicações Eitri. Você só precisa configurar seus Eitri-apps para utilizarem os add-ons escolhidos e começar a utiliza-los.

### Tipos de add-on

A configuração de um add-on vai depender do seu tipo. Cada add-on tem seu próprio setup necessário mas basicamente nós temos os 3 seguintes tipos:

#### `PLUG-N-PLAY` :electric_plug: 

Estes add-ons são soluções prontas para uso, sendo necessário apenas fazer algum ajuste na configuração remota de ambiente do seu aplicativo, em algum arquivo de configuração de seu app/eitri-app ou em algum apontamento de alias. Este tipo de add-on exige apenas a configuração, sem desenvolvimento ou código específico.

A configuração necessária vai depender de qual o add-on. Para detalhes específicos, consulte a documentação detalhada do add-on na seção [Add-ons disponíveis](#add-ons-disponíveis).

#### `TEMPLATE` :package: 

Add-ons de template são soluções construídas como um modelo funcional que serve como ponto de partida para casos onde você precisa personalizar e expandir as possibilidades de seu app uma vez que eles podem adicionar toda uma nova funcionalidade oferecendo suporte à personalização completa desenvolvendo sobre a base de código do template.

<details>
<summary>Como configurar/instalar um add-on :package: template?</summary>
<br>
<br>
Um add-on do tipo template pode ser criado/instalado em seu app Eitri utilizando o comando [`eitri create`](#) com o parâmetro `--template`.

Isso permitirá que você selecione um template para criar seu eitri-app e em seguida personaliza-lo da forma que for mais conveniente.

Um eitri-app criado desta forma será atrelado ao seu app e passa a ficar disponível para publicação como qualquer outro eitri-app sob a gestão da sua organização e com o código disponível para desenvolver conforme suas necessidades.
</details>


#### `DEPENDÊNCIA` :paperclip: 

Dependências são uma forma rápida de incorporar métodos, componentes e outros elementos prontos para uso em seu app. Funcionam basicamente como uma biblioteca em seu app Eitri. Declare o add-on como dependência em seus Eitri-apps, importe-o onde quer que você precise utiliza-lo e consulte a documentação do add-on para verificar o que ele oferece como recurso para usar em seu código.

<details>
<summary>Como configurar um add-on como :paperclip: dependência?</summary>
<br>
<br>
Cada Eitri-app tem um arquivo `eitri-app.conf.js` onde você define as configurações básicas de seu eitri-app.

Para utilizar um add-on como dependência, inclua uma sessão **"eitri-app-dependencies"** em seu arquivo `eitri-app.conf.js` com o add-on que você deseja e a sua respectiva versão.

> [!IMPORTANT]
> Cada add-on funciona como um eitri-app separado e tem seu próprio versionamento. Para saber mais sobre as versões de cada add-on, confira o seus links na sessão [Add-ons disponíveis](#add-ons-disponíveis)

```js
  "eitri-app-dependencies": {
    "eitri-shopping-addon-vtex-ads": {
      "version": "1.0.0"
    }
  },
```

##### Exemplo de uso de um add-on como dependência:

```js
module.exports = {
  "name": "eitri-shopping-addons-home",
  "title": "eitri-shopping-addons-home",
  "slug": "eitri-shopping-addons-home",
  "eitri-luminus": "2.0.4",
  "eitri-bifrost": "3.8.0",
  "eitri-commons": "2.1.2",
  "version": "0.1.0",
  "public-key": "68825733-1313-41ad-ac46-7defb3cc98bf",
  "applicationId": "5e5c15f7-65cc-4c57-96b0-cbd55ddcbc5b",
  "id": "97f07847-0263-4681-a419-84d64e697078",
  "organizationId": "cf5660ee-bf90-42cd-9a43-9d2c69ee3c89",
  "organization": {},
  "eitri-app-dependencies": {
    "eitri-shopping-addon-vtex-ads": {
      "version": "1.0.0"
    }
  },
  "type": "module"
}
```
</details>

### Add-ons disponíveis

1. [Vtex Ads](https://github.com/eitri-tech/eitri-shopping-addons-vtex-ads) :paperclip:
2. [Vtex Deeplink Resolver](https://github.com/eitri-tech/eitri-shopping-addons-deeplink-resolver) :electric_plug: | :package:
3. [Vtex Checkout V2](https://github.com/eitri-tech/eitri-shopping-addons-checkout) :electric_plug: | :package: