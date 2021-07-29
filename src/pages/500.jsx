import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { history } from "umi";

export default class A extends Component {
  render() {
    return (
      <>
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={<Button type="primary" onClick={() => history.push("/")}>Back Home</Button>}
        />
      </>
    )
  }
}