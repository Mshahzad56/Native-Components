import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
const scaleSize = (size: number) => (width / 375) * size;
const scaleFont = (size: number) => (width / 375) * size;

const LearningResources = () => {
    const [data, setData] = useState([]);
    const [selectedButton, setSelectedButton] = useState('All');

    // Using sample data for now
    useEffect(() => {
        const sampleData = [
            {
                id: 1,
                type: 'video',
                title: 'Basic Mathematics - Addition',
                time: '2d ago',
                videoUrl: require('../Src/Assets/Videos/v2.mp4'),
            },
            {
                id: 2,
                type: 'image',
                title: 'The Magic Garden',
                time: '2d ago',
                imageUrl: require('../Src/Assets/Images/d.jpg'),
            },
            {
                id: 3,
                type: 'pdf',
                title: 'Weekly Exercise Sheet',
                time: '2d ago',
            },
            {
                id: 4,
                type: 'pdf',
                title: 'Weekly Exercise Sheet',
                time: '2d ago',
            },
        ];
        //@ts-ignore
        setData(sampleData);
    }, []);

    const handleFilter = (value: string) => {
        setSelectedButton(value);
    };
    //@ts-ignore
    const renderItem = ({ item }) => {
        if (item.type === 'video') {
            return (
                <View style={styles.cardContainer}>
                    <View style={styles.mediaContainer}>
                        <Video
                            source={item.videoUrl}
                            style={styles.media}
                            controls={true}
                            resizeMode="cover"
                            paused={false}
                            repeat={false}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                    <Text style={styles.subtitle}>Educational Video</Text>
                    <View style={styles.actionContainer}>
                        <Entypo name="controller-play" size={30} color="#1AA9A5" />
                        <Text style={styles.actionText}>Play Now</Text>
                    </View>
                </View>
            );
        } else if (item.type === 'image') {
            return (
                <View style={styles.cardContainer}>
                    <View style={styles.mediaContainer}>
                        <Image source={item.imageUrl} style={styles.media} />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                    <Text style={styles.subtitle}>Interactive Story</Text>
                    <View style={styles.actionContainer}>
                        <Ionicons name="book" size={25} color="#1AA9A5" />
                        <Text style={styles.actionText}>Read Now</Text>
                    </View>
                </View>
            );
        } else if (item.type === 'pdf') {
            return (
                <View style={styles.cardContainer}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                    <Text style={styles.subtitle}>PDF Worksheet</Text>
                    <View style={styles.actionContainer}>
                        <Entypo name="eye" size={25} color="#1AA9A5" />
                        <Text style={styles.actionText}>Read Now</Text>
                    </View>
                </View>
            );
        }
        return null;
    };
    // Header component for FlatList
    const ListHeader = () => (
        <View>
            <View style={styles.flextop}>
                <Feather name="arrow-left" size={30} color="#626A76" />
                <Text style={styles.MainHeading}>Learning Resources</Text>
            </View>
            <View style={styles.fourflex}>
                <TouchableOpacity
                    style={[styles.btnall, selectedButton === 'All' && styles.selectedButton]}
                    onPress={() => handleFilter('All')}
                >
                    <Text style={[styles.btnalltext, selectedButton === 'All' && styles.selectedButtonText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btnall2, selectedButton === 'PDF' && styles.selectedButton]}
                    onPress={() => handleFilter('PDF')}
                >
                    <Text style={[styles.btnalltext2, selectedButton === 'PDF' && styles.selectedButtonText]}>PDF Sheets</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btnall2, selectedButton === 'Educational Videos' && styles.selectedButton]}
                    onPress={() => handleFilter('Educational Videos')}
                >
                    <Text style={[styles.btnalltext2, selectedButton === 'Educational Videos' && styles.selectedButtonText]}>
                        Educational Videos
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.safe}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                ListHeaderComponent={ListHeader}
            />
        </SafeAreaView>
    );
};

export default LearningResources;
const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    flextop: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 20,
        gap: 20,
    },
    MainHeading: {
        fontSize: 18,
        fontWeight: '600',
    },

    fourflex: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        gap: 10,
        marginHorizontal: 10
    },
    btnall: {
        borderColor: '#dadada',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    btnall2: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderColor: '#dadada',
        borderWidth: 1,
    },
    btnalltext: {
        color: '#000',
        fontSize: 14,
        fontWeight: '500',
    },
    btnalltext2: {
        color: '#000',
        fontSize: 14,
        fontWeight: '500',
    },
    selectedButton: {
        backgroundColor: '#1AA9A5',
    },
    selectedButtonText: {
        color: '#FFF',
    },
    VideoContainer: {
        paddingBottom: 10,
        marginHorizontal: 10,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        marginTop: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginBottom: 10,

    },

    videoview: {
        height: 190,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E5E7EB'
    },
    video: {
        width: width * 0.9,
        height: width * 0.5,
    },
    videoContainer2: {
        alignItems: 'center',
    },
    flextext: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 80
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
        padding: 5,
        color: '#000'
    },
    time: {
        fontSize: 14,
        fontWeight: '400',
        color: '#6B7280'
    },
    title2: {
        fontSize: 14,
        fontWeight: '400',
        color: '#6B7280',
        paddingLeft: 5,
        marginVertical: 5,
    },
    flextext2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        gap: 5
    },
    playtxt: {
        fontSize: 16,
        fontWeight: '400',
        color: '#1AA9A5'
    },

    listContainer: {
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    cardContainer: {
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 2,
        padding: 10,
    },
    mediaContainer: {
        height: 200,
        marginBottom: 10,
    },
    media: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 10,
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#1AA9A5',
    },


})