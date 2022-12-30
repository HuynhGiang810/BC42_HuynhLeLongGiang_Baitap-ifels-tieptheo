document.getElementById("cal").onclick = function () {
    let N = document.getElementById("month").value;
    let Y = document.getElementById("year").value;
    let x;
    if (N == 1 || N == 3 || N == 5 || N == 7 || N == 8 || N == 10 || N == 12) {
        x = 31
    }
    if (N == 2) {
        if (Y % 400 == 0) {
            x = 29;
        } else {
            x = 28;
        }
    }
    if(N == 4 || N == 6 || N == 9 || N == 11){
        x = 30;
    }

    let ketqua = "Số ngày trong tháng này là: " + "" + x + "ngày";
    document.getElementById("output").innerHTML = ketqua;
}