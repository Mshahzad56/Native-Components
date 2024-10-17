import React, { useState } from 'react';
import { View, Button, StyleSheet, Platform } from 'react-native';
// import library to interact with device camera
import { RNCamera } from 'react-native-camera';

// set state for camera status
function CameraComponent() {
    const [cameraOpen, setCameraOpen] = useState(false);

    // alters state of the camera toggle
    function handleOpenCamera() {
        setCameraOpen(true);
    };

    // alters state of the camera toggle
    function handleCloseCamera() {
        setCameraOpen(false);
    };

    // uses core components to build out/enhance functionality of custom component
    function renderCamera() {
        return (
            <View>
                <RNCamera
                    type={RNCamera.Constants.Type.back}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    captureAudio={false}
                />
                <Button title="Close Camera" onPress={handleCloseCamera} />
            </View>
        );
    };

    return (
        // uses the module to determine what platform the app is run on
        <View>
            {Platform.OS === 'ios' && !isCameraOpen && <Button title="Open Camera" onPress={handleOpenCamera} />}
            {Platform.OS === 'ios' && isCameraOpen && renderCamera()}
        </View>
    );
}