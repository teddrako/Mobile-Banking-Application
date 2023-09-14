import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { transactions } from '../data/Transactions'
import { colors } from '../utils/colors'
import Transcation from './Transcation'

const ListTransaction = ({ index, type }) => {
    const { container, text } = styles

    return (
        <View style={container} >
            <Text style={text} >Recent Transactions</Text>
            {transactions[index].transactions.filter((item) => item.type === type).map((item, index) => (
                <Transcation
                    key={index}
                    name={item.name}
                    amt={item.amount}
                    date={item.date}
                    time={item.time}
                />
            ))}
        </View>
    )
}

export default ListTransaction

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
})