import React from 'react';
import axios from 'axios'

const DeletePet = (props) => {
    // const [updatedPets, setUpdatedPets] = React.useState([])
    // const [click, setClick] = React.useState(true)

    async function handleDelete(petId){
        await axios.delete(`/api/pets/${petId}`)
    }
    // console.log(props.pet.id)

    // React.useEffect(()=>{
    //     async function refetch(){
    //         const res = await axios.get('/api/pets')
    //         setUpdatedPets(res.data)
    //     }
    //     refetch()
    // }, [click])
    // console.log(updatedPets)


    return(
        <button className='delete-pet' onClick={()=>{
            // setClick(!click);
            // console.log(props.pet.id);
            //Have to refresh to show the updated list.........
            handleDelete(props.pet.id);
            
        }}>Delete</button>
    )
};

export default DeletePet;