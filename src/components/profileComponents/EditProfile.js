import { 
    StyleSheet, 
    Text,
    SafeAreaView, 
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { profiles } from '../../data/Profile'
import { Feather } from '@expo/vector-icons';

const tempProfile = [
    {
        name: '',
        email: '',
        phone: '',
    }
]

const EditProfile = ({ index, navigation }) => {

    const { 
        background, 
        text, 
        arrow,
        back,
        container,
        field, 
        input,
        textField,
        save,
        saveText,
    } = styles

    return (
        <SafeAreaView style={background}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileMenu')} style={back} >
                <Feather name="arrow-left" size={35} color={colors.secondary} style={arrow} />
            </TouchableOpacity>
            <Text style={text} >Edit Profile</Text>
            <View style={container} >
                <View style={field} >
                    <Text style={textField} >Name</Text>
                    <TextInput
                        placeholder={profiles[index].name}
                        autoCapitalize="none"
                        style={input}
                        onChangeText={text => tempProfile[index].name = text}
                    />
                </View>
                <View style={field} >
                    <Text style={textField} >Email</Text>
                    <TextInput
                        placeholder={profiles[index].email}
                        autoCapitalize="none"
                        style={input}
                        onChangeText={text => tempProfile[index].email = text} 
                    />
                </View>
                <View style={field} >
                    <Text style={textField} >Phone</Text>
                    <TextInput
                        placeholder={profiles[index].phone}
                        autoCapitalize="none"
                        style={input}
                        onChangeText={text => tempProfile[index].phone = text} 
                    />
                </View>
            </View>
            
            {/* password here */}

            <View>
                <TouchableOpacity 
                   style={save}
                   onPress={() => {
                        if (tempProfile[index].name !== '') {
                            profiles[index].name = tempProfile[0].name
                        }
                        if (tempProfile[index].email !== '') {
                            profiles[index].email = tempProfile[0].email
                        }
                        if (tempProfile[index].phone !== '') {
                            profiles[index].phone = tempProfile[0].phone
                        }
                        navigation.navigate('ProfileMenu')
                    }}
                >
                    <Text style={saveText} >Save Changes</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.background,
        flex: 1,
    },
    text: {
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
        flexDirection: 'column',
        borderRadius: 20,
        padding: 20,
        margin: 10,
        marginHorizontal: 20,
    },
    field: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
    },
    input: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        width: 200,
        height: 30,
        padding: 5,
    },
    textField: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
    },
    save: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        width: 170,
        height: 50,
        padding: 5,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    saveText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.secondary,
    },
})