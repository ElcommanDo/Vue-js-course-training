var app = new Vue({

    el: '#app',
    data: {
        message: '',
        comment: null,
        comments: [],
        error: null
    },
    methods:  {
        OnSubmit(){
        if (this.error){
        this.error = null;
        }
        if (this.comment){
        this.comments.push(this.comment)
        this.comment = null

        }

        else{
            this.error = "Text can`t be empty"
        }
        }

    }
})