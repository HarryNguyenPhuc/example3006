import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styleApp.container}>
                <Text style={styleApp.appName}>{'EXAM 3: \nAPP COMPONENT'}</Text>
                <View style={styleOutput.header}>
                    <Text style={styleOutput.componentName}>OUTPUT COMPONENT</Text>
                    <Text style={styleOutput.value}>0</Text>
                </View>
                <View style={styleController.controller}>
                    <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
                    <View style={styleController.buttonContainer}>
                        <TouchableOpacity style={styleController.button}>
                            <Text style={styleController.buttonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleController.button}>
                            <Text style={styleController.buttonText}>-</Text>
                        </TouchableOpacity>
                    </View>
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
    }
});

const styleOutput = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    value: {
        color: 'black',
        fontSize: 40
    },
    componentName: {
        fontSize: 20,
        color: 'black'
    }
});

const styleController = StyleSheet.create({
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    controllName: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 40
    }
});
