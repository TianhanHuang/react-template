import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./index.less";
class test extends Component {
  static propTypes = {};
  state = {};
  componentDidMount() {}
  render() {
    const { userInfo, onIncreaseClick } = this.props;
    return (
      <div>
        {userInfo}
        <button onClick={onIncreaseClick}>点击</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};
const increaseAction = { type: "SAVE_USERINFO", userInfo: 1 };
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(test);
