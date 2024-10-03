<template>
    <div class="flex items-center justify-center min-h-screen">
        
        
        <GuestLayout title="Sign in to your account">
            <form class="w-full max-w-sm">
                <h1 class="anton-regular">Sign in to your account</h1>
                <div class="w-full mb-6">
                    <input class="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="" placeholder="Email address">
                </div>
                <div class="w-full">
                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button">
                        Submit
                    </button>
                </div>
            </form>
        </GuestLayout>
    </div>
</template>

<script>
import GuestLayout from '../components/GuestLayout.vue';
export default {
    name: "Login",
    components: {
        GuestLayout,
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