import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../utils';
import CardItem from '../components/CardItem';
import Calander from '../components/Calander';
import Studentfees from '../components/Studentfees';

function Information() {
    const params = useParams();
    const [userData, setUserData] = useState();

    useEffect(() => {
        if(params.id)
        {
            let temp = data.filter(item => item.id == params.id)
            if(temp.length> 0) setUserData(temp[0])
        }
    }, [params])

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign:'center',
        alignItems:'center',
        // marginLeft:200
    }} >

         <CardItem val={userData} />
         <Calander user={userData} />
         <Studentfees userfees={userData}/>

    </div>

    
   
  )
}



export default Information