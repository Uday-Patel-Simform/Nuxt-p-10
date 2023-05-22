<template>
    <section>
        <div class="back-btn">
            <NuxtLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>Back
            </NuxtLink>
        </div>
        <transition name="details-card" appear v-if="!isLoading">
            <section class="car-details-container">
                <div class="info-container">
                    <div class="img-container">
                        <img :src="car.image" :alt="car.name">
                    </div>
                    <div class="detail-container">
                        <div class="car-name">
                            <h1>
                                {{ car.name }}
                            </h1>
                        </div>
                        <div class="car-desc">
                            <h2>Car details:</h2>
                            <p>{{ car.details }}</p>
                        </div>
                        <div class="car-price">
                            <h2>Car price:</h2>
                            <p>{{ car.price }}/-</p>
                        </div>
                    </div>
                </div>
            </section>
        </transition>
    </section>
</template>

<script setup>
import { useCarStore } from '@/stores/CarStore'
import {useStorage} from '@vueuse/core'

definePageMeta({
    middleware: ['auth']
})

const store = useCarStore()
let isLoading = ref(true)
const route = useRoute()

store.carID = route.params.id
let token = useStorage('token').value
const car = await useFetchCar(token)
isLoading.value = false

</script>
<style scoped>
section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.back-btn {
    z-index: 1;
    margin-top: -20px;
    width: 80%;
}

.back-btn a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
}

.back-btn a svg {
    padding-left: 5px;
    margin-right: 5px;
    height: 15px;
    fill: #000000;
}

.back-btn:hover a,
.back-btn:hover a svg {
    fill: crimson;
    color: crimson;
}

.car-details-container {
    width: 80%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.info-container {
    border-radius: 5px;
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.img-container {
    width: 60%;
}

.img-container img {
    width: 100%;
    object-fit: contain;
}

.detail-container {
    width: 38%;
    padding-left: 15px;
    border-left: 1px solid #c5c5c5;
    display: flex;
    flex-direction: column;
}

.car-name h1 {
    font-size: 3.5vw;
    margin-bottom: 10px;
}

.car-desc {
    margin-bottom: 10px;
}

.car-desc h2,
.car-price h2 {
    font-size: 1.5vw;
}

.car-desc p,
.car-price p {
    font-size: 1vw;
}

.details-card-enter-from {
    opacity: 0;
    transform: translateY(100px);
}

.details-card-enter-active {
    transition: all 0.5s ease;
}

@media (max-width:1200px) {
    .car-name h1 {
        font-size: 4vw;
    }

    .car-desc h2,
    .car-price h2 {
        font-size: 2vw;
    }

    .car-desc p,
    .car-price p {
        font-size: 1.5vw;
    }
}


@media (max-width:673px) {
    .car-details-container {
        margin-top: 50px;
    }

    .info-container {
        flex-direction: column;
        justify-content: center;
    }

    .img-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-container img {
        width: 80%;
    }

    .detail-container {
        width: 100%;
        border-top: 1px solid #c5c5c5;
        border-left: none;

        padding-top: 15px;
        padding-left: 0;
        justify-content: center;
        align-items: center;
    }

    .car-name,
    .car-desc,
    .car-price {
        width: 80%;
    }

    .car-name h1 {
        font-size: 4.5vw;
    }

    .car-desc h2,
    .car-price h2 {
        font-size: 2.5vw;
    }

    .car-desc p,
    .car-price p {
        font-size: 2vw;
    }
}

@media (max-width:500px) {

    .car-name h1 {
        font-size: 8vw;
    }

    .car-desc h2,
    .car-price h2 {
        font-size: 3.5vw;
    }

    .car-desc p,
    .car-price p {
        font-size: 3vw;
    }
}

@media (max-width:400px) {
    .back-btn {
        width: 95%;
    }

    .car-details-container {
        width: 95%;
    }
}

@media (max-width:300px) {


    .car-desc h2,
    .car-price h2 {
        font-size: 4.5vw;
    }

    .car-desc p,
    .car-price p {
        font-size: 4vw;
    }
}
</style>