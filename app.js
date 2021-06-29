const app = new Vue({
    el:'#App-nadpis',
    data: {
        title_book: 'Maly princ',
        author: 'Juraj Kurilla',
        created: 2000
    },
    methods: {
        changeTitle() {
            this.title_book = 'Starec a more'
        }
    }
})