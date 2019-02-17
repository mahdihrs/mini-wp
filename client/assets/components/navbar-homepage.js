const url = `http://localhost:3000`

Vue.component('navbar-homepage', {
    props: [''],
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        loginPage() {
            this.$emit('to-login-page', 'login')
        },
        mySites() {
            if (!localStorage.getItem('token')) {
                swal("Authentication Blocked!", "This menu is only for Authenticated User, you have to login first", "warning");
            } else {
                this.$emit('to-my-sites')
            }
        },
        homePage() {
            this.$emit('to-homepage')
        },
        login() {
            this.$emit('user-login', {
                email: this.email,
                password: this.password
            })
        },
        website() {
            this.$emit('to-website')
        },
        logout() {
            this.$emit('logout-user')
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
                <ul class="navbar-nav mr-auto" id="navbarNav">
                    <li class="nav-item active">
                        <a href="#" class="nav-link cont-nav" @click="mySites">My Sites</a>
                    </li>
                    <li class="nav-item active">
                        <a href="#" class="nav-link cont-nav" @click="website">Articles For Free</a>
                    </li>
                </ul>
                <!-- <button type="button" class="btn btn-primary btn-sm nav-link">Sign Up</button> -->
            </div>
            <div> 
                <div class="row">
                    <div  class="g-signin2" data-onsuccess="onSignIn"></div>
                    <div class="col">
                        <input type="email" class="form-control" placeholder="email" v-model="email">
                    </div>
                    <div class="col">
                        <input type="password" class="form-control" placeholder="password" v-model="password">
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary btn-sm nav-link" @click="login">Login</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    
    `
})  

/* <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar-home">
    <a class="navbar-brand cont-nav" href="#">Kumpakata</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" id="navbarNav">
            <li class="nav-item active">
                <a href="#" class="nav-link cont-nav" v-on:click="homePage = false; mySitesButton = true; searchBar = true">My Sites</a>
            </li>
            <li class="nav-item active">
                <a href="#" class="nav-link cont-nav">Features</a>
            </li>
        </ul>
        <button type="button" class="btn btn-primary btn-sm nav-link" @click="loginPageButton = true; homePage = false">Login</button>
        <button type="button" class="btn btn-primary btn-sm nav-link">Sign Up</button>
    </div>
</nav>
</div> */