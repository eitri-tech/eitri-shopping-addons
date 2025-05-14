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
}