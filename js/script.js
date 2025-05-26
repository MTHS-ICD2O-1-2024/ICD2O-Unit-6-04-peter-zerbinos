// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function calculateVolumeOfSphere() {
  // this calculates the volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('radius')
  console.log(radius)

  // process
  const radiusOfSphere = parseFloat(radius)
  const volumeOfSphere = (4 / 3) * Math.PI * (radiusOfSphere ** 3)

  // output
  document.getElementById('volume').innerHTML = "Volume is: " + volumeOfSphere.toFixed(2) + "mm³"
  document.getElementById('radius').innerHTML = radiusOfSphere + "mm"
}

// On page load, display radius
window.onload = function() {
  document.getElementById('radius').innerHTML = 0 + "mm"
  document.getElementById('volume').innerHTML = "Volume is: " + 0 + "mm³"
}
