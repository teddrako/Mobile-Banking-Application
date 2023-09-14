import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    View, 
    Image,
    TouchableOpacity,
} from 'react-native'
import React from 'react'

import { colors } from '../utils/colors'
import { profiles } from '../data/Profile'
import { id } from '../data/Id'

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
  
const ProfileMenu = ({ navigation }) => {
    const { 
        photo, 
        text, 
        background, 
        container, 
        info, 
        name, 
        details,
        innerInfo,
        edit,
        editText,
        menu,
        logout,
        logoutButton,
        icon,
        arrow,
    } = styles
    

    const index = profiles.findIndex(profile => profile.id === id.id)
  
    return (
        <SafeAreaView style={background}>
            <View style={container} >
            <Image source={require('../../assets/profile-photo.png')} style={photo} />
            <View style={info} >
                <View style={innerInfo}>
                <Text style={name}>{profiles[index].name}</Text>
                <Text style={details}>{profiles[index].email}</Text>
                <Text style={details}>{profiles[index].phone}</Text>
                <TouchableOpacity style={edit} onPress={() => navigation.navigate('EditProfile')} >
                    <Text style={editText}>Edit Profile</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
    
            <View>
            <TouchableOpacity style={menu} onPress={() => navigation.navigate('MyAccount')} >
                <MaterialIcons name="credit-card" size={25} color={colors.secondary} style={icon} />
                <Text style={text} >My Account</Text>
                <Feather name="arrow-right" size={25} color={colors.secondary} style={arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={menu} onPress={() => navigation.navigate('Settings')} >
                <MaterialIcons name="settings" size={25} color={colors.secondary} style={icon} />
                <Text style={text} >Settings</Text>
                <Feather name="arrow-right" size={25} color={colors.secondary} style={arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={menu} onPress={() => navigation.navigate('Privacy')} >
                <MaterialIcons name="security" size={25} color={colors.secondary} style={icon} />
                <Text style={text} >Privacy</Text>
                <Feather name="arrow-right" size={25} color={colors.secondary} style={arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={menu} onPress={() => navigation.navigate('Support')} >
                <MaterialIcons name="contact-support" size={25} color={colors.secondary} style={icon} />
                <Text style={text} >Support</Text>
                <Feather name="arrow-right" size={25} color={colors.secondary} style={arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={menu} onPress={() => navigation.navigate('Invite')} >
                <FontAwesome5 name="user-friends" size={20} color={colors.secondary} style={icon} />
                <Text style={text} >Invite a Friend</Text>
                <Feather name="arrow-right" size={25} color={colors.secondary} style={arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={logoutButton} onPress={() => {navigation.navigate('Welcome'), id.id=null}} >
                <Text style={logout} >Logout</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
  }
  
  export default ProfileMenu
  
  const styles = StyleSheet.create({
    background: {
      backgroundColor: colors.background,
      flex: 1,
    },
    container: {
      flexDirection: 'row',
      borderRadius: 20,
      padding: 20,
      margin: 20,
      marginBottom: 30,
    },
    info: {
      flex: 1,
      marginLeft: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerInfo: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'left',
      justifyContent: 'center',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
    },
    photo: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      margin: 20,
    },
    details: {
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      
      color: 'white',
    },
    edit: {
      backgroundColor: colors.tertiary,
      borderRadius: 10,
      marginTop: 20,
      padding: 10,
      paddingHorizontal: 30,
    },
    editText: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'left',
      color: 'white',
    },
    menu: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      padding: 20,
      marginBottom: 20,
      backgroundColor: colors.primary,
      borderRadius: 20,
      width: '85%',
    },
    icon: {
      marginRight: 10,
    },
    arrow: {
      flex: 1,
      textAlign: 'right',
    },
    logout: {
      alignSelf: 'center',
      textAlign: 'center',
      padding: 20,
      marginBottom: 20,
      color: colors.tertiary,
      borderRadius: 20,
      width: '85%',
      fontSize: 16,
    },
    logoutButton: {
      paddingTop: 25,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  
  })