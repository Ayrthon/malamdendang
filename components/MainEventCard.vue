<template>
  <div class="d-flex justify-center">
    <v-card elevation="16" max-width="990">
      <v-card-text>
        <v-container fluid>
          <v-row class="d-flex flex-wrap">
            <v-col cols="12" md="6">
              <!-- Image that opens in a lightbox when clicked -->
              <v-img
                height="auto"
                max-width="450px"
                src="/img/31jan_voor.webp"
                cover
                @click="openLightbox"
              ></v-img>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column align-start">
              <div id="eventText" class="d-flex flex-column ga-4 pb-15">
                <p class="text-h6">Malam Dendang Live in The Netherlands!</p>
                <p>
                  Join us on <strong>January 31st</strong> for an unforgettable
                  evening with the stars of the night,
                  <strong>Joy Tobing</strong> and
                  <strong>Yulinar Amir Husin</strong>. They will be accompanied
                  by the <strong>Khatulistiwa Band</strong>, with supported
                  performances by <strong>Trio Gracias</strong>,
                  <strong>Donna Sinaga</strong>, and
                  <strong>Odjo Samar Band</strong>.
                </p>
                <p>
                  Your ticket includes a delicious Indonesian meal, a delightful
                  dessert, and a refreshing bottle of water.
                </p>

                <p>
                  Date: <b>January 31ste 2026</b><br />Starting time:
                  <b>15:00</b>
                </p>
                <p>
                  Location:<br />
                  <b>De Broodfabriek</b><br />
                  Volmerlaan 12<br />
                  2288GD Rijswijk<br />
                  <a
                    href="https://maps.app.goo.gl/p2GLnxJwfX45FAep6"
                    target="_blank"
                    style="color: inherit; text-decoration: none"
                  >
                    <v-chip color="info" text-color="white">
                      Open in Google Maps
                      <v-icon class="ml-2">mdi-open-in-new</v-icon>
                    </v-chip>
                  </a>
                </p>
              </div>

              <v-btn
                color="primary"
                block
                max-height="50"
                href="https://eventix.shop/an7ur2s2"
                target="_blank"
                >BUY TICKETS</v-btn
              >
              <v-spacer></v-spacer>
              <br /><br />
              <div
                style="width: 100%"
                class="d-flex flex-column justify-center align-center"
              >
                <p>for questions and inquiries please email:</p>
                <p>
                  <a
                    href="mailto:info@malamdendang.nl"
                    target="_blank"
                    style="color: inherit; text-decoration: none"
                  >
                    <v-chip color="secondary" text-color="white">
                      info@malamdendang.nl
                      <v-icon class="ml-2">mdi-open-in-new</v-icon>
                    </v-chip>
                  </a>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>

    <!-- Lightbox Dialog for image -->
    <v-dialog
      v-model="lightbox"
      max-width="90%"
      style="z-index: 100"
      @click="closeLightbox"
    >
      <v-img :src="imageSrc" contain></v-img>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightbox: false,
      imageSrc: '/img/31jan_voor.webp',
    };
  },
  methods: {
    openLightbox() {
      this.lightbox = true;
    },
    closeLightbox() {
      this.lightbox = false;
    },
  },
};
</script>

<style scoped>
.v-dialog .v-img {
  max-height: 80svh;
  max-width: 90svw;
}
</style>
