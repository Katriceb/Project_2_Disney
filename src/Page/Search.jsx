import { useEffect,useState } from "react";
import Form from "../Components/Form";
function Search() {
    const [Disneylist, setDisneylist] = useState([]);
const fetchDisneylist =async () =>{
  try{
    const Disneylist =await getAllCharacters();
    console.log(DisneyListData)
    Disneylist(Disneylist);
  }catch(error){

  }
  }



const getAllCharacters = async (searchterm)=>{
  try{
    const response = await fetch (`https://static.wikia.nocookie.net/disney/images/d/da/Bella_sign.webp=${searchterm})`);
   
    const data = await response.json();
    console.log(data);
    return data;
  }
  catch (error){
   console.log('Error fetching disneylist:', error);
   throw error;
  
  }
}
  return (
    <div className='Search'>
      <Form  getAllCharacters={ getAllCharacters}/>
     <div><p>This is the search page</p></div>
     </div>
  )

}
export default Search