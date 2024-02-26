import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerGeral}>
      <View style={styles.containerPinterest}>
        <Image style={styles.imagePinterest} source={require('./assets/images/logoPinterest.png')} />
        <Text style={styles.textGeral}>Log in to see more</Text>
      </View>
      
      <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder='Email or phone number'/>
        <TextInput style={styles.input} placeholder='Password'/>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.botaoLogin}>
          <Text style={styles.textLogin}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.textOr}>OR</Text>
        <TouchableOpacity style={styles.facebookButton}>
          <Text>Image Facebook</Text>
          <Text>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Text>Image Google</Text>
          <Text>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Forgot your password?</Text>
        <Text>Are you a business? Get started here</Text>
      </View>
      <Text>Not on Pinterest yet? Sign up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGeral: {
    paddingTop: '20%',

  },
  containerPinterest: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePinterest: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textGeral: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#4d4c4c'
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  input: {
    backgroundColor: '#ebeae8',
    width: '70%',
    height: '18%',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    fontWeight: 'bold'
  },
  containerButtons: {
    alignItems: 'center',
    gap: 10
  },
  botaoLogin: {
    backgroundColor: '#8c0101',
    width: '70%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textLogin: {
    fontWeight: 'bold',
    color: '#fff'
  },
  textOr: {
    color: '#a6a6a6',
    fontWeight: 'bold'
  },
  facebookButton: {
    backgroundColor: '#1c3a80',
    width: '70%',
    flexDirection: 'row',
    height: '10%'
  }

});
