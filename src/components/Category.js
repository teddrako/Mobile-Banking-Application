import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Modal, 
 } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures';
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors'
import ListTransaction from './ListTransaction';
import { id } from '../data/Id';
import { transactions } from '../data/Transactions';

const icons = {
    food: "fast-food",
    transport: "car",
    entertainment: "musical-notes",
    shopping: "cart",
    bills: "build",
    other: "card",
}

export default Category = ({ name, amt }) => {
    const { 
        container, 
        text, 
        money, 
        overlay, 
        modal,
        background,
    } = styles

    const [transactionVisible, setTransactionVisible] = useState(false)

    const index = transactions.findIndex((profile) => profile.id === id.id)

    return (
        <TouchableOpacity onPress={() => setTransactionVisible(true)}>
            <View style={container}>
                <Ionicons name={icons[name.toLowerCase()]} size={35} color={colors.text} />
                <Text style={text} >{name}</Text>
                <View style={money}>
                    <Text style={text} >$ </Text>
                    <Text style={text} >{amt > 1000 ? amt > 1000000 ? (amt / 1000000).toFixed(1) : (amt / 1000).toFixed(1) : amt}</Text>
                    {amt > 1000000 ? <Text style={text} >m</Text> : amt > 1000 ? <Text style={text} >k</Text> : null}
                </View>
            </View>
            <GestureRecognizer
                style={{flex: 1}}
                onSwipeDown={ () => setTransactionVisible(false) }
            >
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={transactionVisible}
                    onRequestClose={() => {
                        setTransactionVisible(false);
                    }}
                >  
                    <View style={background} >
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={transactionVisible}
                            onRequestClose={() => {
                                setTransactionVisible(false);
                            }}
                        >  
                            <View style={modal} >
                                <View style={overlay} >
                                    <ListTransaction index={index} type={name} />
                                </View>
                            </View>
                        </Modal>
                    </View>
                </Modal>
            </GestureRecognizer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        height: 70,
        width: 360,
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    text: {
        color: colors.text,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    money: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    overlay: {
        height: '60%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    backgrou: {

    },
})