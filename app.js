const app = new Vue({
    el:'#App-nadpis',
    data: {
        show_book: true,
        title_book: 'Maly princ',
        author: 'Juraj Kurilla',
        created: 2000
    },
    methods: {
        changeTitle() {
            this.title_book = 'Starec a more'
        },
        hide_show_book() {
            this.show_book = !this.show_book
        }
    }
})