import React from 'react';

interface SearchBarProps {
    searchTerm: string; // Current search term
    onSearch: (term: string) => void; // Callback for when the search term changes
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
    );
};

export default SearchBar;
