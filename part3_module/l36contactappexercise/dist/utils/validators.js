"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexObj = void 0;
exports.validaorField = validaorField;
exports.regexObj = {
    name: /^[a-zA-Z ]{3,30}$/,
    email: /^[\w. ]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/,
    phone: /^\d{10}$/
};
function validaorField(field, value) {
    const pattern = exports.regexObj[field];
    if (!pattern)
        return true;
    return pattern.test(value);
}
