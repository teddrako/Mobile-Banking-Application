import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { profiles } from '../data/Profile';
import { id } from '../data/Id';

import ProfileMenu from '../components/ProfileMenu';

import EditProfile from '../components/profileComponents/EditProfile';
import MyAccount from '../components/profileComponents/MyAccount';
import Settings from '../components/profileComponents/Settings';
import Privacy from '../components/profileComponents/Privacy';
import Support from '../components/profileComponents/Support';
import Invite from '../components/profileComponents/Invite';

const Stack = createNativeStackNavigator();

const Profile = () => {
  const index = profiles.findIndex((profile) => profile.id === id.id)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileMenu" >
        {(props) => <ProfileMenu {...props} />}
      </Stack.Screen>
      <Stack.Screen name="EditProfile" >
        {(props) => <EditProfile {...props} index={index} />}
      </Stack.Screen>
      <Stack.Screen name="MyAccount" >
        {(props) => <MyAccount {...props} index={index} />}
      </Stack.Screen>
      <Stack.Screen name="Settings" >
        {(props) => <Settings {...props} index={index} />}
      </Stack.Screen>
      <Stack.Screen name="Privacy" >
        {(props) => <Privacy {...props} index={index} />}
      </Stack.Screen>
      <Stack.Screen name="Support" >
        {(props) => <Support {...props} index={index} />}
      </Stack.Screen>
      <Stack.Screen name="Invite" >
        {(props) => <Invite {...props} index={index} />}
      </Stack.Screen>
      

    </Stack.Navigator>
  )
}

export default Profile