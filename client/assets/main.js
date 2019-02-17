const localhost = `http://localhost:3000`

const app = new Vue({
    el: '#app',
    created() {
        // localStorage.removeItem('token')
        this.getAllArticles()
        if (localStorage.getItem('token')) {
            this.showMyArticle()
        }
    },
    components: {

    },
    data: {
        articles: [], //all articles 
        myArticles: [], //user's article
        detailArticle: {},
        searchResults: [],
        isLogin: false, //login condition, check thru jwt
        signupPage: false, //nav to signup page
        bodyHomepage: true, //header
        navbarHomepage: true,
        navbarMySites: false,
        searchSection: false,
        sideMenuMySites: false, //side menu on "my sites"
        generalSearch: false,
        writePostPage: false,
        navbarWritePost: false, //write post's navbar, it has Preview and Publish menu
        bodyWritePost: false, //form for write post
        searchBarContent: '', //search bar for title query
        searchResults: [], //nampung hasil search
        generalMySites: false,
        blogPosts: false,
        fullArticle: false,
        allTheArticles: false,
        navbarWeb: false,
        bodyWebsite: false,
        detailArticleInInterface: false,
        searchResults: false
    },
    methods: {
        changeToHomePage() {
            this.isLogin = false,
            this.signupPage = false,
            this.writePost = false,
            this.bodyHomepage = true,
            this.navbarHomepage = true,
            this.navbarMySites = false,
            this.searchSection = false,
            this.sideMenuMySites = false,
            this.generalSearch = false,
            this.writePostPage = false,
            this.navbarWritePost = false,
            this.bodyWritePost = false,
            this.generalMySites = false
            this.fullArticle = false
            this.allTheArticles = false
            this.blogPosts = false
            this.navbarWeb = false
            this.bodyWebsite = false
            this.detailArticleInInterface = false
            this.searchResults = false
        },
        changeToWebsite() {
            this.isLogin = false,
            this.signupPage = false,
            this.writePost = false,
            this.bodyHomepage = false,
            this.navbarHomepage = false,
            this.navbarMySites = false,
            this.searchSection = false,
            this.sideMenuMySites = false,
            this.generalSearch = false,
            this.writePostPage = false,
            this.navbarWritePost = false,
            this.bodyWritePost = false,
            this.generalMySites = false
            this.fullArticle = false
            this.allTheArticles = false
            this.blogPosts = false
            this.navbarWeb = true
            this.bodyWebsite = true
        },
        changeToFullArticle(payload) {
            this.fullArticle = true
            this.blogPosts = false
            this.detailArticle = payload.data
            this.allTheArticles = false
        },
        fullArticleInWebsite(payload) {
            this.detailArticle = payload.data
            this.detailArticleInInterface = true
            this.bodyWebsite = false
            this.searchResults = false
        },
        backToArticlesInWebsite() {
            this.detailArticleInInterface = false
            this.bodyWebsite = true
        },
        changeToSignupPage() {
            this.signupPage = true
            this.bodyHomepage = false
        },
        changeToMySites() {
            //kalo dari write post atau edit post atau delete post baliknya ke showMyArticles
            this.showMyArticle()
            this.bodyHomepage = false
            this.navbarHomepage = false
            this.navbarMySites = true
            this.sideMenuMySites = true
            // this.generalSearch = true
            this.signupPage = false
            this.generalMySites = true
            this.fullArticle = false
            this.navbarWritePost = false
            this.bodyWritePost = false
            this.allTheArticles = true
        },
        showArticles() {
            this.generalMySites = false
            this.blogPosts = true
            this.fullArticle = false
            this.allTheArticles = false
        },
        changeToWritePost() {
            this.navbarMySites = false
            this.sideMenuMySites = false
            this.navbarWritePost = true
            this.bodyWritePost = true
            this.generalMySites = false
            this.blogPosts = false
            this.fullArticle = false
            this.allTheArticles = false
        },
        changeToAllArticles() {
            this.getAllArticles()
            this.allTheArticles = true
            this.blogPosts = false
            this.fullArticle = false
            this.generalMySites = true
        },
        signUp(payload) {
            axios.post(`${localhost}/register`, payload)
            .then(newUser => {
                console.log(newUser)
                swal(`Welcome ${newUser.data.user.email}`, `“You can always edit a bad page. You can’t edit a blank page.”
                ― Jodi Picoult`);
                localStorage.setItem('token', newUser.data.token)
                this.changeToMySites()
            })
            .catch(err => {
                // console.log(JSON.stringify(err))
                // console.log(err.response.data.err.errors.message)
                swal("Authentication Failed!", `${err.response.data.err.message}`, "error");
            })
        },
        userLogin(payload) {
            if (localStorage.getItem('token')) {
                swal("Authorized Blocked!", "You already login", "warning");
                this.changeToHomePage()
            } else {
                axios.post(`${localhost}/login`, payload)
                .then(userLogin => {
                    if (userLogin.data.failedOn) {
                        switch (userLogin.data.failedOn) {
                            case 'email':
                                swal({
                                    title: "Email not registered",
                                    text: "Do you want to register?",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                })
                                .then((willRegister) => {
                                    if (willRegister) {
                                        swal("Great choice buddy!", {
                                            icon: "success",
                                        });
                                        this.changeToSignupPage()
                                    } 
                                    else {
                                        swal("Bye bye");
                                        this.changeToHomePage()
                                    }
                                });
                                break;
                            case 'password':
                                swal("Authentication Failed!", "Password not match", "warning");
                                break;
                        }
                    } else {
                        swal("Authentication Success!", "Successfully login", "success");
                        localStorage.setItem('token', userLogin.data)
                        this.changeToMySites()
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            }
        },
        userLogout() {
            signOut()
            // localStorage.removeItem('token')
            this.changeToHomePage()
        },
        postArticle(payload) {
            axios.post(`${localhost}/articles`, payload, {
                headers: {
                    access_token: localStorage.getItem('token')
                }
            })
            .then(newArticle => {
                console.log(newArticle)
                this.changeToMySites()
            })
            .catch(err => {
                console.error(err)
            })
        },
        showMyArticle() {
            axios.get(`${localhost}/articles/getArticles`, {
                headers: {
                    access_token: localStorage.getItem('token')
                }
            })
            .then(myArticles => {
                this.myArticles = myArticles.data
            })
            .catch(err => {
                console.log(err)
            })
        },
        getAllArticles() {
            axios.get('http://localhost:3000/articles')
            .then(allArticles => {
                this.articles = allArticles.data.data
            })
            .catch(err => {
                console.error(err)
            })
        },
        searchTag(keyword) {
            axios.get(`http://localhost:3000/articles/?search=${keyword}`)
            .then(search => {
                console.log(search.data)
                this.searchResults = false
                this.bodyWebsite = false
                this.searchResults = true
                this.searchResults = search.data.data
                this.search = ''
            })
            .catch(err => {
                console.error(err)
            })
        },
    }
})

function onSignIn(googleUser) {
    const id_token = googleUser.getAuthResponse().id_token;
    axios.post('http://localhost:3000/login', { token: id_token })
    .then(({data}) => {
        localStorage.setItem('token', data)
        app.isLogin = true
        app.changeToMySites()
    })
    .catch(err => {
        console.log(err)
    })
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
    .then(function () {
        localStorage.removeItem('token')
        app.isLogin = false
        console.log('User signed out.');
    });
}