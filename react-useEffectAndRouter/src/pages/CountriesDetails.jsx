import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CountriesDetails = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all")

                const data = await response.json();
                setCountries(data)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching countries", error)
                setLoading(false)
            }
        }
        fetchCountries()
    }, [])

    if(loading) return <p>Loading Countries🔫🔫🔫👀👀</p>
   

    

  return (
    <div>

    <h1>Countries</h1>

<ul>
  {countries.map((country) => (
    <li key={country.cca3}>
      <Link to={`/country/${country.name.common}`}>
        <div>
          <img src={country.flags.png} alt={country.name.common}/>
          <span>{country.name.common}</span>
        </div>
      </Link>
    </li>
  ))}
</ul>

    </div>
  )
}

export default CountriesDetails