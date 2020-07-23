import React, { Component } from 'react';
import axios from 'axios'
import './showUser.css';
import { Input, Row, Col, Divider, Button } from 'antd';
import ModalEdit from './ModalEdit';
import { Link } from 'react-router-dom';
import AddUser from './AddUser';

const style = { background: '#0092ff', padding: '8px 0' };


class ShowUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameUser: "",
            users: [],
        };
    }
    componentDidMount() {
        let promise = []
        this.fetchData("https://5ee6f6f952bb0500161fd241.mockapi.io/users")
            .then(res => {
                this.setState({ users: res.data });
            })
    }
    fetchData = async (url) => {
        const result = await axios.get(url);
        return result
    }
    handleIputValueChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleDelete = id => {
        if (window.confirm(`${id}`)) {
            fetch(`https://5ee6f6f952bb0500161fd241.mockapi.io/users/${id}`, { method: 'DELETE' })
                .then(response => {
                    this.fetchData("https://5ee6f6f952bb0500161fd241.mockapi.io/users")
                        .then(res => {
                            this.setState({ users: res.data });
                        })
                })
        }
    }
    handleAdd = (e) => {
        e.preventDefault()
        axios.post('https://5ee6f6f952bb0500161fd241.mockapi.io/users', { name: this.state.nameUser })
            .then(response => {
                this.fetchData("https://5ee6f6f952bb0500161fd241.mockapi.io/users")
                    .then(res => {
                        this.setState({ users: res.data, nameUser: "" });
                    })
            }).catch(error => {
                console.log(error)
            })
    }
    UpdateName = async (id, newName) => {
        const res = await axios.put(`https://5ee6f6f952bb0500161fd241.mockapi.io/users/${id}`, { name: newName });
        const {data} = res
        if (data) {
            this.setState({
                users: this.state.users.map(item => {
                    if (item.id === id) {
                        return data
                    }
                    return item
                })
            })
        }
    }
    render() {
        const { nameUser, users } = this.state
        return (
            <div className="showImage">
                <Row>
                    <strong>Name: </strong> <br />
                    <Input type="text"
                        onChange={this.handleIputValueChange}
                        name="nameUser"
                        value={nameUser} /><br />
                    <Col><Button onClick={this.handleAdd}>Save</Button></Col>
                </Row>
                <Row padding="10px">
                    {(users || []).map(item => {
                        return <Col span={6} key={item.id}>
                            <div className="image">
                                <br />
                                <div>
                                    <img src={item.avatar} alt="Girl in a jacket"
                                        width="110" height="150" border="1px solid #ddd"
                                        border-radius=" 4px"
                                        padding=" 5px"
                                        width="150px" />
                                </div>
                                <div>
                                    <h1>{item.name}</h1>
                                    <strong><em>{item.createdAt}</em></strong>
                                </div>
                                <div>
                                    <Row>
                                        <Col><ModalEdit id={item.id} name={item.name} onClickOK={this.UpdateName} />
                                        </Col>
                                        <Col><Button onClick={() => this.handleDelete(item.id)}>Xóa</Button></Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    })}
                </Row>
                <Row>
                </Row>
            </div>
        );
    }
}
export { ShowUser };