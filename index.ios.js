/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
var { NativeModules } = require('react-native');
var RNBridgeModule=NativeModules.RNBridgeModule;
import { NativeAppEventEmitter } from 'react-native';
var subscription; //订阅者
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
  constructor(props){
    super(props);
    this.state={
        events:'',
        msg:'',
    }
  }
  //获取Promise对象处理
  async _updateEvents(){
    try{
        var events=await RNBridgeModule.RNInvokeOCPromise({'name':'jiangqqlmj'});
        this.setState({events});
    }catch(e){
        this.setState({events:e.message});
    }
  }
  componentDidMount(){
    console.log('开始订阅通知...');
    subscription = NativeAppEventEmitter.addListener(
         'EventReminder',
          (reminder) => {
            let errorCode=reminder.errorCode;
            if(errorCode===0){
               this.setState({msg:reminder.name});
            }else{
               this.setState({msg:reminder.msg});
            }
           
          }
         );
  }
  componentWillUnmount(){
     subscription.remove();
  }

  render() {
    return (
      <View style={{marginTop:20}}>
        <Text style={styles.welcome}>
           混合与RN,iOS通信实例讲解
        </Text>
        <Text style={{margin:20}}>
           来自:江清清的技术专栏(http://www.lcode.org)
        </Text>
        <Text style={{margin:5}}>'返回数据为:'+{this.state.events}</Text>
        <CustomButton text='RN调用iOS原生方法_CallBack回调'
          onPress={()=>{RNBridgeModule.RNInvokeOCCallBack(
            {'name':'jiangqq','description':'http://www.lcode.org'},
            (error,events)=>{
                if(error){
                  console.error(error);
                }else{
                  this.setState({events:events});
                }
          })}}
        />
        <CustomButton text='RN调用iOS原生方法_Promise回调'
           onPress={()=>this._updateEvents()}
        />
        <CustomButton text='RN打开原生界面'
           onPress={()=>RNBridgeModule.RNOpenVC('我就要打开VC界面...')
           }
        />
        <Text style={{margin:20}}>
          '返回数据为:'+{this.state.msg}
        </Text>
        <CustomButton text='iOS调用访问React Native'
            onPress={()=>RNBridgeModule.VCOpenRN({'name':'jiangqqlmj'})}
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
    padding: 10,
    borderWidth: 1,
    borderColor: '#facece',
  },
});

AppRegistry.registerComponent('hunheDemo', () => hunheDemo);
