import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TaskList} />
        <Route path="/tasks/new" component={TaskForm} />
        <Route path="/tasks/:id" exact component={TaskDetail} />
        <Route path="/tasks/:id/edit" component={TaskForm} />
      </Switch>
    </Router>
  );
}

export default App;
