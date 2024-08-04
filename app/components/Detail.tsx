// components/ProductDetailsTable.tsx
import React from 'react';

// Define the type for product details
type ProductDetail = {
  label: string;
  value: string;
};

// Define the type for the component props
type ProductDetailsTableProps = {
  details: ProductDetail[];
};

const ProductDetailsTable: React.FC<ProductDetailsTableProps> = ({ details }) => {
  return (
    <div id="details" className="mt-8">
      <div className="overflow-x-auto">
        <table className="table  md:table">
          <tbody className='text-right'>
            {details.map((detail, index) => (
              <tr key={index}>
                <th className="px-4 py-2 font-medium text-gray-700">{detail.label}</th>
                <td className="px-4 py-2 text-gray-600">{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetailsTable;
