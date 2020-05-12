const saveAs = require("file-saver");

export default class WebtoonAutomationServiceClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async prepare(file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${this.baseURL}/v1/prepare`, {
      method: 'POST',
      body: formData
    });
    const blob = await response.blob();
    saveAs(blob);
  }
}