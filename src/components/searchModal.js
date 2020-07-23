
import { Input, Modal, Button } from 'antd';
import React, { Component, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import '../App.css'

function Search(props) {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState("");
    const showModal = () => {
        setVisible(true);
    };
    const handleOk = e => {
        setVisible(false);
    }
    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };
    return (
        <div className="buttonUpdate">
            <SearchOutlined type="primary" onClick={showModal} />

            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                title ="Search modal"
            >
                <Input placeholder="Type here what do you want to search. Please!"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </Modal>
        </div>
    );
}
export default Search