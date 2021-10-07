var app = new Vue({
el: '#app',
data: {
        lesson: 'Events and Methods',
        counter: 0,
        product: "sun glasses",
        quantity: 20,
        sale: true



    },
    methods: {
        CounterIncrement(){
        if (this.counter >=10){
               alert("counter is 10 !")
            }
        else
            this.counter += 1
            },
        OverBox(){
        console.log("OverBox")
            },


        }


})
