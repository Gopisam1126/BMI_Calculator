function calcBmi() {

    var unit = document.getElementById("unit");
    var res = document.getElementById("resBMI");
    const age = document.getElementById("aTbox").value;
    const agei = parseInt(age);
    const h = document.getElementById("heightIn").value;
    const w = document.getElementById("weightIn").value;
    const hi = parseInt(h);
    const hm = hi / 100;
    const wi = parseInt(w);

    if (h.trim() !== "" && w.trim() !== "" && age.trim() !== "") {
        var bmi = Math.round(wi / (hm * hm));
        res.textContent = bmi;
        if (bmi < 16) {
            res.style.color = "red";
        } else if (bmi <= 17 && bmi >= 16) {
            res.style.color = "orange";
        } else if (bmi <= 18.5 && bmi > 17) {
            res.style.color = "yellow";
        } else if (bmi <= 25 && bmi >18.5) {
            res.style.color = "#00bf72";
        } else if (bmi <= 30 && bmi >25) {
            res.style.color = "yellow";
        } else if (bmi <= 35 && bmi >30) {
            res.style.color = "orange";
        } else if (bmi <= 40 && bmi >35) {
            res.style.color = "red";
        } else if (bmi > 40) {
            res.style.color = "#A52A2A";
        } else {
            res.style.color = "#fff";
        }
    } else {
        res.textContent = "Please Enter The details";
        res.style.color = "red";
        res.style.marginLeft = "-8.5rem"
        unit.textContent = "";

    }
}

function clearAll() {
    res.textContent = 20;
    res.style.color = "#00bf72";
}