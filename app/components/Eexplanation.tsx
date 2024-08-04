// components/ProductExplanation.tsx
import React from 'react';
// Import the type for ProductExplanation
import { ProductExplanation as ProductExplanationType } from '@/app/data/explanation';

type ProductExplanationProps = {
  explanation: ProductExplanationType;
};

const ProductExplanation: React.FC<ProductExplanationProps> = ({ explanation }) => {
  return (
    <div id="explanation" className="mt-8">
      <h2 className="text-xl font-bold mb-2">{explanation.title}</h2>
      <p className="text-gray-700">{explanation.description}</p>
    </div>
  );
};

export default ProductExplanation;
