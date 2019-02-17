Vue.component('full-article', {
    props: ['article'],
    data() {
        return {

        }
    },
    methods: {
        toAllArticles() {
            this.$emit('to-all-articles')
        },
        whatsappUrl(title, content, img) {
            if (!img) {            
                return `https://api.whatsapp.com/send?text=${title}%0D%0A%0D%0A${content}`
            } else {
                return `https://api.whatsapp.com/send?text=${title}%0D%0A%0D%0A${this.generateUrl(img)}%0D%0A%0D%0A${content}`
            }
        },
        generateUrl(url) {
            return url.split(' ').join('%20')
        }
    },
    template: `
        <div>
            <div class="my-3 mx-3">
                <a href="#" @click="toAllArticles" style="color: #027B93;"> << back</a>
            </div>
            <div class="container">
                <h1 class="my-3" style="text-align: center;">{{ article.title }}</h1>
                <p style="font-size: 0.7em; color: orange;">author: <u>{{article.author.email}}</u></p>
                <hr>
                
                <div class="mb-2">Share: <a :href="whatsappUrl(article.title, article.content, article.imgUrl)" target="_blank"><img src="https://img.icons8.com/color/48/000000/whatsapp.png" height="30px"></a> </div>
                Tag(s):
                <span v-for="tag in article.tags"> <a href="#">{{tag}} </a></span>
                <img :src="article.imgUrl" style="margin: 0 auto;" class="rounded mx-auto d-block mw-100"></img>
                <p v-html="article.content" class="my-5"></p>
            </div>
        </div>
    `
})