
interface Todo{
    id:number;
    task:string;
    done:boolean
}

class TodoList{
     
    private tasks:Todo[]= [];

    addTask(task:string,done:boolean):void{
        const newTodo:Todo={
            id:this.tasks.length+1,
            task,
            done
        };

        this.tasks.push(newTodo);

        this.saveToLocalStorage();
    }

    listTasks():void{
        this.tasks.forEach(task=>console.log(`${task.id}. [${task.done ? "x":" "}] ${task.task}`));
    }

    //getter for safe access

    getTasks():Todo[]{
        return this.tasks;
    }

    private saveToLocalStorage():void{
        localStorage.setItem("todos",JSON.stringify(this.tasks));
    }

}

const todoObj = new TodoList();
todoObj.addTask("Have to go", false);
todoObj.addTask("Have to study", true);
todoObj.addTask("Have to shop", true);
todoObj.listTasks();

console.log(todoObj);

// console.log(todoObj.tasks.map(task=>task.id));
console.log(todoObj.getTasks().map(task=>task.task));