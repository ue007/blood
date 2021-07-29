// export default {
//     namespace: 'puzzlecards',
//     state: {
//         data: [
//             {
//                 id: 1,
//                 setup: 'Did you hear about the two silk worms in a race?',
//                 punchline: 'It ended in a tie',
//             },
//             {
//                 id: 2,
//                 setup: 'What happens to a frog\'s car when it breaks down?',
//                 punchline: 'It gets toad away',
//             },
//         ],
//         counter: 100,
//     },
//     reducers: {
//         addNewCard(state: { counter: number; data: string | any[]; }, { payload: newCard }: any) {
//             const nextCounter = state.counter + 1;
//             const newCardWithId = { ...newCard, id: nextCounter };
//             const nextData = state.data.concat(newCardWithId);
//             return {
//                 data: nextData,
//                 counter: nextCounter,
//             };
//         }
//     },
// };

import request from '../util/request';  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise

const delay = (millisecond: number | undefined) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
};

export default {
    namespace: 'puzzlecards',
    state: {
        data: [],
        counter: 0,
    },
    effects: {
        *queryInitCards(_: any, sagaEffects: { call: any; put: any; }) {
            const { call, put } = sagaEffects;
            //   const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
            const endPointURI = '/dev/random_joke';

            const puzzle = yield call(request, endPointURI);
            yield put({ type: 'addNewCard', payload: puzzle });

            yield call(delay, 3000);

            const puzzle2 = yield call(request, endPointURI);
            yield put({ type: 'addNewCard', payload: puzzle2 });
        }
    },
    reducers: {
        addNewCard(state: { counter: number; data: string | any[]; }, { payload: newCard }: any) {
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            };
        }
    },
};