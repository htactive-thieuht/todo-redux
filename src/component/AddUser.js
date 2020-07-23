import React, { Component } from 'react';
import axios from 'axios'
import { Row, Col, Button } from 'antd';


class AddUser extends Component{
    constructor(props){
        super(props);
    }
    handleAdd = (value) => {
        axios.post('https://5ee6f6f952bb0500161fd241.mockapi.io/users2', { name: value })
            .then(response => {
                this.props.reloadAPI()//thong bao cho cha co su thay doi
                this.props.cleanIput()
            }).catch(error => {
                console.log(error)
            })
    }
    render(){
        const {value} = this.props 
        return(
            <Button onClick={() => this.handleAdd(value)}>Save</Button>
        )}
}
export {AddUser};