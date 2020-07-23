import { Modal } from 'antd';
import React, { Component } from 'react';
import { Input, Row, Col, Divider, Button } from 'antd';

class ModalEdit extends Component {
    state = {
        visible: false,
        editId: null,
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
        const { onClickOK, id } = this.props;//
        onClickOK(id, this.state.editName)//
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,

        });
    };
    render() {

        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Sửa
                </Button>
                <Modal
                    title=" Edit user name"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Input
                        type="text"
                        name="title"
                        value={this.state.editName}//
                        onChange={(event) => this.setState({ editName: event.target.value })}///
                    />
                </Modal>
            </div>
        );
    }
}
export default ModalEdit