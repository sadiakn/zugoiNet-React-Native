import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var gender = [
    { label: 'Hombre', value: 0 },
    { label: 'Mujer', value: 1 }
];

class registerProduct extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Register product</Text>

                <RadioForm
                    radio_props={gender}
                    initial={-1}
                    onPress={(value) => {}}
                    buttonColor={'#ee712e'}
                    formHorizontal={true}
                    selectedButtonColor = {'#ee712e'}
                />

            </View>
        )
    }
}

export default registerProduct;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})