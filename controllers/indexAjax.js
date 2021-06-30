var svService = new SinhVienService();

var layDanhSachSinhVien = function () {
    var promise = svService.layDanhSachSinhVien();
    promise.then(function (result) {
        var content = '';
        for (var i = 0; i < result.data.length; i++) {
            var sv = result.data[i];
            var sinhVien = new SinhVien();
            sinhVien.maSinhVien = sv.maSinhVien;
            sinhVien.tenSinhVien = sv.tenSinhVien;
            sinhVien.email = sv.email;
            sinhVien.loaiSinhVien = sv.loaiSinhVien;
            sinhVien.diemToan = sv.diemToan;
            sinhVien.diemLy = sv.diemLy;
            sinhVien.diemHoa = sv.diemHoa;
            sinhVien.diemRenLuyen = sv.diemRenLuyen;
            content += `
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
        document.getElementById("renderContent").innerHTML = content;
    }).catch(function (err) {
        console.log(err.response.data);
    })
}
layDanhSachSinhVien();

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

    axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
        method: 'POST',
        data: sv,
    }).then(function (result) {
        layDanhSachSinhVien();
    }).catch(function (err) {
        console.log(err.response.data);
    })
}

var xoaSinhVien = function (masv) {
    var promise = svService.xoaSinhVien(masv);
    promise.then(function (res) {
        layDanhSachSinhVien();
    }).catch(function (err) {
        console.log(err.response.data);
    })
}

var suaSinhVien = function (masv) {
    var promise = svService.layThongTinSinhVien(masv);
    promise.then(function (res) {
        var sv = res.data;
        document.getElementById("maSinhVien").value = sv.maSinhVien;
        document.getElementById("tenSinhVien").value = sv.tenSinhVien;
        document.getElementById("email").value = sv.email;
        document.getElementById("loaiSinhVien").value = sv.loaiSinhVien;
        document.getElementById("diemToan").value = sv.diemToan;
        document.getElementById("diemLy").value = sv.diemLy;
        document.getElementById("diemHoa").value = sv.diemHoa;
        document.getElementById("diemRenLuyen").value = sv.diemRenLuyen;
    }).catch(function (err) {
        console.log(err.response.data);
    })
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

    var promise = svService.capNhatThongTinSinhVien(svUpdate.maSinhVien, svUpdate);
    promise.then(function (res) {
        layDanhSachSinhVien();
        var tagInputs = document.querySelectorAll("input");
        for (var i = 0; i < tagInputs.length; i++) {
            var item = tagInputs[i];
            item.value = "";
        }
    }).catch(function (err) {
        console.log(err.response.data);
    })
}
