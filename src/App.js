import React from "react";
import {Header} from "./Components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom"
import axios from "axios"
import {connect} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.setPizzas(data.pizzas)
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path='/home' render={() => <Home items={this.props.items}/>} exact/>
                    <Route path='/cart' component={Cart} exact/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
        filters: state.filters
    }
}

export default connect(mapStateToProps, {setPizzas})(App);
