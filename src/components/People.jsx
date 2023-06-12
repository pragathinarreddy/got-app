import React from 'react'
import { got } from '../data'


function People(props) {
    console.log(props,"props")
    console.log(  props.peopleNamed &&    props.peopleNamed,"peoplenameddddddd")
    
  return (
    <div className='container flex'>
        {
           props.active === "" ? 
           props.people.map((each) => {
            return (
                each.map((every) => {
                    return(
                        <>
                        <div className='card flex'>
                            <center>
                        <img className='image' src={every.image} alt="" />
                        <h2 className='name'>{every.name}</h2>
                        <p className='descrip'>{every.description}</p>
                        <button className='know'>KNOW MORE</button>                            

                            </center>

                        </div>
                        </>
                    )
                })
            )
        })
        : 
    props.peopleNamed &&    props.peopleNamed[0]?.people?.map((each) => {
            console.log(each,"each")
            return(
                <>
                        <div className='card flex'>
                            <center>
                        <img className='image' src={each.image} alt="" />
                        <h2 className='name'>{each.name}</h2>
                        <p className='descrip'>{each.description}</p>
                        <button className='know'>KNOW MORE</button>                            

                            </center>

                        </div>
                        </>
            )
        })
        }
    </div>
  )
}

export default People