import React from 'react'
function DisneyList({Disney }) {
    const loaded = () => {
        return (
            <>
                
                <h2><strong>{Disney.tvShows}</strong></h2>
                <img src={Disney.imageUrl} alt={Disney.name} />
                <h2>{Disney.Year}</h2>
                <h3>films</h3>
                {Disney.films &&
                Disney.films.map (film => {
                    
                    <h4>{film}</h4>
                })  }
            </>
        )
    }

    const loading = () => {
        return <h5>No Movie to Display</h5>
        
    }
    //The component must return some JSX
    return Disney ? loaded() : loading();
           
}
export default DisneyList;