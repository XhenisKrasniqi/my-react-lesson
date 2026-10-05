import React from 'react'
import Proportie from './Proportie'

function Properties() {
    const properties = [
        {
            id : 1,
            name : "banese",
            size : 125,
            isSold : true
        },
        {
            id: 2,
            name: "toke",
            size: 325,
            isSold : true
        },
        {
            id: 3,
            name: "lokal",
            size: 225,
            isSold : false
        }
    ]
  return (
    <div>
        {
            properties.map((proportie) =>
            (
            <Proportie
                key={proportie.id}
                name={proportie.name}
                size={proportie.size}
                available={!proportie.isSold}
            />
            )
            )
        }
    </div>
  )
}

export default Properties