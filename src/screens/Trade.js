import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native'
import React, { useState } from 'react'
import GetStock from '../components/GetStock'
import { colors } from '../utils/colors'
import { Feather } from '@expo/vector-icons';
import { history } from '../data/SearchHistory';
import { Ionicons } from '@expo/vector-icons';

const Trade = () => {
  const [focused, setFocused] = useState(false);
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState('');

  const {
    container,
    searchContainer,
    searchBar,
    stockView,
    recentContainer,
    recentText,
    historyContainer,
    historyText,
    searchButtons,
    icon,
  } = styles;

  const stocks = [
    {
      ticker: "GME",
    },
    // {
    //   ticker: "AMC",
    // },
    // {
    //   ticker: "AAPL",
    // },
    // {
    //   ticker: "GE",
    // },
  ]

  const handleSearchEnter = () => {
    setSearching(true)
    setFocused(false)
    setSearched(search)
    setSearch('')
  }

  // make the search bar activatable when user clicks search

  return (
    <SafeAreaView style={container} >
      <View style={searchContainer} >
        <TextInput
          style={searchBar}
          onChangeText={text => {setSearch(text), setSearching(false), setFocused(true)}}
          onSubmitEditing={() => handleSearchEnter()}          
          onFocus={() => setFocused(true)}
          autoCapitalize="none"
          placeholder="Search for a stock..."
        />
        <TouchableOpacity 
          onPress={() => handleSearchEnter()}
          style={searchButtons}
        >
          <Feather name="search" size={24} color={colors.secondary} style={icon} />
        </TouchableOpacity>
      </View>
      {searching ? (
        <View>
          <GetStock
            key={history.findIndex(item => item.ticker === searched)}
            ticker={searched}
          />
        </View>
      ) : (
        <View>
          {focused ? (
            <View style={recentContainer} >
              <Text style={recentText} >Recent Searches</Text>
              {history.map((item, index) => (
                <View key={index} style={historyContainer} >
                  <TouchableOpacity
                    onPress={() => {}}
                  >
                    <Text style={historyText} >{item.ticker}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      history.splice(index, 1);
                    }}
                  >
                    <Ionicons name="close-circle-outline" size={24} color={colors.primary} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ) : (
            <View style={stockView} >
              {stocks.map((item, index) => (
                <GetStock
                  key={index}
                  ticker={item.ticker}
                />
              ))}
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  )
}

export default Trade

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  searchBar: {
    height: 40,
    width: '90%',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    backgroundColor: colors.secondary,
    color: colors.text,
    fontSize: 16,
  },
  searchContainer: {
    width: '87.5%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stockView: {
    width: '100%',
    alignItems: 'center',
  },
  recentContainer: {
    flex: 1,
    width: '100%',
  },
  recentText: {
    color: colors.text,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
    marginBottom: 10,
  },
  historyContainer: {
    marginTop: 10,
    width: 350,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  historyText: {
    color: colors.primary,
    fontSize: 18,
  },
  searchButtons: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 5,
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
})