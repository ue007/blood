import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';
import * as G2 from '@antv/g2';

class SampleChart extends React.Component {
  containerRef: React.RefObject<any>;
  chart: G2.Chart | undefined;
  constructor(props: any) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.chart = new G2.Chart({
      container: this.containerRef.current,
      width: 450,
      height: 300,
    });
    this.refreshChart();
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.data !== (this.props as any).data) {
      this.refreshChart();
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  refreshChart = () => {
    console.log(this.props);
    if (this.props && (this.props as any).data) {
      this.chart && this.chart.source((this.props as any).data);
      this.chart &&
        this.chart
          .interval()
          .position('genre*sold')
          .color('genre');
      this.chart && this.chart.render();
    }
  };

  render() {
    return <div ref={this.containerRef} />;
  }
}

export default SampleChart;
