<template>
  <Layout>
    <Sidebar
      slot="sidebar"
      :fires="firesList"
      @change-fire="handleChangeFire"
    />
    <RightBoard slot="rightBoard" :fire="activeFire" />
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import Sidebar from "./components/Sidebar.vue";
import RightBoard from "./components/RightBoard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Layout,
    Sidebar,
    RightBoard
  },
  data() {
    return {
      activeFireId: null,
      firesList: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:2017/public/fires")
      .then(response => (this.firesList = response.data.fires));
  },
  computed: {
    activeFire() {
      const fallback = {};
      if (!this.activeFireId) {
        return fallback;
      }

      return (
        this.firesList.find(({ id }) => id === this.activeFireId) || fallback
      );
    }
  },
  methods: {
    handleChangeFire({ id }) {
      this.activeFireId = id;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Girassol", cursive, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #edf5e1;
  background: var(--ultramarine_80);
}

:root {
  --dark_100: #59253a; /*#0b0c10; */
  --dark_80: #1f2833;
  --gray: #895061;
  --ultramarine_100: #66fcf1;
  --ultramarine_80: #edf5e1;
}

html {
  height: 100%;
  /* display: flex; */
}
</style>
