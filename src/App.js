import React from "react";
import {Header} from "./Components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom"

const App = () => {

    return <div className="wrapper">
        <Header/>
        <div className="content">
            <Route path='/home' component={Home} exact/>
            <Route path='/cart' component={Cart} exact/>
        </div>
    </div>
}

export default App;
