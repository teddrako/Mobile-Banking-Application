import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { colors } from '../utils/colors';
import useStock from '../hooks/useStock';

const GetStock = ({ ticker }) => {
    const { 
      loadingContainer,
      container,
      title,
      image,
      change,
    } = styles;

    // useEffect(() => {
    //     const fetchStockData = async () => {
    //       try {
    //         const response = await fetch(
    //         `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=h7g0ci5p5ImjPu7xQILGGpvq3Q93EYmX`
    //         );
    //         const data = await response.json();
    //         setStockData(data);
    //         if(stockData !== null && stockData.queryCount === 0) {
    //           console.log('Invalid ticker symbol');
    //           setFailed(true);
    //         }
    //       } catch (error) {
    //         console.log(error);
    //         setFailed(true);
    //       }
    //     };

    //     fetchStockData();
    // }, [ticker]);

    const { data, logo, isLoading, error, refetch } = useStock(ticker.toUpperCase());

    const onRefresh = useCallback(() => {
      refetch();
    }, []);

    onRefresh();

    // useEffect(() => {
    //   const fetchCompanyLogo = async () => {
    //     try {
    //       const response = await fetch(
    //         `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=h7g0ci5p5ImjPu7xQILGGpvq3Q93EYmX`
    //       );
    //       const data = await response.json();
    //       if (data !== null) {
    //         setCompanyLogo(data);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       setFailed(true);
    //     }
    //   };

    //   fetchCompanyLogo();
    // }, [ticker]);
    
    // round to 2 decimal places

    console.log(data);
    console.log(logo);
    
    return (
      <View>
        {isLoading ? (
          <View style={loadingContainer} >
              <ActivityIndicator size="large" color={colors.tertiary} />
          </View>
        ) : error ? (
          <View style={loadingContainer} >
            <Text style={title} >Invalid ticker symbol</Text>
          </View>
        ) : (
          <View style={container} >
            {logo ? (
              <Image
                style={image}
                source={require('../../assets/logo-holder.png')}
              />
            ) : (
              <Image
                style={image}
                source={{ uri: `${logo.results.branding.icon_url}?apiKey=h7g0ci5p5ImjPu7xQILGGpvq3Q93EYmX` }}
              />
            )}
            <Text style={title} >{ticker}</Text>
            <View>
              <Text style={title} >$ {data.results[0].c}</Text>
              {Math.round(((data.results[0].c - data.results[0].o) / data.results[0].o * 100) * 100) / 100 >= 0 ? (
                <Text style={[change, {color:'green'}]} >{Math.round(((data.results[0].c - data.results[0].o) / data.results[0].o * 100) * 100) / 100}%</Text>
              ) : (
                <Text style={[change, {color:'red'}]} >{Math.round(((data.results[0].c - data.results[0].o) / data.results[0].o * 100) * 100) / 100}%</Text>
              )}
            </View>
          </View>
        )}
      </View>
    );
};

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  change: {
    alignSelf: 'flex-end',
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default GetStock;
