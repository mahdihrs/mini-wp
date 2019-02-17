Vue.component('signup-page', {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp() {
            this.$emit('sign-up-data', {
                email: this.email,
                password: this.password
            })
        }
    },
    template: `
    <div class="container mt-5">
        <h3 style="text-align: center;">Sign Up Form</h3>
        <div class="form-group">
            <label for="formGroupExampleInput">Email</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Email" v-model="email">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Password</label>
            <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password" v-model="password">
        </div>
        <div class="form-group">
            <button class="btn btn-primary btn-sm nav-link" type="submit" @click="signUp">Sign Up</button>
        </div>
    </div>
    `
})