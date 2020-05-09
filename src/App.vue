<template>
  <div id="app">
    <h1>Hello</h1>
    <input type="file" ref="file" id="file" @change="handleFileUpload" />
    <button @click="uploadFile">Upload!!</button>
  </div>
</template>

<script>
import { WebtoonAutomationServiceClient } from "./api";

export default {
  name: "App",
  data() {
    return {
      isUploading: false,
      file: null,
      client: new WebtoonAutomationServiceClient("http://localhost:8000"),
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    uploadFile() {
      this.isUploading = true;
      this.client
        .prepare(this.file)
        .catch((error) => window.console.log(error))
        .finally(() => {
          this.isUploading = false;
        });
    },
  },
};
</script>
