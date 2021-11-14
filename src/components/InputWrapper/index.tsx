import React from 'react';
import "./InputWrapper.css"

interface InputWrapperProps {
    searchKeyword: string;
    handleChangeSearchKeyword: (value: string) => void;
    handleSearch: () => void;
}

export default function InputWrapper({ searchKeyword, handleChangeSearchKeyword, handleSearch }: InputWrapperProps) {
    return (
        <div>
            <input type="text" className="input" value={searchKeyword} onChange={(e) => handleChangeSearchKeyword(e.target.value)} />
            <button className="submit-button" onClick={handleSearch}>search</button>
        </div>
    );
}
