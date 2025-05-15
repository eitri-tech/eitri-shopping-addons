import Eitri from "eitri-bifrost";

export default class AddonService {
  static async getAddons(data) {
    try {
      const response = await Eitri.http.post("https://newtail-media.newtail.com.br/v1/rma/72c5a3e2-853e-449d-afda-fa41d8eb2bec", data);
      return response.data;
    } catch (error) {
      console.error("Error during search API call:", error);
      throw error;
    }
  }

  static async sendImpression(impressionUrl, data) {
    try {
      const body = {
        user_id: data.userId,
        session_id: data.sessionId
      };
  
      const response = await Eitri.http.post(impressionUrl, body);
  
      if (response.status === 200) {
        console.log("Impression URL triggered successfully:", impressionUrl);
      } else {
        console.warn("Unexpected response status for impression URL:", response.status);
      }
    } catch (error) {
      console.error("Error triggering impression URL:", error);
    }
  }

  static async sendView(viewUrl, data) {
    try {
      const body = {
        user_id: data.userId,
        session_id: data.sessionId
      };
  
      const response = await Eitri.http.post(viewUrl, body);
  
      if (response.status === 200) {
        console.log("View URL triggered successfully:", viewUrl);
      } else {
        console.warn("Unexpected response status for view URL:", response.status);
      }
    } catch (error) {
      console.error("Error triggering view URL:", error);
    }
  }
}