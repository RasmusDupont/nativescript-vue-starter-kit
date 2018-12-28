<template>
    <Page>
        <ActionBar/>
        <GridLayout>
            <Mapbox
                accessToken="pk.eyJ1IjoicmFzbXVzaXRvIiwiYSI6ImNqcHJhZjJhbDBsdnA0OG8yamM5ejU3cTMifQ.R-P528sDsEVw8g9jKQaYYw"
                mapStyle="traffic_day"
                latitude="55.671775"
                longitude="12.565166"
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
                    lat: 55.671775,
                    lng: 12.565166,
                    title: "Copenhagen",
                    subtitle: "The capital of Denmark",
                    onCalloutTap: () => {
                        utils.openUrl("https://en.wikipedia.org/wiki/Copenhagen")
                    }
                }
            ])
        }
    }
}
</script>

<style></style>