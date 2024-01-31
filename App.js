
import { StyleSheet, Text, View } from 'react-native';



const app = () => {
  return(
    <View style={styles.container}> 
    <Text style={styles.textHelloWorld} >Hola mundo</Text>
    <Text style={styles.textname}>Me llamo Ariel</Text>
    <Text style={styles.textname}>Y estoy en la clase de dispositivos moviles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHelloworld: {
    fontSize: 20,
    fornWeight: 'bold',
    color: "#FFFFFF",
    fontFamily: 'Helvetica',
  },  
  textName: {
    fontSize: 12,
    fontWeight: '300',
    color: "red",
  },
  textBody: {
    fontSize: 12,
    fontWeight: '300',
    color: "red",
  },
});

export default app;
