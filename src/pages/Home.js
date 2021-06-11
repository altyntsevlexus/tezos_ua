import React, { useEffect, useState } from 'react'
import { fetchTezosBlocks } from '../services/tezosAPI'

import TestingSkills from '../components/Home/TestingSkills'
import Description from '../components/Home/Description'
import Team from '../components/Home/Team'
import Header from "../components/Home/Header"

const Home = () => {

    const [blocks, setBlocks] = useState([])
    
    useEffect(()=>{
        fetchTezosBlocks(0).then(data => {
            setBlocks(data)
        })
    }, [])

    return(
        <>
        <Header blocks={blocks}/>
        <TestingSkills/>
        <Description/>
        <Team/>
        </>
    )
}

export default Home