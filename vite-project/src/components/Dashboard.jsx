import React from 'react';
import { Card, Typography, Button, Row, Col, Statistic, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, UploadOutlined, HomeOutlined,WarningOutlined, AreaChartOutlined, UnorderedListOutlined, AppstoreOutlined, UserOutlined, SettingOutlined,CreditCardOutlined, WalletOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen bg-white">
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <Title level={2} style={{ margin: 0 }}>Good afternoon, Alex</Title>
              <Text className="text-gray-500">Here's a summary of your financial activity</Text>
            </div>
            <Button type="primary" icon={<UploadOutlined />} size="large" onClick={() => navigate("/upload")}>
              Upload Statement
            </Button>
          </div>
          
          {/* Stats Cards */}
          <Row gutter={16} className="mb-6">
            <Col span={8}>
              <Card>
                <Text className="text-gray-500">Total Income</Text>
                <div className="flex items-center mt-2">
                  <Title level={2} style={{ margin: 0 }}>$4,200</Title>
                  <div className="ml-2 flex items-center text-green-500">
                    <ArrowUpOutlined style={{ color: '#52c41a', transform: 'rotate(45deg)' }}  />
                    <span className="ml-1">8.2%</span>
                  </div>
                </div>
                <div className="mt-3 text-gray-500 flex items-center">
                  <span className="text-green-500 mr-2">$</span>
                  Last updated yesterday
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Text className="text-gray-500">Total Expenses</Text>
                <div className="flex items-center mt-2">
                  <Title level={2} style={{ margin: 0 }}>$1,850.75</Title>
                  <div className="ml-2 flex items-center text-red-500">
                    <ArrowDownOutlined style={{ color: '#f5222d', transform: 'rotate(-45deg)' }} />
                    <span className="ml-1">3.1%</span>
                  </div>
                </div>
                <div className="mt-3 text-gray-500 flex items-center">
                  <span className="text-red-500 mr-2">
                    <CreditCardOutlined />
                  </span>
                  12 categories this month
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Text className="text-gray-500">Net Balance</Text>
                <div className="flex items-center mt-2">
                  <Title level={2} style={{ margin: 0 }}>$2,349.25</Title>
                  <div className="ml-2 flex items-center text-green-500">
                    <ArrowUpOutlined style={{ color: '#52c41a', transform: 'rotate(45deg)' }} />
                    <span className="ml-1">12.5%</span>
                  </div>
                </div>
                <div className="mt-3 text-gray-500 flex items-center">
                  <span className="text-blue-500 mr-2">
                    <WalletOutlined />
                  </span>
                  Savings rate: 23%
                </div>
              </Card>
            </Col>
          </Row>
          
          {/* Charts */}
          <Row gutter={16}>
            <Col span={14}>
              <Card title="Monthly Overview" extra={<small className="text-gray-500">Income vs. Expenses</small>}>
                {/* Monthly Overview Chart (Bar Chart) would go here */}
                <div className="h-64 w-full">
                  {/* This would be a real chart component in production */}
                  <div className="grid grid-cols-7 h-full items-end gap-2 mt-6">
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-green-500 w-8 h-40"></div>
                      <div className="bg-red-500 w-8 h-28"></div>
                      <span className="text-xs">Jan</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-green-500 w-8 h-36"></div>
                      <div className="bg-red-500 w-8 h-24"></div>
                      <span className="text-xs">Feb</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-green-500 w-8 h-24"></div>
                      <div className="bg-red-500 w-8 h-20"></div>
                      <span className="text-xs">Mar</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-green-500 w-8 h-32"></div>
                      <div className="bg-red-500 w-8 h-28"></div>
                      <span className="text-xs">Apr</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-green-500 w-8 h-20"></div>
                      <div className="bg-red-500 w-8 h-16"></div>
                      <span className="text-xs">May</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-green-500 w-8 h-28"></div>
                      <div className="bg-red-500 w-8 h-20"></div>
                      <span className="text-xs">Jun</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-green-500 w-8 h-36"></div>
                      <div className="bg-red-500 w-8 h-24"></div>
                      <span className="text-xs">Jul</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={10}>
              <Card title="Expense Breakdown" extra={<small className="text-gray-500">Where your money is going</small>}>
                {/* Donut Chart would go here */}
                <div className="h-64 flex justify-center items-center">
                  {/* Placeholder for donut chart */}
                  <div className="relative w-40 h-40 rounded-full border-16 border-blue-500 flex justify-center items-center">
                    <div className="absolute w-28 h-28 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Legend */}
                  <div className="ml-6">
                    <div className="mb-2"><span className="inline-block w-3 h-3 bg-blue-500 mr-2"></span>Housing 35%</div>
                    <div className="mb-2"><span className="inline-block w-3 h-3 bg-teal-500 mr-2"></span>Food 20%</div>
                    <div className="mb-2"><span className="inline-block w-3 h-3 bg-yellow-500 mr-2"></span>Transportation 15%</div>
                    <div className="mb-2"><span className="inline-block w-3 h-3 bg-orange-500 mr-2"></span>Entertainment 10%</div>
                    <div><span className="inline-block w-3 h-3 bg-purple-500 mr-2"></span>Shopping 10%</div>
                    <div><span className="inline-block w-3 h-3 bg-gray-400 mr-2"></span>Other 10%</div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;