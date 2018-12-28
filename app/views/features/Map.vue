<template>
    <Page>
        <GridLayout>
            <Mapbox
                accessToken="pk.eyJ1IjoicmFzbXVzaXRvIiwiYSI6ImNqcHJhZjJhbDBsdnA0OG8yamM5ejU3cTMifQ.R-P528sDsEVw8g9jKQaYYw"
                mapStyle="traffic_day"
                latitude="37.7397"
                longitude="-121.4252"
                hideCompass="true"
                zoomLevel="12"
                showUserLocation="false"
                disableZoom="false"
                disableRotation="false"
                disableScroll="false"
                disableTilt="false"
                @mapReady="onMapReady($event)">
            </Mapbox>
        </GridLayout>
    </Page>
</template>

<script>
export default {
    mounted() {
    },
    data () {
        return {}
    },
    methods: {
        onMapReady(args) {
            args.map.addMarkers([
                {
                    lat: 37.7397,
                    lng: -121.4252,
                    title: "Tracy, CA",
                    subtitle: "Home of The Polyglot Developer!",
                    onCalloutTap: () => {
                        utils.openUrl("https://www.thepolyglotdeveloper.com")
                    }
                }
            ])
        }
    }
}
</script>

<style></style>