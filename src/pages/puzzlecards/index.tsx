import React, { Component } from 'react';
import { Button, Card } from 'antd';
import { connect } from 'dva';
const connects: Function = connect;
const namespace = 'puzzlecards';
const mapStateToProps = (state: { [x: string]: { data: any } }) => {
  const cardList = state[namespace].data;
  console.log(state);
  return {
    cardList,
  };
};

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any }) => void) => {
  return {
    onDidMount: (newCard: any) => {
      const action = {
        type: `${namespace}/queryInitCards`,
        payload: newCard,
      };
      dispatch(action);
    },
  };
};

// @see https://blog.csdn.net/qq_41108972/article/details/117038266
@connects(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
  componentDidMount() {
    console.log(this.props);
    (this.props as any).onDidMount();
  }

  render() {
    return (
      <div>
        {(this.props as any).cardList &&
          (this.props as any).cardList.map(
            (card: {
              id: React.Key | null | undefined;
              setup:
                | string
                | number
                | boolean
                | {}
                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                | React.ReactNodeArray
                | React.ReactPortal
                | null
                | undefined;
              punchline:
                | string
                | number
                | boolean
                | {}
                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                | React.ReactNodeArray
                | React.ReactPortal
                | null
                | undefined;
            }) => {
              return (
                <Card key={card.id}>
                  <div>Q: {card.setup}</div>
                  <div>
                    <strong>A: {card.punchline}</strong>
                  </div>
                </Card>
              );
            },
          )}
        <div>
          <Button
            onClick={() =>
              this.props &&
              (this.props as any).onClickAdd({
                setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                punchline: 'here we use dva',
              })
            }
          >
            {' '}
            添加卡片{' '}
          </Button>
        </div>
      </div>
    );
  }
}
