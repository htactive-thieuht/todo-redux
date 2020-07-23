import React, { useState, useEffect } from 'react';
import '../App.css'
import { useDispatch } from 'react-redux';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Checkbox } from 'antd';
import { updateTodo } from '../actions/addAction'
import { deleteTodo } from '../actions/addAction'

ShowTask.prototype = {}

function ShowTask(props) {
	const { mapTodoList, onChange } = props
	const [TodoList, setTodoList] = useState(mapTodoList)
	useEffect(() => {
		setTodoList(mapTodoList);
	}, [mapTodoList])
	const [textArea, setTextArea] = useState("")
	const dispatch = useDispatch();
	const handleUpdate = (id) => {
		const action = updateTodo(id, textArea);
		dispatch(action);
	}
	const handledelete = (id) => {
        const action = deleteTodo(id);
        dispatch(action)
    }
	const handleTogleTextArea = id => {
		const list = (TodoList || []).map(item => {
			if (item.id === id) {
				setTextArea(item.title)
				return { ...item, isEdit: true }
			}
			return item
		})
		setTodoList(list);
	}

	return (
		<Row>
			{TodoList.map((item) =>
				<Row className="itemTodo" key={item.id}>
					<div className="contentitem" >
						<Row>
							<Checkbox
								onChange={(e) => onChange(e.target.checked, item.id)}
								defaultChecked={item.checked}> </ Checkbox> {item.createdAt}
						</Row>
						<div>
							<Row>
								<Col span={20}>
									{item.isEdit ?
										// isEdit = true
										<div className="contentItemTodo">
											<textarea className="text"
												value={textArea}
												onChange={event => setTextArea(event.target.value)}>
											</textarea>
										</div>
										:
										// isEdit = false
										<div className="contentItemTodo">
											<strong> {item.title}</strong>
										</div>
									}
								</Col>
								<Col span={4}>
									<div className="contentButtonTodo">
										{item.isEdit ?
											<button><CheckOutlined onClick={() => handleUpdate(item.id)} /></button>
											:
											<button className="bttonupdate"><EditOutlined onClick={() => handleTogleTextArea(item.id)} /></button>
										}
										<button onClick={() => handledelete(item.id)}>x</button>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</Row>
			)}
		</Row>
	)
}
export default ShowTask;