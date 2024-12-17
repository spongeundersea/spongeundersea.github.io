"use strict";
let destination = "https://nowgg.lol/apps/uncube/7074/now.html";
const gameframe = document.getElementById("frame");

registerSW()
  .then(() => {
    gameframe.src = (__uv$config.prefix + __uv$config.encodeUrl(destination));
  })
  .catch((err) => {
    alert(`Encountered error:\n${err}`);
  });
