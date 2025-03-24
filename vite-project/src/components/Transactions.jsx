import React,{useState} from 'react';
import { Layout, Menu, Button, Table, Input, Typography, Tag, Badge, Dropdown } from 'antd';
import { 
  HomeOutlined, 
  UploadOutlined, 
  UnorderedListOutlined, 
  AreaChartOutlined, 
  AppstoreOutlined, 
  UserOutlined, 
  SettingOutlined,
  SearchOutlined,
  FilterOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  SwapOutlined
} from '@ant-design/icons';
import { Progress } from 'antd';

const { Title, Text } = Typography;
const { Sider, Content } = Layout;
const Transactions = () => {
const [filteredData, setFilteredData] = useState(null);
const [filterVisible, setFilterVisible] = useState(false);


const handleFilter = (filterType) => {
  setFilteredData(data.filter(item => item.type === filterType));
  setFilterVisible(false);
};


const filterMenu = (
  <Menu>
    <Menu.Item key="income" onClick={() => handleFilter('income')}>
      <ArrowUpOutlined style={{ color: '#52c41a', transform: 'rotate(45deg)' }} /> Income
    </Menu.Item>
    <Menu.Item key="expense" onClick={() => handleFilter('expense')}>
      <ArrowDownOutlined style={{ color: '#f5222d', transform: 'rotate(-45deg)' }} /> Expenses
    </Menu.Item>
    <Menu.Item key="transfer" onClick={() => handleFilter('transfer')}>
      <SwapOutlined style={{ color: '#1890ff' }} /> Transfers
    </Menu.Item>
  </Menu>
);

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => (
        type === 'expense' ? <ArrowDownOutlined style={{ color: '#f5222d', transform: 'rotate(-45deg)' }} /> :
        type === 'income' ? <ArrowUpOutlined style={{ color: '#52c41a', transform: 'rotate(45deg)' }} /> :
        <SwapOutlined style={{ color: '#1890ff' }} />
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      defaultSortOrder: 'descend',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount, record) => (
        <Text style={{ color: record.type === 'expense' ? '#f5222d' : record.type === 'income' ? '#52c41a' : '#1890ff' }}>
          {record.type === 'income' ? '+' : ''}{amount}
        </Text>
      ),
    },
    {
      title: 'AI Category',
      dataIndex: 'aiCategory',
      key: 'aiCategory',
      render: (category, record) => (
        <div>
          {category} 
          <Tag color={getColorByConfidence(record.confidence)} className="ml-2">
            {record.confidence}%
          </Tag>
        </div>
      ),
    },
    {
      title: 'Final Category',
      dataIndex: 'finalCategory',
      key: 'finalCategory',
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Button type="text">...</Button>
      ),
    },
  ];

  const getColorByConfidence = (confidence) => {
    if (confidence >= 95) return 'green';
    if (confidence >= 85) return 'gold';
    return 'orange';
  };

  const data = [
    {
      key: '1',
      type: 'expense',
      date: 'Jul 20, 2023',
      description: 'Amazon.com',
      amount: '$84.99',
      aiCategory: 'Shopping',
      confidence: 92,
      finalCategory: 'Shopping',
      notes: '—',
    },
    {
      key: '2',
      type: 'expense',
      date: 'Jul 19, 2023',
      description: 'Starbucks Coffee',
      amount: '$5.60',
      aiCategory: 'Food & Drink',
      confidence: 89,
      finalCategory: 'Food & Drink',
      notes: '—',
    },
    {
      key: '3',
      type: 'income',
      date: 'Jul 15, 2023',
      description: 'Payroll Deposit',
      amount: '$2400.00',
      aiCategory: 'Income',
      confidence: 97,
      finalCategory: 'Income',
      notes: 'Monthly salary',
    },
    {
      key: '4',
      type: 'expense',
      date: 'Jul 14, 2023',
      description: 'Uber Ride',
      amount: '$12.50',
      aiCategory: 'Transportation',
      confidence: 88,
      finalCategory: 'Transportation',
      notes: '—',
    },
    {
      key: '5',
      type: 'expense',
      date: 'Jul 12, 2023',
      description: 'Netflix Subscription',
      amount: '$14.99',
      aiCategory: 'Entertainment',
      confidence: 95,
      finalCategory: 'Entertainment',
      notes: 'Monthly subscription',
    },
    {
      key: '6',
      type: 'transfer',
      date: 'Jul 10, 2023',
      description: 'Transfer to Savings',
      amount: '$500.00',
      aiCategory: 'Transfer',
      confidence: 91,
      finalCategory: 'Transfer',
      notes: '—',
    },
  ];

  return (
    <Layout className="min-h-screen rounded-lg border">  
      <Content className="bg-white px-4 py-6">
        <div className="pb-6">
          <Title level={2} className="m-0">Transactions</Title>
          <Text className="text-gray-500">View and manage your categorized transactions</Text>
        </div>
        
        <div className="bg-white p-6 rounded border">
          <div className="flex justify-between items-center mb-4">
            <div>
              <Title level={4} className="m-0">Transaction List</Title>
              <Text className="text-gray-500">10 transactions • $1916.16 net</Text>
            </div>
            <div className="flex space-x-3">
              <Input 
                placeholder="Search transactions..." 
                prefix={<SearchOutlined />} 
                style={{ width: 250 }}
                className='pl-8'
              />
              <Dropdown overlay={filterMenu} trigger={['click']} visible={filterVisible} onVisibleChange={setFilterVisible}>
                <Button icon={<FilterOutlined />} className='rounded-lg border px-4 py-5'>Filter</Button>
              </Dropdown>

            </div>
          </div>
          
          <Table 
            columns={columns} 
            dataSource={data} 
            pagination={false}
            className="mt-4"
          />
        </div>
      </Content>
    </Layout>
  );
};

export default Transactions;