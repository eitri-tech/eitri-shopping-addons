# About Eitri

Eitri is a modular platform for building powerful mobile apps with agility and scale.

Learn more about [Eitri](https://www.eitri.tech/)

# Eitri App Shopping

Eitri App Shopping combines scalability, customization, and seamless UX to boost conversion and engagement.

## Eitri Shopping Addons

[Eitri Shopping Addons](https://github.com/eitri-tech/eitri-shopping-addons) are a fast and easy way to integrate common provider resources into your Eitri applications. You just need to set your Eitri-Apps to use the selected addon wherever you need to use it.

The setup for each add-on is described in wich repository but basically there are 3 types of add-ons:

- :electric_plug: **PLUG-N-PLAY** - Those plugins are pre-build solutions that need only a small configuration in your apps environment or code and are ready to work without needing to code.
- :package: **TEMPLATE** - Template add-ons are solutions built as a fully working model to serve as a starting point for cases when you need to customize or expand the possibilities since they can can add entire features to your app with full customization support throught coding.
- :paperclip: **DEPENDENCY** - Dependency add-ons offer a quick way to incorporate ready to use methods, components and other elements into your app. It work basically as libs into your Eitri Application. Just declare the dependency in your Eitri-apps, import whenever you need to use and check the add-on doc to use the features and methods and start using it in your code.


### Avaliable addons

1. :paperclip: [Vtex Ads](https://github.com/eitri-tech/eitri-shopping-addons-vtex-ads)
2. :electric_plug: | :package: [Deeplink Resolver](https://github.com/eitri-tech/eitri-shopping-addons-deeplink-resolver)

### How to setup an Eitri Shopping Addon?

Each Eitri-App has a `eitri-app.conf.js` file where you set the basic configs for your Eitri-App.

To use and addon, include an **"eitri-app-dependencies"** section in you `eitri-app.conf.js` file with the addon you need and the respective version of it.

> Each addon work as a separated Eitri-App and have it's own versioning. To know the versions of each addon, check their links on Avaliable Addons section.

```js
  "eitri-app-dependencies": {
    "eitri-shopping-addon-vtex-ads": {
      "version": "1.0.0"
    }
  },
```

#### Addon use example:

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



