<template>
<div class="container">
    <div class="err-container">
        <h1 class="code">{{ error.statusCode }}</h1>
        <p v-if="error.statusMessage" class="message">{{ error.statusMessage }}</p>
        <p v-else class="message">{{ error.message }}</p>
        <button class="btn" @click="handelGoBack">Go Back</button>
    </div>
</div>
</template>
<script setup>
const error = useError()
const handelGoBack = () =>{
    clearError({
        redirect:'/'
    })
}
</script>
<style scoped>
.container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.err-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 50px;
    border: 2px solid #dbdbdb;
    border-radius: 10px;
}
.code{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    font-size: 150px;
    height: 150px;
    color: #ff3e3e;
}
.message{
    font-size: 30px;
    margin-bottom: 20px;
    color: #ff3e3e;
}
.btn{
    font-size: 25px;
    font-weight: 600;
    height: 50px;
    background-color: black;
    border: 1px solid black;
}
.btn:hover{
    background-color: transparent;
    border: 3px solid black;
    color: black;
}
</style>