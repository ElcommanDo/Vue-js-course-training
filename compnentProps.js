Vue.component("comment", {
props: {
    comment: {
        type: Object,
        required: true,
        }
        },
    template: `
    <div>
        <div class="card-body">
        {{comment.Username}}
        {{comment.content}}
        </div>
    </div>
    `


})

var app = new Vue({
el: '#app',
data: {
    comments: [
    {"Username": "alice", "content":"Hello world"},
    {"Username": "Iron man", "content":"Iron is coming"},
    {"Username": "batman", "content":"I hate sun"},
    {"Username": "Superman", "content":"kreptonit is bad"},

    ]
}
})