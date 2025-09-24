import { User } from "../models/User";
import { validaorField } from "../utils/validators";
export class UserService{



    private users:User[]=[];
    private initid =1;
//=>Create

createUser(name:string,email:string,phone:string):User |string{
    if(!validaorField("name",name)) return "Invalid name format!";
    if(!validaorField("email",email)) return "Invalid email format!";
    if(!validaorField("phone",phone)) return "Invalid phone format!";

    const newuser:User= {id:this.initid++,name,email,phone};
    this.users.push(newuser);

    return newuser;
}


//=>Read

getAllUsers(){
    return this.users;
}

//=>Update

getUserById(id:number):User | undefined{
    return this.users.find(user=>user.id === id);
}

updateUser(id:number,fields:Partial<User>):User |string {
        const useobj = this.getUserById(id);

        if(!useobj) return "User not found";

        if(useobj.name && !validaorField("name",useobj.name)) return "Invalid name format";
        if(useobj.email && !validaorField("email",useobj.email)) return "Invalid email format";
        if(useobj.phone && !validaorField("phone",useobj.phone)) return "Invalid phone format";


        Object.assign(useobj,fields);
        return useobj;

}

//=>Delete
deleteUser(id:number):string{
        const index = this.users.findIndex(user=>user.id === id);
        if(index === -1) return "User not found!";

        this.users.splice(index,1);

        return "User deleted successfully";
}
}