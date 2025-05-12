# About Eitri

Eitri is a modular platform for building powerful mobile apps with agility and scale.

Learn more about [Eitri](https://www.eitri.tech/)

# Eitri Shopping

Eitri Shopping combines scalability, customization, and seamless UX to boost conversion and engagement.

## Eitri Shopping Addons

[Eitri Shopping Addons](https://github.com/eitri-tech/eitri-shopping-addons) are a fast and easy way to integrate common provider resources into your Eitri applications. You just need to set your Eitri-Apps to use the selected addon as dependence and import it where you need to use.

### Avaliable addons

1. [Vtex Newtail](https://github.com/eitri-tech/eitri-shopping-addons/tree/main/eitri-shopping-addon-vtex-newtail)

### How to setup an Eitri Shopping Addon?

Each Eitri-App has a `eitri-app.conf.js` file where you set the basic configs for your Eitri-App.

To use and addon, include a **"eitri-app-dependencies"** section in you `eitri-app.conf.js` file with the addon you need and the respective version of it.

> Each addon work as a separated Eitri-App and have it's own versioning. To know the versions of each addon, check their links on Avaliable Addons section.

```js
  "eitri-app-dependencies": {
    "eitri-shopping-addon-vtex-newtail": {
      "version": "0.1.0"
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
    "eitri-shopping-addon-vtex-newtail": {
      "version": "0.1.0"
    }
  },
  "type": "module"
}
```



