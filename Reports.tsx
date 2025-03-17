import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const latestReports = [
    {
        id: '1',
        name: 'Sarah Johnson',
        date: '25/01/2024',
        status: 'Completed',
        description: "Alex showed great progress in communication skills and social interaction during today's session.",
    },
    {
        id: '2',
        name: 'John Doe',
        date: '26/01/2024',
        status: 'Pending',
        description: "John has yet to attend the session but shows promise.",
    },
];

const pastRecords = [
    {
        id: '3',
        name: 'Emily Smith',
        date: '10/12/2023',
        status: 'Completed',
        description: "Emily made significant improvements in focus during the last session.",
    },
    {
        id: '4',
        name: 'Michael Brown',
        date: '08/12/2023',
        status: 'Completed',
        description: "Michael’s report highlights consistent progress over the past month.",
    },
];
//@ts-ignore
const ReportCard = ({ item }) => {
    return (
        <View style={styles.ReportCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15 }}>
                <Feather name='file-text' color={'#1AA9A5'} size={30} />
                <View>
                    <Text style={styles.nameText2}>{item.name}</Text>
                    <Text style={styles.subText2}>{item.date}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Feather name='check-circle' color={'#1AA9A5'} size={25} />
                    <Text style={styles.txt4}>{item.status}</Text>
                </View>
            </View>
            <Text style={styles.discription}>{item.description}</Text>
            <TouchableOpacity style={styles.btnflx}>
                <Text style={styles.btntxt}>View Full Report</Text>
                <AntDesign name='arrowright' size={25} color={'#1AA9A5'} />
            </TouchableOpacity>
        </View>
    );
};

const Reports = () => {
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView>
                <View style={{ padding: 10 }}>
                    <Text style={styles.MainHeading}>Reports</Text>
                    <Text style={styles.MainHeading2}>Latest Reports</Text>
                    <FlatList
                        data={latestReports}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ReportCard item={item} />}
                        scrollEnabled={false}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    />
                    <Text style={styles.MainHeading2}>Past Records</Text>
                    <FlatList
                        data={pastRecords}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ReportCard item={item} />}
                        scrollEnabled={false}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Reports;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    MainHeading: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    MainHeading2: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 10,
    },
    ReportCard: {
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#FFF',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    discription: {
        fontSize: 16,
        color: '#4B5563',
        fontWeight: '400',
        marginVertical: 5,
        width: '90%',
        marginHorizontal: 15,
    },
    btnflx: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
        gap: 5,
        backgroundColor: '#E8F6F6',
        borderRadius: 10,
        marginVertical: 10
    },
    btntxt: {
        fontSize: 16,
        fontWeight: '400',
        color: '#1AA9A5'
    },
    txt4: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1AA9A5',
    },
    nameText2: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    subText2: {
        color: '#6B7280',
        fontWeight: '500',
        fontSize: 14,
    },
})