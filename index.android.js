/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
var { NativeModules } = require('react-native');
class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

class hunheDemo extends Component {
  //当组件挂载之后,去获取Activity传输过来的数据...
  componentDidMount(){
     //进行从Activity中获取数据传输到JS
     NativeModules.IntentModule.dataToJS((msg) => {
                    console.log(msg);
                  },
                   (result) => {
                    console.log('从Activity中传输过来的数据为:'+result);
                  })

  }
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
           JS跳转Activity界面
        </Text>
        <CustomButton
          text="点击跳转到Activity界面"
          onPress={()=>NativeModules.IntentModule.startActivityFromJS("com.hunhedemo.TwoActivity","我是从JS传过来的参数信息.456")}
        />
        <CustomButton
          text="点击跳转到Activity界面,并且等待数据返回..."
           
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
});

AppRegistry.registerComponent('hunheDemo', () => hunheDemo);
