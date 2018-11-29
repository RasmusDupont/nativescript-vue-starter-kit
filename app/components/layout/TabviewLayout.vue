<template>
    <Page class="bottom-gradient">
        <ActionBar actionBarHidden="true" backgroundSpanUnderStatusBar="true"/>
        <TabView selectedTabTextColor="#41B883" tabBackgroundColor="#34495e" tabTextColor="#dcedff" androidTabsPosition="bottom">
            <TabViewItem title="Home">
                <Home></Home>
            </TabViewItem>
            <TabViewItem title="Features">
                <Features></Features>
            </TabViewItem>
            <TabViewItem title="Settings">
                <Settings></Settings>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
import Home from '~/views/home/home'
import Features from '~/views/features/features'
import Settings from '~/views/settings/settings'

export default {
    components: {
        Home,
        Features,
        Settings
    },
    data() {
      return {
      }
    }
}
</script>

<style>

</style>
