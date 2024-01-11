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
            backgroundColor: '#1677ff',
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
          className="rounded-full "
          width={40}
          height={40}
          style={{
            height: '40px',
          }}
          src={record.profilePicture}
          alt="profile"
        />
      </div>
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    ...handleSearchProp('name'),
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    sorter: (a, b) => a.country.localeCompare(b.country),
    ...handleSearchProp('country'),
  },
  {
    title: 'Signed Up',
    dataIndex: 'signedUp',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: (a, b) => a.status.localeCompare(b.status),
    ...handleSearchProp('status'),
    render: (text, record) => {
      return (
        <div
          className={`flex items-center justify-center rounded-full px-2 py-1 text-xs font-bold ${
            record.status === 'pending'
              ? 'bg-dashboardPendingUserState'
              : record.status === 'rejected'
              ? 'bg-red-400'
              : 'bg-dashboardUserState'
          }`}
        >
          {record.status.toUpperCase()}
        </div>
      );
    },
  },
];

export const PendingWinnerTableHeaders = [
  {
    title: 'Winning Photo',
    dataIndex: 'winnerPhoto',
    render: (text, record) => {
      return (
        <div className="flexCenter h-10 w-10 rounded-full overflow-hidden">
          {' '}
          <Image
            className="rounded-full "
            width={50}
            height={50}
            style={{
              height: '50px',
            }}
            src={record.winnerPhoto}
            alt="profile"
          />
        </div>
      );
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    ...handleSearchProp('name'),
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    sorter: (a, b) => a.country.localeCompare(b.country),
    ...handleSearchProp('country'),
  },
  {
    title: 'Prize Won',
    dataIndex: 'prizeType',
    sorter: (a, b) => a.prizeName.localeCompare(b.prizeType),
    ...handleSearchProp('prizeType'),
  },
  {
    title: 'Prize Amount',
    dataIndex: 'prizeAmount',
    sorter: (a, b) => a.prizeAmount - b.prizeAmount,
  },
  {
    title: 'Access Bank AC. Page',
    dataIndex: 'accessBankPage',
    render: (text, record) => {
      return (
        <div
          className={`flex items-center text-white justify-center rounded-full px-2 py-1 text-xs font-bold ${
            record.accessBankPage ? 'bg-primary-green' : 'bg-red-400'
          }`}
        >
          {record.accessBankPage ? 'Yes' : 'No'}
        </div>
      );
    },
  },
];
