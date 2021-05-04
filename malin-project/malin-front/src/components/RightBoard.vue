<template>
  <div class="right-board">
    <div v-if="!isFireEmpty">
      <div>Id: {{ fire.id }}</div>
      <div>Административный округ: {{ fire.admArea }}</div>
      <div>Месяц: {{ fire.month }}</div>
      <div>Год: {{ fire.year }}</div>
      <div>Количество вызовов: {{ fire.calls }}</div>
    </div>
    <div v-else class="right-board__no-selected">
      Выберите пожарное отделение
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBoard",
  props: {
    fire: {
      type: Object,
      required: true
    }
  },
  computed: {
    isFireEmpty() {
      return Object.keys(this.fire).length === 0;
    }
  },
  methods: {
    yesNo(value) {
      if (value) {
        return "+";
      } else {
        return "-";
      }
    }
  }
};
</script>

<style scoped>
.right-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--dark_100);
}

.right-board .right-board__no-selected {
  font-size: 26px;
  text-align: center;
}
</style>
