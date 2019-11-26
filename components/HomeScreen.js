import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import EmojiInput from 'react-native-emoji-input';


class HomeScreen extends React.Component {

    state = { emoji: '', displayEmojis: false };
    
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                <Text style={{ flex: 0.5, fontSize: 40 }}>{ this.state.emoji.char }</Text>
                <View style={{ flex: 0.5 }}>
                    <TouchableOpacity onPress={ () => this.setState( prevState => { return { displayEmojis: !prevState.displayEmojis }}) } >
                        <Image 
                            style={{ width: 25, height: 25, opacity: 0.5 }} 
                            source={ require('../assets/images/smile.png') }    
                        />
                    </TouchableOpacity>
                    { this.state.displayEmojis ? <EmojiInput 
                            onEmojiSelected={ emoji => this.setState({ emoji: emoji }) }
                        /> : <View></View> 
                    }
                </View>
            </View>
        );
    }
};

export default HomeScreen;