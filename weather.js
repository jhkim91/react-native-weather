import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from "prop-types";

/*const weatherCasesIos = {
    Rain: 'ios-rainy',
    Clear: 'ios-sunny',
    Thunderstorm: 'ios-thunderstorm',
    Clouds: 'ios-cloudy',
    Snow: 'ios-snow',
    Drizzle: 'ios-rainy-outline',
    Haze: 'ios-rainy-outline'
}*/

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: '비',
        subtitle: '비가오는중입니다.',
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: '맑음',
        subtitle: '화창합니다',
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: '뇌우',
        subtitle: '천둥번개와 함께 비가 옵니다',
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: '흐림',
        subtitle: '날이 흐립니다',
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: '눈',
        subtitle: '눈이옵니다',
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ['#90F7FE', '#66A6FF'],
        title: '이슬비',
        subtitle: '이슬비가 내립니',
        icon: 'weather-hail'
    },
    Haze: {
        colors: ['#90F7FE', '#66A6FF'],
        title: '안개',
        subtitle: "안개가 껴있습니다",
        icon: 'weather-windy'
    }
}
function Weather({ weatherName, temp }) {
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                {/*<Ionicons color='white' size={144} name={weatherCasesIos[weatherName]} />*/}
                <MaterialCommunityIcons color='white' size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    }
})