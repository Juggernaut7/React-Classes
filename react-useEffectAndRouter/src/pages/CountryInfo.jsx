import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryInfo = () => {
  const { name } = useParams();
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data[0]);
      } catch (error) {
        console.error('Error fetching country:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (!country) return <p>Country not found</p>

  return (
    <div>
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common} />
      <p> {country.capital?.[0]}</p>
      <p> {country.region}</p>
      <p>{country.population.toLocaleString()}</p>
    
    </div>
  );
};

export default CountryInfo;
