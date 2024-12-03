import React from 'react';
import { FlatList, View, Text } from 'react-native';

const data = [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
    // ...
];

const renderItem = ({ item }) => (
    <View>
        <Text>{item.content}</Text>
    </View>
);

const MyFlatList = () => (
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    />
);

export default MyFlatList;