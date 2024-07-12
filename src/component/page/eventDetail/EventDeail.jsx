import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../../reducs/feature/product/productSlice';
import EventCardDitail from '../../card/EventCardDitail';

export default function EventDeail() {
    const param=useParams();

    const sport = useSelector((state) => state?.product?.productById);
    console.log("test sport ",sport)
    const dispach=useDispatch();
    useEffect(()=>{
        dispach(fetchProductById(param.id))
    }, []);
  return (
    <div>
      <h1>event page</h1>
      <EventCardDitail
        slug={sport.slug}
        title={sport.title}
        img={sport.thumbnail}
        about={sport.about}
        date={sport.date}
        description={sport.description}
      />
    </div>
  );
}
