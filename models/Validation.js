var Validation = function () {
    this.kiemTraRong = function (value, name, selectorError) {
        if (value.trim() === "") {
            document.querySelector(selectorError).innerHTML = `${name} không được rỗng`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    this.kiemTraEmail = function (value, name, selectorError) {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexEmail.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = `${name} không phải là email`;
        return false;
    }
    this.kiemTraSo = function (value, name, selectorError) {
        var regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = `${name} không phải là số`;
        return false;
    }
    this.kiemTraChu = function (value, name, selectorError) {
        var regexLetter = /^[a-z A-Z]+$/;
        if (regexLetter.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = `${name} không phải là chữ`;
        return false;
    }
}