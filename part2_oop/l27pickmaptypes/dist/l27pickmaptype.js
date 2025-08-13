"use strict";
const ProductObj = {
    title: "Redbull"
};
const userObj = {
    name: "Bo BO",
    age: 25,
};
function Employeefun(obj) {
    console.log(`${obj.name} = ${obj.position}`);
}
Employeefun({
    name: "Ko Ko",
    position: "Developer"
});
