<template>
    <section class="form-container login-form">
        <form @submit.prevent="handleSubmit">
            <div class="form_title">
                <h2>Login</h2>
            </div>
            <div class="form_fields">
                <label for="Email">Email: </label>
                <input id="Email" v-model="Email" @change="isValidEmail" />
                <p class="vAlert EmailErr" ref="EmailErr"></p>
            </div>
            <div class="form_fields">
                <label for="Password">Password:</label>
                <input type="password" id="Password" v-model="Password" @change="isValidPassword" />
                <p class="vAlert PasswordErr" ref="PasswordErr"></p>
            </div>
            <p class="vAlert"></p>
            <div class="btn_container">
                <button class="btn" type="submit">{{ $t('login') }}</button>
            </div>
            <div class="btn_container">
                <p>Don't have an account? <NuxtLink to="/Register"> Register</NuxtLink> here.</p>
            </div>
        </form>
    </section>
</template>
<script setup>
import { useUserStore } from '../stores/UserStore'

definePageMeta({
    middleware: ['auth'],
})

const store = useUserStore()
let Email = ref('')
let Password = ref('')
const { isValidEmail, isValidPassword, validateForm } = useValidateIP()

function handleSubmit() {
    const formElements = document.forms[0].elements
    if (validateForm(formElements) && isValidEmail() && isValidPassword()) {
        store.loginUser({ email: Email.value, password: Password.value })
    }
}
</script>
