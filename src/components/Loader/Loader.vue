<template>
  <div class="loader-container">
    <div class="container">
      <div class="loader">
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--text"></div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style lang="scss" scoped>
.loader-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-size: 2rem;
  z-index: 99999;
  font-weight: normal;
}

.loader {
  height: 20px;
  width: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.loader--dot {
  animation-name: loader;
  animation-timing-function: ease-in-out;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: black;
  position: absolute;

  &:first-child {
    background-color: #111;
    animation-delay: 0.5s;
  }

  &:nth-child(2) {
    background-color: #222;
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    background-color: #333;
    animation-delay: 0.3s;
  }

  &:nth-child(4) {
    background-color: #666;
    animation-delay: 0.2s;
  }

  &:nth-child(5) {
    background-color: #999;
    animation-delay: 0.1s;
  }

  &:nth-child(6) {
    background-color: #fff;
    animation-delay: 0s;
  }
}

.loader--text {
  position: absolute;
  top: 200%;
  left: 0;
  right: 0;
  width: 4rem;
  margin: auto;

  &:after {
    content: "Loading";
    font-weight: normal;
    animation-name: loading-text;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
}

@keyframes loader {
  15% {
    transform: translateX(0);
  }

  45% {
    transform: translateX(230px);
  }

  65% {
    transform: translateX(230px);
  }

  95% {
    transform: translateX(0);
  }
}

@keyframes loading-text {
  0% {
    content: "Loading";
  }

  25% {
    content: "Loading.";
  }

  50% {
    content: "Loading..";
  }

  75% {
    content: "Loading...";
  }
}
</style>
