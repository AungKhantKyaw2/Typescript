"use strict";
;
function applicant(id, name, hobbies) {
    return {
        id: id,
        name: name,
        hobbies: hobbies
    };
}
let result1 = applicant(1001, "Nu Nu", ["reading,sport"]);
console.log(result1);
function application(id, name, hobbies) {
    return {
        id,
        name,
        hobbies
    };
}
let result2 = application(1002, "Yu Yu", ["sport", "swimming"]);
console.log(result2);
function cvform(id, name, hobbies) {
    return {
        id,
        name,
        hobbies,
        gethobbies() {
            return this.hobbies;
        }
    };
}
const result3 = cvform(1003, "Kyaw Kyaw", ["football", "travel"]);
console.log(result3);
function getinfo(id, name, hobbies) {
    return {
        id,
        name,
        hobbies,
        gethobbies() {
            return result4.hobbies;
        }
    };
}
const result4 = getinfo(1004, "U Ba", ["reading", "travel"]);
console.log(result4);
console.log(result4.gethobbies());
function personalinfo(id, name, hobbies, tasks) {
    return {
        id,
        name,
        hobbies,
        gethobbies() {
            return result5.hobbies;
        },
        tasks
    };
}
const result5 = personalinfo(1005, "Shwe Zin", ["reading", "travel"], ["printing", "reporting"]);
console.log(result5);
const productinfo = {
    brand: "Redbull",
    price: 2500.78,
    packing: "Can",
    stock: 12
};
console.log(productinfo);
