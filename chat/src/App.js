import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm.jsx';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <div className="App">
    <ChatEngine  
    height="100vh"
    projectID="5d5e0203-f3ee-4614-9ca4-8559cb0656bb"
    userName="Dostondev"
    userSecret="ab3469190"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    onNewMessage={()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
    </div>
  );
}

export default App;
