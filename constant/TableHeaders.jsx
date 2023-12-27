'use client';
import { Button, Input, Space } from 'antd';
import { IoIosSearch } from 'react-icons/io';
import Highlighter from 'react-highlight-words';
import Image from 'next/image';

let searchText = '';
let searchedColumn;

const handleSearchProp = dataIndex => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
    close,
  }) => (
    <div
      style={{
        padding: 8,
      }}
      onKeyDown={e => e.stopPropagation()}
    >
      <Input
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => {
          confirm();
          searchText = selectedKeys[0];
          searchedColumn = dataIndex;
        }}
        style={{
          marginBottom: 8,
          display: 'block',
        }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => {
            confirm();
            searchText = selectedKeys[0];
            searchedColumn = dataIndex;
          }}
          icon={<IoIosSearch />}
          size="small"
          style={{
            width: 90,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Search
        </Button>
        <Button
          onClick={() => {
            clearFilters();
            confirm();
            searchText = '';
          }}
          size="small"
          style={{
            width: 90,
          }}
        >
          Reset
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            close();
            searchText = '';
          }}
        >
          close
        </Button>
      </Space>
    </div>
  ),
  filterIcon: filtered => (
    <IoIosSearch
      style={{
        color: filtered ? '#1677ff' : undefined,
      }}
    />
  ),
  onFilter: (value, record) =>
    record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  render: text =>
    searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{
          backgroundColor: '#ffc069',
          padding: 0,
        }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    ),
});

export const PendingTableHeaders = [
  {
    title: 'Profile Picture',
    dataIndex: 'profilePicture',
    render: (text, record) => (
      <div className="flexCenter h-10 w-10 rounded-full overflow-hidden">
        {' '}
        <Image
          className="rounded-full"
          width={40}
          height={40}
          src={record.image}
          alt="profile"
        />
      </div>
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    ...handleSearchProp('name'),
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
  },
  {
    title: 'Country',
    dataIndex: 'country',
  },
  {
    title: 'Signed Up',
    dataIndex: 'signedUp',
    ...handleSearchProp('signedUp'),
  },
];
