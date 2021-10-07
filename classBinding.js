var app = new Vue({
el: "#app",
data: {
flag: true,
    color: "green",
    border: "5px solid orange"

},
methods: {
ChangeShape(){
       this.flag = !this.flag;

    }
}

})