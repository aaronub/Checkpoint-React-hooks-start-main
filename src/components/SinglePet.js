import React from 'react';
import DeletePet from './DeletePet';

function SinglePet(props) {
  const [adopted, setAdopted] = React.useState(false)
  // const [status, setStatus] = React.useState('Available')
  return (

      <div className={`single-pet ${adopted ? 'adopted' : ''}`} >
        <div>{props.pet.name}</div>
        <div>{props.pet.description}</div>
        <div>{props.pet.species}</div>
        <div>{adopted ? 'Adopted' : 'Available'}</div>
        <button onClick={()=>{setAdopted(!adopted)}}>Toggle Status</button>
        <DeletePet pet={props.pet}/>
      </div>


  );
}

export default SinglePet;
