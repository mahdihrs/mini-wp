Vue.component('all-articles-in-this-universe', {
    props: ['allarticles'],
    data() {
        return {

        }
    },
    methods: {  
        preview(content) {
            if (content.split(' ').length < 5) {
                return `${content.split(' ').slice(0, 5).join(' ')}`    
            } else {
                return `${content.split(' ').slice(0, 5).join(' ')} ...`
            }
        },
        fullArticle(id) {
            axios.get(`http://localhost:3000/articles/${id}`, {
                headers: {
                    access_token: localStorage.getItem('token')
                }
            })
            .then(article => {
                this.$emit('full-article', article.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    template: `
    <div>
        <div class="d-flex container mt-5 justify-content-center col-6">
            <img src="https://img.icons8.com/office/64/000000/magazine.png">
        </div>
        <div class="card my-5" v-for="article in allarticles">
            <div class="card-header">
                <strong>{{ article.title }}</strong>
            </div>
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text" v-html="preview(article.content)"></p>
                <a href="#" class="btn btn-primary" @click="">See Full Article</a>
            </div>
        </div>
    </div>
    `
})