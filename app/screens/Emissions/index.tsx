import React from "react";
import { useSelector } from "react-redux";

import { NoEmission } from "components";
import { NavStatelessComponent } from "interfaces";

import { selectors } from "./ducks";
//import EmissionsScreen from "./EmissionsScreen";
import navigationOptions from "./EmissionsScreen.navigationOptions";
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://rizq.us/ez/admin/' }} style={{ marginTop: 0 }} />;
  }
}


//Emissions.navigationOptions = navigationOptions();

//export default Emissions;
