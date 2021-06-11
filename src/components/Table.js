import React from 'react'

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
                
                return(
                <tr key={block.level}>
                    <td>{block.level}</td>
                    <td>{block.chainId}</td>
                    <td>{date}</td>
                    <td>{block.number_of_operations}</td>
                    <td>{block.volume} m</td>
                    <td>{block.fees} m</td>
                    <td>{block.endorsements}</td>
                </tr>
                )   
            })}
            </tbody>
        </table>
    )
}

export default Table