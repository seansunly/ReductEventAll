import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSport, getAllSport } from '../../../reducs/feature/sport/Sport';
import SportCard from '../../card/SportCard';

export default function Sports() {
    const dispach=useDispatch();
    useEffect(()=>{
        dispach(fetchSport());
        console.log("hello sunlyaly")
    },[]);
    const sports=useSelector(getAllSport)
    console.log("test",sports)
  return (
    <div>
        <div>hello sport hup</div>
        {sports.map((sport,index)=>{
            return (
              <SportCard
                key={index}
                // slug={sport.slug}
                // title={sport.title}
                // img={sport.thumbnail}
                image={sport.image}
                quantity={sport.quantity}
                price={sport.price}
                desc={sport.desc}
                name={sport.name}
              />
            );
        })}
    </div>
  )
}
