const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'Kombe Molinga',
            age: '21',
        };
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e) {
            console.log(e, e.type);
        }
    }
});

app.mount('#app');