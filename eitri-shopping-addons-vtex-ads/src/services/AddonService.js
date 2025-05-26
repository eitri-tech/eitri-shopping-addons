import Eitri from "eitri-bifrost";

export default class AddonService {
  static async getAds(data, publisherId, baseUrl = 'https://newtail-media.newtail.com.br/v1/rma/') {
    try {
      const response = await Eitri.http.post(baseUrl + publisherId, data);
      return response.data;
    } catch (error) {
      console.error("Error during search API call:", error);
      throw error;
    }
  }

  /**
   * Método interno para obter a informação completa dos produtos da VTEX recebidos como array de SKUs
   * @param {Array<string>} productSkus - Array de productSkus.
   * @param {string} vtexUrl - baseURL utilizada para requisição da VTEX.
   * @returns {Promise<Object>} São retornadas informações completas de cada produto do array.
   * @throws Retornará um erro caso não tenha sido informada a URL da VTEX, ou aconteça algum problema na requisição.
  */
  static async _getVtexProducts(productSkus, vtexUrl) {
    if(!vtexUrl){
      console.warn("@AddonService.getVtexProducts - vtexUrl não informada");
      throw new Error("Vtex Url ausente");
    }

    try {
      const skuQueryString = productSkus.map(sku => `fq=skuId:${sku}`).join('&');
      const fullUrl = `${vtexUrl}?${skuQueryString}`;
      const response = await Eitri.http.get(fullUrl);
      if (!response || !response.data) {
        console.warn("@AddonService._getVtexProducts - Resposta inválida da VTEX", response);
        throw new Error("Resposta inválida da VTEX", response);
      }
      return response.data;
    } catch (error) {
      console.error("@AddonService.getVtexProducts - Houve um erro na requisição de produtos da vtex", error);
      throw error;
    }
  }

   /**
   * Método para obter primeiramente obter um array de SKUs
   * @param {Object} data - Objeto contendo os dados necessários para a requisição.
   * @param {string} publisherId - ID do publisher do VTEXAds.
   * @param {string} baseUrl - baseURL necessária para requisição da VTEXAds.
   * @returns {Promise<Object>} São retornadas todas as informações de cada um dos produtos inseridos no array.
   * @throws Retornará um erro caso aconteça algum problema na requisição.
  */
  static async getProductsAds(data, publisherId, baseUrl = 'https://newtail-media.newtail.com.br/v1/rma/') {
    const remoteConfig = await Eitri.environment.getRemoteConfigs()
    const account = remoteConfig?.providerInfo?.account

    let vtexAdsData = null;
    let productSkus = null;

    try {
      const response = await Eitri.http.post(baseUrl + publisherId, data);
      if (response && typeof response === 'object') {
        if(response.data){
          const firstPlacement = Object.keys(response.data)?.[0];
          if (firstPlacement) {
            vtexAdsData = response.data[firstPlacement];
            productSkus = vtexAdsData.map((item) => item.product_sku);
          }
        }
			}

      if (!productSkus || !Array.isArray(productSkus)){
        console.warn("@AddonService.getProductsAds - Houve um erro com os productSkus ", productSkus);
        return
      }

      const vtexBaseUrl = `https://${account}.vtexcommercestable.com.br/api/catalog_system/pub/products/search`;
      const fullProducts = await this._getVtexProducts(productSkus, vtexBaseUrl)

      return fullProducts;
    } catch (error) {
      console.error("@AddonService.getProductsAds - Houve um erro ao obter os produtos patrocinados:", error);
      throw error;
    }
  }

  static async notifyEvent(url, data) {
    try {
      const body = {
        user_id: data.userId,
        session_id: data.sessionId
      };
  
      const response = await Eitri.http.post(url, body);
  
      if (response.status >= 200 && response.status < 300) {
        console.log("URL triggered successfully:", url);
      } else {
        console.warn("Unexpected response status for URL:", response.status);
      }
    } catch (error) {
      console.error("Error triggering URL:", error);
    }
  }
}