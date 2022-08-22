import React from 'react';
import PetList from './PetList';


import axios from "axios";

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

const Root = () => {
  const [petsData, setPetsData] = React.useState([]);
  const [status, setStatus] = React.useState(1)
  const [loading, setLoading] = React.useState(true)

  // what if no React Effect, infinite loop??
  React.useEffect(()=> {
    async function fetchPets(){
      const res = await axios.get('/api/pets')
      if (res) {
        setPetsData(res.data);
        setStatus(res.status);
      } else {
        setStatus(500)
        console.log('ln24')
      }
      // console.log('Ln 21:', res)
      // console.log('Ln22')
      // console.log(petsData)
      // console.log('ln30:', status)
    };
    fetchPets()
    // console.log('Ln 27:', petsData)
  },[])
  // console.log('Ln 29', petsData)
  // console.log('ln30:', status)

  React.useEffect(()=>{
    setTimeout(() => {
      setLoading(!loading)
    }, 1000);
    // no dependency, [loading] are the same
  },[])

  // console.log('ln39');
  
  return (
    <>
      <h1>Adoption Center</h1>
      {/* {loading ? <h2>Loading</h2>: <PetList pets={petsData} />} */}
      {status === 500 ? <div>Error</div> : loading ? <h2>Loading</h2>: <PetList pets={petsData} />}     

    </>
  )
}

export default Root;
