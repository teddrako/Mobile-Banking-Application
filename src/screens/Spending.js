import { StyleSheet, Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import PieChart from 'react-native-pie-chart'
import Category from '../components/Category'
import { colors } from '../utils/colors'
import Chart from '../components/Chart'

import { data, reloadData } from '../data/Data'

const Spending = () => {
  reloadData()
  const total = data.reduce((acc, item) => acc + item.amount, 0);
  
  const { 
    title,
    container, 
    text, 
    money,
    background,
    moneyContainer,
    transactions,
    noView,
    noText,
  } = styles

  return (
    <SafeAreaView style={background} >
          {total === 0 ? (
            <View style={noView} >
              <Text style={noText} >No Transactions Found</Text> 
            </View>
          ) : (
            <View>
              <View style={container}>
                <Text style={title}>Your Spending</Text>
                <View style={moneyContainer}>
                    <PieChart
                      widthAndHeight={300}
                      series={data.map((item) => item.amount)}
                      sliceColor={data.map((item) => item.color)}
                      coverRadius={0.65}
                      coverFill={colors.background}
                    />
                    {/* make the total text animation where it starts at 0 and counts up to the total */}
                    {/* <Chart data={data} /> */}
                    <Text style={money}>${total}</Text>

                    
                </View>
              </View>
              <View>
                <Text style={text}>All Transactions</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={transactions}>
                  <View style={{justifyContent: 'center',}}>
                    {data.map((item, index) => (
                      <Category
                        key={index}
                        name={item.name}
                        amt={item.amount}
                      />
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
          )}
    </SafeAreaView>
  )
}

export default Spending

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  moneyContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactions: {
    marginTop: 10,
    overflow: 'hidden',
    height: 270,
    width: 390,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  money: {
    position: 'absolute',
    color: colors.text,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  noText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.text,
  },
})