import React, { useState, useEffect } from 'react';
import categoriesData from '../data/categories.json';
import productsData from '../data/products.json';
import Subcategories from './Subcategories';

const MainCategories = () => {
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedMainCategoryId, setSelectedMainCategoryId] = useState(null);

  useEffect(() => {
    const main = categoriesData.categories.filter(cat => cat.parent === null);
    setMainCategories(main);
    if (main.length > 0) {
      setSelectedMainCategoryId(main[0].id);
    }
  }, []);

  return (
    <div>
      <div className="buttons d-flex justify-content-center">
        {mainCategories?.map(cat => (
          <button
            key={cat?.id}
            className={`btn px-3 ${selectedMainCategoryId === cat?.id ? 'btn' : 'btn-outline'}`}
            onClick={() => setSelectedMainCategoryId(cat?.id)}
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
