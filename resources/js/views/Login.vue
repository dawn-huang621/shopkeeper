<template>
    <div class="flex items-center justify-center min-h-screen">
        <GuestLayout title="Sign in to your account">
                    
            <form class="w-full max-w-sm">
                <h1 class="anton-regular">Sign in to your account</h1>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Full Name
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe">
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Password
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************">
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3"></div>
                    <label class="md:w-2/3 block text-gray-500 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-sm">
                        Remember me
                    </span>
                    <a class="text-sm text-purple-500 block">
                        Forgot your password?
                    </a>
                    </label>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Sign Up
                    </button>
                    </div>
                </div>
            </form>
        </GuestLayout>
    </div>
</template>

<script>
import GuestLayout from '../components/GuestLayout.vue';
import store from '/resources/js/store/index.js';
export default {
    name: "Login",
    components: {
        GuestLayout,
    },
    methods: {
        login() {
            store.dispatch('login')
        }
    }
}
</script>

<style scoped>
.anton-regular {
  font-size: 2rem;
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  padding-bottom: 2rem;
}

</style>