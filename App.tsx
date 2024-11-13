import React from 'react';
import {
    Alert, Dimensions,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TextInput,
    useColorScheme,
    View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import ColorCard from './components/colorCard';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  function onPressEntrar(): void {
      Alert.alert('Atenção!','Iniciando login')

  }
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? Colors.lighter : Colors.lighter,
  };

  const inverseBackgroundStyle = {
      backgroundColorCard:{
          backgroundColor: isDarkMode ?  '#002370' : 'red',
      },
      backgroundColorInput:{
          borderStyle:'solid',
          borderBottomColor:'white',
          borderBottomWidth:1,
      },
      colorText:{
          color: isDarkMode ? Colors.lighter : Colors.lighter,
      },
      backgroundColorButton:{
          backgroundColor: isDarkMode ? '#fb7b44' : Colors.lighter,
      },
  };

  return (


        <SafeAreaView style={styles.areaView}>
            <StatusBar
             barStyle={isDarkMode ? 'light-content' : 'dark-content'}
             backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={[styles.viewTwo,inverseBackgroundStyle.backgroundColorCard]}>
                <Text style={[inverseBackgroundStyle.colorText,styles.text]} >Seja muito bem vindo! </Text>
                <TextInput
                    style={inverseBackgroundStyle.backgroundColorInput}
                placeholder="Matricula:"
                keyboardType={'numeric'}/>
                <TextInput
                    style={inverseBackgroundStyle.backgroundColorInput}
                    secureTextEntry={true}
                    placeholder="Senha:"
                    textContentType="password"
                />
                <Pressable style={[styles.enterButton,inverseBackgroundStyle.backgroundColorButton]}   onPress={onPressEntrar}>
                    <Text style={[inverseBackgroundStyle.colorText,styles.text]}>Entrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  areaView:{
      height:Dimensions.get('screen').height,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
  },
    viewOne:{
        flexDirection:'row',
    },
    viewTwo:{
      width:'50%',
        gap:25,
        paddingHorizontal:40,
        paddingVertical:20,
        backgroundColor:Colors.black,
        borderRadius:10,
    },
    enterButton:{
      borderRadius:5,
    },
    text:{
        textAlign:'center',
    },
});

export default App;
