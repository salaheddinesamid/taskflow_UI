import React, {useState } from 'react';
import { List, ListItem, ListItemText, Button, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MyTasks } from './MyTasks';


export const Main = ({project}) => {
  const navigate = useNavigate();
    const [currentView,setCurrentView] = useState(1);
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const items = [
      {
        "id" : 1,
        "name" : 'Summary',
        "icon" : "",
        "view" : ""
    },
        {
            "id" : 2,
            "name" : 'Tasks',
            "icon" : "",
            "view" : <MyTasks/>
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
          "view" : ""
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
          </div>
        );
      };
      
      return (
        <div style={{ display: 'flex' }}>
          <SideBar />
          <div style={{ flex: 1 }}>
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