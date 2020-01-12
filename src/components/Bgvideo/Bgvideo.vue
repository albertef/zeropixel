<template>
  <div class="video">
    <div class="bg-video">
      <video
        autoplay=""
        muted=""
        loop=""
        playsinline=""
        id="videocontainer"
        preload="auto"
        width="100%"
        height="100%"
        poster=""
      >
        <source src="../../assets/videos/bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<style>
.bg-video {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100vh;
  overflow: hidden;
  z-index: -1;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 0;
}
</style>
