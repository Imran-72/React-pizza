import React, {useCallback} from "react";
import {Categories, SortPopUp, PizzaBlock, LoadingBlock} from "../Components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters"
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";

const Home = () => {
    const dispatch = useDispatch()

    const items = useSelector(({pizzas}) => pizzas.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)


    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const handlePizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }


    const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]
    const sortItems = [
        {name: 'популярности', type: 'popular', order: 'desc'},
        {name: 'цене', type: 'price', order: 'desc'},
        {name: 'алфавиту', type: 'name', order: 'asc'},
    ]
    return <div className="container">
        <div className="content__top">
            <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames}/>
            <SortPopUp activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {isLoaded ? items.map(obj =>
                    <PizzaBlock onClickAddPizza={handlePizzaToCart} key={obj.id} {...obj} addedCount={cartItems[obj.id] && cartItems[obj.id].length}/>)
                : Array(10).fill(0).map((_, index) => <LoadingBlock key={index}/>)}
        </div>
    </div>
}

export default Home;