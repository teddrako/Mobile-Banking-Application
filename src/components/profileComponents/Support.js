import { 
    StyleSheet, 
    Text,
    SafeAreaView, 
    View,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { profiles } from '../../data/Profile'
import { Feather } from '@expo/vector-icons';

const Support = ({ index, navigation }) => {
    const { 
        background,
        back,
        arrow,
        text,
    } = styles

    return (
        <SafeAreaView style={background}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileMenu')} style={back} >
                <Feather name="arrow-left" size={35} color={colors.secondary} style={arrow} />
            </TouchableOpacity>
            <Text style={text} >Support</Text>
        </SafeAreaView>
    )
}

export default Support

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
})