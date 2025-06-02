import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMainCategories, setSelectedMainCategory } from '../redux/actions/mainCategoryActions';
import categoriesData from '../data/categories.json';
import productsData from '../data/products.json';
import Subcategories from './Subcategories';

const MainCategories = () => {
  const dispatch = useDispatch();
  const { mainCategories, selectedMainCategoryId } = useSelector(state => state.mainCategory);

  useEffect(() => {
    dispatch(loadMainCategories());
  }, [dispatch]);

  return (
    <div>
      <div className="buttons d-flex justify-content-center">
        {mainCategories?.map(cat => (
          <button
            key={cat.id}
            className={`btn px-3 ${selectedMainCategoryId === cat.id ? 'btn' : 'btn-outline'}`}
            onClick={() => dispatch(setSelectedMainCategory(cat.id))}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {selectedMainCategoryId && (
        <Subcategories
          parentId={selectedMainCategoryId}
          categories={categoriesData.categories}
          products={productsData.products}
          autoSelectFirstSubcategory={true}
        />
      )}
    </div>
  );
};

export default MainCategories;
