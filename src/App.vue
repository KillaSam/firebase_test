<template>
    <Header />
    <router-view></router-view>
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/GeneralComponents/Header.vue';
import Footer from './components/GeneralComponents/Footer.vue'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

export default defineComponent({
    name: 'App',
    components: {
        Header,
        Footer
    },
    created(){
        const firebaseConfig = {
            apiKey: "AIzaSyDhNE83CQ_PdBZzBFQgt0SahihivUOXbbo",
            authDomain: "fir-test-48ea8.firebaseapp.com",
            projectId: "fir-test-48ea8",
            storageBucket: "fir-test-48ea8.appspot.com",
            messagingSenderId: "195319697088",
            appId: "1:195319697088:web:4a53804bd0340af4b62725"
        };
        firebase.initializeApp(firebaseConfig);
    },
    mounted(){
        console.log(this.$route)
    }
})
</script>

<style>
    :root{
        background-color:  #F2F2F2;
        font-family: 'Helvetica', sans-serif;
        margin: 0;
        padding: 0;
        appearance: none;
    }
</style>