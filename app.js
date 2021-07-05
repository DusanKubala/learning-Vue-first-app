const app = new Vue({
    el:'#App-nadpis',
    data: {
        show_book: true,
        title_book: 'Maly princ',
        author: 'Juraj Kurilla',
        created: 2000,
        pos_x: 0,
        pos_y: 0
    },
    methods: {
        changeTitle() {
            this.title_book = 'Starec a more'
        },
        hide_show_book() {
            this.show_book = !this.show_book
        },
        currentEvents(e,value) {
            console.log(e, value)
        },
        moveEventPosition(e){
            this.pos_x = e.offsetX
            this.pos_y = e.offsetY
        }
    }
})