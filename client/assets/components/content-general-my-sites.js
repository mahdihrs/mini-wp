Vue.component('content-general-my-sites', {
    //pas search nanti harus diprops ke sini lagi untuk ditampilin di class rownya
    props: ['searchResults'],
    data() {
        return {
            search: ''
        }
    },
    methods: {
        searchPost() {
            this.$emit('search-articles', this.search)
        }
    },
    template: `
    <!-- search method -->
    <div>
        <div>
            <form class="form-inline container col-4 mt-3">
                <input id="search-bar" class="form-control mr-sm-2" type="search" v-model="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" @click="searchPost">Search</button>
            </form>
        </div>

        <div class="row">
            <div class="col-8 col-sm-3 mx-5 my-5" v-for="result in searchResults">
                <div class="card mt-5">
                    <div class="card-body" >
                        <h5 class="card-title">{{ result.title }}</h5>
                        <p class="card-content"> {{ result.content }}</p>
                        <a href="#" class="btn btn-primary">See Full Post</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})