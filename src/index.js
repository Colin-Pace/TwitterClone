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
                    /                   |                                   \
               SidebarLeft              Center                          SidebarRight
                /       |         |    |   \          \                    |
            Tabs        Id      Home Scroll (Comment)  Profile         What's happening
                                      |        |  | \        \
                                    Tweets    Head|   \     UserTweets
                                                Reply |
                                                    Thread
                                                      |
                                                    Comments

*/