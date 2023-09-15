<template>
    <div>
        <h1>{{title1}} in {{title2}}</h1>
        <input type="text" v-model="input1" />
        <button type="button" v-on:click="getData">get</button>
        <button type="button" v-on:click="setData">set</button>
    </div>
</template>

<script>
    export default {
        name:"vue-home",
        data(){
            return{
                title1:"test",
                title2:"seoul",
                input1:"",
            }
        },
        methods:{
            getData(){
                console.log(this.input1);
            },
            setData(){
                this.input1="set"
            }
        }
    }
</script>

