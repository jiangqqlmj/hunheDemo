//
//  MainViewController.m
//  hunheDemo
//
//  Created by 江清清 on 16/6/5.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "MainViewController.h"
#import "TwoViewController.h"
#import "ThreeViewController.h"
@implementation MainViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  self.view.backgroundColor=[UIColor whiteColor];
  
  self.title = @"原生界面";
  
  UIButton *button=[UIButton buttonWithType:UIButtonTypeSystem];
  [button setFrame:CGRectMake((320-200)/2, 100, 200, 35)];
  [button setTitle:@"点击打开RN界面" forState:UIControlStateNormal];
  [button addTarget:self action:@selector(buttonAction:) forControlEvents:UIControlEventTouchUpInside];
  
  [self.view addSubview:button];
  
 
}
-(void)buttonAction:(UIButton *)button{
  NSLog(@"点击了按钮...");
  [self.navigationController pushViewController:[[TwoViewController alloc]init] animated:YES];
}

@end
