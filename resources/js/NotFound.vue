<template>
    <div class="h-screen w-screen bg-gray-400 flex justify-center">
        <div class="text-center text-gray-600 self-center">
            <h1 class="text-6xl font-sans text-shadow">404</h1>
            <h3 class="text-4xl font-sans text-shadow">This page was not found!</h3>
        </div>

        <div class="absolute bottom-0 mb-20 text-gray-600 text-center text-xl">
            <a href="#" @click="$router.go(-1)">
                <span class="opacity-50 hover:opacity-100">Take me back</span>    
            </a>  
        </div>
    </div>
</template>