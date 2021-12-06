import './styles/App.css';
import Routing from "./components/Routing";
import {useState} from "react";
import {IsAuthContext} from "./context";
import Navbar from "./components/Navbar";


function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="App">
            <IsAuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
                <Routing/>
                {isAuth && <Navbar/>}
            </IsAuthContext.Provider>
        </div>
    );
}

export default App;
