/*
 * @Descripttion: 
 * @version: 
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-15 22:12:13
 */
import type { App, Plugin } from "vue"; // 只是导入类型不是导入App的值
import { componentNameFormat } from '@cz-coco/utils/helper'
/**
 * 组件外部使用use时执行install，然后将组件注册为全局
 */

// 类型必须导出否则生成不了.d.ts文件
export type SFCWithInstall<T> = T & Plugin;

 /**
  * 定义一个withInstall方法处理以下组件类型问题
  * @param comp
  */
export const withInstall = <T>(comp: T) => {
   /**
    * 直接写comp.install = function(){} 的话会报错，因为comp下没有install方法
    * 所以从vue中引入Plugin类型，断言comp的类型为T&Plugin
    */
   (comp as SFCWithInstall<T>).install = function (app: App) {
       console.log(7777, comp)
     app.component((comp as any).name, comp as any);
     app.component(componentNameFormat((comp as any).name), comp as any);
   };
   return comp as SFCWithInstall<T>;
 };