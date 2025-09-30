# About Eitri

Eitri is a modular platform for building powerful mobile apps with agility and scale.

Learn more about [Eitri](https://www.eitri.tech/)

# Eitri App Shopping

Eitri App Shopping is Eitr's ecommerce solution that combines scalability, customization, and seamless UX to boost conversion and engagement.

## Eitri Shopping Addons

[Eitri Shopping Addons](https://github.com/eitri-tech/eitri-shopping-addons) are a fast and easy way to integrate common provider resources and features into your Eitri applications. You just need to set your Eitri-Apps to use the selected addon wherever you need to use it.


### Add-on types

The way you need to setup or configure new add-ons depends on add-on type. Each of them have it's own ways to be setup but basically we have 3 types:

#### `PLUG-N-PLAY` :electric_plug: 

Those add-ons are ready-to-use solutions and you need only to do some sort of setup in your apps remote environment configuration, in your app/eitri-app configuration files or in your eitriapp alias list. This type of add-on doesn't require development or specific code.

The necessary configuration will depend on wich add-on you need. For details go to add-on specific documentation over the section [Avaliable add-ons](#avaliable-add-ons).

#### `TEMPLATE` :package: 

Template add-ons are solutions built as a fully working model to serve as a starting point for cases when you need to customize or expand the possibilities since they can can add entire features to your app with full customization support throught coding.

<details>
<summary>Como configurar um add-on como :paperclip: dependência?</summary>
<br>
<br>
Cada Eitri-app tem um arquivo `eitri-app.conf.js` onde você define as configurações básicas de seu eitri-app.

Para utilizar um add-on como dependência, inclua uma sessão **"eitri-app-dependencies"** em seu arquivo `eitri-app.conf.js` com o add-on que você deseja e a sua respectiva versão.
</details>


#### `DEPENDENCY` :paperclip: 

Dependency add-ons offer a quick way to incorporate ready to use methods, components and other elements into your app. It work basically as libs into your Eitri Application. Just declare the dependency in your Eitri-apps, import whenever you need to use and check the add-on doc to use the features and methods and start using it in your code.

##### How to setup an Eitri Shopping Add-on?

<details>
<summary>How to setup an Eitri Shopping add-on :paperclip: dependency?</summary>
<br>
<br>
Each Eitri-App has a `eitri-app.conf.js` file where you set the basic configs for your Eitri-App.

To use and add-on as dependency, include an **"eitri-app-dependencies"** section in you `eitri-app.conf.js` file with the addon you need and the respective version of it.

> [!IMPORTANT]
> Each addon work as a separated Eitri-App and have it's own versioning. To know the versions of each addon, check their links on [Avaliable Add-ons](#avaliable-add-ons) section.

```js
  "eitri-app-dependencies": {
    "eitri-shopping-addon-vtex-ads": {
      "version": "1.0.0"
    }
  },
```

##### Dependency add-on use example:

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

### Avaliable add-ons

1. [Vtex Ads](https://github.com/eitri-tech/eitri-shopping-addons-vtex-ads) :paperclip:
2. [Deeplink Resolver](https://github.com/eitri-tech/eitri-shopping-addons-deeplink-resolver) :electric_plug: | :package: