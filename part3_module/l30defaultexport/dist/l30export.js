const userdatas = {
    name: "Kyaw Kyaw",
    age: 20
};
function getname({ name }) {
    return name;
}
function getage({ age }) {
    return age;
}
export default { userdatas, getname, getage };
