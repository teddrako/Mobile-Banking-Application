import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    View, 
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/colors'
import { profiles } from '../data/Profile'
import { id } from '../data/Id'

const Welcome = ({ navigation }) => {
    const { 
        input,
        field,
        background,
        signIn,
        signText,
        signUp,
        upText,
        signUpButton,
        signButtonText,
        logo,
        image,
        errorText,
    } = styles
    const [inEmail, setInEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    const handleSignIn = () => {
        profiles.forEach((profile) => {
            if (profile.email === inEmail) {
                if (profile.password === pass) {
                    id.id = profile.id
                    navigation.navigate('Tabs')
                    setError('')
                    setInEmail('')
                    setPass('')
                }
            }
        })
        if (id.id === null) {
            setError('Profile not found or password is incorrect')
            setInEmail('')
            setPass('')
        }
    }

    return (
        <SafeAreaView style={background} >
            <View style={image} >
                <Image
                    source={require('../../assets/Logo.png')}
                    style={logo}
                /> 
            </View>
            <View>  
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
                        placeholder="Password"
                        placeholderTextColor={colors.gray}
                        autoCapitalize="none"
                        style={input}
                        secureTextEntry={true}
                        onChangeText={text => setPass(text)}
                        onSubmitEditing={() => {handleSignIn()}}
                        value={pass}
                    />
                </View>
                <TouchableOpacity
                    style={signIn}
                    onPress={() => {handleSignIn()}}
                >
                    <Text style={signText} >Sign In</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={errorText} >{error}</Text>
            </View>

            {/* don't have an account? sign up section */}
            <View style={signUp} >
                <Text style={upText} >Don't have an account?</Text>
                <TouchableOpacity

                    style={signUpButton}
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}
                >
                    <Text style={signButtonText} >Sign Up</Text>
                </TouchableOpacity>
            </View>
            

        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
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
    logo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
    field: {
        margin: 10,
    },
    background: {
        backgroundColor: colors.background,
        flex: 1,
    },
    signIn: {
        backgroundColor: colors.primary,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    signText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.secondary,
    },
    signUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    upText: {
        fontSize: 15,
    },
    signUpButton: {
        marginLeft: 5,
    },
    signButtonText: {
        fontSize: 15,
        color: colors.primary,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red', 
        alignSelf: 'center',
    },
})