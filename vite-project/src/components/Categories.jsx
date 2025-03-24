import React, { useState } from 'react';
import { 
  Layout, 
  Menu, 
  Button, 
  Table, 
  Input, 
  Modal, 
  Form, 
  Radio, 
  Tag, 
  Space,
  Tooltip,
  Typography,
  Select,
  Divider
} from 'antd';
import { 
  HomeOutlined, 
  UploadOutlined, 
  TransactionOutlined, 
  LineChartOutlined,
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  FilterOutlined,
  MoreOutlined,
  CloseOutlined,
  FolderAddOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#7B61FF'); // Default purple color
  const [categoryType, setCategoryType] = useState('Expense');
  const [form] = Form.useForm();

  const colors = [
    { color: '#7B61FF', bg: '#7B61FF' }, // Purple
    { color: '#1890ff', bg: '#1890ff' }, // Blue
    { color: '#52c41a', bg: '#52c41a' }, // Green
    { color: '#faad14', bg: '#faad14' }, // Yellow
    { color: '#fa8c16', bg: '#fa8c16' }, // Orange
    { color: '#722ed1', bg: '#722ed1' }  // Light Purple
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleCreate = () => {
    form.validateFields().then(values => {
      console.log('Form values:', values);
      // Here you would handle the creation of a new category
      setIsModalOpen(false);
      form.resetFields();
    });
  };

  // Mock data for categories
  const categories = [
    { 
      key: '1', 
      name: 'Housing', 
      type: 'expense', 
      subcategories: [{ name: 'Rent', count: 4 }], 
      rules: [{ name: 'Rent', count: 2 }], 
      transactions: 28, 
      color: '#1890ff' 
    },
    { 
      key: '2', 
      name: 'Food & Drink', 
      type: 'expense', 
      subcategories: [{ name: 'Groceries', count: 3 }], 
      rules: [{ name: 'Grocery', count: 3 }], 
      transactions: 42, 
      color: '#52c41a' 
    },
    { 
      key: '3', 
      name: 'Transportation', 
      type: 'expense', 
      subcategories: [{ name: 'Gas', count: 3 }], 
      rules: [{ name: 'Gas', count: 3 }], 
      transactions: 35, 
      color: '#faad14' 
    },
    { 
      key: '4', 
      name: 'Entertainment', 
      type: 'expense', 
      subcategories: [{ name: 'Movies', count: 3 }], 
      rules: [{ name: 'Netflix', count: 3 }], 
      transactions: 20, 
      color: '#fa8c16' 
    },
    { 
      key: '5', 
      name: 'Shopping', 
      type: 'expense', 
      subcategories: [{ name: 'Clothing', count: 3 }], 
      rules: [{ name: 'Amazon', count: 3 }], 
      transactions: 32, 
      color: '#722ed1' 
    },
    { 
      key: '6', 
      name: 'Health & Fitness', 
      type: 'expense', 
      subcategories: [{ name: 'Gym', count: 3 }], 
      rules: [{ name: 'Gym', count: 3 }], 
      transactions: 15, 
      color: '#52c41a' 
    },
    { 
      key: '7', 
      name: 'Income', 
      type: 'income', 
      subcategories: [{ name: 'Salary', count: 3 }], 
      rules: [{ name: 'Payroll', count: 3 }], 
      transactions: 12, 
      color: '#52c41a' 
    }
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div 
            style={{ 
              width: 12, 
              height: 12, 
              borderRadius: '50%', 
              backgroundColor: record.color, 
              marginRight: 10 
            }} 
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: type => (
        <Tag color={type === 'expense' ? '#f5222d' : '#52c41a'}>
          {type}
        </Tag>
      ),
    },
    {
      title: 'Subcategories',
      dataIndex: 'subcategories',
      key: 'subcategories',
      render: (subcategories) => (
        <>
          {subcategories.map(sub => (
            <Tag key={sub.name} style={{ marginRight: 8, borderRadius: 12 }}>
              {sub.name} <span style={{ marginLeft: 4 }}>+{sub.count}</span>
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Rules',
      dataIndex: 'rules',
      key: 'rules',
      render: (rules) => (
        <>
          {rules.map(rule => (
            <Tag key={rule.name} style={{ marginRight: 8, borderRadius: 12 }}>
              {rule.name} <span style={{ marginLeft: 4 }}>+{rule.count}</span>
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Transactions',
      dataIndex: 'transactions',
      key: 'transactions',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Button type="text" icon={<MoreOutlined />} />
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Content style={{ padding: '0 24px', marginTop: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingTop: 24 }}>
            <div>
              <Title level={2} style={{ margin: 0 }}>Categories</Title>
              <Text type="secondary">Manage your transaction categories and rules</Text>
            </div>
            <Button type="primary" icon={<FolderAddOutlined size={10} />} onClick={showModal}   style={{ padding: "20px 30px", borderRadius:"10px" }}>
              New Category
            </Button>
          </div>
          
          <div style={{ background: '#fff', padding: 24, minHeight: 280, borderRadius: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div>
                <Title level={4} style={{ margin: 0 }}>Category Management</Title>
                <Text type="secondary">8 categories</Text>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <Input 
                  placeholder="Search categories..." 
                  prefix={<SearchOutlined />} 
                  style={{ width: 220 }} 
                />
                <Button icon={<FilterOutlined />}>Type</Button>
              </div>
            </div>
            
            <Table 
              columns={columns} 
              dataSource={categories} 
              pagination={false}
              rowClassName={() => 'category-row'}
            />
          </div>
        </Content>
      </Layout>

      {/* Create New Category Modal */}
      <Modal
        title="Create New Category"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="create" type="primary" onClick={handleCreate}>
            Create Category
          </Button>,
        ]}
        closeIcon={<CloseOutlined />}
        width={600}
      >
        <div style={{ marginBottom: '4px' }}>
          <Text type="secondary">Add a new category for organizing your transactions.</Text>
        </div>

        <Form form={form} layout="vertical" style={{ marginTop: 24 }}>
          <Form.Item
            name="categoryName"
            label="Category Name"
            rules={[{ required: true, message: 'Please input category name!' }]}
          >
            <Input placeholder="e.g., Transportation" />
          </Form.Item>

          <Form.Item name="categoryType" label="Category Type">
            <Radio.Group value={categoryType} onChange={(e) => setCategoryType(e.target.value)}>
              <Radio.Button value="Expense" style={{ width: 120, textAlign: 'center' }}>Expense</Radio.Button>
              <Radio.Button value="Income" style={{ width: 120, textAlign: 'center' }}>Income</Radio.Button>
              <Radio.Button value="Transfer" style={{ width: 120, textAlign: 'center' }}>Transfer</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="color" label="Color">
            <div style={{ display: 'flex', gap: 8 }}>
              {colors.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(item.color)}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: item.bg,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: selectedColor === item.color ? '2px solid #1890ff' : 'none',
                  }}
                />
              ))}
            </div>
          </Form.Item>

          <Form.Item 
            label={
              <Space>
                <span>Subcategories</span>
                <Tooltip title="Add subcategories to further organize transactions within this category">
                  <QuestionCircleOutlined />
                </Tooltip>
              </Space>
            }
          >
            <div style={{ display: 'flex', gap: 8 }}>
              <Input placeholder="e.g., Groceries" style={{ flexGrow: 1 }} />
              <Button type="primary">Add</Button>
            </div>
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">No subcategories added</Text>
            </div>
          </Form.Item>

          <Form.Item 
            label={
              <Space>
                <span>Auto-categorization Rules</span>
                <Tooltip title="Add rules to automatically categorize transactions based on keywords">
                  <QuestionCircleOutlined />
                </Tooltip>
              </Space>
            }
          >
            <div style={{ display: 'flex', gap: 8 }}>
              <Input placeholder="e.g., Uber" style={{ flexGrow: 1 }} />
              <Button type="primary">Add</Button>
            </div>
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">No rules added</Text>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Categories;