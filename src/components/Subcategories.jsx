import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';

const Subcategories = ({ parentId, categories, products, autoSelectFirstSubcategory }) => {
  const [selectedSubId, setSelectedSubId] = useState(null);

  const subcategories = categories.filter(cat => cat.parent === parentId);

  useEffect(() => {
    if (autoSelectFirstSubcategory && subcategories.length > 0) {
      setSelectedSubId(subcategories[0].id); 
    }
  }, [parentId]);

  return (
    <div className="mt-2">
      <div className="buttons d-flex justify-content-start">
        {subcategories?.map(sub => (
          <button
            key={sub?.id}
            className={`sub ${selectedSubId === sub?.id ? 'selected' : 'sub'}`}
            onClick={() => setSelectedSubId(sub?.id)}
          >
            {sub?.name}
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
