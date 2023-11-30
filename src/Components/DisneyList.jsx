import React from 'react'


function DisneyList({disney }) {
    const loaded = () => {
        return (
            <>
              <h2>{disney.name}</h2>
                <img src={disney.imageUrl} alt={disney.name} />
                
               {disney.tvShows && disney.tvShows.map (show => {
                
                <h2><strong>{show}</strong></h2>
               }) }
                {disney.films &&
                disney.films.map (film => {
                    
                    <h4>{film}</h4>
                })  }
            </>
        )
    }
   
    
    const loading = () => {
        return <ls><h4><em>"Olaf" "Mulan" "Snow White" "Winnie The Pooh" "Tinker Bell"</em></h4></ls>
       
 
       
        
    }
    //The component must return some JSX
    return disney ? loaded() : loading();
           
}
export default DisneyList;