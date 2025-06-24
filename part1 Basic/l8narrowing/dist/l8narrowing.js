"use strict";
function myfun(val) {
    if (typeof val === "string") {
        console.log(`String in uppercase: ${val.toLocaleUpperCase()}`);
    }
    else {
        console.log(` Number value:${val}`);
    }
}
myfun("hello sir");
myfun(10);
function getitems(item) {
    if (Array.isArray(item)) {
        return item.length;
    }
    else {
        return item.brandname;
    }
}
console.log(getitems({ brandname: "HP" }));
console.log(getitems([{ brandname: "DELL" }, { brandname: "Lenovo" }]));
let post = {
    title: "New Post One",
    content: "This is new post",
    public: true,
    user_id: 1
};
console.log(post.title);
console.log(post.content);
let topic = post;
console.log(topic);
console.log(topic.title);
