import React from 'react';
import SinglePet from './SinglePet';
// import pets from '../petdata';

// console.log(pets)

// const cody = {
//   id: 2,
//   name: 'Cody',
//   description: 'Adorable pug who loves to hug',
//   species: 'dog',
// };

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  const [selected, setSelected] = React.useState('all')

  return (
    <>
      <div className="pet-list">
        <form>
            <label>Filter by Species</label>
            <select onClick={(event)=>setSelected(event.target.value)}>
                <option value='all'>all</option>
                <option value='cats'>cats</option>
                <option value='dogs'>dogs</option>
            </select>
        </form> 
        {props.pets.filter(pet => {
          if (selected === 'all'){ return true } 
          else { return selected.includes(pet.species)}
         })
        .map((pet, idx) => <SinglePet pet={pet} key={idx}/>)}
      </div>
    </>
  )
}

export default PetList;
