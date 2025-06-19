// khai bao ham feet sang meter
function feetToMeter() {
    const feet = document.getElementById("feet").value;
    let feettometer = parseFloat((feet) * 0.305);
    document.getElementById("result_meter").innerHTML = feettometer.toFixed(3) + " meter" ;
}
// khai bao ham meter sang feet
function meterToFeet() {
    const meter = document.getElementById("meter").value;
    let metertofeet = parseFloat((meter) * 3.279);
    document.getElementById("result_feet").innerHTML = metertofeet.toFixed(3) + " feet" ;
}