# mpharma-react-table

> A simple reusable table component in React

[![NPM](https://img.shields.io/npm/v/mpharma-react-table.svg)](https://www.npmjs.com/package/mpharma-react-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install git+https://gitlab-ci-token:-tTfne4qwPYZ5tpWHDvq@gitlab.mpharma.com/frontend/mpharma-react-table.git#tag
```

## Usage

```jsx
import React from 'react';
import Table from 'mpharma-react-table';

const headers = [
  { title: 'Name', align: 'left', dataIndex: 'name' },
  { title: 'Age', align: 'left', dataIndex: 'age' },
  { title: 'Country', align: 'left', dataIndex: 'country' },
];

const data = [
  {
    name: 'Chiamaka',
    age: 25,
    country: 'Nigeria',
  },
  {
    name: 'Nick',
    age: 30,
    country: 'Ghana',
  },
];

function Example() {
  return <Table headers={headers} data={data} />;
}
```

## Rendering Nested data (using render function)

```jsx
const headers = [
  { title: 'Name', align: 'left', dataIndex: 'name' },
  { title: 'Age', align: 'left', dataIndex: 'age', render: (item) => item.age.real },
  { title: 'Country', align: 'left', dataIndex: 'country' },
];

const data = [
  {
    name: 'Chiamaka',
    age: {
      fake: 30,
      real: 24,
    },
    country: 'Nigeria',
  },
  {
    name: 'Nick',
    age: {
      real: 34,
      fake: 40,
    },
    country: 'Ghana',
  },
];

function Example() {
  return <Table headers={headers} data={data} />;
}
```

> (\*) means required

## API

Table - Default export (Top level) i.e `import Table from mpharma-react-table`

TableHeader - Named export i.e. `import { TableHeader } from mpharma-react-table`

## Table Props

| Name               | Type           | Default                                 | Description                                                                                                                                                                |
| ------------------ | -------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*headers          | array[objects] | None                                    | The headers of the table. See Header props for more info                                                                                                                   |
| \*data             | array[objects] | None                                    | Data to be rendered                                                                                                                                                        |
| \*count            | number         | None                                    | Total number of records to be displayed in the table footer                                                                                                                |
| renderIcon         | function       | None                                    | Funtion which renders any icon passed into it. The icon can be a react component. `Note: you can get the row data in the arg of the function passed here ie. (data) => {}` |
| tableStyle         | object         | None                                    | Style for the table wrapper                                                                                                                                                |
| tableBodyStyle     | object         | `{maxHeight: '65vh', overflow: 'auto'}` | Style for the table body wrapper                                                                                                                                           |
| rowsPerPageOptions | array[numbers] | [25, 50, 100]                           | Customizes the options of the rows per page select field                                                                                                                   |
| hover              | bool           | false                                   | If true, the table row will shade on hover                                                                                                                                 |
| handleRowClick     | function       | () => {}                                | Function to call when a row is clicked                                                                                                                                     |
| emptyMessage       | string         | 'No data available!'                    | Customizes the message when there is no data to display                                                                                                                    |
| emptyMessageStyle  | object         | None                                    | Customizes the styling of the empty message                                                                                                                                |
| onNextPage         | function       | () => {}                                | Callback fired when next button is clicked. `Note: you can get the next page in the arg of the function passed here ie. (nextPage) => {}`                                  |

## Headers Props

| Name      | Type                          | Default                         | Description                                                                                                                                                                                                                                                                                                                                        |
| --------- | ----------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*title   | string                        | None                            | Title of the header                                                                                                                                                                                                                                                                                                                                |
| align     | string: (left, center, right) | left                            | How you want the header and the corresponding data to be aligned                                                                                                                                                                                                                                                                                   |
| render    | function                      | None                            | Render the table cell under a header. The return value could be a ReactNode or dataIndex's value. This would only be needed when you want to access a nested value or you want to modify the table cell.                                                                                                                                           |  |
| dataIndex | string                        | None                            | Key that ties data to the header. Should be the key of the data that you want under this header                                                                                                                                                                                                                                                    |
| width     | number                        | inherit                         | Specify width for the header                                                                                                                                                                                                                                                                                                                       |
| style     | object                        | { textTransform: 'capitalize' } | Specify the style for the column data                                                                                                                                                                                                                                                                                                              |
| sortFn    | function                      | (a, b) => {}                    | Custom sorting function for values other than `strings`, `numbers` and `booleans`. `a` and `b` represent the first element and second element for comparison respectively. For more info, check out the [sort in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) (_It follows a similar pattern_) |

## TableHeader Props

| Name      | Type           | Default | Description                                 |
| --------- | -------------- | ------- | ------------------------------------------- |
| \*headers | array[strings] | None    | The headers of the table                    |
| style     | object         | None    | Style object for the table header component |

## Contributing

1. clone the project and cd into project
2. npm install && npm start
3. create another terminal window and cd into example/ && npm start

## License

MIT © [chiamaka](https://github.com/chiamaka)
