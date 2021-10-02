import React, { Component, component } from 'react';
import { Text, View } from 'react-native';

export default class SpaceCraftScreen extends Component {
    render() {
        return (
            <View
            Style={{
             flex: 1,
             justifyContent: "center",
             alignItems: "center"   
            }}>
                <Text>Space Crafts Screen</Text>
            </View>

        )
    }
}