<template>
    <div id="form">
        <div class="form__inner">
            
            <form class="form" unvalidate>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" 
                           class="form-control myClass" 
                           id="name"  
                           v-model="dataForm.name" 
                           @blur="$v.dataForm.name.$touch()" 
                           :class="{'is-invalid': $v.dataForm.name.$error}">

                    <div class="invalid-feedback" v-if="!$v.dataForm.name.required"></div>
                </div>

                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" 
                           class="form-control myClass" 
                           id="email" 
                           v-model="dataForm.email" 
                           @blur="$v.dataForm.email.$touch()" 
                           :class="{'is-invalid': $v.dataForm.email.$error}">

                    <div class="invalid-feedback" v-if="!$v.dataForm.email.required"></div>
                    <div class="invalid-feedback" v-if="!$v.dataForm.email.email"></div>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" 
                           class="form-control myClass" 
                           id="password"  
                           v-model="dataForm.password" 
                           @blur="$v.dataForm.password.$touch()" :class="{'is-invalid': $v.dataForm.password.$error}">
                    <div class="invalid-feedback" v-if="!$v.dataForm.password.required"></div>
                </div>

                

                <button class="btn btn-dark myBtn" @click.prevent="signUp()">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
    name: 'Form',
    data() {
        return {
            dataForm: {
                name: '',
                email: '',
                password: ''
            },
            submitStatus: null
        }
    },
    methods: {
        signUp() {
            this.$v.$touch()

            if (this.$v.$invalid) {
                this.submitStatus = 'Error'
                console.log(this.submitStatus);
            } else {
                this.submitStatus = 'Done!'
                console.log(this.submitStatus);
            }
        }
    },
    validations: {
        dataForm: {
            name: {
                required,
            },
            email: {
                required,
                email
            },
            password: {
                required
            }
        }
    }
}
</script>

<style lang="sass">
.form__inner
    margin-top: 50px

.myClass
    width: 500px
    margin: 0 auto

.myBtn
    margin-top: 50px
    padding: 20px
    background-color: #2c3e50
</style>