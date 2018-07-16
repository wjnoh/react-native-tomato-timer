import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActions } from "../../reducer";
import Timer from "./presenter";

// store의 state를 해당 컴포넌트의 props에 매핑
function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}

// 컴포넌트의 특정 함수형 props를 실행했을 때 개발자가 지정한 action을 dispatch
function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
}

// Timer 컴포넌트를 Redux Store에 연결
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
