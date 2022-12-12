import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Login from './login-component';
import Register from './register-component';

function LoginRegister() {
  const container1 = {
    height: '100%',
    width: '50%',
    alignItems: 'center',
  };
  
  return (
    <div className="container" style={container1} fluid="true">
      <div className="row"style={{ height: '100%' }}>
        <Tabs justify variant="pills" defaultActiveKey="tab-1">
            <Tab eventKey="tab-1" title="Login">
                <Login/>
            </Tab>
            <Tab eventKey="tab-2" title="Register">
                <Register/>
            </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default LoginRegister;