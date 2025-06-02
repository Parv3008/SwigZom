import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubcategory } from '../redux/actions/subcategoriesActions';
import ProductsList from './ProductsList';

const Subcategories = ({ parentId, categories, products, autoSelectFirstSubcategory }) => {
  const dispatch = useDispatch();
  const selectedSubId = useSelector(state => state.subcategories.selectedSubcategoryId);

  const subcategories = categories.filter(cat => cat.parent === parentId);

  useEffect(() => {
    if (autoSelectFirstSubcategory && subcategories.length > 0) {
      dispatch(setSelectedSubcategory(subcategories[0].id));
    }
  }, [dispatch, parentId, autoSelectFirstSubcategory, subcategories]);

  const handleSelect = (id) => {
    dispatch(setSelectedSubcategory(id));
  };

  return (
    <div className="mt-2">
      <div className="buttons d-flex justify-content-start">
        {subcategories.map(sub => (
          <button
            key={sub.id}
            className={`sub ${selectedSubId === sub.id ? 'selected' : ''}`}
            onClick={() => handleSelect(sub.id)}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {selectedSubId && (
        <ProductsList
          subcategoryId={selectedSubId}
          products={products.filter(p => p.parentId === selectedSubId)}
        />
      )}
    </div>
  );
};

export default Subcategories;
