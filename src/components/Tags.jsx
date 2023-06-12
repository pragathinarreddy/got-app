import React, { useState } from 'react'
import { got } from '../data'
import People from './People'


function Tags() {
    const [active, setActive] = useState("")
    const [peoplenamed, setPeopleNamed] = useState([])

    let houses = got.houses.map((eachHouse) => eachHouse)
    let names = houses.map((each) => each.name)
    let people = houses.map((each) => each.people)

    const handleClick = (eachName) => { 
        setActive(eachName)
      let activePeople =  houses.filter((eachHouse) => {
            if(eachHouse.name === eachName){
                return eachHouse.people
            }
        })
        setPeopleNamed(activePeople)
        console.log(activePeople,"activepeople")

        
    }


   
    return (
        <div className='container flex'>
            {
                names.map((eachName) =>{
                    return (
                        <>
                        <div className='tagdiv'>
                        <button onClick={() => handleClick(eachName)} className={`tags ${ active === eachName ? "active_class" : ""}`}>{eachName}</button>
                        </div>
                        </>
                    )
                } )
            }
           

           <People people = {people} peopleNamed = {peoplenamed} active = {active}/>
    </div>
  )
}

export default Tags