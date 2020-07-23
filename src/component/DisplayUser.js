import { Row, Col, Divider, Button } from 'antd';
import React, { Component } from 'react';
import axios from 'axios'
import './showUser.css';
import ModalUpdateUser from './ModalUpdateUser';
import InputAddUser from './InputAddUser';
import { DeleteUser } from './DeleteUser';

const style = { padding: '8px 0' };

class DisplayUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users2: [],
            reFetch: false
        };
    }
    componentDidMount() {
        let promise = []
        this.fetchData("https://5ee6f6f952bb0500161fd241.mockapi.io/users2")
            .then(res => {
                this.setState({ users2: res.data });
            })
    }
    fetchData = async (url) => {
        const result = await axios.get(url);
        return result
    }
    reloadAPI=()=>{
        this.fetchData("https://5ee6f6f952bb0500161fd241.mockapi.io/users2")
        .then(res => {
            console.log('reloadAPI', res.data);
            this.setState({ users2: res.data });
        })
    }
    render() {
        const { users2 } = this.state
        return (
            <div>
                <Row>
                    <InputAddUser reloadAPI={this.reloadAPI}/>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                    {(users2 || []).map(item => {
                        return <Col className="gutter-row" gutter={{ xs: 6, sm: 6, md: 6, lg: 6 }} key={item.id}>
                            <div style={style}>
                                <div>
                                    <img src={item.avatar} alt="Girl in a jacket"
                                        height="150" border="1px solid #ddd"
                                        border-radius=" 4px"
                                        padding=" 5px"
                                        width="150px" />
                                    <div className="content">
                                        <h2>{item.name}</h2>
                                        <h4><strong><em>{item.createdAt}</em></strong></h4>
                                    </div>
                                    <div>
                                        <Row>
                                        <Col><DeleteUser reloadAPI={this.reloadAPI} id={item.id}/></Col>
                                            <Col><ModalUpdateUser id={item.id} name={item.name} reloadAPI={this.reloadAPI}/></Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    })}
                </Row>
            </div>
        )
    }
}
export { DisplayUser };