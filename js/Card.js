import { func } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function Card(props) {
    return (
        <View style= { styles.cardStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle : {
        borderRadius: 6, 
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        marginTop: 30
    }
})