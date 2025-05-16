# Eitri Shopping Addons

[Eitri Shopping Addons](https://github.com/eitri-tech/eitri-shopping-addons) are a fast and easy way to integrate common provider resources into your Eitri applications. You just need to set your Eitri-Apps to use the selected addon as dependence and import it where you need to use.

## Vtex Newtail

[Newtail](https://www.newtail.com.br/) is the leading Retail Media solution in Latin America, supporting major retailers in building a strategy to monetize their digital assets.

The platform offers a simplified, self-service approach to the commercialization of advertising spaces such as sponsored products, banners, and videos, as well as audience monetization through offsite channels using services like Google and Meta.

- [Newtail website](https://www.newtail.com.br/)
- [Newtail dashboard](https://app.newtail.com.br/)
- [Newtail documentation](https://newtail-media.readme.io/reference/overview)

## AddonService - Newtail Integration

The `AddonService` handles communication between your Eitri application and the [Newtail](https://www.newtail.com.br/) Retail Media API. It provides helper methods to fetch personalized content (such as banners) and notify user interactions like impressions and views.

### 📦 How it works

The `AddonService.js` exposes two main static methods:

#### `getAddons(data, publisherId, baseUrl?)`

This method performs a POST request to the Newtail API to retrieve media assets based on user session, search term, and placement configuration.

```js
const requestData = {
  context: "search",
  term: "test",
  user_id: "USER_ID",
  session_id: "SESSION_ID",
  placements: {
    bannerhome: { quantity: 1, size: "200x200", types: ["banner"] },
  },
}

await AddonService.getAddons(requestData, "PUBLISHER_ID");
```

- **data**: Object containing context, search term, user/session IDs, and placement configuration.
- **publisherId**: Your Newtail publisher UUID.
- **baseUrl** (optional): Defaults to `https://newtail-media.newtail.com.br/v1/rma/` but can be overridden if necessary.


#### `notifyEvent(url, data)`

Sends an event notification to Newtail, used for tracking impressions, views or clicks of media.

```js
await AddonService.notifyEvent(url, {
  userId: "USER_ID",
  sessionId: "SESSION_ID"
})
```
- **url**: URL provided by Newtail for impression or view tracking.
- **data**: Object containing userId and sessionId.

