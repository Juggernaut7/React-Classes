import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [querry, setQuerry] = useState('');

    useEffect(() => {
        const fetchCountries = async () => {
            if (querry.trim() === '') {
                setCountries([]);
                return;
            }
            setLoading(true);
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${querry}`);
                if (!response.ok) {
                    setCountries([]);
                } else {
                    const data = await response.json();
                    setCountries(data);
                }
            } catch (error) {
                console.error('Error fetching countries:', error);
                setCountries([]);
            }
            setLoading(false);
        };
    
        const delayDebounce = setTimeout(() => {
            fetchCountries();
        }, 1000);
    
        return () => clearTimeout(delayDebounce);
    }, [querry]);
    

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            <h1>Search For a Country</h1>
            <input
                type="text"
                placeholder="Search for a country"
                // value={querry}
                onChange={(e) => setQuerry(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" />

                {loading ? (
                    <p>Loading...</p>
                ) : countries.length > 0 ? (
                    <ul>
                        {countries.map((country) => (
                            <li key={country.cca3}>
                                <div className="flex items-center">
                                    <h1>{country.name.common}</h1>
                                    <img src={country.flags.png} alt={country.name.common} className="w-12 h-12 mr-4" />
                                    </div>
                                    </li>
                                    
                                    ))}
                    </ul>
                ) : ( querry ? (
                    <p>No Countries Found</p>
                ) :  null )}
                

        </div>
    );
};

export default Countries;
