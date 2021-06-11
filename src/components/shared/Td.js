import React from 'react'

const Td = ({level, chainId, date, number_of_operations, volume, fees, endorsements}) => {
    return(
        <tr key={level}>
            <td>{level}</td>
            <td>{chainId}</td>
            <td>{date}</td>
            <td>{number_of_operations}</td>
            <td>{volume} m</td>
            <td>{fees} m</td>
            <td>{endorsements}</td>
        </tr>
        )
}

Td.defaultProps = {
    level: "---",
    chainId: "---",
    number_of_operations: "---",
    date: "---",
    number_of_operations: "---",
    volume: "---",
    endorsements: "---",
}

export default Td