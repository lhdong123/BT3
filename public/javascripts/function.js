thong_bao = document.getElementById("thongbao");
thong_bao1 = document.getElementById("thongbao1");
function kiemtrasothuc(x, y) {
    count = 0;
    for (i = 0; i < x.length; i++) {
        if (x[i] == ".") {
            count = count + 1;
        }
        if (count > 1) {
            thong_bao.innerHTML = "Thông báo:";
            thong_bao1.innerHTML = "Giá trị nhập ở ô ".fontcolor("red") + y.fontcolor("red").italics() + " không phải số thực".fontcolor("red");
            return false;
        }
        if (x[i] != "." && x[0] != "-" && count <= 1) {
            if (Number.isNaN(parseInt(x[i]))) {
                thong_bao.innerHTML = "Thông báo:";
                thong_bao1.innerHTML = "Giá trị nhập ở ô ".fontcolor("red") + y.fontcolor("red").italics() + " không phải số thực".fontcolor("red");
                return false;
            }
        }
    }
    thong_bao.innerHTML = "";
    thong_bao1.innerHTML = "";
    return true;
}

function thongbao(event) {
    thong_bao.innerHTML = "Thông báo:";
    thong_bao1.innerHTML = "Chưa chọn phép tính".fontcolor("red");
    event.preventDefault();
    return true;
}

function kiemtraduso(event) {

    if (document.getElementById("num1").value == "" || document.getElementById("num2").value == "") {
        thong_bao.innerHTML = "Thông báo:";
        thong_bao1.innerHTML = "Chưa điền đủ hai số để thực hiện phép tính".fontcolor("red");
        event.preventDefault();
        return false;
    }

   

    thong_bao.innerHTML = "";
    thong_bao1.innerHTML = "";
    return tinhtoan(event);
}

function tinhtoan(event) {
    dau = "";
    radioboxs = document.getElementsByName("pheptinh");

    for (i = 0; i < radioboxs.length; i++) {
        if (radioboxs[i].checked) {
            dau = radioboxs[i].value;
            break;
        }
    }

    if (dau == "") {
        thongbao(event);
        return false;
    }

    const x = document.getElementById("num1");
    const y = document.getElementById("num2");
    if(kiemtrasothuc(x.value,x.name) == false || kiemtrasothuc(y.value,y.name) == false)
    {
        event.preventDefault();
        return false;
    }

    return true;
}