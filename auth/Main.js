import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <Text style={{paddingTop:20}}>Main</Text>
    }
}

const styles = StyleSheet.create({});