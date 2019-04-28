/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function CharacterList(props) {
  return (
    <div className="list-group w-50 mx-auto">
        {
            props.characters.map((c, i) => {
                return(
                    <a href="#"
                        key={i}
                        className="list-group-item list-group-action"
                        onClick={() => {
                            props.handleClick(c)
                        }}
                    >
                        {c.name}
                    </a>
                );
            })
        }
        
        {/* <ul className="list-group w-100">
            {
                props.characters.map((c, i) => {
                    return (
                        <li key={i} className="list-group-item">
                            {c.name}
                        </li>
                    )
                })
            }
        
        </ul> */}
    </div>
  )
}

export default CharacterList;