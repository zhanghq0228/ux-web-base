/* eslint-disable */
import * as components from './src/index';
export * from './src/index';
import { App, Component } from 'vue';

// export default components;

export default {
  install: (app: App) => {
    for (const c in components) {
      if (Object.prototype.hasOwnProperty.call(components, c)) {
        app.component(c, components[c]);
      }
    }
  }
};
