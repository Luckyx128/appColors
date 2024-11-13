import React from "react";
import { Pressable, Text} from "react-native";

type customButtonProps = {
	title:String,
}

const customButton = (props:customButtonProps)=> {
	return <Pressable>
			<Text>{props.title}</Text>
			</Pressable>
}

export default customButton;
