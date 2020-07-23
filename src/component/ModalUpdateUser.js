import { Input,Modal, Button } from 'antd';
import React, { Component } from 'react';
import { UpdateUser } from './UpdateUser';

class ModalUpdateUser extends Component {
  state = {
    visible: false,
    editName: ""
  };      

  componentDidMount() {
    const { name } = this.props;
    this.setState({
        editName: name
    })  
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    const { id } = this.props;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          update
        </Button>
        <Modal
          title="Edit user name.."
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
            type="text"
            name="title"
            value={this.state.editName}
            onChange={(event) => this.setState({ editName: event.target.value })}
          />
          <UpdateUser 
            username={this.state.editName} 
            id={this.props.id}  
            reloadAPI={this.props.reloadAPI} 
            />
        </Modal>
      </div>
    );
  }
}
export default ModalUpdateUser