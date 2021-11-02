import propTypes from 'prop-types';

import styled from './Table.module.scss';

const Table = ({ cols, rows }) => {
  return (
    <table className={styled.table}>
      <thead>
        <tr>
          {cols.map((col) => {
            return <th key={col.key}>{col.name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.level}>
              {cols.map((col) => (
                <td key={row[col.key]}>{row[col.key]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  cols: propTypes.arrayOf({}).isRequired,
  rows: propTypes.arrayOf({}).isRequired,
};

export default Table;
