import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={[
                        {
                            title: 'Section 1',
                            data: ['Item 1.1', 'Item 1.2', 'Item 1.3'],
                        },
                        {
                            title: 'Section 2',
                            data: ['Item 2.1', 'Item 2.2', 'Item 2.3'],
                        },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    )}
                    keyExtractor={(item, index) => String(index)}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'lightgrey',
        padding: 5,
    },
    item: {
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
});