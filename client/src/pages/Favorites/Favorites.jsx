import React, { useContext, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import useProperties from '../../hooks/useProperties'
import '../Properties/Properties.css'
import {PuffLoader} from 'react-spinners'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import UserDetailContext from '../../context/UserDetail'




const Favorites = () => {
 const {data, isError, isLoading} = useProperties()
 const [filter, setFilter] = useState('')
 const {userDetails: {favorites}} = useContext(UserDetailContext)


if(isError){
    return (
        <div className="wrapper">
            <span>Error while fetching data</span>
        </div>
    )
}

if(isLoading){

    return (
        <div className="wrapper flexCenter" style={{height: '60vh', gap: '0px'}} >
           <PuffLoader
               height="80"
               width="80"
               radius={1}
               color="#4066ff"
               aria-label='puff-oading'
           />
        </div>
    )
}

//  console.log(data)
  return (
    <div className='wrapper'>
        <div className="flexColCenter paddings innerWidth properties-container" >

            <h2>My Favorites</h2>
          <SearchBar filter={filter} setFilter={setFilter} />

          <div className="paddings flexCenter properties" style={{gap: '20px'}}>

            {
                // data.map((card, index) => (<PropertyCard card={card} key={index} />))
                favorites && favorites.length > 0 &&
                data
                   .filter((property) => favorites.includes(property.id))
                   .filter((property) => 
                                 property.title.toLowerCase().includes(filter.toLowerCase()) || 
                                 property.city.toLowerCase().includes(filter.toLowerCase()) || 
                                 property.country.toLowerCase().includes(filter.toLowerCase())
                   )
                   .map((card, index) => (<PropertyCard card={card} key={index} />))
            }

          </div>
        </div>
    </div>
  )

  }
export default Favorites