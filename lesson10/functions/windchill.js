function windChill() {
  var temp = parseFloat(document.getElementById("tempF").innerHTML);
  var ws = parseFloat(document.getElementById("speed").innerHTML);

  if (temp <= 50 || ws > 3.0) {
    var chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(ws, 0.16) + 0.4275 * temp * Math.pow(ws, 0.16);
    document.getElementById("valueWindchill").innerHTML = chill.toFixed();
  } else {
    document.getElementById("valueWindchill").innerHTML = "N/A";
  }
}

document.onload = windChill();