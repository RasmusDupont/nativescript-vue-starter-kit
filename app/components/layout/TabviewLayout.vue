<template>
    <Page class="bottom-gradient">
        <ActionBar actionBarHidden="true" backgroundSpanUnderStatusBar="true"/>
        <TabView>
            <TabViewItem title="Home">
                <Home></Home>
            </TabViewItem>
            <TabViewItem title="Features">
                <Features></Features>
            </TabViewItem>
            <TabViewItem title="Settings">
                <Settings></Settings>
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
import Settings from '~/views/settings/settings'
import About from '~/views/about/about'

export default {
    components: {
        Home,
        Features,
        Settings,
        About
    },
    data() {
      return {
      }
    }
}
</script>

<style>

</style>
