<template>
    <Page class="bottom-gradient login" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
        <StackLayout alignItems="center">
            <Image class="logo" src="~/assets/images/NativeScript-Vue-white.png" horizontalAlignment="center"/>
            <Label class="login-title" text="VUE" horizontalAlignment="center"/>
            <StackLayout class="form" alignItems="center">
                <FlexBoxLayout class="inputWrapper">
                    <Image class="icon" src="~/assets/images/user.png"/>
                    <TextField class="input" keyboardType="email" v-model="input.email" hint="Username / E-mail"/>
                </FlexBoxLayout>
                <FlexBoxLayout class="inputWrapper">
                    <Image class="icon" src="~/assets/images/lock.png"/>
                    <TextField class="input" secure="true" v-model="input.password" hint="Password"/>
                </FlexBoxLayout>
                <Button class="primaryButton" text="Login" @tap="login"/>
                <StackLayout class="facebookLoginButton" @tap="loginWithFacebook">
                    <Label class="facebookLabel" text="Login via Facebook" horizontalAlignment="center"/>
                </StackLayout>
                <StackLayout class="miscButtons" verticalAlignment="bottom">
                    <FlexBoxLayout alignItems="bottom" justifyContent="space-between">
                        <Button horizontalAlignment="left" @tap="register" text="Create Account"/>
                        <Button horizontalAlignment="right" @tap="forgotPassword" text="Forgot Password"/>
                    </FlexBoxLayout>
                </StackLayout>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
import * as Facebook from "nativescript-facebook"
import alert from '~/utils/alert'
import {connectionType, getConnectionType} from 'tns-core-modules/connectivity'

export default {
    data() {
        return {
            input: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login() {

        },
        loginWithFacebook() {

        },
        register() {

        },
        forgotPassword() {

        }
    }
}

</script>

<style>
    .bottom-gradient {
        background: linear-gradient(to bottom, #41B883, #34495E);
    }

    .logo {
        margin-top: 40;
        height: 100;
        width: 100;
    }

    .login-title {
        margin-top: 15;
        color: white;
        text-transform: uppercase;
        letter-spacing: 1.2;
        font-weight: bold;
        font-size: 20;
    }

    .facebookLoginButton {
        border-radius: 25;
        border-color: white;
        border-width: 2;
        margin-top: 25;
        background-color: #3b5998;
        padding-top: 15;
        padding-bottom: 15;
    }

    .facebookLabel {
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.1;
        font-size: 14;
    }

    .miscButtons {
        margin-top: 35;
        color: white;
    }
</style>