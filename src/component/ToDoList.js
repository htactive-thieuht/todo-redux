import React, { Component } from 'react';
//import { Row, Col, Button } from 'antd';
import './TodoList.css';
import { Row, Col, Button, Input, Popover } from 'antd';
import { withRouter } from "react-router-dom";
import axios from 'axios'
import Inputtodolist from './Inputtodolit';

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listTask: [],
            Datalists: []
        }
    }
    componentDidMount() {
        let promise = []
        // fetch("https://5e5e2557725f320014ed10b3.mockapi.io/list").then(res => res.json()).then(data => console.log(data))
        // const data = axios.get("https://5e5e2557725f320014ed10b3.mockapi.io/list").then(res => console.log(res, '????'));
        this.fetchData("https://5ee6f6f952bb0500161fd241.mockapi.io/Datalists")
            .then(res => {
                this.setState({ Datalists: res.data });
                console.log(this.state.Datalists, '????');

            })
    }
    fetchData = async (url) => {
        const result = await axios.get(url);
        return result
    }
    addCard = (id, value) => {
        this.setState({
            Datalists: this.state.Datalists.map(item => {
                if (item.listId === id) {
                    console.log(true, '????');

                    let { listTask } = item;
                    listTask = [...listTask, { taskId:listTask.taskId, nameTask: value }];
                    return { ...item, listTask}
                }
                return item
            })
        })
    }

    render() {
        console.log('Datalists', this.state.Datalists, '1521512525615454')
        return (
            <div className="todolist">
                <div className="content">
                    <Row>
                        <Col span={8}>
                            <div className="header-left" >
                                <Button>Home</Button>
                                <Button>Boards</Button>
                                <Button>Search bar</Button>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="header-midle"><h1><center>Logo</center></h1></div>
                        </Col>
                        <Col span={8}>
                            <div className="header-right">
                                <Button>Add</Button>
                                <Button>Info</Button>
                                <Button>Bell</Button>
                                <Button>Gear</Button>
                                <Button>Avatar</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row className="boardHeader ">
                        <Col span={12}>
                            <div className="header-left" >
                                <Button>Board Title</Button>
                                <Button>Star</Button>
                                <Button>Personal</Button>
                                <Button>Private</Button>
                            </div>

                        </Col>
                        <Col span={12}>
                            <div className="header-right">
                                <Button>Show menu</Button>
                                <Button>Butler</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row className="content">
                        {(this.state.Datalists || []).map(list => {
                            console.log('list', 'bbbbbb')
                            return <Col span={4} key={list.listId}>
                                <div className="listcards">
                                    <h1><center>{list.listName}</center></h1>
                                    {(list.listTask || []).map(task => (<div className="itemCard " key={task.taskId}>
                                        {task.nameTask}

                                    </div>))}
                                    <div className="add-card">
                                       <Inputtodolist addCard={this.addCard} id={list.listId} />
                                    </div>
                                </div>
                            </Col>
                        })}
                    </Row>
                </div>
            </div>
        );
    }
}
export { ToDoList };