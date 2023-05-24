<template>
    <section class="form-container">
        <form @submit.prevent="handelSubmit">
            <div class="form_title">
                <h2>Registration</h2>
            </div>
            <div class="form_fields">
                <label for="name">Name: </label>
                <input id="Name" v-model="user.name" @change="isString" />
                <p class="vAlert NameErr"></p>
            </div>
            <div class="form_fields">
                <label for="Email">Email: </label>
                <input id="Email" v-model="user.email" @change="isValidEmail" />
                <p class="vAlert EmailErr"></p>
            </div>
            <div class="form_fields">
                <label for="Password">Password:</label>
                <input type="password" id="Password" v-model="user.password" @change="isValidPassword" />
                <p class="vAlert PasswordErr"></p>
            </div>
            <div class="form_fields">
                <label for="Confirm_Password">Confirm Password:</label>
                <input type="password" id="Confirm_Password" @change="checkCnfPassword" />
                <p class="vAlert Confirm_PasswordErr"></p>
            </div>
            <div class="form_fields">
                <label for="role">Role:</label>
                <select id="role" v-model="user.role" @change="checkRole">
                    <option disabled value="">Please select a role</option>
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                    <option value="customer">Customer</option>
                </select>
                <p class="vAlert roleErr"></p>
            </div>
            <div class="form_fields">
                <label for="gender">Gender:</label>
                <div class="radio" id="gender">
                    <div class="radio_ip">
                        <input type="radio" id="male" value="male" v-model="user.gender" @change="isGender" />
                        <label for="male" class="radio_label">Male</label>
                    </div>
                    <div class="radio_ip">
                        <input type="radio" id="female" value="female" v-model="user.gender" @change="isGender" />
                        <label for="two" class="radio_label">Female</label>
                    </div>
                </div>
                <p class="vAlert genderErr"></p>
            </div>
            <div class="form_fields">
                <label for="age">Age:</label>
                <input id="age" v-model="user.age" @change="isNumber" />
                <p class="vAlert ageErr"></p>
            </div>
            <div class="form_fields">
                <label for="dob">Date Of Birth:</label>
                <input type="date" id="dob" v-model="user.dob" @change="isDate" />
                <p class="vAlert dobErr"></p>
            </div>
            <div class="btn_container">
                <button class="btn" type="submit">{{ $t('register') }}</button>
            </div>
            <div class="btn_container">
                <p>Already have an account? <nuxt-link to="/Login">Login</nuxt-link> here.</p>
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
store.$reset()
let user = reactive({})
const { isValidEmail, isValidPassword, validateForm } = useValidateIP()
const { displayAlert, removeAlert } = useToggleFormAlert()

const isString = () => {
    const regex = /^[a-zA-Z\s]+$/
    const name = Name.value
    const isValidString = regex.test(name)
    if(name.trim() === ''){
        return displayAlert(Name, " can't only contain white spaces*")
    }
    return isValidString ? removeAlert(Name) : displayAlert(Name, ' must only contain character input*')
}
const checkCnfPassword = () => {
    if (user.password !== Confirm_Password.value) {
        return displayAlert(Confirm_Password, ' must be same as password*')
    }
    return removeAlert(Confirm_Password)
}
const checkRole = () => {
    if (role.value === '') {
        return displayAlert(role, ' must be selected*')
    }
    return removeAlert(role)
}
const isNumber = () => {
    if (!/^[0-9]+$/.test(age.value)) {
        return displayAlert(age, " must be a numeric value*");
    }
    return removeAlert(age);

}
const isGender = () => {
    if (!user.gender) {
        return displayAlert(gender, ' must be selected*')
    }
    removeAlert(gender)
    gender.style.border = 'none'
    return true

}
const isDate = () => {
    if (!user.dob) {
        return displayAlert(dob, ' must be selected*')
    }
    const today = Date.now()
    const userDOB = new Date(user.dob).getTime()
    if (today < userDOB) {
        return displayAlert(dob, " can't be in future*")
    }
    return removeAlert(dob)
}

const handelSubmit = () => {
    const formElements = document.forms[0].elements
    if (validateForm(formElements) && isString() &&
        isValidEmail() && isValidPassword() && checkCnfPassword() && checkRole() &&
        isNumber() && isGender() && isDate()) {
        store.registerUser(user)
    }
}

</script>

