import React from 'react';

const Confirm = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md mx-4">
                <h2 className="text-2xl font-bold text-center mb-4">Confirm</h2>
                <p className="text-center text-gray-600 mb-6">Are you sure you want to delete this?</p>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition-all"
                    >
                        Yes, Delete
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded transition-all"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Confirm;
