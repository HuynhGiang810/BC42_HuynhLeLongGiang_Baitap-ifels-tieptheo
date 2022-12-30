document.getElementById("read").onclick = function () {
    let n = document.getElementById("number").value;
    let x = Math.floor(n / 100); // Lấy hàng trăm
    let y = Math.floor(n % 100 / 10); // Lấy hàng chục
    let z = n % 10; // Lấy hàng đơn vị
    // Hàng trăm
    if (n < 100 || n > 999) {
        alert("Dữ liệu nhập không đúng")
    }
    else if (x == 1) {
        x = "một trăm";
    }
    else if (x == 2) {
        x = "hai trăm";
    }
    else if (x == 3) {
        x = "ba trăm";

    }
    else if (x == 4) {
        x = "bốn trăm";
    }
    else if (x == 5) {
        x = "năm trăm";
    }
    else if (x == 6) {
        x = "sáu trăm";
    }
    else if (x == 7) {
        x = "bảy trăm";
    }
    else if (x == 8) {
        x = "tám trăm";
    }
    else if (x == 9) {
        x = "chín trăm";
    }
    // Hàng chục
    if (y == 0) {
        y = "lẻ";
    }
    else if (y == 1) {
        y = "mười";
    }
    else if (y == 2) {
        y = "hai mươi";
    }
    else if (y == 3) {
        y = "ba mươi";
    }
    else if (y == 4) {
        y = "bốn mươi";
    }
    else if (y == 5) {
        y = "năm mươi";
    }
    else if (y == 6) {
        y = "sáu mươi";
    }
    else if (y == 7) {
        y = "bảy mươi";
    }
    else if (y == 8) {
        y = "tám mươi";
    }
    else if (y == 9) {
        y = "chín mươi";
    }

    // Hàng đơn vị
    if (z == 0) {
        z = "";
    }
    else if (z == 1) {
        z = "một";
    }
    else if (z == 2) {
        z = "hai";
    }
    else if (z == 3) {
        z = "ba";
    }
    else if (z == 4) {
        z = "bốn";
    }
    else if (z == 5) {
        z = "năm"
    }
    else if (z == 6) {
        z = "sáu";
    }
    else if (z == 7) {
        z = "bảy";
    }
    else if (z == 8) {
        z = "tám";
    }
    else if (z == 9) {
        z = "chín";
    }

    let ketqua = document.getElementById("output").innerHTML = x + " " + y + " " + z
}
