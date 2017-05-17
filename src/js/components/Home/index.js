import React, { Component } from 'react';
// custom Component

import Hero from './partial/Hero';


import { connect } from "react-redux";

import { getAccountList } from "../../redux/actions/getAccountList";

@connect((store) => {
  console.log(store);
  return {
    accountList: store.accountList.accountList,
    err: store.accountList.err,
    fetching: store.accountList.fetching
  };
})


class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getAccountList());
  }
  render() {
    return (
      <div>
        <Hero />
      </div>
    );
  }
}

export default Home;