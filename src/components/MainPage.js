import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { COLORS } from '../state/Colors.js';

class MainPage extends Component {

    onChooseColor() {
        
    }

    selectedColor() {
        const colorName = 'RED';
        return COLORS[colorName].hexCode;
    }

    render() {
        const color = this.selectedColor();
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: color }}>
                <Button 
                    onPress={this.onChooseColor.bind(this)}
                    color="#FFF"
                    title="Choose Color"
                />
            </View>
        )
    }
}

export default MainPage;
