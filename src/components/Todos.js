import React, { useState } from 'react';

function Todos({ onCreate, onToggle, onRemove, todos }) {
    // input의 입력되는 값을 관리하는 상태
    const [ text, setText ] = useState('');
    // input의 입력 값이 변경될 때 실행하는 함수
    const onChange = e => setText(e.target.value);
    const onSubmit = e => { 
        e.preventDefault(); // submit 이벤트 발생했을 때 새로고침 방지(기본이벤트를 제거)
        onCreate(text); 
        setText(''); // input.value 초기화
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} placeholoder='할 일을 입력하세요' onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            {/* <TodoList todos={todos} onToggle={onToggle} /> */}
            <ul>
                {
                    // 클릭 시 action.id 넘겨줌
                    todos.map(todo => 
                        <li  style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                            key={todo.id} onClick={()=>{onToggle(todo.id)}}
                        >
                            {todo.text}
                            <button type="reset" onClick={()=>{onRemove(todo.id)}}>삭제</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Todos;