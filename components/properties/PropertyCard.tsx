import React from 'react';

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg- rounded-lg shadow-md overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{property.name}</h3>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-lg font-bold text-green-600">{property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
