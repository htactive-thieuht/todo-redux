import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input} from 'antd';
import { UnorderedListOutlined,BellOutlined,UserSwitchOutlined, WechatOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import '../App.css'
import { addTodoList } from '../actions/addAction'
import { viewCheck } from '../actions/addAction'
import MenuPage from './Menu'
import Tab from './Tab'
import Search from './searchModal'

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 900));
}
Homepage.prototype = {}

function Homepage(props) {
    const [value, setValue] = useState("");
    const todoList = useSelector(state => state.todo.list)
    const [mapTodoList, setMapTodoList] = useState(todoList)
    useEffect(() => {
        setMapTodoList(todoList);
    }, [todoList])
    const dispatch = useDispatch();
    const onChange = (value, id) => {
        const action = viewCheck(id, value);
        dispatch(action)
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
            if(newtodo.title!==""){
                const action = addTodoList(newtodo);
                dispatch(action)
                setValue("")
            } 
        }
    }
    return (
        <div className="content">
            <Row>
                <Col span={4}>
                    <MenuPage />
                </Col>
                <Col span={20}>
                    <div>
                        <Row>
                            <Col span={4}>
                                <div className="menuIconFirst">
                                    <UnorderedListOutlined /> 
                                </div>
                            </Col>
                            <Col span={20}>
                                <div className ="menuIcon">
                                    <ul >
                                        <li><Search/></li>
                                        <li><BellOutlined/></li>
                                        <li><WechatOutlined /> </li>
                                        <li><ShoppingCartOutlined />  </li>
                                        <li><UserSwitchOutlined /> </li>
                                    </ul>
                                </div> 
                            </Col>
                        </Row>
                    </div>
                    <div className="container" >
                        <Row>
                            <Col span={24}>
                                <Input 
                                    placeholder="Type here for add a new todo"
                                    value={value}
                                    onChange={event => setValue(event.target.value)}
                                    onKeyDown={handleAddTodoClick} />
                            </Col>
                        </Row>
                        <Row className="itemTodos">
                                <div className="contentitem" >
                                    <Tab 
                                        mapTodoList ={mapTodoList}
                                        onChange={onChange}
                                        />
                                </div>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Homepage;