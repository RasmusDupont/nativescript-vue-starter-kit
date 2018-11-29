<template>
    <StackLayout alignItems="center">
        <Label class="component-title" text="settings" horizontalAlignment="center"/>
        <StackLayout alignItems="center">
            <Button class="primaryButton" text="Logout" @tap="logout"/>
        </StackLayout>
    </StackLayout>
</template>

<script>
import Login from '../login/Login'

export default {
    mounted() {
    },
    data() {
        return {}
    },
    methods: {
        logout() {
            this.$store.dispatch("auth/logout").then(this.$navigateTo(Login, { clearHistory: true }))
        }
    }
}
</script>