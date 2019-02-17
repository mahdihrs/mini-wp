Vue.component('navbar-mysites', {
    data() {
        return {

        }
    },
    methods: {
        writePostPage() {
            this.$emit('to-write-post-page')
        },
        homePage() {
            this.$emit('to-homepage')
        },
        logout() {
            this.$emit('logout')
        }
    },
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar-login">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto" id="navbarNav">
                    <li class="nav-item active">
                        <a href="#" class="nav-link cont-nav" @click="homePage">Home</a>
                    </li>
                    <!-- <li class="nav-item active">
                        <a href="#" class="nav-link cont-nav">Reader</a>
                    </li> -->
                </ul>
                <button type="button" class="btn btn-sm" id="write-btn" @click="writePostPage"><img src="https://img.icons8.com/wired/64/000000/add.png" height="25px"> Write</button>
                <button type="button" class="btn btn-primary btn-sm">Profile</button>
                <button type="button" class="btn btn-primary btn-sm" @click="logout">Logout</button>
            </div>
        </nav>
    `
})