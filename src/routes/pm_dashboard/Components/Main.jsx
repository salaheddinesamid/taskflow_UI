import React, { useEffect, useState } from 'react';
import Header from './Header';
import { TaskBoard } from './TaskBoard';
import { Card, CardContent,ListItemIcon } from '@mui/material';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { ProjectBoard } from './ProjectBoard';
import { Summary } from './Summary';
import { useNavigate } from 'react-router-dom';
import { Meeting } from './Meeting';


const Main = ({project}) => {
  const navigate = useNavigate();
    const [currentView,setCurrentView] = useState(1);
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const items = [
      {
        "id" : 1,
        "name" : 'Summary',
        "icon" : "",
        "view" : <Summary project={project}/>
    },
        {
            "id" : 2,
            "name" : 'Tasks',
            "icon" : "",
            "view" : <TaskBoard/>
        },
        {
            "id" : 4,
            "name" : "Teams"
        },
        {
            "id" : 5,
            "name" : 'Statistics',
            "view" : <div>Statistics view</div>
        },
        {
          "id" : 6,
          "name" : "Meetings",
          "view" : <Meeting/>
        }
    ]
    
    const SideBar = () => {
        const changeView = (element)=>{
            setCurrentView(element);
        }

        function backToDashboard(){
          localStorage.removeItem('project');
          navigate("/manager_dashboard")

        }
        return (
          <div style={{ width: '250px', padding: '20px', height: '100vh' }}>
            <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '20px' }}>
              + Add Project
            </Button>
            <List>
              {items.map((item) => (
                <ListItem button key={item.id}>
                  <ListItemText primary={item.name} onClick={()=>{
                    changeView(item.id)
                  }}/>
                  <ListItemIcon />
                </ListItem>
              ))}
            </List>
            <div style={{ marginTop: '20px' }}>
              <button className='btn btn-danger' onClick={backToDashboard}>Back to projects</button>  
            </div>
          </div>
        );
      };
      
      return (
        <div style={{ display: 'flex' }}>
          <SideBar />
          <div style={{ flex: 1 }}>
            <Header />
            <div className="row">
              {
                items.map((item) =>
                  item.id === currentView ? (
                    <React.Fragment key={item.id}>{item.view}</React.Fragment>
                  ) : null
                )
              }
            </div>
          </div>
        </div>
      );
      
};

export default Main;
