Vue.component('body-website', {
    props: ['articles'],
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
        <div class="my-5 col-10 container">
            <div class="d-flex">
                <div>   
                    
                </div>
            </div>
            <div class="card my-5" v-for="article in articles">
                <div class="card-header d-flex">
                    <div class="mr-auto p-2">
                        <strong>{{ article.title }}</strong>
                    </div>
                    <div class="p-2">
                        tags: <span v-for="tag in article.tags"> <a href="#">{{tag}} </a></span>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text" v-html="preview(article.content)"></p>
                    <a href="#" class="btn btn-primary" @click="fullArticle(article._id)">See Full Article</a>
                </div>
            </div>
        </div>
    `
})