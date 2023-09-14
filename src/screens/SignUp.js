import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'

import { colors } from '../utils/colors'
import { profiles, generateAccountNumber } from '../data/Profile'
import { codes } from '../data/InviteCode'

const SignUp = ({ navigation }) => {
    const {
        input,
        field,
        signUpButton,
        background,
        signUpText,
        logo,
        text,
        arrow,
        back,
        errorText,
        optional,
    } = styles

    const [inName, setInName] = useState('')
    const [inEmail, setInEmail] = useState('')
    const [inPhone, setInPhone] = useState('')
    const [inPass, setInPass] = useState('')

    const [code, setCode] = useState('')

    const [error, setError] = useState('')

    let codeAmount = 0
    let codeActive = false
    let codeNumber = null

    return (
        <SafeAreaView style={background} >

            <View >
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={back} >
                    <Feather name="arrow-left" size={35} color={colors.primary} style={arrow} />
                </TouchableOpacity>

                <Image
                    source={require('../../assets/Logo.png')}
                    style={logo}
                /> 
            </View>

            <Text style={text} >Enter the info below to create your account!</Text>

            <View style={field} >
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor={colors.gray}
                    autoCapitalize="none"
                    style={input}
                    onChangeText={text => setInName(text)}
                    value={inName}
                />
            </View>

            <View style={field} >
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={colors.gray}
                    autoCapitalize="none"
                    style={input}
                    onChangeText={text => setInEmail(text)}
                    value={inEmail}
                />
            </View>

            <View style={field} >
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor={colors.gray}
                    autoCapitalize="none"
                    style={input}
                    onChangeText={text => setInPhone(text)}
                    value={inPhone}
                />
            </View>

            <View style={field} >
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={colors.gray}
                    autoCapitalize="none"
                    style={input}
                    onChangeText={text => setInPass(text)}
                    value={inPass}
                    secureTextEntry={true}
                />
            </View>

            <View style={field} >
                <TextInput
                    placeholder="Invite Code (optional)"
                    placeholderTextColor={colors.gray}
                    autoCapitalize="none"
                    style={input}
                    onChangeText={text => setCode(text)}
                    value={code}
                />
            </View>

            <TouchableOpacity
                onPress={() => {
                    // if the user doesn't enter a name, email, or password, display an error
                    if (inName === '' || inEmail === '' || inPhone === '' || inPass === '') {
                        setError('Please enter a name, email, phone number, and password')
                    } else {
                        // check for each invite code and get the id of the profile with that code
                        codes.forEach(c => {
                            if (c.code === code) {
                                let index = profiles.findIndex(profile => profile.id === c.id)
                                profiles[index].banking.chequing.open = true
                                profiles[index].banking.chequing.balance += 10
                                codeActive = true
                                codeAmount = 10
                                codeNumber = generateAccountNumber()
                            }
                        })
                        setError('')
                        const newProfile = {
                            id: profiles.length + 10000,
                            name: inName,
                            email: inEmail,
                            phone: inPhone,
                            password: inPass,
                            banking: {
                                chequing: {
                                    accountNumber: codeNumber,
                                    balance: codeAmount,
                                    open: codeActive,
                                },
                                savings: {
                                    accountNumber: generateAccountNumber(),
                                    balance: 0,
                                    open: false,
                                },
                                credit: {
                                    accountNumber: generateAccountNumber(),
                                    balance: 0,
                                    open: false,
                                },
                                investments: {
                                    accountNumber: generateAccountNumber(),
                                    balance: 0,
                                    open: false,
                                },
                            }
                        }
                        profiles.push(newProfile)
                        navigation.navigate('Welcome')
                    }
                }}
                style={signUpButton}
            >
                <Text style={signUpText} >Sign Up</Text>
            </TouchableOpacity>

            <View>
                <Text style={errorText} >{error}</Text>
            </View>

        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.background,
        flex: 1,
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        position: 'absolute',
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.text,
        alignSelf: 'center',
        margin: 10,
        marginTop: 140,
    },
    input: {
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        backgroundColor: colors.secondary,

        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    field: {
        margin: 10,
    },
    signUpButton: {
        backgroundColor: colors.primary,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    signUpText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.secondary,
    },
    arrow: {
        margin: 10,
    },
    back: {
        alignSelf: 'flex-start',
    },
    errorText: {
        marginTop: 10,
        color: 'red', 
        alignSelf: 'center',
    },
})