/// <reference types="styled-components/cssprop" />
import 'reflect-metadata';
import { AppRegistry } from 'react-native';
import { Application } from './Application';
import { name as appName } from './app.json';

const isHermes = () => global.HermesInternal !== null;
console.log(`Is Hermes enabled? ${isHermes()}`);

AppRegistry.registerComponent(appName, () => Application);
