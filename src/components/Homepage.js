import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input, TextArea } from 'antd';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import '../App.css'
import { Checkbox } from 'antd';
import { addTodoList } from '../actions/addAction'
import { deleteTodo } from '../actions/addAction'
import { updateTodo } from '../actions/addAction'
import { viewCheck } from '../actions/addAction'
import MenuPage from './Menu'

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 900));
}
Homepage.prototype = {}

function Homepage(props) {
    const [value, setValue] = useState("");
    const todoList = useSelector(state => state.todo.list)
    const [textArea, setTextArea] = useState("")
    const [mapTodoList, setMapTodoList] = useState(todoList)
    useEffect(() => {
        setMapTodoList(todoList);
    }, [todoList])
    const dispatch = useDispatch();
    const onChange = (value, id) => {
        const action = viewCheck(id, value);
        dispatch(action)
    }
    const Uncheck = () => {
        // setMapTodoList(todoList);
        console.log(todoList, 'todoList');
        setMapTodoList(todoList.filter(item => item.checked == false))
    }
    const checkComplete = () => {
        // setMapTodoList(todoList);
        console.log(todoList, 'todoList');
        setMapTodoList(todoList.filter(item => item.checked == true))
    }
    const handleAddTodoClick = (e) => {
        const newId = randomNumber()
        const newtodo = {
            id: newId,
            createdAt: new Date().toLocaleString(),
            title: value,
            isEdit: false,
            checked: false
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
                setTextArea(item.title)
                return { ...item, isEdit: true }
            }
            return item
        })
        setMapTodoList(list);
    }
    const displayAllTask = () => {
        setMapTodoList(todoList);
    }

    return (
        <div className="content">
            <Row>
                <Col span={8}>
                    <MenuPage />
                </Col>
                <Col span={16}>
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
                                    <button onClick={Uncheck}>Uncompleted</button>
                                    <button onClick={checkComplete} >Completed</button>
                                </div>
                            </Col>
                        </Row>
                        {mapTodoList.map((item, index) => (
                            <Row className="itemTodo" key={item.id}>
                                <div className="contentitem" >
                                    <Row>
                                        <Checkbox
                                            onChange={(e) => onChange(e.target.checked, item.id)}
                                            defaultChecked={item.checked}> </ Checkbox> {item.createdAt}
                                    </Row>
                                    <div>
                                        <Row>
                                            <Col span={20}>
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
                                            <Col span={4}>
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
                                </div>
                            </Row>
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Homepage;