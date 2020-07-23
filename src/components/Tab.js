import React from 'react'
import '../App.css'
import { Tabs } from 'antd';
import ShowTask from './ShowTask'

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}
Tab.prototype = {}
function Tab(props) {
	const { mapTodoList, onChange } = props
	return (
		<Tabs defaultActiveKey="1" onChange={callback} type="card">
			<TabPane tab="All" key="1" >
				<ShowTask
					mapTodoList={mapTodoList}
					onChange={onChange} />
			</TabPane>
			<TabPane tab="Uncompleted" key="3" >
				<ShowTask
					mapTodoList={mapTodoList.filter(item => !item.checked)}
					onChange={onChange}
				/>
			</TabPane>
			<TabPane tab="Completed" key="5">
				<ShowTask
					mapTodoList={mapTodoList.filter(item => item.checked)}
					onChange={onChange}/>
			</TabPane>
		</Tabs>
	)
}
export default Tab;