<template>
  <div>
    <div
      class="d-flex flex-column justify-space-between align-center"
      style="height: 100svh; width: 100svw"
    >
      <v-spacer></v-spacer>
      <div class="d-flex justify-center" style="max-width: 800px">
        <img
          class="fadeInAnimation"
          src="/img/logo.webp"
          alt="Logo"
          style="height: 60%"
        />
      </div>
      <v-spacer></v-spacer>

      <div
        class="d-flex flex-column justify-center align-center"
        @click="goToMainContent"
      >
        <div class="custom-text fadeInAnimation">Buy Tickets</div>
        <v-icon class="customIcon fadeInAnimation">mdi-arrow-down-bold</v-icon>
      </div>
    </div>
    <div id="mainContent" style="padding: 0 10px 100px 10px">
      <MainEventCard />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {
    goToMainContent() {
      // Scroll to the element with the ID 'mainContent'
      const element = document.getElementById('mainContent');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the element
      }
    },
  },
};
</script>

<style scoped>
.custom-text {
  color: white;
  font-weight: 600;
  z-index: 10;
}
.customIcon {
  font-size: 4rem;
  color: white;
}

.fadeInAnimation {
  opacity: 0;
  animation: fadeIn 4s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
