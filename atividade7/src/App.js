import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import FormikForm from './FormikForm';

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <FormikForm />
        );
    }
}
