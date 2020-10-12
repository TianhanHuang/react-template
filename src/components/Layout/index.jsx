import React, { Component } from "react";
import RouteView from "@/router/index";
class MainLayout extends Component {
  render() {
    let {  routers } = this.props;
    console.log({ routers });
    return (
      <div>
        这个是layout1
        <RouteView routers={routers}></RouteView>
      </div>
    );
  }
}
export default MainLayout;
