import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { COLORS } from '../state/Colors.js';

class MainPage extends Component {

    onChooseColor() {
        this.props.navigation.navigate('ChooseColor');
    }

    selectedColor() {
        const { colorName } = this.props;
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

const mapStateToProps = state => {
    return { colorName: state.color.colorName };
};

export default connect(mapStateToProps)(MainPage);

