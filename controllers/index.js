var mangSinhVien = [];

var validate = new Validation();

document.getElementById("btnThemSinhVien").onclick = function () {
    var sv = new SinhVien();
    sv.maSinhVien = document.getElementById("maSinhVien").value;
    sv.tenSinhVien = document.getElementById("tenSinhVien").value;
    sv.email = document.getElementById("email").value;
    sv.loaiSinhVien = document.getElementById("loaiSinhVien").value;
    sv.diemToan = document.getElementById("diemToan").value;
    sv.diemLy = document.getElementById("diemLy").value;
    sv.diemHoa = document.getElementById("diemHoa").value;
    sv.diemRenLuyen = document.getElementById("diemRenLuyen").value;

    var valid = true;
    valid &= validate.kiemTraRong(sv.maSinhVien, "Mã sinh viên", "#err__maSinhVien__ktRong") & validate.kiemTraRong(sv.tenSinhVien, "Tên sinh viên", "#err__tenSinhVien__ktRong") & validate.kiemTraRong(sv.email, "Đây", "#err__email__ktRong") & validate.kiemTraRong(sv.diemToan, "Điểm toán", "#err__diemToan__ktRong") & validate.kiemTraRong(sv.diemLy, "Điểm lý", "#err__diemLy__ktRong") & validate.kiemTraRong(sv.diemHoa, "Điểm hoá", "#err__diemHoa__ktRong") & validate.kiemTraRong(sv.diemRenLuyen, "Điểm rèn luyện", "#err__diemRenLuyen__ktRong");

    valid &= validate.kiemTraEmail(sv.email, "Đây", "#err__email__ktFormat");
    valid &= validate.kiemTraSo(sv.diemToan, "Điểm toán", "#err__diemToan__ktSo") & validate.kiemTraSo(sv.diemLy, "Điểm lý", "#err__diemLy__ktSo") & validate.kiemTraSo(sv.diemHoa, "Điểm hoá", "#err__diemHoa__ktSo") & validate.kiemTraSo(sv.diemRenLuyen, "Điểm rèn luyện", "#err__diemRenLuyen__ktSo");
    valid &= validate.kiemTraChu(sv.tenSinhVien, "Tên sinh viên", "#err__tenSinhVien__ktChu");

    if (!valid) {
        return;
    }

    mangSinhVien.push(sv);
    taoBang(mangSinhVien);
    luuLocalStorage();
}

var taoBang = function (arrSinhVien) {
    var contentTable = '';
    for (var i = 0; i < arrSinhVien.length; i++) {
        var sv = arrSinhVien[i];
        var sinhVien = new SinhVien(sv.maSinhVien, sv.tenSinhVien, sv.email, sv.loaiSinhVien, sv.diemToan, sv.diemLy, sv.diemHoa, sv.diemRenLuyen);
        contentTable += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td>${sinhVien.tinhDiemTrungBinh().toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger" onclick = "xoaSinhVien('${sinhVien.maSinhVien}')">Xoá</button>
                    <button class="btn btn-info" onclick = "suaSinhVien('${sinhVien.maSinhVien}')">Sửa</button>
                </td>
            </tr>
        `
    }
    document.getElementById("renderContent").innerHTML = contentTable;
}

var suaSinhVien = function (masv) {
    document.getElementById("maSinhVien").disabled = true;
    for (var i = 0; i < mangSinhVien.length; i++) {
        var sv = mangSinhVien[i];
        if (sv.maSinhVien == masv) {
            document.getElementById("maSinhVien").value = sv.maSinhVien;
            document.getElementById("tenSinhVien").value = sv.tenSinhVien;
            document.getElementById("email").value = sv.email;
            document.getElementById("loaiSinhVien").value = sv.loaiSinhVien;
            document.getElementById("diemToan").value = sv.diemToan;
            document.getElementById("diemLy").value = sv.diemLy;
            document.getElementById("diemHoa").value = sv.diemHoa;
            document.getElementById("diemRenLuyen").value = sv.diemRenLuyen;
        }
    }
}

document.getElementById("btnCapNhatSinhVien").onclick = function () {
    var svUpdate = new SinhVien();
    svUpdate.maSinhVien = document.getElementById("maSinhVien").value;
    svUpdate.tenSinhVien = document.getElementById("tenSinhVien").value;
    svUpdate.email = document.getElementById("email").value;
    svUpdate.loaiSinhVien = document.getElementById("loaiSinhVien").value;
    svUpdate.diemToan = document.getElementById("diemToan").value;
    svUpdate.diemLy = document.getElementById("diemLy").value;
    svUpdate.diemHoa = document.getElementById("diemHoa").value;
    svUpdate.diemRenLuyen = document.getElementById("diemRenLuyen").value;
    for (var i = 0; i < mangSinhVien.length; i++) {
        var sv = mangSinhVien[i];
        if (sv.maSinhVien == svUpdate.maSinhVien) {
            sv.maSinhVien = svUpdate.maSinhVien;
            sv.tenSinhVien = svUpdate.tenSinhVien;
            sv.email = svUpdate.email;
            sv.loaiSinhVien = svUpdate.loaiSinhVien;
            sv.diemToan = svUpdate.diemToan;
            sv.diemLy = svUpdate.diemLy;
            sv.diemHoa = svUpdate.diemHoa;
            sv.diemRenLuyen = svUpdate.diemRenLuyen;
        }
    }
    taoBang(mangSinhVien);
    luuLocalStorage();

    document.getElementById("maSinhVien").disabled = false;
    var tagInputs = document.querySelectorAll("input");
    for (var i = 0; i < tagInputs.length; i++) {
        var item = tagInputs[i];
        item.value = '';
    }

}

var xoaSinhVien = function (masv) {
    for (var i = mangSinhVien.length - 1; i >= 0; i--) {
        var sv = mangSinhVien[i];
        if (sv.maSinhVien == masv) {
            mangSinhVien.splice(i, 1);
        }
    }
    taoBang(mangSinhVien);
    luuLocalStorage();
}

var luuLocalStorage = function () {
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    localStorage.setItem('mangSinhVien', sMangSinhVien);
}

var layLocalStorage = function () {
    if (localStorage.getItem('mangSinhVien')) {
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        mangSinhVien = JSON.parse(sMangSinhVien);
        taoBang(mangSinhVien);
    }
}

layLocalStorage();