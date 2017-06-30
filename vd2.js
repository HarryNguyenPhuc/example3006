import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styleApp.container}>
                <Text style={styleApp.appName}>EXAM 2: {'\n'}APP COMPONENT</Text>
                <View style={styleApp.controller}>
                    <TouchableOpacity style={styleApp.button}>
                        <Text style={styleApp.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleApp.button}>
                        <Text style={styleApp.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styleOutput.output}>
                    <Text style={styleOutput.outputName}>OUTPUT COMPONENT</Text>
                    <Text style={styleOutput.outputValue}>0</Text>
                </View>
            </View>
        );
    }
}

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    controller: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'yellow',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 40
    }
});

const styleOutput = StyleSheet.create({
    outputName: {
        fontSize: 25,
        marginBottom: 10
    },
    output: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    outputValue: {
        color: 'black',
        fontSize: 40
    }
});
