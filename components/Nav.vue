<template>
    <nav class="app-nav">
        <div class="navbar">
            <div class="nav-logo">
                <a @click="navigateTo('/')">C$G</a>
            </div>
            <div class="nav-links">
                <div v-if="store.isLoggedIn">
                    <NuxtLink to="/"> {{ $t('home') }} </NuxtLink>
                    <a @click="store.logOut">{{ $t('logout') }}</a>
                </div>
                <div v-else>
                    <NuxtLink to="/Login"> {{ $t('login') }} </NuxtLink>
                    <NuxtLink to="/Register"> {{ $t('register') }} </NuxtLink>
                </div>
                <div>
                    <label for="locale-select">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                        </svg>: </label>
                    <select id="locale-select" v-model="$i18n.locale">
                        <option value="en">{{ $t('english') }}</option>
                        <option value="ja">{{ $t('japanese') }}</option>
                    </select>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { useUserStore } from '@/stores/UserStore'

const store = useUserStore()
store.getIsLoggedIn

</script>
<style >
.app-nav {
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 50px 0px rgb(0 0 0 / 10%);
    align-items: center;
    height: 70px;
    margin-bottom: 30px;
    font-size: 25px;
    background-color: #34495E;

}

.navbar {
    width: 85%;
    display: flex;
    justify-content: space-between;
}

.app-nav .nav-logo a {
    margin-left: 20px;
    font-size: 35px;
    text-decoration: none;
    color: #41B883;
    font-weight: 600;
    cursor: pointer;
}

.app-nav .nav-links,
.app-nav .nav-links div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.app-nav .nav-links label {
    display: flex;
    align-items: center;
    margin-left: 30px;
}

.app-nav .nav-links select{
    background-color: transparent;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
}

.app-nav .nav-links a {
    text-decoration: none;
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;
    color: #ffff;
    margin-left: 20px;
    cursor: pointer;
}

.nav-links svg {
    margin-right: 5px;
    height: 20px;
    fill: #ffffff;
}

.app-nav .nav-links a.router-link-exact-active {
    color: #00c58e;
    border-bottom: 2px solid #00c58e;
}

.app-nav .nav-links a:hover {
    transition: all 0.2s ease-in-out;
    color: #41B883;
    border-bottom: 2px solid #41B883;
}

.active_nav_link {
    color: #41B883 !important;
    border-bottom: 2px solid #41B883 !important;
}

.app-nav a:last-child {
    margin-right: 20px;
}

@media (max-width:673px) {
    .navbar {
        width: 100%;
    }

    .app-nav .nav-logo a {
        font-size: 30px;
    }


    .app-nav .nav-links {
        display: flex;
        justify-content: space-evenly;
        width: 50%;
    }

    .app-nav .nav-links a {
        font-size: 20px;
        margin: 0;
    }
}

@media (max-width:500px) {
    .app-nav .nav-links a {
        font-size: 15px;
    }

    .app-nav .nav-logo a {
        font-size: 25px;
        margin: 0 10px;
    }

}

@media (max-width:400px) {
    .app-nav .nav-links {
        width: 60%;
    }

}

@media (max-width:360px) {
    .app-nav .nav-links {
        width: 70%;
    }

    .app-nav {
        height: 50px;
    }

}
</style>