import React, {useCallback} from "react";
import {Categories, SortPopUp, PizzaBlock} from "../Components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters"

const Home = () => {
    const dispatch = useDispatch()

    const items = useSelector(({pizzas}) => pizzas.items)

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])
const categoryNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые',]
    const sortItems = [
        {name: 'популярности', type: 'popular'},
        {name: 'цене', type: 'price'},
        {name: 'алфавиту', type: 'alphabet'},
    ]
    return <div className="container">
        <div className="content__top">
            <Categories onCategoriesItem={onSelectCategory} items={categoryNames}/>
            <SortPopUp items={sortItems}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {items && items.map(obj =>
                <PizzaBlock key={obj.id} {...obj}/>
            )}
        </div>
    </div>
}

export default Home;