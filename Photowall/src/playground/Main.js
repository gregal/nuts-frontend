import React, { Component } from 'react'
import List from './List';
import Title from '../Title';

  
export default class Main extends Component {
    render() {
        return (
        <>
            <Title />
            <List tasks={this.props.tasks} />
            <List tasks={this.props.tasks} />
            <List tasks={this.props.tasks} />
        </>
        )
    }
}