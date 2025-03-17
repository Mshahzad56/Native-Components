import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import DocumentPicker from 'react-native-document-picker';
import { launchImageLibrary } from 'react-native-image-picker';

const ReportDetails = () => {
    const [documentName, setDocumentName] = useState('Reading Progress Report.pdf');
    const [imageName, setImageName] = useState('VocabularyExercise.jpg');

    const pickDocument = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            if (res && res[0]) {
                console.log("Selected document:", res[0]);
                //@ts-ignore
                setDocumentName(res[0].name);
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("User canceled document picker");
            } else {
                console.error("Document Picker Error:", err);
            }
        }
    };

    const pickImage = () => {
        const options = { mediaType: 'photo' };
        //@ts-ignore
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.errorMessage) {
                console.error("ImagePicker Error:", response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                console.log("Selected image:", response.assets[0]);
                // Use fileName if available, otherwise a default string.
                setImageName(response.assets[0].fileName || 'Selected Image');
            }
        });
    };

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView>
                <View>
                    <View style={styles.flextop}>
                        <Entypo name='chevron-left' size={30} color={'#000'} />
                        <Text style={styles.MainHeading}>Report Details</Text>
                    </View>
                    <View style={styles.ProfileContainer2}>
                        <View style={styles.Profile2}>
                            <Image
                                source={require('../Src/Assets/Images/leg2.png')}
                                style={styles.ProfilePic}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.nameText2}>Ms. Jennifer</Text>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Feather name='calendar' color={'#4B5563'} size={20} />
                                <Text style={styles.subText2}>10/02/2024</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.nameText33}>Mentor's Feedback</Text>
                    <Text style={styles.nameText4}>
                        Alex showed great enthusiasm during our reading session. Their comprehension has improved significantly, and they were able to answer complex questions about the story. We also worked on vocabulary, where they demonstrated good retention of new words.
                    </Text>

                    <Text style={styles.nameText3}>Completed Activities</Text>
                    <View style={styles.colomm}>
                        <View style={styles.flex2}>
                            <Feather name='check-circle' color={'#1AA9A5'} size={25} />
                            <Text style={styles.nameText5}>Reading comprehension exercises</Text>
                        </View>
                        <View style={styles.flex2}>
                            <Feather name='check-circle' color={'#1AA9A5'} size={25} />
                            <Text style={styles.nameText5}>Vocabulary practice</Text>
                        </View>
                        <View style={styles.flex2}>
                            <Feather name='check-circle' color={'#1AA9A5'} size={25} />
                            <Text style={styles.nameText5}>Story discussion</Text>
                        </View>
                    </View>

                    <Text style={styles.nameText3}>Attachments</Text>
                    <View style={styles.colomm2}>
                        {/* Document Picker */}
                        <View style={styles.flex3}>
                            <Feather name='file-text' color={'#4B5563'} size={25} />
                            <Text style={styles.nameText5}>{documentName}</Text>
                            <TouchableOpacity onPress={pickDocument}>
                                <Entypo name='attachment' color={'#9CA3AF'} size={25} />
                            </TouchableOpacity>
                        </View>
                        {/* Image Picker */}
                        <View style={styles.flex3}>
                            <Feather name='file-text' color={'#4B5563'} size={25} />
                            <Text style={styles.nameText5}>{imageName}</Text>
                            <TouchableOpacity onPress={pickImage}>
                                <Entypo name='attachment' color={'#9CA3AF'} size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.nameText6}>Your Response</Text>
                    <TextInput
                        placeholder='Write your response...'
                        placeholderTextColor={'#9CA3AF'}
                        style={styles.textInput}
                    />

                    <TouchableOpacity style={styles.btnflx}>
                        <Feather name='send' size={25} color={'#FFF'} />
                        <Text style={styles.btntxt}>Send Response</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ReportDetails;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#FFFFFF'
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
    ProfileContainer2: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15,
        marginVertical: 20,
        paddingLeft: 10,
    },
    Profile2: {
        height: 65,
        width: 65,
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
    textContainer: {
        alignItems: 'flex-start',
    },
    nameText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500',
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
    nameText33: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
        padding: 10,
    },
    nameText3: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
        padding: 10,
        marginVertical: 10,
    },
    nameText4: {
        color: '#4B5563',
        fontSize: 14,
        fontWeight: '400',
        marginHorizontal: 10
    },
    flex2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        gap: 10
    },
    nameText5: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000'
    },
    colomm: {
        flexDirection: 'column',
        gap: 15,
        marginLeft: 20
    },
    colomm2: {
        flexDirection: 'column',
        gap: 15,
    },
    flex3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginHorizontal: 10,
    },
    nameText6: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
        padding: 10,
        marginVertical: 10,
    },
    textInput: {
        width: '95%',
        height: 100,
        borderColor: '#E5E7EB',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 20,
    },
    btnflx: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
        gap: 5,
        backgroundColor: '#1AA9A5',
        borderRadius: 10,
        marginVertical: 10
    },
    btntxt: {
        fontSize: 16,
        fontWeight: '400',
        color: '#FFF'
    },

})