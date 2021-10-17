import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Screen = ({children}) => {
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    )
}

export default Screen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#99ff99'
    },
  });
