import { StyleSheet, Text, View, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView, } from 'react-native-safe-area-context'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = () => {
    return (
        <SafeAreaView style={styles.MainCont}>
            <ScrollView>
                <StatusBar backgroundColor={'#1AA9A5'} />
                <View >
                    <View style={styles.MainCont1}>
                        <View style={styles.flexTop}>
                            <View style={styles.ProfileContainer}>
                                <View style={styles.Profile}>
                                    <Image
                                        source={require('../../Assets/Images/hotel.png')}
                                        style={styles.ProfilePic}
                                    />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.nameText}>John Doe</Text>
                                    <View style={{ flexDirection: 'row', gap: 5 }}>
                                        <Text style={styles.subText}>Birthday:</Text>
                                        <Text style={styles.subText}>March 15, 2015</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.iconContainer}>
                                <MaterialIcons name="notifications-none" size={25} color="#FFF" />
                            </View>
                        </View>

                        <View style={styles.Absolute}>
                            <Text style={styles.mentor}>My Mentor</Text>
                            <View style={styles.ProfileContainer2}>
                                <View style={styles.Profile2}>
                                    <Image
                                        source={require('../../Assets/Images/hotel.png')}
                                        style={styles.ProfilePic}
                                    />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.nameText2}>Ms. Jennifer</Text>
                                    <View style={{ flexDirection: 'row', gap: 5 }}>
                                        <Text style={styles.subText2}>Next visit:</Text>
                                        <Text style={styles.subText2}>March 15, 2015</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container2}>
                        <TouchableOpacity style={styles.box}>
                            <Image source={require('../../Assets/Icons/imgs.png')} style={styles.image} />
                            <Text style={styles.text}>Learning Materials</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box}>
                            <Image source={require('../../Assets/Icons/book.png')} style={styles.image} />
                            <Text style={styles.text}>My Journal</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex2}>
                        <Text style={styles.text2}>Schedule</Text>
                        <TouchableOpacity>
                            <Text style={styles.text3}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ReportCard2}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15, }}>
                            <Feather name='file-text' color={'#1AA9A5'} size={30} />
                            <View>
                                <Text style={styles.nameText2}>Sarah Johnson</Text>
                                <Text style={styles.subText2}>25/01/2024</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Feather name='check-circle' color={'#1AA9A5'} size={25} />
                                <Text style={styles.txt4}>Completed</Text>
                            </View>
                        </View>
                        <Text style={styles.discription}>Alex showed great progress in communication skills and social interaction during today's session.</Text>
                        <TouchableOpacity style={styles.btnflx}>
                            <Text style={styles.btntxt}>View Full Report</Text>
                            <AntDesign name='arrowright' size={25} color={'#1AA9A5'} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.flex2}>
                        <Text style={styles.text2}>Reports</Text>
                        <TouchableOpacity>
                            <Text style={styles.text3}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.ReportCard}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15, }}>
                            <Feather name='file-text' color={'#1AA9A5'} size={30} />
                            <View>
                                <Text style={styles.nameText2}>Sarah Johnson</Text>
                                <Text style={styles.subText2}>25/01/2024</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Feather name='check-circle' color={'#1AA9A5'} size={25} />
                                <Text style={styles.txt4}>Completed</Text>
                            </View>
                        </View>
                        <Text style={styles.discription}>Alex showed great progress in communication skills and social interaction during today's session.</Text>
                        <TouchableOpacity style={styles.btnflx}>
                            <Text style={styles.btntxt}>View Full Report</Text>
                            <AntDesign name='arrowright' size={25} color={'#1AA9A5'} />
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    MainCont: {
        flex: 1,
        backgroundColor: '#FFF',

    },
    MainCont1: {
        height: 150,
        width: '100%',
        backgroundColor: '#1AA9A5',
    },
    flexTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20
    },
    iconContainer: {

    },
    ProfileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 15,
    },
    textContainer: {
        alignItems: 'flex-start',
    },
    nameText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    subText: {
        color: '#FFF',
        fontSize: 14,
    },
    Profile: {
        height: 70,
        width: 70,
        borderWidth: 2,
        borderRadius: 35,
        borderColor: '#FFF',
        overflow: 'hidden',
    },
    ProfilePic: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    Absolute: {
        height: 110,
        width: '90%',
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: -60,
        alignSelf: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    mentor: {
        color: '#4B5563',
        fontSize: 16,
        fontWeight: '600',
        padding: 15,
    },
    Profile2: {
        height: 48,
        width: 48,
        borderWidth: 2,
        borderRadius: 35,
        borderColor: '#FFF',
        overflow: 'hidden',
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
    ProfileContainer2: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15,
        paddingLeft: 10,
    },
    box: {
        height: 110,
        width: '50%',
        backgroundColor: '#FFF',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,

    },
    container2: {
        marginTop: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        marginVertical: 5
    },
    flex2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20
    },
    text2: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text3: {
        color: '#1AA9A5',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ReportCard: {
        marginBottom: 80,
        width: '95%',
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
        fontWeight: '600',
        color: '#1AA9A5'
    },
    txt4: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1AA9A5',
    },
    ReportCard2: {
        width: '95%',
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

});