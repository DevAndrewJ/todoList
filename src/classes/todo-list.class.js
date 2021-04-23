


export class TodoList{

    constructor(){
        this.todos = [];
    }

    nuevoTodo(todo){
        this.todos.push (todo);
    }

    eliminarTodo(id){
       this.todos = this.todos.filter(todo => todo.id != id)
       this.guardarLocalStorage();

    }

    marcarCompletado(id){
        
        for (const todo of this.todos){
            console.log(id, todo.id);

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados(){

        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();

        
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', this.todos);
    }

    cargarLocalStorage(){

    }



}