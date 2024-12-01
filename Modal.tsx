import React, { useState } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View>
                    <View>
                        <Text>Hello, I am a Modal!</Text>

                        <TouchableHighlight
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text>Show Modal</Text>
            </TouchableHighlight>
        </View>
    );
};

export default App;