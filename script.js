function calcBmi() {

    var res = document.getElementById("resBMI");
    const age = parseInt(document.getElementById("aTbox").value);
    const h = parseInt(document.getElementById("heightIn").value);
    const hm = h / 100;
    const w = parseInt(document.getElementById("weightIn").value);

    const bmi = Math.round(w / (hm * hm));
    res.textContent = bmi;
    res.style.color = "red";

    if (h.trim() !== "" && w.trim() !== "" && age.trim() !== "") {
        // if (bmi < 16) {
        //     res.style.color = "red";
        // } else if (bmi <= 17 && bmi >= 16) {
        //     res.style.color = "orange";
        // } else if (bmi <= 18.5 && bmi > 17) {
        //     res.style.color = "yellow";
        // } else if (bmi <= 25 && bmi >18.5) {
        //     res.style.color = "green";
        // } else if (bmi <= 30 && bmi >25) {
        //     res.style.color = "yellow";
        // } else if (bmi <= 35 && bmi >30) {
        //     res.style.color = "orange";
        // } else if (bmi <= 40 && bmi >35) {
        //     res.style.color = "red";
        // } else if (bmi > 40) {
        //     res.style.color = "#A52A2A";
        // }
    } else {
        res.textContent = "Please Enter The details"
    }
}