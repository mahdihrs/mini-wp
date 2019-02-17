Vue.component('body-homepage', {
    data() {
        return {

        }
    },
    methods: {
        gettingStarted() {
            this.$emit('to-sign-up-page')
        }
    },
    template: `
    <div id="bodyContent">
        <div class="jumbotron">
            <h1 class="display-4">Kumpakata</h1>
            <p class="lead">“You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it. That’s why I say one of the most valuable traits is persistence.” </p>
            <p>― Octavia E. Butler</p>
            <hr class="my-4">
            <p>Kumpulan Kata-kata</p>
            <a class="btn btn-primary btn-lg" href="#" role="button" @click="gettingStarted">Getting Started</a>
        </div>
        <div class="content">
            <div id="content1" class="vh-100">
                <div class="mx-0">
                </div>
            </div>
            <div id="content2" class="">
                <div id="content2Text" class="mx-0">
                    <img src="https://images.pexels.com/photos/625219/pexels-photo-625219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.jpg" class="vw-100" alt="">
                </div>
            </div>
        </div>
        <footer class="py-5">
            <div id="footer-content" class="d-flex container" width="100%">
                <div>
                    <h5>Other Solutions</h5>
                    <p>Jetpack plugin</p>
                    <p>WooCommerce</p>
                    <p>Pressable</p>
                    <p>VIP</p>
                    <p>Developers</p>
                </div>
                <div class="ml-5">
                    <h5>Explore</h5>
                    <p>News</p>
                    <p>Discover</p>
                    <p>Go: Growth Content</p>
                    <p>Desktop Apps</p>
                    <p>Mobile Apps</p>
                </div>
                <div class="ml-5">
                    <h5>Community</h5>
                    <p>Support</p>
                    <p>Forums</p>
                    <p>WordCamps</p>
                    <p>WordPress.org</p>
                </div>
            </div>
            <br>
            <hr>
            <div class="container">
                <p><a href=""class="ml-5">Themes</a>  <a href=""class="ml-5">Features</a>  <a href=""class="ml-5">Blog</a>  <a href=""class="ml-5">Stats</a></p>
                <p style="text-align:center; font-size: 0.8em;">Kumpulan Kata-Kata @ 2019 All Rights Reserved</p>
            </div>
        </footer>
    </div>
    `
})