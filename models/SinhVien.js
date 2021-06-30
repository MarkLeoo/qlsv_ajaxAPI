var SinhVien = function (masv, hoten, email, loaisinhvien, diemtoan, diemly, diemhoa, diemrenluyen) {
    this.maSinhVien = masv;
    this.tenSinhVien = hoten;
    this.email = email;
    this.loaiSinhVien = loaisinhvien;
    this.diemToan = diemtoan;
    this.diemLy = diemly;
    this.diemHoa = diemhoa;
    this.diemRenLuyen = diemrenluyen;
    this.tinhDiemTrungBinh = function () {
        return (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
    }
}