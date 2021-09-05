import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import RFValue from 'react-native-responsive-fontsize'

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super()
    this.state={
      title:'',
      author:'',
      story:''
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Write Dem Stories</Text>
        <TextInput
          style={styles.inputFont}
          onChangeText={title => this.setState({ title })}
          placeholder={"Title"}
          placeholderTextColor={"white"}
        />
        <TextInput
          style={styles.inputFont}
          onChangeText={author => this.setState({ author })}
          placeholder={"Author"}
          numberOfLines={4}
          placeholderTextColor={"white"}
        />
        <TextInput
          style={styles.inputFont}
          onChangeText={story => this.setState({ story })}
          placeholder={"Story"}
          multiline={true}
          numberOfLines={20}
          placeholderTextColor={"white"}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textSize:RFValue(30),
    bold:true
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
})