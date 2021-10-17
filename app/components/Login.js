import React from 'react'
import { Button, Image, StyleSheet, Text, View} from 'react-native'



const Login = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Logo.png')} style={styles.image}/>
            <Text style={styles.text}>Selamat Datang</Text>
            <Text>Masuk untuk melanjutkan</Text>
            <View style={styles.button}>
                <Button title='Daftar dengan nomor seluler' color='green'/>
            </View>
            <Text>atau</Text>
            <View style={styles.button}>
                <Button title='Masuk dengan facebook'/>
            </View>
            <Text style={{marginVertical: 80}}>By signing in, you accept our terms and condition</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 0.9,
        width: '50%',
        height: '80%',
        marginVertical: 50,
        // marginTop: 100
    },
    button: {
        width: '70%',
        marginVertical: 25
    },
    text: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'green'
    }

})
