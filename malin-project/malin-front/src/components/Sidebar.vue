<template>
  <div class="sidebar">
    <SidebarRow
      v-for="(fire, index) in fires"
      :key="fire.id"
      :id="fire.id"
      :row-number="index + 1"
      :title="fire.admArea"
      @change-fire="$emit('change-fire', $event)"
    />
  </div>
</template>

<script>
import SidebarRow from "./SidebarRow.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarRow
  },
  props: {
    fires: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  height: 100%;
  background: var(--dark_100);
  border-right: 1px solid var(--ultramarine_80);
}
</style>
