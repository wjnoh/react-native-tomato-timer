import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

// 숫자 포맷을 초에서 분으로 변경
function formatTime(time) {
  let minutes = Math.floor(time / 60);
  time -= minutes * 60;
  let seconds = parseInt(time % 60, 10);
  return `${minutes < 10 ? `0${minutes}` : minutes} : ${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

class Timer extends Component {
  // props가 바뀔 때마다 실행되는 lifecycle
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      // isPlaying이 false에서 true로 변할 때마다 timerInterval 실행
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      // isPlaying이 true에서 false로 변할 때 timerInterval 초기화
      clearInterval(this.state.timerInterval);
    }
  }

  render() {
    console.log(this.props);
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      addSecond
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && <Button iconName="play-circle" onPress={startTimer} />}
          {isPlaying && (
            <Button iconName="stop-circle" onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 100,
    fontWeight: "100"
  }
});

export default Timer;
