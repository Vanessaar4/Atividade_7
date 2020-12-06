import React, {Component} from 'react';
import 'primereact/resourses/themes/nova-light/theme.css';
import 'primereact/resourses/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {MenuBar} from 'primereact/menubar';

class App2 extends Component{
    render(){
        const menuitems = [{
            label: "Home",
            command:() => this.props.history.push("/")
        },{
            label: "Cadastrar",
            command:() => this.props.history.push("/cadastrar")
        },{
            label: 'Sobre',
            command: () => this.props.history.push("/about")
        }];
        return(
            <div>
                <Menubar model ={menuitems}/>
                <Header />
                <Footer />
                <div>
                    <main>
                        <div id="content">
                            {this.props.children}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default withRouter(App2);