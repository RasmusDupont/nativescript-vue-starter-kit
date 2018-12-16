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
import * as Facebook from 'nativescript-facebook'
import {connectionType, getConnectionType} from 'tns-core-modules/connectivity'

import alert from '~/utils/alert'
import validEmail from '~/utils/validEmail'

import Register from './../register/Register'
import TabiviewLayout from '~/components/layout/TabviewLayout'

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
            if(getConnectionType() === connectionType.none) {
                alert("The app requires an internet connection to login.")
                return
            }

            if(validEmail(this.input.email) == true && this.input.password != null) {
                this.$store.dispatch("auth/login", this.input).then(this.$navigateTo(TabiviewLayout, { clearHistory: true }))
                .catch((error) => {
                    alert(error)
                })
            } else {
                alert("Please enter a valid e-mail and your password")
            }
        },
        loginWithFacebook() {
            if(getConnectionType() === connectionType.none) {
                alert("The app requires an internet connection to login.")
                return
            }

            Facebook.login((error, fbData) => {
                if (error) {
                    alert(error.message)
                } else {
                    this.$store.dispatch("auth/loginWithFacebook", fbData.token).then(this.$navigateTo(TabiviewLayout, { clearHistory: true }))
                }
            })
        },
        register() {
            this.$navigateTo(Register)
        },
        forgotPassword() {
            if(getConnectionType() === connectionType.none) {
                alert("The app requires an internet connection to login.")
                return
            }

            prompt({
                title: "Forgot password",
                message: "Enter your e-mail address, and you will recieve a password reset if it exists in our system.",
                okButtonText: "OK",
                cancelButtonText: "Cancel",
                defaultText: ""
            }).then(result => {
                console.log('Dialog result: ${result.result}, text: ${result.text}')
            })
        }
    }
}
</script>

<style>
    .logo {
        margin-top: 40;
        height: 100;
        width: 100;
    }

    .login-title {
        margin-top: 15;
        color: #dcedff;
        text-transform: uppercase;
        letter-spacing: 1.2;
        font-weight: bold;
        font-size: 20;
    }

    .facebookLoginButton {
        border-radius: 25;
        border-color: #dcedff;
        border-width: 2;
        margin-top: 25;
        background-color: #3b5998;
        padding-top: 15;
        padding-bottom: 15;
    }

    .facebookLabel {
        color: #dcedff;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.1;
        font-size: 14;
    }
</style>