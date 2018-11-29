<template>
    <Page class="bottom-gradient login" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
        <StackLayout alignItems="center">
            <Label class="component-title" text="create account" horizontalAlignment="center"/>
            <StackLayout class="form" alignItems="center">
                <FlexBoxLayout class="inputWrapper">
                    <Image class="icon" src="~/assets/images/user.png"/>
                    <TextField class="input" keyboardType="email" v-model="input.email" hint="Username / E-mail"/>
                </FlexBoxLayout>
                <FlexBoxLayout class="inputWrapper">
                    <Image class="icon" src="~/assets/images/lock.png"/>
                    <TextField class="input" secure="true" v-model="input.password" hint="Password"/>
                </FlexBoxLayout>
                <FlexBoxLayout class="inputWrapper">
                    <Image class="icon" src="~/assets/images/repeat.png"/>
                    <TextField class="input" secure="true" v-model="input.repeatPassword" hint="Repeat password"/>
                </FlexBoxLayout>
                <Button class="primaryButton" text="Register" @tap="register"/>
            </StackLayout>
            <Button class="miscButtons" verticalAlignment="bottom" horizontalAlignment="center" @tap="$navigateBack" text="Already have an account?"/>
        </StackLayout>
    </Page>
</template>

<script>
import {connectionType, getConnectionType} from 'tns-core-modules/connectivity'

import alert from './../../utils/alert'

import TabiviewLayout from '~/components/layout/TabviewLayout'

export default {
    data() {
        return {
            input: {
                email: "",
                password: "",
                repeatPassword: ""
            }
        };
    },
    methods: {
        register() {
            if (getConnectionType() === connectionType.none) {
                alert("The app requires an internet connection to register.")
                return
            }

            if(this.validEmail(this.input.email) == true && this.input.password != null && this.passwordIdentical(this.input.password, this.input.repeatPassword)) {
                this.$navigateTo(TabiviewLayout, { clearHistory: true })
            } else {
                alert("Invalid e-mail or passwords not identical.")
            }
        },
        validEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        passwordIdentical(password, repeatPassword) {
            if (password == repeatPassword) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>