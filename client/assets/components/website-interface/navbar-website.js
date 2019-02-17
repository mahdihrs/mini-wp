Vue.component('navbar-website', {
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        homePage() {
            this.$emit('to-homepage')
        },
        searchTriggered() {
            this.$emit('search-keyword', this.keyword)
        }
    },
    template: `
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar-home">
            <a class="navbar-brand cont-nav" href="#" @click="homePage">Kumpakata</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
            <div> 
                <div class="row">
                    <div class="col">
                        <input type="email" class="form-control" placeholder="Search" v-model="keyword">
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary btn-sm nav-link" @click="searchTriggered">Search</button>
                    </div>
                    <div class="col nav-item active">
                        <a href="#" class="nav-link cont-nav">Profile</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    `
})