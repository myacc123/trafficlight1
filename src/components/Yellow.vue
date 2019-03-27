<template>
    <div id="yellowpage">
        <center><h2>Вы находитесь на желтом свете</h2></center>
        <div id="frame">

            <div id="red1"></div>

            <div id="yellow1" v-if="start == false"></div>

            <transition name="fade">
                <div id="yellow" v-if="start == true"></div>
            </transition>

            <div id="green"></div>

            <button id="but" v-on:click=changeNumber>Запустить/ продолжить работу светофора!</button>

        </div>

    </div>

</template>

<script>

    export default {
        name: 'yellowpage',
        data () {
            return {
                start: 0,
            }
        },
        methods: {
            changeNumber() {
                this.start = !this.start;
                setTimeout(function(){
                    window.location.href = '/3';
                },3000);
            }
        }
    }

</script>

<style scoped>

    #but{
        margin-top: 10%;
    }

    #frame
    {
        border: 2px solid grey;
        width: 210px;
        height: 655px;
        border-radius: 10px;
        margin-top: 5%;
        margin-left: 45%;
        background: lightgrey;
    }
    #red
    {
        width: 180px;
        height: 200px;
        background-color: red;
        border-radius: 50%;
        margin-left: 15px;
        margin-top: 15px;
    }
    #red1
    {
        width: 180px;
        height: 200px;
        background-color: red;
        border-radius: 50%;
        margin-left: 15px;
        margin-top: 15px;
        opacity: 0.1
    }
    #yellow
    {
        width: 180px;
        height: 200px;
        background-color: yellow;
        border-radius: 50%;
        margin-left: 15px;
        margin-top: 15px;
    }
    #yellow1
    {
        width: 180px;
        height: 200px;
        background-color: yellow;
        border-radius: 50%;
        margin-left: 15px;
        margin-top: 15px;
        opacity: 0.5;
    }
    #green
    {
        width: 180px;
        height: 200px;
        background-color: green;
        border-radius: 50%;
        margin-left: 15px;
        margin-top: 15px;
        opacity: 0.1;
    }

    .fade-enter-active {
        transition: opacity 3s ease-in-out;
    }

    .fade-enter {
        opacity: 0;
    }
    .fade-enter-to{
        opacity: 1;
    }
</style>