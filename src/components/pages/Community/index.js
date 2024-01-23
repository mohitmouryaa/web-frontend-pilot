import React from 'react'
import { communityList } from './data'
import CartDetail from './CartDetail'
export default function Community() {
  return (
    <div className=''>
      <h3>
        Forum
      </h3>
     {communityList?.map(({acitivity,users,topic,bodyPart},idx)=>
     <CartDetail key={"communit"+bodyPart+idx}
     {...{acitivity,users,topic,bodyPart}}
     />
     
     ) }
    </div>
  )
}
