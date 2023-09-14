import { 
    StyleSheet, 
    Text,
    SafeAreaView, 
    View,
    TouchableOpacity,
    Animated,
} from 'react-native'
import React, { useState, useRef } from 'react'
import { colors } from '../../utils/colors'
import { profiles } from '../../data/Profile'
import { Feather } from '@expo/vector-icons';

const MyAccount = ({ index, navigation }) => {
    const { 
        background,
        back,
        arrow,
        text,
        myAccount,
        info,
        title,
        container,
        openContainer,
        openIcon,
        accountContainer,
        openTitle,
        numContainer,
        oCPressed,
        openAnim,
        confirm,
        confirmButton,
        confirmText,
    } = styles

    const [iOpen, setIOpen] = useState(false)
    const [sOpen, setSOpen] = useState(false)
    const [cOpen, setCOpen] = useState(false)
    const [chOpen, setChOpen] = useState(false)


    const investAnimation = useRef(new Animated.Value(0)).current;
    const savingsAnimation = useRef(new Animated.Value(0)).current;
    const creditAnimation = useRef(new Animated.Value(0)).current;
    const chequingAnimation = useRef(new Animated.Value(0)).current;


    const handleInvestPress = () => {
        setIOpen(!iOpen);
        Animated.timing(investAnimation, {
          toValue: iOpen ? 0 : 1,
          duration: 250, // Set the duration of the animation in milliseconds
          useNativeDriver: true,
        }).start();
    };

    const handleSavingsPress = () => {
        setSOpen(!sOpen);
        Animated.timing(savingsAnimation, {
            toValue: sOpen ? 0 : 1,
            duration: 250, // Set the duration of the animation in milliseconds
            useNativeDriver: true,
        }).start();
    };

    const handleCreditPress = () => {
        setCOpen(!cOpen);
        Animated.timing(creditAnimation, {
            toValue: cOpen ? 0 : 1,
            duration: 250, // Set the duration of the animation in milliseconds
            useNativeDriver: true,
        }).start();
    };

    const handleChequingPress = () => {
        setChOpen(!chOpen);
        Animated.timing(chequingAnimation, {
            toValue: chOpen ? 0 : 1,
            duration: 250, // Set the duration of the animation in milliseconds
            useNativeDriver: true,
        }).start();
    };

    return (
        <SafeAreaView style={background}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileMenu')} style={back} >
                <Feather name="arrow-left" size={35} color={colors.secondary} style={arrow} />
            </TouchableOpacity>
            <Text style={myAccount} >My Account</Text>

            <View style={accountContainer} >
                <Text style={info} >{profiles[index].name} - {profiles[index].id}</Text>
            </View>

            <Animated.View style={container}>
                {profiles[index].banking.chequing.open ? (
                    <View>
                        <Text style={title} >Chequing</Text>
                        <View style={numContainer} >
                            <Text style={text} >Id: </Text>
                            <Text style={text} >{profiles[index].banking.chequing.accountNumber}</Text>
                        </View>
                        <View style={numContainer} >
                            <Text style={text} >Balance:</Text>
                            <Text style={text} >$ {profiles[index].banking.chequing.balance}</Text>
                        </View>
                    </View>
                ) : (
                    <View 
                        style={chOpen ? oCPressed : openContainer} 
                    >
                        {!chOpen ? (
                            <Text style={openTitle} >Chequing account not open</Text>
                        ) : (
                            <View style={confirm} >
                                <Text style={openTitle} >Confirm open?</Text>
                                <TouchableOpacity style={confirmButton} 
                                    onPress={() => {{
                                        handleChequingPress()}
                                        profiles[index].banking.chequing.open = true
                                        profiles[index].banking.chequing.balance = 0
                                        profiles[index].banking.chequing.accountNumber = Math.floor(Math.random() * 1000000000)
                                    }} 
                                >
                                    <Text style={confirmText} >Yes</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        <Animated.View
                            style={[openAnim,
                                chOpen ? null : null,
                                {
                                  transform: [
                                    {
                                      translateX: chequingAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, -300], // Adjust the value according to your needs
                                      }),
                                    },
                                  ],
                                },
                            ]}
                        >   
                            <TouchableOpacity onPress={() => {handleChequingPress()}} >
                                <Feather name="arrow-right" size={35} color={colors.secondary} style={openIcon} />
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                )}  
            </Animated.View>



            <Animated.View style={container}>
                {profiles[index].banking.savings.open ? (
                    <View>
                        <Text style={title} >Savings</Text>
                        <View style={numContainer} >
                            <Text style={text} >Id: </Text>
                            <Text style={text} >{profiles[index].banking.savings.accountNumber}</Text>
                        </View>
                        <View style={numContainer} >
                            <Text style={text} >Balance:</Text>
                            <Text style={text} >$ {profiles[index].banking.savings.balance}</Text>
                        </View>
                    </View>
                ) : (
                    <View 
                        style={sOpen ? oCPressed : openContainer} 
                    >
                        {!sOpen ? (
                            <Text style={openTitle} >Savings account not open</Text>
                        ) : (
                            <View style={confirm} >
                                <Text style={openTitle} >Confirm open?</Text>
                                <TouchableOpacity style={confirmButton} 
                                    onPress={() => {
                                        handleSavingsPress()
                                        profiles[index].banking.savings.open = true
                                        profiles[index].banking.savings.balance = 0
                                        profiles[index].banking.savings.accountNumber = Math.floor(Math.random() * 1000000000)
                                    }} 
                                >
                                    <Text style={confirmText} >Yes</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        <Animated.View
                            style={[openAnim,
                                sOpen ? null : null,
                                {
                                  transform: [
                                    {
                                      translateX: savingsAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, -300], // Adjust the value according to your needs
                                      }),
                                    },
                                  ],
                                },
                            ]}
                        >   
                            <TouchableOpacity onPress={() => {handleSavingsPress()}} >
                                <Feather name="arrow-right" size={35} color={colors.secondary} style={openIcon} />
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                )}  
            </Animated.View>

            
            <Animated.View style={container}>
                {profiles[index].banking.credit.open ? (
                    <View>
                        <Text style={title} >Credit</Text>
                        <View style={numContainer} >
                            <Text style={text} >Id: </Text>
                            <Text style={text} >{profiles[index].banking.credit.accountNumber}</Text>
                        </View>
                        <View style={numContainer} >
                            <Text style={text} >Balance:</Text>
                            <Text style={text} >$ {profiles[index].banking.credit.balance}</Text>
                        </View>
                    </View>
                ) : (
                    <View 
                        style={cOpen ? oCPressed : openContainer} 
                    >
                        {!cOpen ? (
                            <Text style={openTitle} >Credit account not open</Text>
                        ) : (
                            <View style={confirm} >
                                <Text style={openTitle} >Confirm open?</Text>
                                <TouchableOpacity style={confirmButton} 
                                    onPress={() => {
                                        handleCreditPress()
                                        profiles[index].banking.credit.open = true
                                        profiles[index].banking.credit.balance = 0
                                        profiles[index].banking.credit.accountNumber = Math.floor(Math.random() * 1000000000)
                                    }} 
                                >
                                    <Text style={confirmText} >Yes</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        <Animated.View
                            style={[openAnim,
                                cOpen ? null : null,
                                {
                                  transform: [
                                    {
                                      translateX: creditAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, -300], // Adjust the value according to your needs
                                      }),
                                    },
                                  ],
                                },
                            ]}
                        >   
                            <TouchableOpacity onPress={() => {handleCreditPress()}} >
                                <Feather name="arrow-right" size={35} color={colors.secondary} style={openIcon} />
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                )}  
            </Animated.View>


            <Animated.View style={container} >
                {profiles[index].banking.investments.open ? (
                    <View>
                        <Text style={title} >Investing</Text>
                        <View style={numContainer} >
                            <Text style={text} >Id: </Text>
                            <Text style={text} >{profiles[index].banking.investments.accountNumber}</Text>
                        </View>
                        <View style={numContainer} >
                            <Text style={text} >Balance:</Text>
                            <Text style={text} >$ {profiles[index].banking.investments.balance}</Text>
                        </View>
                    </View>
                ) : (
                    <View 
                        style={iOpen ? oCPressed : openContainer} 
                    >
                        {!iOpen ? (
                            <Text style={openTitle} >Investing account not open</Text>
                        ) : (
                            <View style={confirm} >
                                <Text style={openTitle} >Confirm open?</Text>
                                <TouchableOpacity style={confirmButton} 
                                    onPress={() => {
                                        handleInvestPress()
                                        profiles[index].banking.investments.open = true
                                        profiles[index].banking.investments.balance = 0
                                        profiles[index].banking.investments.accountNumber = Math.floor(Math.random() * 1000000000)
                                    }} 
                                >
                                    <Text style={confirmText} >Yes</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        <Animated.View
                            style={[openAnim,
                                iOpen ? null : null,
                                {
                                  transform: [
                                    {
                                      translateX: investAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, -300], // Adjust the value according to your needs
                                      }),
                                    },
                                  ],
                                },
                            ]}
                        >   
                            <TouchableOpacity onPress={() => {handleInvestPress()}} >
                                <Feather name="arrow-right" size={35} color={colors.secondary} style={openIcon} />
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                )}  
            </Animated.View>

        </SafeAreaView>
    )
}

export default MyAccount

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.background,
        flex: 1,
    },
    myAccount: {
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
        backgroundColor: colors.primary,
        borderRadius: 15,
        marginHorizontal: 20,
        marginTop: 10,
        paddingVertical: 10,
    },
    containerAnim: {
        backgroundColor: colors.tertiary,
        borderRadius: 15,
        marginHorizontal: 20,
        marginTop: 10,
        paddingVertical: 10,
    },
    openContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    oCPressed: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    accountContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    numContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.primary,
        marginLeft: 15,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        color: colors.secondary,
        marginHorizontal: 15,
    },
    openTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.secondary,
        marginLeft: 15,
        alignSelf: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.secondary,
        marginBottom: 10,
        alignSelf: 'center',
    },
    openIcon: {
        marginRight: 10,
        justifyContent: 'center',
        height: '100%',
    },
    openAnim: {
        height: 35,
    },
    confirm: {
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'flex-end',
        width: '100%',
    },
    confirmText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.secondary,
        alignSelf: 'center',
    },
    confirmButton: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        borderRadius: 10,
        alignContent: 'center',
        width: 50,
    },
})