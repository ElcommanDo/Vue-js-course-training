var app = new Vue({

el:'#app',
data: {
    task:null,
    tasks:[],
    error: null
},
methods: {
    addTask(){
        if (this.task){
        this.tasks.push(this.task);
        this.task = null;
        }
        
    },

    deleteTask(){
    this.tasks.pop(this.task);
    }

}
})