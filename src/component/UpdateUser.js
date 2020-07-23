import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'antd';

class UpdateUser extends Component{
    constructor(props){
        super(props);
    }
    UpdateName = async (id, newName) => {
        const res = await axios.put(`https://5ee6f6f952bb0500161fd241.mockapi.io/users2/${id}`, { name: newName })
        .then(response => {
            this.props.reloadAPI()//thong bao cho cha co su thay doi
            // this.props.onOk()
            // this.props.onCancel()
        }).catch(error => {
            console.log(error)
        })
    }
    render(){
        const {id,username} = this.props
        return(
            <Button onClick={() => this.UpdateName(id, username)}> Submit </Button>
        )
    }
}
export {UpdateUser};