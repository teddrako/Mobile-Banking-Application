import React, { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';

const Chart = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const [chartAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    const chartDataWithAnimation = data.map((entry, index) => ({
      ...entry,
      animationValue: new Animated.Value(0),
    }));

    setChartData(chartDataWithAnimation);
  }, []);

  useEffect(() => {
    // Animate each part of the pie chart
    chartData.forEach((entry) => {
      Animated.timing(entry.animationValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    });
  }, [chartData]);

  const renderChartPart = (entry, index) => {
    const { color, amount, animationValue } = entry;

    const chartPartAnimation = animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Animated.View
        key={index}
        style={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: 100,
          borderStyle: 'solid',
          borderWidth: 20,
          borderColor: color,
          transform: [{ rotate: chartPartAnimation }],
        }}
      />
    );
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {chartData.map(renderChartPart)}
    </View>
  );
};

export default Chart;
