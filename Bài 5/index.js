
//Ngày hôm qua
document.getElementById("btnNgayHomQua").onclick = function(){
    let ngay = document.getElementById("date").value;
    let thang = document.getElementById("month").value;
    let nam = document.getElementById("year").value;
    let namnhuan = 0;
    let Yesterday = String(ngay - 1) + "-" + String(thang) + "-" + String(nam);

    if(nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0){
        namnhuan = nam;
    }

    if(ngay == 1 && thang == 5 || thang == 7 || thang == 10 || thang == 12){
        Yesterday = "30" + "-" + String(thang - 1) + "-" + String(nam)
    }else if(ngay == 1 && thang == 1 || thang == 2 || thang == 4 || thang == 6 || thang == 8 || thang == 9 || thang == 11){
        Yesterday = "31" + "-" +  String(thang - 1) + "-" + String(nam)
    }else if(ngay == 1 && thang == 3 && namnhuan){
        Yesterday = "29" + "-" + "2" + "-" + String(nam)
    }else {
        Yesterday = "28" + "-" + "2" + "-" + String(nam)
    }

    if(ngay == 1 && thang == 1){
        Yesterday = "31" + "-" + "12" + "-" + String(nam - 1)
    } else if(ngay != 1){
        Yesterday = String(ngay - 1) + "-" + String(thang) + "-" + String(nam)
    }

    document.getElementById("ngaythangnam").innerHTML = "Ngày hôm qua là: " + " " + Yesterday;
}

//Ngày mai
document.getElementById("btnNgayMai").onclick = function() {
    let ngay = document.getElementById("date").value;
    let thang = document.getElementById("month").value;
    let nam = document.getElementById("year").value;
    let namnhuan = 0;
    let Tomorrow = String(+ngay + 1) + "-" + String(thang) + "-" + String(nam);

    if(nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0){
        namnhuan = nam;
    }

    if(ngay == 31 && thang == 1 || thang == 5 || thang == 7 || thang == 10 || thang == 12){
        Tomorrow = "1" + "-" + String(+thang + 1) + "-" + String(nam);
    }else if(ngay == 30 && thang == 4 || thang == 6 || thang == 9 || thang == 11){
        Tomorrow = "1" + "-" + String(+thang + 1) + "-" + String(nam);
    }else if(thang == 2){
        if(ngay == 29 && namnhuan){
            Tomorrow = "1" + '-' + "3" + "-" + String(nam);
        }else if(ngay == 28){
            Tomorrow = "1" + "-" + "3" + "-" + String(nam);
        }
    }

    if(ngay == 31 && thang == 12){
        Tomorrow = "1" + "-" + "1" + "-" + String(nam + 1);
    }else if(ngay != 28 && ngay != 29 && ngay != 30 && ngay != 31){
        Tomorrow = String(+ngay + 1) + "-" + String(thang) + "-" + String(nam);
    }
    document.getElementById("ngaythangnam").innerHTML = "Ngày mai là ngày: " + " " + Tomorrow;
}