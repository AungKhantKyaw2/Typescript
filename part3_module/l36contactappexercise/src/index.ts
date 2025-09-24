import {UserService} from './services/UserService'

const contact = new UserService();
//=>Create
console.log(contact.createUser("Hnin Hnin","hninhnin@mail.com","0123456789"));//valid
console.log(contact.createUser("Hnin Myat","hninhnin@mail.com","0123456789"));//valid
console.log(contact.createUser("Kyaw Kyaw","kyaw kyaw@mail.com","0123456789"));//Invalid

console.log("\n -_-_-_-_-_ \n");


//=>Read

console.log("All Users : ",contact.getAllUsers());

console.log("\n -_-_-_-_-_ \n");


//=>Update
console.log(contact.updateUser(1,{email:"hninhnin@gmail.com"}));//

console.log("\n -_-_-_-_-_ \n");


//=>Delete

console.log(contact.deleteUser(1));
console.log("All users after delete:" ,contact.getAllUsers());



// 24CT