import React from "react";
import {Header} from "./Components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom"
import axios from "axios"
import {useDispatch} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";

const App = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        })
    })
    return <div className="wrapper">
        <Header/>
        <div className="content">
            <Route path='/home' component={Home} exact/>
            <Route path='/cart' component={Cart} exact/>
        </div>
    </div>
}


export default App;
