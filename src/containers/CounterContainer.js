import React from 'react';
import Counter from '../components/Counter';
// 액션 생성함수를 불러오기
import { increase, decrease, setDiff } from '../modules/counter';
import { useSelector, useDispatch } from 'react-redux';

function CounterContainer(props) {
    // useSelector는 리덕스 스토어의 상태를 조회하는 hook
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook
    const dispatch = useDispatch();
    // 각 액션을 디스패치 하는 함수
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));
    return (
        <Counter 
        // 상태
        number = { number }
        diff = { diff }
        // 액션을 디스패치하는 함수들
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
        />
    );
}


export default CounterContainer;