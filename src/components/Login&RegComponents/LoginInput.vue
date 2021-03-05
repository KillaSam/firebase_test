<template>
    <div class="w-96 pt-3 relative">
        <label :for="name.toLowerCase()" class="uppercase text-xs">{{name}}</label>
        <input :name="name.toLowerCase()" 
            class="relative w-full h-14 rounded-md bg-inGray border border-inBorGray pl-3 pr-11"
            :placeholder="placeholder"
            :type="actualType"
            >
        <span v-if="(name.toLowerCase() === 'password' || name.toLowerCase() === 'password again') && !isPassword" class="cursor-pointer absolute top-12 pt-2 right-4">
            <svg  @click="isPassword = !isPassword" width="24" height="16" viewBox="0 0 24 16" fill="#000" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0.949005C16.607 0.949005 20.852 3.26501 23.352 7.14401C23.688 7.66401 23.688 8.33601 23.352 8.85701C20.852 12.735 16.607 15.051 12 15.051C7.39298 15.051 3.14898 12.735 0.647979 8.85701C0.312979 8.33601 0.312979 7.66501 0.647979 7.14401C3.14898 3.26501 7.39298 0.949005 12 0.949005ZM12 13.851C16.198 13.851 20.065 11.741 22.344 8.20601C22.423 8.08301 22.423 7.91701 22.344 7.79401C20.064 4.25901 16.198 2.14901 12 2.14901C7.80198 2.14901 3.93598 4.25901 1.65698 7.79401C1.57698 7.91701 1.57698 8.08301 1.65698 8.20601C3.93598 11.741 7.80198 13.851 12 13.851ZM12 4.40001C10.015 4.40001 8.39998 6.01501 8.39998 8C8.39998 9.98501 10.015 11.6 12 11.6C13.985 11.6 15.6 9.98501 15.6 8C15.6 6.01501 13.985 4.40001 12 4.40001ZM9.59998 8.00001C9.59998 9.32301 10.677 10.4 12 10.4C13.323 10.4 14.4 9.32301 14.4 8.00001C14.4 6.67701 13.323 5.60001 12 5.60001C10.677 5.60001 9.59998 6.67701 9.59998 8.00001Z" fill="black"/>
            </svg>
        </span>
        <span v-else-if="name.toLowerCase() === 'password' || name.toLowerCase() === 'password again'" class="cursor-pointer absolute top-12 pt-2 right-4">
            <svg @click="isPassword = !isPassword" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.949005C16.607 0.949005 20.852 3.26501 23.352 7.14401C23.688 7.66401 23.688 8.33601 23.352 8.85701C20.852 12.735 16.607 15.051 12 15.051C7.39298 15.051 3.14898 12.735 0.647979 8.85701C0.312979 8.33601 0.312979 7.66501 0.647979 7.14401C3.14898 3.26501 7.39298 0.949005 12 0.949005ZM12 13.851C16.198 13.851 20.065 11.741 22.344 8.20601C22.423 8.08301 22.423 7.91701 22.344 7.79401C20.064 4.25901 16.198 2.14901 12 2.14901C7.80198 2.14901 3.93598 4.25901 1.65698 7.79401C1.57698 7.91701 1.57698 8.08301 1.65698 8.20601C3.93598 11.741 7.80198 13.851 12 13.851ZM12 4.40001C10.015 4.40001 8.39998 6.01501 8.39998 8C8.39998 9.98501 10.015 11.6 12 11.6C13.985 11.6 15.6 9.98501 15.6 8C15.6 6.01501 13.985 4.40001 12 4.40001ZM9.59998 8.00001C9.59998 9.32301 10.677 10.4 12 10.4C13.323 10.4 14.4 9.32301 14.4 8.00001C14.4 6.67701 13.323 5.60001 12 5.60001C10.677 5.60001 9.59998 6.67701 9.59998 8.00001Z" fill="black"/>
            </svg>
        </span>
        <div class="shadow absolute top-2 right-2 rounded-2xl bg-red text-white text-xs p-3" v-if="err && name.toLowerCase() !== 'password'">
            {{error}}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props:{
        err: Boolean as PropType<boolean>,
        name: {
            type: String as PropType<string>,
            required: true,
            validator: (value: string) => {
                return ['email', 'password', 'password again', 'full name'].includes(value.toLowerCase());
            }
        }
    },
    data(){
        return{
            value: '' as string,
            isPassword: true as boolean,
        }
    },
    methods: {
        resetValues():void{
            this.value = '';
            this.isPassword = false;
        }
    },
    computed: {
        error(){
            switch(this.name.toLowerCase()){
                case 'email':
                    return 'This email is not match with template xxxx@xxxx.xxx';
                case 'password again':
                    return 'Passwords are not match with each  other';
                case 'full name':
                    return 'Please enter your full name as "XXX XXX"';
                default: 
                    return '';
            }
        },
        type():string{
            switch(this.name.toLowerCase()){
                case 'email':
                    return 'text';
                case 'password': 
                    return 'password';
                case 'password again':
                    return 'password';
                case 'full name':
                    return 'text';
                default: 
                    return '';
            }
        },
        actualType():string{
            return this.type === 'password'? this.isPassword? this.type : 'text' : this.type
        },
        placeholder():string{
            switch(this.name.toLowerCase()){
                case 'email': 
                    return 'Example@gmail.com';
                case 'password':
                    return '';
                case 'password again': 
                    return '';
                case 'full name': 
                    return 'Tony Stark';
                default: 
                    return '';
            }
        }
    }
})
</script>

<style>

</style>