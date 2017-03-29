//
//  RNBridgeModule.m
//  hunheDemo
//
//  Created by 江清清 on 16/6/5.
//  Copyright © 2016年 Facebook. All rights reserved.
//
#import "RNBridgeModule.h"
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@implementation RNBridgeModule

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE(RNBridgeModule)

//RN传参数调用原生OC,并且返回数据给RN  通过CallBack
RCT_EXPORT_METHOD(RNInvokeOCCallBack:(NSDictionary *)dictionary callback:(RCTResponseSenderBlock)callback){
   NSLog(@"接收到RN传过来的数据为:%@",dictionary);
   NSArray *events = [[NSArray alloc] initWithObjects:@"张三",@"李四", nil];
   callback(@[[NSNull null], events]);
}
//RN传参数调用原生OC,并且返回数据给RN  通过Promise
RCT_EXPORT_METHOD(RNInvokeOCPromise:(NSDictionary *)dictionary resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject){
   NSLog(@"接收到RN传过来的数据为:%@",dictionary);
   NSString *value=[dictionary objectForKey:@"name"];
   if([value isEqualToString:@"jiangqq"]){
     resolve(@"回调成功啦,Promise...");
   }else{
     NSError *error=[NSError errorWithDomain:@"传入的name不符合要求,回调失败啦,Promise..." code:100 userInfo:nil];
     reject(@"100",@"传入的name不符合要求,回调失败啦,Promise...",error);
   }
}
//RN跳转原生界面
//RCT_EXPORT_METHOD(RNOpenVC:(NSString *)msg){
//   NSLog(@"RN传入原生界面的数据为:%@",msg);
//  [[NSNotificationCenter defaultCenter]postNotificationName:@"RNOpenVC" object:nil];
//}

//OC调用RN
RCT_EXPORT_METHOD(VCOpenRN:(NSDictionary *)dictionary){
  NSString *value=[dictionary objectForKey:@"name"];
  if([value isEqualToString:@"jiangqq"]){
    [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder" body:@{@"name":[NSString stringWithFormat:@"%@",value],@"errorCode":@"0",@"msg":@"成功"}];
  }else{
    [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder" body:@{@"name":[NSString stringWithFormat:@"%@",value],@"errorCode":@"0",@"msg":@"输入的name不是jiangqq"}];
  }
}

@end
