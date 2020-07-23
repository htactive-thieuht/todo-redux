import React, { Component } from 'react';
// import Welcome from './component/Welcome';
import { SayST } from './component/Welcome';
//import link 
import { ChangeColor } from './component/ChangeColor'
import { Sum } from './component/Sum';
import DataLoader from './component/HookDemo'
import HookExample from './component/HookExample'
// import{ToDoList} from './component/ToDoList';
import { ToDoList, ToDoList2, ToDoList3, ShowUser, DisplayUser} from './component';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom';

// import Welcome from './component/Welcome'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/todo1">todo1</Link>
            </li>
            <li>
              <Link to="/todo2">todo2</Link>
            </li>     
            <li>
              <Link to="/todo3">todo3</Link>
            </li>  
            <li>
              <Link to="/ShowUser">Customer</Link>
            </li>   
            <li>
              <Link to="/Sum">Sum</Link>
            </li>     
            <li>
              <Link to="/DisplayUser">User2</Link>
            </li> 
            <li>
              <Link to="/DataLoader">Hooks</Link>
            </li> 
            <li>
            <Link to="/HookExample">HookExample</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/todo1">
              <ToDoList/>
            </Route>
            <Route path="/todo2">
              <ToDoList2/>
            </Route>
            <Route path="/todo3">
              <ToDoList3/>
            </Route>
            <Route path="/ShowUser">
              <ShowUser/>
            </Route>
            <Route path="/Sum">
              <Sum/>
            </Route>
            <Route path="/DisplayUser">
              <DisplayUser/>
            </Route>
            <Route path="/DataLoader">
              <DataLoader />
            </Route>
            <Route path="/HookExample">
              <HookExample />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
