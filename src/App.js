import React, { Component } from 'react';

import Table from '../src/Component/Table';
import Navegador from '../src/Component/navegador';
import Sidebar from '../src/Component/Sidebar';
import '../src/css/dashboard.css';

import './App.css';


class App extends Component {
  render() {
    return (
        <React.Fragment>
          
       <Navegador></Navegador>
       
       <div className="container-fluid">
           
            <div className="row">
      
       <Sidebar></Sidebar>
       
       <Table></Table>
      
       </div></div>
       </React.Fragment>
  
      
    );
  }
}

export default App;
