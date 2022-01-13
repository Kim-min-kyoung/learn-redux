import React from 'react';
import Todos from '../components/Todos';
// 액션 생성함수 불러오기
import { addTodo, toggleTodo, removeTodo } from '../modules/todos';
import { useSelector, useDispatch } from 'react-redux';

function TodosContainer(props) {
    // 리덕스 스토어 상태 조회 hook, store의 tods값을 반환
    const todos = useSelector(state => state.todos);
    // useDispatch
    const dispatch = useDispatch();
    // 액션을 디스패치하는 함수
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    // const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);
    const onRemove = id => dispatch(removeTodo(id));
    return (
        <Todos
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
}

export default TodosContainer;