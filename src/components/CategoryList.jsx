import React from 'react';
import CategoryItem from "./CategoryItem";

const CategoryList = ({catalog = []}) => {

    return (
        <div className="list">
            {catalog.map(item => <CategoryItem key={item.idCategory} {...item} />)}
        </div>
    );
};

export default CategoryList;