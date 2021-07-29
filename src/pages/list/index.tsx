import React from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';
import SampleChart from '../../components/SampleChart';

const FormItem = Form.Item;

class List extends React.Component {
  state = {
    visible: false,
    statisticVisible: false,
    id: null,
  };

  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render(value: any) {
        return <a href={value}>{value}</a>;
      },
    },
    {
      title: '',
      dataIndex: 'statistic',
      render: (_: any, { id }: any) => {
        return (
          <Button
            onClick={() => {
              this.showStatistic(id);
            }}
          >
            图表
          </Button>
        );
      },
    },
  ];

  componentDidMount() {
    (this.props as any).dispatch({
      type: 'cards/queryList',
    });
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  showStatistic = (id: any) => {
    (this.props as any).dispatch({
      type: 'cards/getStatistic',
      payload: id,
    });
    this.setState({ id, statisticVisible: true });
  };

  handleOk = () => {
    const {
      dispatch,
      form: { validateFields },
    } = this.props;

    validateFields((err: any, values: any) => {
      if (!err) {
        dispatch({
          type: 'cards/addOne',
          payload: values,
        });
        this.setState({ visible: false });
      }
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleStatisticCancel = () => {
    this.setState({
      statisticVisible: false,
    });
  };

  render() {
    const { visible, statisticVisible, id } = this.state;
    const {
      cardsList,
      cardsLoading,
      form: { getFieldDecorator },
      statistic,
    } = this.props;

    return (
      <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />

        <Button onClick={this.showModal}>新建</Button>

        <Modal title="新建记录" visible={visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <Form>
            <FormItem label="名称">
              {getFieldDecorator('name', {
                rules: [{ required: true }],
              })(<Input />)}
            </FormItem>
            <FormItem label="描述">{getFieldDecorator('desc')(<Input />)}</FormItem>
            <FormItem label="链接">
              {getFieldDecorator('url', {
                rules: [{ type: 'url' }],
              })(<Input />)}
            </FormItem>
          </Form>
        </Modal>

        <Modal visible={statisticVisible} footer={null} onCancel={this.handleStatisticCancel}>
          <SampleChart data = {statistic[id]} />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    cardsList: state.cards.cardsList,
    cardsLoading: state.loading.effects['cards/queryList'],
    statistic: state.cards.statistic,
  };
}

export default connect(mapStateToProps)(Form.create()(List));
