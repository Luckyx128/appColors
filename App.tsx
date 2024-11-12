import React from 'react';
import {
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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle]}>
        <SafeAreaView style={styles.areaView}>
            <StatusBar
             barStyle={isDarkMode ? 'light-content' : 'dark-content'}
             backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={styles.viewOne}>
                <ColorCard color={'blue'} text={'Card numero 1'}/>
                <ColorCard color={'green'} text={'Card numero 2'}/>
                <ColorCard color={'red'} text={'Card numero 3'}/>
            </View>
            <View style={styles.viewTwo}>
                <Text>Seja muito bem vindo! </Text>
                <TextInput
                placeholder="Matricula:"
                keyboardType={'numeric'}/>
                <TextInput
                placeholder="Senha:"/>
            </View>
        </SafeAreaView>
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  areaView:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
  },
    viewOne:{
        flexDirection:'row',
    },
    viewTwo:{
        flex:1,
    },
});

export default App;
