import React, {useState} from 'react';

const Search = ({cb = Function.prototype}) => {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
    const handleSubmit = (e) => {
        cb(value);
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input type="search"
                    id='searchField'
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button
                    className="btn"
                    style={{
                        position: "absolute",
                        top: 0,
                        right: '0.75rem',
                    }}
                    onClick={handleSubmit}>Search</button>
            </div>
        </div>
    );
};

export default Search;