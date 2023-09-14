import { 
    StyleSheet, 
    Text,
    SafeAreaView, 
    View,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'

import { Feather } from '@expo/vector-icons';
import { codes, generateCode } from '../../data/InviteCode'
import { id } from '../../data/Id'

const Invite = ({ navigation }) => {
    const { 
        background,
        back,
        arrow,
        title,
        container,
        text,
        code,
        codeContainer,
        codeText,
        inviteText,
        buttonText,
        button,
        buttonNew, 
        buttonNewText,
        buttonContainer,
    } = styles

    // get the profile id
    let index = codes.findIndex(profile => profile.id === id.id)

    return (
        <SafeAreaView style={background}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileMenu')} style={back} >
                <Feather name="arrow-left" size={35} color={colors.secondary} style={arrow} />
            </TouchableOpacity>
            <Text style={title} >Invite a Friend</Text>

            <View style={container} >
                <Text style={text} >Invite a friend and both of you get $10!</Text>

                {index === -1 ? (
                    <View style={codeContainer} >
                        <Text style={inviteText} >You currently don't have an invite code, click below to get yours!</Text>
                        <TouchableOpacity 
                            onPress={
                                () => {
                                    const newCode = generateCode()
                                    codes.push({
                                        id: id.id,
                                        code: newCode,
                                    })
                                    index = codes.findIndex(profile => profile.id === id.id) 
                                    navigation.navigate('Invite')     
                                }
                            }
                            style={button}
                        >
                            <Text style={buttonText} >Generate Code</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        <View style={codeContainer} >
                            <Text style={codeText} >Your Code</Text>
                            <Text style={code} >{codes[index].code}</Text>
                        </View>
                        <View>
                            <Text style={text} >Share this code with your friends and have them enter it when they sign up!</Text>
                        </View>
                        <View style={buttonContainer} >
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        const newCode = generateCode()
                                        codes[index].code = newCode
                                        navigation.navigate('Invite')
                                    }
                                }
                                style={buttonNew}
                            >
                                <Text style={buttonNewText} >Generate New Code</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
            
        </SafeAreaView>
    )
}

export default Invite

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.background,
        flex: 1,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: colors.text,
    },
    back: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        width: 50,
        height: 50,
        padding: 5,
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
    },
    arrow: {
        alignSelf: 'center',
    },
    container: {
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        gap: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.primary,
        marginTop: 20,
    },
    code: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.text,
        borderRadius: 10,
        marginVertical: 20,
    },
    codeContainer: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        marginTop: 20,
        gap: 10,
    },
    codeText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.text,
        marginTop: 10,
    },
    inviteText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.text,
        marginTop: 10,
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        padding: 10,
        margin: 10,
        marginTop: 20,
        marginHorizontal: 40,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.secondary,
    },
    buttonNew: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 20,
        margin: 10,
        marginTop: 20,
        marginHorizontal: 40,
    },
    buttonNewText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.secondary,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})