import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import DataStore, { extractDataIndexes } from '../context/DataStore';
import { TableWrapper, Paper, Tabular } from './styles';

function Table(props) {
  const {
    headers,
    data,
    count,
    hover,
    handleRowClick,
    renderIcon,
    tableStyle,
    tableBodyStyle,
    rowsPerPageOptions,
    onNextPage,
    emptyMessage,
    emptyMessageStyle,
  } = props;
  const indexes = extractDataIndexes(headers);

  return (
    <DataStore>
      <Paper style={tableStyle}>
        <Tabular style={tableBodyStyle}>
          <TableWrapper>
            <TableHeader headers={headers} />
            {data.length === 0 ? (
              <tbody style={emptyMessageStyle}>
                <tr>
                  <td>{emptyMessage}</td>
                </tr>
              </tbody>
            ) : (
              <TableBody
                count={count}
                data={data}
                dataIndexes={indexes}
                hover={hover}
                handleRowClick={handleRowClick}
                renderIcon={renderIcon}
                rowsPerPageOptions={rowsPerPageOptions}
              />
            )}
          </TableWrapper>
        </Tabular>
        {data.length > 0 && <TableFooter onNextPage={onNextPage} />}
      </Paper>
    </DataStore>
  );
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  hover: PropTypes.bool,
  count: PropTypes.number,
  handleRowClick: PropTypes.func,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  onNextPage: PropTypes.func,
  emptyMessage: PropTypes.string,
  emptyMessageStyle: PropTypes.object,
  renderIcon: PropTypes.func,
  tableStyle: PropTypes.object,
  tableBodyStyle: PropTypes.object,
};

Table.defaultProps = {
  headers: [],
  data: [],
  rowsPerPageOptions: [25, 50, 100],
  handleRowClick: () => {},
  onNextPage: () => {},
  renderIcon: () => {},
  tableStyle: {},
  tableBodyStyle: {},
};

export default Table;
