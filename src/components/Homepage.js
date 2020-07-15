import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input, TextArea } from 'antd';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import '../App.css'
import { Checkbox } from 'antd';
import { addTodoList } from '../actions/addAction'
import { deleteTodo } from '../actions/addAction'
import { updateTodo } from '../actions/addAction'

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 900));
}
Homepage.prototype = {
}
function Homepage(props) {
    const [value, setValue] = useState("");
    const todoList = useSelector(state => state.todo.list)
    const [textArea, setTextArea] = useState("")
    const [mapTodoList, setMapTodoList] = useState(todoList)
    useEffect(() => {
        setMapTodoList(todoList);
    },[todoList])
    const dispatch = useDispatch();

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    const handleAddTodoClick = (e) => {
        const newId = randomNumber()
        const newtodo = {
            id: newId,
            title: value,
            isEdit: false
        }
        if (e.key === 'Enter') {
            const action = addTodoList(newtodo);
            dispatch(action)
            setValue("")
        }
    }
    const handledelete = (id) => {
        const action = deleteTodo(id);
        dispatch(action)
    }
    const handleUpdate = (id) => {
        const action = updateTodo(id, textArea);
        dispatch(action);
        setTextArea("")
    }
    const handleTogleTextArea = id => {
        const list = (mapTodoList || []).map(item => {
            if (item.id === id) {
                return { ...item, isEdit: true }
            }
            return item
        })
        setMapTodoList(list);
    }
    const handlecheck=()=>{ 
    }
    const handleUncheck=()=>{  
    }
    return (
        <div className="content">
            <div className="container" >
                <Row>
                    <Col span={24}>
                        <Input placeholder="Type here for add a new todo"
                            value={value}
                            onChange={event => setValue(event.target.value)}
                            onKeyDown={handleAddTodoClick} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="menu" >
                            <a onClick={displayAllTask}> All </a>
                            <button onClick={handleUncheck}>Uncompleted</button>
                            <button onClick={handlecheck}>Completed</button>
                        </div>
                    </Col>
                </Row>
                {mapTodoList.map(item => (
                    <Row className="itemTodo" key={item.id}>
                        <div className="contentitem" >
                            <Row>
                                <Checkbox onChange={onChange}> </ Checkbox>7/4/2020
                            </Row>
                            <Row>
                                <Col span={12}>
                                    {item.isEdit ?
                                        // isEdit = true
                                        <div className="contentItemTodo">
                                            <textarea className="text"
                                                value={textArea}
                                                onChange={event => setTextArea(event.target.value)}>
                                            </textarea>
                                        </div>
                                        :
                                        // isEdit = false
                                        <div className="contentItemTodo">
                                            <strong> {item.title}</strong>
                                        </div>
                                    }

                                </Col>
                                <Col span={12}>
                                    <div className="contentButtonTodo">
                                        {item.isEdit ?
                                            <button><CheckOutlined onClick={() => handleUpdate(item.id)} /></button>
                                            :
                                            <button><EditOutlined onClick={() => handleTogleTextArea(item.id)} /></button>
                                        }
                                        <button onClick={() => handledelete(item.id)}>x</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                ))}
            </div>
        </div>
    )
}
export default Homepage;