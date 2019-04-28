import React from 'react'

function CharacterList(props) {
  return (
    <ul>
        {
            props.characters.map((c, i) => {
                return (
                    <li key={i} className="list-group-item">
                        {c.name}
                    </li>
                )
            })
        }
      
    </ul>
  )
}

export default CharacterList;