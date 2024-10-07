import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// imported the community component
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
    return (
        // implementing that community component in your app
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ScreenOne">
                <Stack.Screen
                    name="ScreenOne"
                    component={() => (
                        <View style={styles.container}>
                            <Text>Screen One</Text>
                            <Button title="Go to Screen Two" onPress={() => navigation.navigate('ScreenTwo')} />
                        </View>
                    )}
                />
                <Stack.Screen
                    name="ScreenTwo"
                    component={() => (
                        <View style={styles.container}>
                            <Text>Screen Two</Text>
                            <Button title="Go back" onPress={() => navigation.goBack()} />
                        </View>
                    )}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;