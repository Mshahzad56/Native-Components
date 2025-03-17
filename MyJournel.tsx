import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'

const MyJournel = () => {
    const [data, setData] = useState([]);

    // Sample data for multiple journal entries
    useEffect(() => {
        const sampleData = [
            {
                id: 1,
                date: 'March 15, 2024',
                title: 'Fun Day at the Park',
                description: 'Everything of Mentors view should be visible (read Access) - Aggregated Reports, KPI, etc. - Announcements for Mentors',
            },
            {
                id: 2,
                date: 'March 16, 2024',
                title: 'Workshop Recap',
                description: 'Summary of today’s workshop including insights, key learnings and action items.',
            },
            {
                id: 3,
                date: 'March 17, 2024',
                title: 'Team Building Exercise',
                description: 'Overview of the team building activities held today with photos and feedback.',
            },
            {
                id: 4,
                date: 'March 17, 2024',
                title: 'Team Building Exercise',
                description: 'Overview of the team building activities held today with photos and feedback.',
            },
        ];
        //@ts-ignore
        setData(sampleData);
    }, []);
    //@ts-ignore
    const renderItem = ({ item }) => (
        <View style={styles.ReportCard}>
            <View style={styles.iconRow}>
                <Feather name="calendar" color="#1AA9A5" size={20} />
                <Text style={[styles.nameText2, { flex: 1, textAlign: 'center' }]}>
                    {item.date}
                </Text>
                <Feather name="check-circle" color="#1AA9A5" size={25} />
            </View>
            <Text style={styles.headertitle}>{item.title}</Text>
            <Text style={styles.discription}>{item.description}</Text>
            <TouchableOpacity style={styles.btnflx}>
                <Feather name="book" size={25} color="#1AA9A5" />
                <Text style={styles.btntxt}>Read More</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <SafeAreaView style={styles.dafe}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>My Journal</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxtt}>+ New Entry</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerTitle2}>Today's Journal</Text>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </SafeAreaView>

    )
}

export default MyJournel

const styles = StyleSheet.create({
    dafe: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10,
        color: '#000000',
    },
    headerTitle2: {
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10,
        color: '#000000',
    },
    ReportCard: {
        marginBottom: 10,
        width: '90%',
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
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    discription: {
        fontSize: 16,
        color: '#4B5563',
        fontWeight: '400',
        marginVertical: 5,
        width: '90%',
        marginHorizontal: 15,
    },
    headertitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        padding: 10,
    },
    btnflx: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 10,
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
    listContainer: {
        paddingBottom: 90,
    },
    btn: {
        height: 30,
        width: 100,
        backgroundColor: '#1AA9A5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    btntxtt: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: '500'
    }
})