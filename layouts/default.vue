<template>
  <title>Malamdendang.com</title>
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
  </head>
  <div class="background">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <!-- main content -->
  <slot />
</template>

<style>
body {
  scroll-behavior: smooth;
  background-color: black;
}

@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000000;
  overflow: hidden;
}

.background span {
  width: 1vmin;
  height: 1vmin;
  border-radius: 1vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: move;
  animation-duration: 30;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.background span:nth-child(0) {
  color: #e4b244;
  top: 19%;
  left: 81%;
  animation-duration: 101s;
  animation-delay: -116s;
  transform-origin: -16vw -24vh;
  box-shadow: -2vmin 0 0.8628549220689776vmin currentColor;
}
.background span:nth-child(1) {
  color: #e4b244;
  top: 72%;
  left: 11%;
  animation-duration: 120s;
  animation-delay: -166s;
  transform-origin: -21vw -23vh;
  box-shadow: -2vmin 0 0.522725021753097vmin currentColor;
}
.background span:nth-child(2) {
  color: #e4b244;
  top: 67%;
  left: 95%;
  animation-duration: 165s;
  animation-delay: -38s;
  transform-origin: -6vw -4vh;
  box-shadow: 2vmin 0 0.9096589903662813vmin currentColor;
}
.background span:nth-child(3) {
  color: #e4b244;
  top: 14%;
  left: 33%;
  animation-duration: 49s;
  animation-delay: -150s;
  transform-origin: 8vw -12vh;
  box-shadow: 2vmin 0 0.5075922791571719vmin currentColor;
}
.background span:nth-child(4) {
  color: #e4b244;
  top: 47%;
  left: 24%;
  animation-duration: 148s;
  animation-delay: -107s;
  transform-origin: -10vw -24vh;
  box-shadow: 2vmin 0 0.32311074029304065vmin currentColor;
}
.background span:nth-child(5) {
  color: #e4b244;
  top: 30%;
  left: 50%;
  animation-duration: 29s;
  animation-delay: -149s;
  transform-origin: -7vw -1vh;
  box-shadow: -2vmin 0 0.5729718798265018vmin currentColor;
}
.background span:nth-child(6) {
  color: #e4b244;
  top: 40%;
  left: 23%;
  animation-duration: 109s;
  animation-delay: -44s;
  transform-origin: -5vw 1vh;
  box-shadow: 2vmin 0 0.8259634329753454vmin currentColor;
}
.background span:nth-child(7) {
  color: #e4b244;
  top: 53%;
  left: 4%;
  animation-duration: 138s;
  animation-delay: -184s;
  transform-origin: 19vw -9vh;
  box-shadow: -2vmin 0 0.6326348702915487vmin currentColor;
}
.background span:nth-child(8) {
  color: #e4b244;
  top: 30%;
  left: 8%;
  animation-duration: 70s;
  animation-delay: -149s;
  transform-origin: 20vw 21vh;
  box-shadow: 2vmin 0 0.6101642069151119vmin currentColor;
}
.background span:nth-child(9) {
  color: #e4b244;
  top: 30%;
  left: 16%;
  animation-duration: 92s;
  animation-delay: -114s;
  transform-origin: 18vw -8vh;
  box-shadow: 2vmin 0 0.9639665147674685vmin currentColor;
}
.background span:nth-child(10) {
  color: #e4b244;
  top: 4%;
  left: 86%;
  animation-duration: 147s;
  animation-delay: -81s;
  transform-origin: 0vw 7vh;
  box-shadow: 2vmin 0 0.876600920400264vmin currentColor;
}
.background span:nth-child(11) {
  color: #e4b244;
  top: 38%;
  left: 9%;
  animation-duration: 159s;
  animation-delay: -168s;
  transform-origin: -10vw -6vh;
  box-shadow: -2vmin 0 1.089913604478685vmin currentColor;
}
.background span:nth-child(12) {
  color: #e4b244;
  top: 84%;
  left: 86%;
  animation-duration: 142s;
  animation-delay: -2s;
  transform-origin: 24vw 25vh;
  box-shadow: -2vmin 0 0.7818680859507177vmin currentColor;
}
.background span:nth-child(13) {
  color: #e4b244;
  top: 79%;
  left: 11%;
  animation-duration: 182s;
  animation-delay: -172s;
  transform-origin: -6vw -23vh;
  box-shadow: 2vmin 0 1.1338309898363457vmin currentColor;
}
.background span:nth-child(14) {
  color: #e4b244;
  top: 94%;
  left: 9%;
  animation-duration: 120s;
  animation-delay: -64s;
  transform-origin: 24vw 20vh;
  box-shadow: -2vmin 0 0.4891913120136995vmin currentColor;
}
.background span:nth-child(15) {
  color: #e4b244;
  top: 10%;
  left: 38%;
  animation-duration: 85s;
  animation-delay: -133s;
  transform-origin: 21vw -17vh;
  box-shadow: 2vmin 0 0.43711780107558496vmin currentColor;
}
.background span:nth-child(16) {
  color: #e4b244;
  top: 52%;
  left: 49%;
  animation-duration: 14s;
  animation-delay: -16s;
  transform-origin: 22vw -22vh;
  box-shadow: 2vmin 0 0.9596006070927838vmin currentColor;
}
.background span:nth-child(17) {
  color: #e4b244;
  top: 71%;
  left: 54%;
  animation-duration: 171s;
  animation-delay: -83s;
  transform-origin: -8vw -3vh;
  box-shadow: -2vmin 0 0.25490215184507825vmin currentColor;
}
.background span:nth-child(18) {
  color: #e4b244;
  top: 81%;
  left: 89%;
  animation-duration: 75s;
  animation-delay: -153s;
  transform-origin: 23vw 16vh;
  box-shadow: -2vmin 0 0.585124661146919vmin currentColor;
}
.background span:nth-child(19) {
  color: #e4b244;
  top: 69%;
  left: 37%;
  animation-duration: 157s;
  animation-delay: -16s;
  transform-origin: -7vw -23vh;
  box-shadow: 2vmin 0 0.5984633344965062vmin currentColor;
}
.background span:nth-child(20) {
  color: #e4b244;
  top: 75%;
  left: 70%;
  animation-duration: 202s;
  animation-delay: -130s;
  transform-origin: 12vw 21vh;
  box-shadow: -2vmin 0 0.7250094607922388vmin currentColor;
}
.background span:nth-child(21) {
  color: #e4b244;
  top: 78%;
  left: 12%;
  animation-duration: 63s;
  animation-delay: -63s;
  transform-origin: 5vw 4vh;
  box-shadow: 2vmin 0 0.772142589782568vmin currentColor;
}
.background span:nth-child(22) {
  color: #e4b244;
  top: 63%;
  left: 16%;
  animation-duration: 12s;
  animation-delay: -133s;
  transform-origin: 1vw 18vh;
  box-shadow: -2vmin 0 1.2120743600367216vmin currentColor;
}
.background span:nth-child(23) {
  color: #e4b244;
  top: 29%;
  left: 93%;
  animation-duration: 28s;
  animation-delay: -193s;
  transform-origin: 8vw 12vh;
  box-shadow: 2vmin 0 0.4638108208877201vmin currentColor;
}
.background span:nth-child(24) {
  color: #e4b244;
  top: 33%;
  left: 77%;
  animation-duration: 95s;
  animation-delay: -87s;
  transform-origin: -2vw 8vh;
  box-shadow: 2vmin 0 0.5404082076089558vmin currentColor;
}
.background span:nth-child(25) {
  color: #e4b244;
  top: 93%;
  left: 93%;
  animation-duration: 9s;
  animation-delay: -66s;
  transform-origin: 20vw 18vh;
  box-shadow: 2vmin 0 0.7817334790327326vmin currentColor;
}
.background span:nth-child(26) {
  color: #e4b244;
  top: 55%;
  left: 55%;
  animation-duration: 191s;
  animation-delay: -121s;
  transform-origin: 2vw 23vh;
  box-shadow: 2vmin 0 0.8407492540472377vmin currentColor;
}
.background span:nth-child(27) {
  color: #e4b244;
  top: 25%;
  left: 37%;
  animation-duration: 19s;
  animation-delay: -127s;
  transform-origin: -2vw -8vh;
  box-shadow: 2vmin 0 0.39708781503849266vmin currentColor;
}
.background span:nth-child(28) {
  color: #e4b244;
  top: 88%;
  left: 76%;
  animation-duration: 59s;
  animation-delay: -56s;
  transform-origin: 18vw 18vh;
  box-shadow: 2vmin 0 1.0528053950329435vmin currentColor;
}
.background span:nth-child(29) {
  color: #e4b244;
  top: 99%;
  left: 10%;
  animation-duration: 45s;
  animation-delay: -6s;
  transform-origin: 7vw 18vh;
  box-shadow: -2vmin 0 0.33045201634756216vmin currentColor;
}
.background span:nth-child(30) {
  color: #e4b244;
  top: 20%;
  left: 24%;
  animation-duration: 75s;
  animation-delay: -91s;
  transform-origin: 4vw -22vh;
  box-shadow: 2vmin 0 0.5307856616702822vmin currentColor;
}
.background span:nth-child(31) {
  color: #e4b244;
  top: 88%;
  left: 91%;
  animation-duration: 182s;
  animation-delay: -56s;
  transform-origin: 0vw 19vh;
  box-shadow: 2vmin 0 1.0482488054800059vmin currentColor;
}
.background span:nth-child(32) {
  color: #e4b244;
  top: 80%;
  left: 92%;
  animation-duration: 134s;
  animation-delay: -170s;
  transform-origin: 20vw -1vh;
  box-shadow: 2vmin 0 0.6280590280594422vmin currentColor;
}
.background span:nth-child(33) {
  color: #e4b244;
  top: 65%;
  left: 95%;
  animation-duration: 25s;
  animation-delay: -134s;
  transform-origin: 16vw -13vh;
  box-shadow: 2vmin 0 0.8058310026934452vmin currentColor;
}
.background span:nth-child(34) {
  color: #e4b244;
  top: 77%;
  left: 78%;
  animation-duration: 19s;
  animation-delay: -126s;
  transform-origin: 3vw 2vh;
  box-shadow: 2vmin 0 1.0187747245397676vmin currentColor;
}
.background span:nth-child(35) {
  color: #e4b244;
  top: 33%;
  left: 89%;
  animation-duration: 155s;
  animation-delay: -187s;
  transform-origin: 19vw -22vh;
  box-shadow: -2vmin 0 0.3172373488609841vmin currentColor;
}
.background span:nth-child(36) {
  color: #e4b244;
  top: 31%;
  left: 72%;
  animation-duration: 72s;
  animation-delay: -91s;
  transform-origin: 15vw 9vh;
  box-shadow: -2vmin 0 1.2104000550387095vmin currentColor;
}
.background span:nth-child(37) {
  color: #e4b244;
  top: 64%;
  left: 91%;
  animation-duration: 56s;
  animation-delay: -174s;
  transform-origin: 15vw 11vh;
  box-shadow: -2vmin 0 0.32926790903536607vmin currentColor;
}
.background span:nth-child(38) {
  color: #e4b244;
  top: 12%;
  left: 43%;
  animation-duration: 126s;
  animation-delay: -68s;
  transform-origin: -21vw 6vh;
  box-shadow: -2vmin 0 1.0143639217744531vmin currentColor;
}
.background span:nth-child(39) {
  color: #e4b244;
  top: 11%;
  left: 26%;
  animation-duration: 192s;
  animation-delay: -6s;
  transform-origin: 8vw -18vh;
  box-shadow: -2vmin 0 1.0326336983520854vmin currentColor;
}
.background span:nth-child(40) {
  color: #e4b244;
  top: 56%;
  left: 93%;
  animation-duration: 124s;
  animation-delay: -74s;
  transform-origin: 0vw 24vh;
  box-shadow: 2vmin 0 0.6612624989460893vmin currentColor;
}
.background span:nth-child(41) {
  color: #e4b244;
  top: 32%;
  left: 37%;
  animation-duration: 149s;
  animation-delay: -140s;
  transform-origin: -16vw 12vh;
  box-shadow: 2vmin 0 0.39181741549801785vmin currentColor;
}
.background span:nth-child(42) {
  color: #e4b244;
  top: 29%;
  left: 68%;
  animation-duration: 18s;
  animation-delay: -182s;
  transform-origin: -19vw 9vh;
  box-shadow: -2vmin 0 1.2307820688511837vmin currentColor;
}
.background span:nth-child(43) {
  color: #e4b244;
  top: 46%;
  left: 66%;
  animation-duration: 152s;
  animation-delay: -65s;
  transform-origin: -21vw 12vh;
  box-shadow: -2vmin 0 0.7826293996173734vmin currentColor;
}
.background span:nth-child(44) {
  color: #e4b244;
  top: 27%;
  left: 98%;
  animation-duration: 204s;
  animation-delay: -127s;
  transform-origin: 25vw 7vh;
  box-shadow: -2vmin 0 0.8650184575815256vmin currentColor;
}
.background span:nth-child(45) {
  color: #e4b244;
  top: 15%;
  left: 80%;
  animation-duration: 190s;
  animation-delay: -48s;
  transform-origin: 23vw 21vh;
  box-shadow: 2vmin 0 0.4130760714241497vmin currentColor;
}
.background span:nth-child(46) {
  color: #e4b244;
  top: 43%;
  left: 37%;
  animation-duration: 103s;
  animation-delay: -89s;
  transform-origin: -4vw -18vh;
  box-shadow: 2vmin 0 0.9230794801206195vmin currentColor;
}
.background span:nth-child(47) {
  color: #e4b244;
  top: 69%;
  left: 67%;
  animation-duration: 204s;
  animation-delay: -80s;
  transform-origin: -11vw 4vh;
  box-shadow: -2vmin 0 0.30983982752170935vmin currentColor;
}
.background span:nth-child(48) {
  color: #e4b244;
  top: 20%;
  left: 63%;
  animation-duration: 21s;
  animation-delay: -42s;
  transform-origin: -16vw -7vh;
  box-shadow: 2vmin 0 1.194259828513493vmin currentColor;
}
.background span:nth-child(49) {
  color: #e4b244;
  top: 83%;
  left: 50%;
  animation-duration: 200s;
  animation-delay: -153s;
  transform-origin: -22vw 19vh;
  box-shadow: -2vmin 0 0.9885778806095442vmin currentColor;
}
</style>
