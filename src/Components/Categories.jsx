import React, {useState} from "react";


const Categories = ({items, onCategoriesItem}) => {
    const [activeitem, setActiveitem] = useState(null)

    const onSelectItem = (index) => {
        setActiveitem(index)
    }
    return <div className="categories">
        <ul>
            <li className={activeitem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
            {items &&
            items.map((name, index) =>
                <li className={activeitem === index ? 'active' : ''}
                    onClick={() => onSelectItem(index)}
                    key={`${name}_${index}`}>{name}</li>)}
        </ul>
    </div>
}


export default Categories;