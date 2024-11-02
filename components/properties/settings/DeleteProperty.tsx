import React, { useState } from 'react';
import { PropertyCard } from '../PropertyCard';

interface DeletePropertyCard {
    property: PropertyCard;
    onDelete: (id: number) => void;
}

const PropertyCardDelete: React.FC<DeletePropertyCard> = ({ property, onDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        onDelete(property.id);
        setShowModal(false);
    };

    return (
        <>
            <button className="rounded bg-red-500 p-2 text-white hover:bg-red-600" onClick={() => setShowModal(true)}>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </button>

            {showModal && (
                <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/50">
                    <div className="mx-4 w-full max-w-md rounded bg-white p-6 dark:bg-gray-800">
                        <h3 className="mb-4 text-lg font-bold">Confirm Delete</h3>
                        <p>Are you sure you want to delete this data?</p>
                        <div className="mt-4 flex justify-center gap-2">
                            <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600" onClick={handleDelete}>
                                Delete
                            </button>
                            <button className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400" onClick={() => setShowModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PropertyCardDelete;
