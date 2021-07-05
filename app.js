const app = new Vue({
    el:'#App-nadpis',
    data: {
        show_book: true,
        books: [
            { title_book: 'Maly princ', author: 'Juraj Kurilla', created: 2000, img: 'Assets/1.jpg', isFav: true },
            { title_book: 'Maly princ', author: 'Juraj Kurilla', created: 1999, img: 'Assets/2.jpg', isFav: false },
            { title_book: 'Maly princ', author: 'Juraj Kurilla', created: 2002, img: 'Assets/3.jpg', isFav: true }
        ],
        pos_x: 0,
        pos_y: 0
    },
    methods: {
        changeTitle() {
            this.books[0].title_book = 'Starec a more'
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