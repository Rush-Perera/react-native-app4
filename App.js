import { useState } from 'react';
import { StyleSheet,StatusBar, Text, View , Button, SafeAreaView, Pressable, Alert} from 'react-native';

function App() {

  const [t, setT]= useState("Text");

  const ui = (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />

      <Text>{t}</Text>

      <Button title="Click me" onPress={test} />

      <Pressable onPress={test} onLongPress={longTest} onPressOut={pressout} delayLongPress={5000}>
        <View style={styles.btnView}>
          <Text style={styles.btnText}>Pressable</Text>
        </View>
      </Pressable>

    </SafeAreaView>

  );

  function test() {
    Alert.alert('Info','Success');
    setT("Text Changed");
  }

  return ui;

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnView: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    boxShadow: '0px 5px 5px rgba(0,0,0,0.5)',
  },
  

btnText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
},

});

export default App;



function longTest() {
  Alert.alert('Info','Long Press Success');
}

function pressout() {
  Alert.alert('Info','Press Out Success');
}
