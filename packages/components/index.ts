/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-17 12:43:15
 */

import type { App } from 'vue';
import _button from './button';
import _icon from './icon';
import _image from './image';

export * from './button';
export * from './message';
export * from './image';
export * from './icon';

const components = [_button, _icon, _image];
export default {
  install(app: App) {
    components.forEach((item) => {
      app.use(item);
    });
  }
};
