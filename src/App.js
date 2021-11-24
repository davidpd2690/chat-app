import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm"
import "./App.css";


const App = () =>{

    if(!localStorage.getItem("username")) return <LoginForm/>

    return(
        <ChatEngine 
            height="100vh"
            projectID="9cc84124-72b3-437c-9096-52094018f81d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;