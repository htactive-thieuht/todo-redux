
import React, { Component } from 'react';
import axios from 'axios'
import { Row, Col, Divider, Button } from 'antd';
import InputAddUser from './InputAddUser';

class DeleteUser extends Component{
    constructor(props){
        super(props);
    }
    handleDelete = id => {  
        if (window.confirm(`${id}`)) {
            fetch(`https://5ee6f6f952bb0500161fd241.mockapi.io/users2/${id}`, { method: 'DELETE' })
                .then(response => {
                    this.props.reloadAPI()//thong bao cho cha co su thay doi
                })
                .catch(e => console.log('handleDelete e', e))
        }
    }
    render(){
        const { id } = this.props;
        return(
            <Button onClick={() => this.handleDelete(id)}>DELETE</Button>
        )}
}
export {DeleteUser};