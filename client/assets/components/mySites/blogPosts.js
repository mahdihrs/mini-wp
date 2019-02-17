Vue.component('blog-posts', {
    props: ['myarticles'],
    data() {
        return {

        }
    },
    methods: {  
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
        <div class="card my-5" v-for="article in myarticles">
            <div class="card-header">
                <!-- Featured -->
                {{ article.title }}
            </div>
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text" v-html="article.content">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary" @click="fullArticle(article._id)">See Full Article</a>
            </div>
        </div>
    </div>
    `
})

{/* <div>
        <div class="row">
            <div class="col-sm-3 d-flex justify-content-around" v-for="article in articles">
                <div class="card mt-5">
                    <div class="card-body">
                        <h5 class="card-title">{{ article.title }}</h5>
                        <p class="card-content" v-html="article.content"> </p>
                        <a href="#" class="btn btn-primary" v-on:click="seeArticle(article._id); blogPost = false; seeFullArticle = true; searchBar = false">See Full Post</a>
                    </div>
                </div>
            </div>
        </div>
    </div> */}