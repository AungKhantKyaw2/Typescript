"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const validators_1 = require("../utils/validators");
class UserService {
    constructor() {
        this.users = [];
        this.initid = 1;
    }
    createUser(name, email, phone) {
        if (!(0, validators_1.validaorField)("name", name))
            return "Invalid name format!";
        if (!(0, validators_1.validaorField)("email", email))
            return "Invalid email format!";
        if (!(0, validators_1.validaorField)("phone", phone))
            return "Invalid phone format!";
        const newuser = { id: this.initid++, name, email, phone };
        this.users.push(newuser);
        return newuser;
    }
    getAllUsers() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
    updateUser(id, fields) {
        const useobj = this.getUserById(id);
        if (!useobj)
            return "User not found";
        if (useobj.name && !(0, validators_1.validaorField)("name", useobj.name))
            return "Invalid name format";
        if (useobj.email && !(0, validators_1.validaorField)("email", useobj.email))
            return "Invalid email format";
        if (useobj.phone && !(0, validators_1.validaorField)("phone", useobj.phone))
            return "Invalid phone format";
        Object.assign(useobj, fields);
        return useobj;
    }
    deleteUser(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1)
            return "User not found!";
        this.users.splice(index, 1);
        return "User deleted successfully";
    }
}
exports.UserService = UserService;
