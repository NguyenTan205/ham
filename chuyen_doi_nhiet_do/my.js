function temperatureConverter(valNum) {
    valNum = parseInt(valNum);
    document.getElementById("outputCelsius").innerHTML = ((valNum-32) / 1.8).toFixed(2) ; // tofixed la ham lam tron so
}