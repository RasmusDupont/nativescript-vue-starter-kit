<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!" android:flat="true"/>
        <TabView android:tabBackgroundColor="#53ba82"
                 android:tabTextColor="#c4ffdf"
                 android:selectedTabTextColor="#ffffff"
                 androidSelectedTabHighlightColor="#ffffff">
            <TabViewItem title="Home">
                <Home></Home>
            </TabViewItem>
            <TabViewItem title="Features">
                <Features></Features>
            </TabViewItem>
            <TabViewItem title="Profile">
                <Profile></Profile>
            </TabViewItem>
            <TabViewItem title="About">
                <About></About>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
import Home from '~/views/home/home'
import Features from '~/views/features/features'
import Profile from '~/views/profile/profile'
import About from '~/views/about/about'

export default {
    components: {
        Home,
        Features,
        Profile,
        About
    },
    data() {
      return {
      }
    }
}
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
