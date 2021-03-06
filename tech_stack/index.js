/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
export * from "./src/components/common/Button";
export * from "./src/components/common/Card";
export * from "./src/components/common/CardSection";
export * from "./src/components/common/Header";
export * from "./src/components/common/Input";
export * from "./src/components/common/Spinner";

AppRegistry.registerComponent(appName, () => App);
