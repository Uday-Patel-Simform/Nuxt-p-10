<template>
  <section class="gallery_display">

    <div class="add_btn_container">
      <button class="add_btn" id="add" @click="setBtnTxt($event)">
        {{ $t('add') }}
      </button>
    </div>
    <transition name="popup">
        <car-form v-if="isVisiblePopup"></car-form>
    </transition>
    <div class="content_container">
      <transition-group name="cards">
        <div class="car-card" v-for="(car, index) in store.cars" :key="car.id" :data-index="index">
          <gallery-card :car="car" />
        </div>
      </transition-group>
    </div>
  </section>
</template>
<script setup>
import { useCarStore } from '../stores/CarStore'
import { storeToRefs } from 'pinia'
import { useStorage} from '@vueuse/core'

definePageMeta({
  middleware: ['auth'],
})
const store = useCarStore()
let token = useStorage('token').value
await useFetchData(store.url, token)
let { isVisiblePopup } = storeToRefs(store)
</script>
<script>
import toggle from '~/mixins/toggle'
export default{
  mixins: [toggle],
}
</script>
<style>
body {
  background-color: rgb(243, 244, 246);
}

.add_btn_container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
}

.add_btn {
  width: 100px;
  border: 1px solid #41B883;
  background-color: #41B883;
  color: #ffff;
  padding: 5px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 0.2rem;
  cursor: pointer;
}

.add_btn:hover {
  transition: all 0.2s ease-out;
  background-color: transparent;
  color: #41B883;
  border: 1px solid #41B883;
}

.gallery_display {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content_container {
  width: 80%;
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.car-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.5s ease;
}

.popup-leave-active {
  transition-delay: 0.5s;
  transition: all 0.5s ease;
}

.popup-enter-from,
.popup-leave-to {
  transform: translateY(-500px);
  opacity: 0;
}

.popup-enter-active .car-form-popup,
.popup-leave-active .car-form-popup {
  transition: all 0.3s ease-in-out;
}

.popup-enter-active .car-form-popup {
  transition-delay: 0.25s;
}

.popup-enter-from .car-form-popup,
.popup-leave-to .car-form-popup {
  transform: translateY(300px);
  opacity: 0;
}

.cards-enter-from,
.cards-leave-to {
  transform: translateY(-500px);
  opacity: 0;
}

.cards-enter-active{
  transition: all 0.5s ease;
}

.cards-leave-active {
  position: absolute;
}

.cards-move {
  transition: all 0.5s ease;
}

@media (max-width:1600px) {
  .content_container {
    width: 90%;
  }
}

@media (max-width:1420px) {
  .content_container {
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width:1200px) {
  .content_container {
    width: 90%;
  }
}

@media (max-width:1070px) {
  .content_container {
    width: 70%;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width:900px) {
  .content_container {
    width: 80%;
  }
}

@media (max-width:800px) {
  .content_container {
    width: 90%;
  }
}

@media (max-width:700px) {
  .content_container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width:673px) {
  .content_container {
    justify-content: center;
    margin-top: 30px;
  }

  .car-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .add_btn_container {
    justify-content: center;
    padding: 0;
  }
}
</style>
