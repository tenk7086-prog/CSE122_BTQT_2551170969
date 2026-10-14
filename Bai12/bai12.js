function inLich(){
    var ngay =  parseInt(document.getElementById"inNgay");
    var thang =  parseInt(document.getElementById"inThang");
    var nam =  parseInt(document.getElementById"inNam");


var d = new Date(nam, thang - 1, ngay);

var dsThu = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư",
               "Thứ năm", "Thứ sáu", "Thứ bảy"];


document.getElementById("nam").innerHTML = d.getFullYear();
document.getElementById("thang").innerHTML ="Tháng" + (d.getFullYear());
document.getElementById("ngay").innerHTML = d.getDate();
document.getElementById("thu").innerHTML = dsThu[d.getDay()];

var gio= new Date().getHours();
var chao;
if(gio < 11) chao = "Chào buổi sáng!";
else if(gio <13) chao = "Chào buổi trưa!";
else if(gio <18) chao = "Chào buổi chiều!";
else chao = "Chào buổi tối";

document.getElementById("loichao").innerHTML = chao;

}

document.getElementById("btnIn").addEventListener("click",inLich);