<template>
    <main class="myLogin w-full flex justify-center items-center">
        <form @submit.prevent="submit($event)" v-if="!startLoad" class="bg-white p-6 rounded-lg shadow inline">
            <div class="w-full text-center text-2xl pb-4">{{title}}</div>            
            <LoginInput :err="emailErr" name="email"  :key="isCurrPageLogin+'1'"/>
            <LoginInput :err="nameErr" v-if="isCurrPageLogin === 'register'" name="full name" :key="isCurrPageLogin+'2'"/>
            <LoginInput name="password"  :key="isCurrPageLogin+'3'"/> 
            <LoginInput :err="passErr" v-if="isCurrPageLogin === 'register'" name="password again" :key="isCurrPageLogin+'4'"/>
            <p class="w-full text-right text-xs text-dontRem pt-2" v-if="isCurrPageLogin === 'login'">Don’t remember password?</p>
            <button type="submit" class="w-full mt-4 h-14 bg-myGreen rounded-md text-white">{{submitBtn}}</button>
        </form>
        <div v-else class="bg-white rounded-lg p-44 shadow inline">
            <Loader />
        </div>           
    </main>
    <div class="flex justify-center items-center">
        <div class="inline bg-white p-6 rounded-md shadow">
            <div class="w-96">
                {{downText}}
                <router-link class="uppercase" :to="{name: (isCurrPageLogin === 'login'? 'register': 'login')}">
                    {{isCurrPageLogin === 'login'? 'register' : 'log in'}}
                </router-link>
            </div> 
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocationMatched } from 'vue-router'
import Loader from '../GeneralComponents/Loader.vue';
import LoginInput from './LoginInput.vue';
import firebase from 'firebase/app';
import 'firebase/auth';
export default defineComponent({
    components: {
        Loader,
        LoginInput
    },
    data(){
        return{
            startLoad: false as boolean,
            emailErr: false as boolean,
            passErr: false as boolean, 
            nameErr: false as boolean
        }
    },
    mounted(){
        console.log(firebase.auth().currentUser);
    },
    computed:{
        downText():string{
            return this.isCurrPageLogin === 'login'? 'I don\'t have an account': 'I have an account'
        },
        isCurrPageLogin():string{
            return this.$route.name !== 'login'? 'register' : 'login'
        },
        submitBtn():string{
            return this.isCurrPageLogin === 'login'? 'Continue' : 'Register';
        },
        title():string{
            const arr = [...this.isCurrPageLogin];
            arr[0] = arr[0].toUpperCase();
            return arr.join('');
        }
    },
    methods:{
        submit(e: any):void{
            this.emailErr ? this.emailErr = false : '';
            this.passErr ? this.passErr = false : '';
            this.nameErr ? this.nameErr = false : '';
            const data: FormData = new FormData(e.target);
            const email: string = data.get('email') as string;
            if(email.split('@').length !== 2 || email.split('.').length !== 2 || [...email.split('.')[1]].length > 3){
                this.emailErr = true;
                return;
            }        
            if(this.isCurrPageLogin === 'login'){
                this.$store.dispatch('loginUser', { email: email, password: data.get('password')});
            }else if(this.isCurrPageLogin === 'register'){
                const name: string = data.get('full name') as string;
                const pass: string = data.get('password') as string;
                if(pass !== data.get('password again') || name.split(' ').length !== 2 || !name.match(/[a-zA-ZA-Z\t]/)){
                    if(pass !== data.get('password again')){
                        this.passErr = true;
                    }
                    if(name.split(' ').length !== 2 || !name.match(/[a-zA-ZA-Z\s]/)){
                        this.nameErr = true;
                    }
                    return;
                }
                this.$store.dispatch('registerUser', { email: email, password: pass, fullName: name});
            }
        }
    }
})
</script>

<style scoped>
    .myLogin{
        /* height: calc(100vh - 196px); */
        flex-basis: auto;
        flex-grow: 3;
        /* flex-shrink: 1; */
    }
</style>