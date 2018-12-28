<template>
    <StackLayout alignItems="center">
        <Label class="component-title" text="features" horizontalAlignment="center"/>
        <StackLayout class="form" alignItems="center">
            <Label class="label" text="This demonstrates how to use the camera!" textWrap="true"/>
            <Button class="primaryButton" text="Camera" @tap="useCamera"/>
        </StackLayout>
        <StackLayout class="form" alignItems="center">
            <Label class="label" text="This demonstrates how to use the map!" textWrap="true"/>
            <Button class="primaryButton" text="Map" @tap="$navigateTo(Map)"/>
        </StackLayout>
    </StackLayout>
</template>

<script>
import * as camera from 'nativescript-camera'
import { Image } from 'tns-core-modules/ui/image'

import alert from '~/utils/alert'

import Map from './Map'

export default {
    mounted() {
    },
    data() {
        return {}
    },
    methods: {
        useCamera() {
            if(camera.isAvailable()) {
                camera.requestPermissions().then(
                    function success() {
                        var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
                        camera.takePicture(options).then((imageAsset) => {
                                console.log('Image success')
                                var image = new Image()
                                image.src = imageAsset
                            }).catch((error) => {
                                alert('There was an error while trying to take a picture: ' + error.message)
                            })
                    }, 
                    function failure() {
                        alert('The app needs permission to use the camera')
                    }
                )
            } else {
                alert('Camera not available on this device')
            }
        },
        useMap() {

        },
        onMapReady(args) {
            args.map.addMarkers([
                {
                    lat: 37.7397,
                    lng: -121.4252,
                    title: "Tracy, CA",
                    subtitle: "Home of The Polyglot Developer!",
                    onCalloutTap: () => {
                        utils.openUrl("https://www.thepolyglotdeveloper.com");
                    }
                }
            ]);
        }
    }
}
</script>