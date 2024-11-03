import  React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type ColorCardProps = {
  text: string;
  color: string;
}

const cardStyles = StyleSheet.create({
  textColor: {
    color: 'white',
    fontWeight: 'bold'
  }
})

const ColorCard: React.FC<ColorCardProps> = (props ):React.JSX.Element => {

  return (
    <View style={{backgroundColor: props.color,flex: 0.4}}>
      <Text style={cardStyles.textColor}>
        {props.text}
      </Text>
    </View>
  )
}

export  default  ColorCard;
