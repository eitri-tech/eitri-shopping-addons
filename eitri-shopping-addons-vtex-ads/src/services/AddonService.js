import Eitri from "eitri-bifrost";

export default class AddonService {
  static async getAddons(data, publisherId, baseUrl = 'https://newtail-media.newtail.com.br/v1/rma/') {
    try {
      const response = await Eitri.http.post(baseUrl + publisherId, data);
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