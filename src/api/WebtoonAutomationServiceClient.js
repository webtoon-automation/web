import Axios from "axios";
import streamSave from "streamsaver";

export default class WebtoonAutomationServiceClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.http = Axios.create({
      baseURL,
    });
  }

  async prepare(file) {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await this.http.post("/v1/prepare", formData, {
      responseType: "stream",
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    window.console.log(data);

    data.pipe(streamSave.createWriteStream("file.zip"));

    return data;
  }
}
