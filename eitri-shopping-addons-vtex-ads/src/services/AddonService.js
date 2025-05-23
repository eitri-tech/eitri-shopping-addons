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
/*

TEMOS

{
  "ad_id": "f89d2841-e05e-4fe0-8f48-75971610f87e",
  "campaign_name": "home_3_prod_patroc",
  "click_url": "https://events.newtail-media.newtail.com.br/v1/beacon/click/f89d2841-e05e-4fe0-8f48-75971610f87e?publisher_id=72c5a3e2-853e-449d-afda-fa41d8eb2bec&ad_type=product&campaign_id=c15a89b3-7df3-4f79-a3d1-8c02043d5767&pname=home_3_prod_patroc&context=home&event_id=98ef4c6a-bd4e-4ba7-88e5-56549257353c&request_id=019a5823-8279-4d7e-982f-4f0e077966de&session_id=12345&requested_at=1748033170462&sign=0f289dfcfcd47cbe36c5c871eb635e329b7ffdd2df6b20b4c0ab1720aa342b31",
  "destination_url": "/aparelho-barbear-mach3-sensi---gillette-mach3/p",
  "impression_url": "https://events.newtail-media.newtail.com.br/v1/beacon/impression/f89d2841-e05e-4fe0-8f48-75971610f87e?publisher_id=72c5a3e2-853e-449d-afda-fa41d8eb2bec&ad_type=product&campaign_id=c15a89b3-7df3-4f79-a3d1-8c02043d5767&pname=home_3_prod_patroc&context=home&event_id=98ef4c6a-bd4e-4ba7-88e5-56549257353c&request_id=019a5823-8279-4d7e-982f-4f0e077966de&session_id=12345&requested_at=1748033170462&sign=3c8c17047105f7072bb30a453a9e117ed2ee1941058fa3d12cef4e52f28c5e35",
  "position": 4,
  "product_metadata": {},
  "product_name": "Aparelho Barbear Mach3 Sensi - Gillette Mach3",
  "product_sku": "677",
  "seller_id": null,
  "type": "product",
  "view_url": "https://events.newtail-media.newtail.com.br/v1/beacon/view/f89d2841-e05e-4fe0-8f48-75971610f87e?publisher_id=72c5a3e2-853e-449d-afda-fa41d8eb2bec&ad_type=product&campaign_id=c15a89b3-7df3-4f79-a3d1-8c02043d5767&pname=home_3_prod_patroc&context=home&event_id=98ef4c6a-bd4e-4ba7-88e5-56549257353c&request_id=019a5823-8279-4d7e-982f-4f0e077966de&session_id=12345&requested_at=1748033170462&sign=d3c0f145fcd746f0e8f7fa7b52ed79b854df793238328d896006dae5ce75757f"
},


  PREÇO
  IMAGEM
  CONDIÇÕES DE PAGAMENTO 
  DESCONTO

1° pegar os SKUs da newTail
2° mapear em array de SKUs
3° fazer a chamada na VTEX passando os SKUs

https://torratorra.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=skuId:135802&fq=skuId:166807
*/
  static async getProductsAds(data, publisherId, baseUrl = 'https://newtail-media.newtail.com.br/v1/rma/') {
    const remoteConfig = await Eitri.environment.getRemoteConfigs()
    const account = remoteConfig?.providerInfo?.account

    // const vtexBaseUrl = `https://${account}.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=skuId:135802&fq=skuId:166807`;
    let vtexAdsData = null;
    let productSkus = null;
    const arrVtexProducts = []

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

  
      if (productSkus && Array.isArray(productSkus)) {
        const skuQueryString = productSkus.map(sku => `fq=skuId:${sku}`).join('&');
        const vtexUrl = `https://${account}.vtexcommercestable.com.br/api/catalog_system/pub/products/search?${skuQueryString}`;
        const responseVtex = await Eitri.http.get(vtexUrl);
        console.info("VresponseVtex", JSON.stringify(responseVtex.data));
      } 
      

      return response.data;
    } catch (error) {
      console.error("Error during search API call:", error);
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