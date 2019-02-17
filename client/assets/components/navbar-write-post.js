Vue.component('navbar-write-post', {
    data() {
        return {

        }
    },
    methods: {
        toMySites() {
            this.$emit('change-to-my-sites')
        }
    },
    template: `
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar-create-post">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto" id="navbarNav">
                    <li class="nav-item active">
                        <a href="#" class="nav-link cont-nav" @click="toMySites">My Sites</a>
                    </li>
                    <!-- <li class="nav-item active">
                        <a href="#" class="nav-link cont-nav">User: Japra</a>
                    </li> -->
                </ul>
                <button type="button" class="btn btn-sm" id="write-btn">Preview</button>
                <button form="#new-post" class="btn btn-primary btn-sm" value="Publish">Publish</button> <!-- v-on:click="addArticle" -->
            </div>
        </nav>
    </div>
    `
})