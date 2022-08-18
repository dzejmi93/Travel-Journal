import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import data from './data'

export default function App(){
    const places=data.map(function(item){
        return (<Main
             key={item.id}
             {...item}   
        />)
    })
    return (
        <div>
            <Header />
            {places}
        </div>
        
    )
}