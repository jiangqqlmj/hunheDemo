//
//  RNBridgeModule.m
//  hunheDemo
//
//  Created by 江清清 on 16/6/5.
//  Copyright © 2016年 Facebook. All rights reserved.
//
#import "RNBridgeModule.h"
@implementation RNBridgeModule

RCT_EXPORT_MODULE(RNBridgeModule)

RCT_EXPORT_METHOD(RNOpenVC:(NSString *)msg){
   NSLog(@"RN传入原生界面的数据为:%@",msg);
  [[NSNotificationCenter defaultCenter]postNotificationName:@"RNOpenVC" object:nil];
}
@end
