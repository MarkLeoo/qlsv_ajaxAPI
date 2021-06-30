var SinhVienService = function () {
    this.layDanhSachSinhVien = function () {
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',
            method: 'GET'
        });
        return promise;
    }
    this.layThongTinSinhVien = function (masv) {
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${masv}`,
            method: 'GET',
        });
        return promise;
    }
    this.capNhatThongTinSinhVien = function (masv, sinhVienUpdate) {
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${masv}`,
            method: 'PUT',
            data: sinhVienUpdate
        });
        return promise;
    }
    this.xoaSinhVien = function (masv) {
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${masv}`,
            method: 'DELETE'
        });
        return promise;
    }
}