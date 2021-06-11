import React from 'react'
import Td from './shared/Td'

const Table = ({blocks}) => {
    return(
        <table>
            <thead>
            <tr>
                <th>Block ID</th>
                <th>Baker</th>
                <th>Created</th>
                <th># of operations</th>
                <th>Volume</th>
                <th>Fees</th>
                <th>Endorsements</th>
            </tr>
            </thead>
            <tbody>            
                {blocks.map(block => {
                const newDate =  new Date(block.timestamp * 1000)
                const year = newDate.getFullYear()
                const month = newDate.getMonth()
                const day = newDate.getDate()
                const hours = newDate.getHours()
                const minutes = newDate.getMinutes()  

                const date = `${day}.${month}.${year} at ${hours}:${minutes}`
                
                return <Td level={block.level} chainId={block.chainId} date={date} number_of_operations={block.number_of_operations} volume={block.volume} fees={block.fees} endorsements={block.endorsements} />   
            })}
            </tbody>
        </table>
    )
}

export default Table