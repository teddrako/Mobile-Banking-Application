import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'

const Transcation = ({ name, amt, date, time }) => {
    const { container, dates, place, money } = styles

    return (
        <View style={container} >
            <Text style={place}>{name}</Text>
            <Text style={money} >$ {amt}</Text>
            <View style={dates}>
                <Text>{time}</Text>
                <Text>{date}</Text>
            </View>
        </View>
    )
}

export default Transcation

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        borderRadius: 10,
        width: 350,
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        padding: 10,
    },
    dates: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    place: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    money: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})