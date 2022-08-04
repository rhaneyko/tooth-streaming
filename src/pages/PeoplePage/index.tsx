import React, { useEffect, useState } from 'react'

const PeoplePage = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/person/{person_id}?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR')
            .then(res => res.json())
            .then(data => setPeople(data.results))
    }, []);
    
    return(
        <div>
            <h1>People</h1>
        </div>
    )
}

export default PeoplePage;
