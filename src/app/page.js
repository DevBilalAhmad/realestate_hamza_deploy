'use client'

import  Image from 'next/image'
// import DataList from '../../component/DataList'
import React, { useEffect, useState } from 'react'
// import {useRouter}  from 'next/router'
import { useRouter } from 'next/navigation'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { database } from '../../firebase';
import Navbar from './component/Navbar'
import Hero from './component/Hero'

const page = () => {

  // const router = useRouter();
  
  // const [studentsData, setStudentsData] = useState([]);

  // useEffect(() => {
    
  // }, [])
  

  // useEffect(() => {
  //   getData();
  // }, [])
  

  // const getData = async () => {
  //   await getDocs(collection(database, 'students'))
  //   .then((response) => {
  //     setStudentsData(response.docs);
  //   })
  // }

  // console.log(studentsData);

  // const updateStudent = () => {
  //   alert('update');
  // }

  // const deleteStudent = async (id) => {
  //   let fieldToDelete = doc(database, 'students', id);
  //   await deleteDoc(fieldToDelete)
  //   .then(() => {
  //     alert('Data Deleted')
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

  // }
  
  // const logout = () => {
  //   sessionStorage.removeItem('username');
  //   router.push('/Login')
  // }
  return (
    <div>
    {/* <Navbar/> */}
    <Hero/>
    
    </div>
  )
}

export default page
