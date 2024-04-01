import  Cards  from './Cards'
import React from 'react'
import { useSelector } from 'react-redux'

function CardList() {
    const flowers = useSelector((store)=>store.cardSlice.flowers)
  return (
    <div>
        {flowers.map((item)=><Cards item={item}></Cards>)}
    </div>
  )
}

export default CardList