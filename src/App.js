import React from "react";
import {Header} from "./Components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom"

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' component={Home} exact/>
                <Route path='/cart' component={Cart} exact/>
                <Home/>
            </div>
        </div>
    );
}

export default App;
