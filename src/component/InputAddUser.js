import React, { Component } from 'react';
import './TodoList.css';
import { Row, Col, Button } from 'antd';
import { Input } from 'antd';
import { AddUser } from './AddUser';

class InputAddUser extends Component {
    state = {
        isShow: false,
        value: ""
    }
    handleNumberChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleTogleInput = () => {
        this.setState({
            isShow: !this.state.isShow, // flag
            value: " "
        })
    }
    cleanValue = () => {
        this.setState({value:''})
    }
    render() {
        return (
            <div>
                {this.state.isShow ?
                    <div>
                        <Input
                            type="text"
                            name="InputText"
                            value={this.state.value}
                            onChange={event => this.setState({ value: event.target.value })}
                        />
                        <Row>
                            <Col span={12}>
                                <div className="buttonSave">
                                    <AddUser cleanIput={this.cleanValue} value={this.state.value} reloadAPI={this.props.reloadAPI}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="buttonClose">
                                    <Button type="primary" onClick={this.handleTogleInput}>Close</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    :
                    <div className="addBtn" onClick={this.handleTogleInput} > + Add New user </div>
                }
            </div>
        );
    }

}
export default InputAddUser