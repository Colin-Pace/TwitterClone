import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  
/* Component tree
 
                                      App

    /       /
Register  Login
                    /                   |                                      \
               SidebarLeft              Center                                SidebarRight
                /       |         |    |   \          \          \                |
            Tabs        Id      Home Scroll (Comment)  (Profile)  (OUP)       What's happening
                                      |        |  | \        \        \
                                    Tweets    Head|   \  UserTweets    OUT
                                                Reply |
                                                    Thread
                                                      |
                                                    Comments



                                                    ______________a
                                                  /  
                                              ________ b     
*/