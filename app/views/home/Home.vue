<template>
    <StackLayout alignItems="center">
        <Label class="component-title" text="home" horizontalAlignment="center"/>
        <StackLayout class="form" alignItems="center">
            <Label class="label" v-bind:text="this.labelOne" textWrap="true"/>
            <Label class="label" v-bind:text="this.labelTwo" textWrap="true"/>
            <Label class="label" v-bind:text="this.labelThree" textWrap="true"/>
            <Label class="label" v-bind:text="this.labelFour" textWrap="true"/>
        </StackLayout>
    </StackLayout>
</template>

<script>
  export default {
    mounted() {
    },
    data() {
        return {
            labelOne: 'Welcome to this NativeScript Vue starter kit. It should smooth out the learning curve and speed up application development time.',
            labelTwo: 'Hopefully this will help you get rolling quickly with commonly used things such as authentication, vuex, and routing.',
            labelThree: 'If you plan to use Facebook authentication, remember to replace the app ID with your own in main.js!',
            labelFour:'The starter kit itself is not important, but what you build with it is!'
        }
    },
    methods: {
    }
  }
</script>