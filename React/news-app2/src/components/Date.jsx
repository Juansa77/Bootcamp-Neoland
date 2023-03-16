import React from 'react'
import "./Date.css"
import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';

const DateSystem = () => {

    const { user } = useContext(UserContext);
var today = new Date();

var day = today.getDate()
var month = today.getMonth() + 1;
var year = today.getFullYear();
  return (<>{ user &&
    <div className='date'><h5>{day}/{month}/{year}</h5></div>}</>
  )
}

export default DateSystem