import React from 'react';

interface SearchBarProps {
    searchTerm: string; // Current search term
    onSearch: (term: string) => void; // Callback for when the search term changes
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
    return (
        <div className="flex justify-center mb-6">
            <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
        </div>
    );
};

export default SearchBar;
