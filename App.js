import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

// redux store 생성
let store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      // Provider를 통해 하위 컴포넌트들에 store 전달
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}
