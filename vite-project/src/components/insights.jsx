import React, { useState } from "react";
import { Layout, Button, Card, Typography, Row, Col, Space, Badge } from "antd";
import {
  CalendarOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  DownloadOutlined,
  RightOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
} from "recharts";

const { Title, Text,Paragraph } = Typography;
const { Content } = Layout;

const piedata = [
  { name: "Housing", value: 35, color: "#0088FE" },
  { name: "Food", value: 20, color: "#00C49F" },
  { name: "Transportation", value: 15, color: "#FFBB28" },
  { name: "Entertainment", value: 10, color: "#FF8042" },
];

const bardata = [
  { month: "Jan", income: 4200, expenses: 2800 },
  { month: "Feb", income: 4000, expenses: 2700 },
  { month: "Mar", income: 4300, expenses: 2900 },
  { month: "Apr", income: 4100, expenses: 3100 },
  { month: "May", income: 3900, expenses: 2500 },
  { month: "Jun", income: 4200, expenses: 2800 },
  { month: "Jul", income: 4600, expenses: 3000 },
  { month: "Aug", income: 4500, expenses: 3100 },
  { month: "Sep", income: 4400, expenses: 2700 },
  { month: "Oct", income: 4500, expenses: 2900 },
  { month: "Nov", income: 4700, expenses: 3000 },
  { month: "Dec", income: 4800, expenses: 3200 },
];

const tabs = ["Overview", "Categories", "Trends", "AI Insights"];
const categoryData = [

  { name: "Housing", value: 12010, percentage: "35%", color: "#0088FE" },

  { name: "Food", value: 6860, percentage: "20%", color: "#00C49F" },

  { name: "Transportation", value: 5150, percentage: "15%", color: "#FFBB28" },
  

];
const categoryDataForBar =[

  { name: "Housing", value: 350, percentage: "35%", color: "#0088FE" },

  { name: "Food", value: 200, percentage: "20%", color: "#00C49F" },

  { name: "Transportation", value: 150, percentage: "15%", color: "#FFBB28" },
  
  
  { name: "Entertainment", value: 100, percentage: "15%", color: "#FFBB28" },
  { name: "Shopping", value: 80, percentage: "15%", color: "#FFBB28" },
  { name: "Health", value: 70, percentage: "15%", color: "#FFBB28" },
  { name: "Other", value: 50, percentage: "15%", color: "#FFBB28" },


]
const Insights = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <Layout className="min-h-screen bg-gray-50">
      <Content className="px-1 py-0">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <Title level={2} className="m-0 text-md font-semibold text-capitalize">
              Insights
            </Title>
            <Text className="text-gray-500 text-lg">
              Analyze your financial data with AI-powered insights
            </Text>
          </div>
          <Button icon={<CalendarOutlined />}>Last 12 Months</Button>
        </div>

        {/* Tab Navigation */}
        <div className="w-full bg-white px-2 py-1 rounded-lg shadow-sm">
          <div className="flex justify-between">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-1 text-center font-medium transition-all rounded-lg ${
                  activeTab === tab
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* Charts Section */}
        {activeTab === "Overview" &&(
        <Row gutter={24} className="mt-6">
          {/* Bar Chart - Income vs. Expenses */}
          <Col span={12}>
            <Card
              title={
                <div>
                  <div className="flex items-center">
                    <BarChartOutlined className="mr-3 text-blue-500" />
                    <span className="text-2xl font-semibold">
                      Income vs. Expenses
                    </span>
                  </div>
                  <Text className="text-gray-600 text-sm font-normal">
                    Monthly comparison for the past year
                  </Text>
                </div>
              }
              className="shadow-lg rounded-lg px-4 py-1"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={bardata}
                  margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `$${value}`} />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Legend />
                  <Bar
                    dataKey="income"
                    fill="#28a745"
                    name="Income"
                    radius={[5, 5, 0, 0]}
                  />
                  <Bar
                    dataKey="expenses"
                    fill="#dc3545"
                    name="Expenses"
                    radius={[5, 5, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>

              <div className="flex justify-between mt-4 border-t pt-4">
                <div className="flex items-center">
                  <Text className="text-gray-500 text-lg font-medium">
                    Total Income:
                  </Text>
                  <Text className="text-green-500 text-lg font-semibold ms-2">
                    $48,600
                  </Text>
                </div>
                <div className="flex items-center">
                  <Text className="text-gray-500 text-lg font-medium">
                    Total Expenses:
                  </Text>
                  <Text className="text-red-500 text-lg font-semibold ms-2">
                    $34,300
                  </Text>
                </div>
              </div>
            </Card>
          </Col>

          {/* Pie Chart - Expense Breakdown */}
          <Col span={12}>
            <Card
              title={
                <div>
                  <div className="flex items-center">
                    <PieChartOutlined className="mr-3 text-blue-500" />
                    <span className="text-2xl font-semibold">
                      Expense Breakdown
                    </span>
                  </div>
                  <Text className="text-gray-600 text-sm font-normal">
                    Where your money is going
                  </Text>
                </div>
              }
              className="shadow-lg rounded-lg px-4 py-1"
            >
              {/* Chart Section */}
              <div className="flex justify-center items-center">
                <RePieChart width={400} height={300}>
                  <Pie
                    data={piedata}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} (${(percent * 100).toFixed(0)}%)`
                    }
                  >
                    {piedata.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </RePieChart>
                <Tooltip />
              </div>
              {/* Footer Section with Proper Legend */}
              <div className="flex justify-between mt-4 border-t pt-4">
                <Legend
                  layout="horizontal"
                  align="center"
                  verticalAlign="bottom"
                  wrapperStyle={{ marginTop: "10px" }}
                />
              </div>
            </Card>
          </Col>

        {/* Report Download Section */}
        <div className="flex justify-end mt-6">
          <Button type="primary" icon={<DownloadOutlined />}>
            Export Report
          </Button>
        </div>
        </Row>)}
      </Content>
      {activeTab === "Categories" && (

<>

  <Row gutter={24} className="mt-6">

    {categoryData.map((category) => (

      <Col span={8} key={category.name}>

<Card className="border border-gray-200 shadow-lg rounded-lg p-4 relative">
      {/* Blue Top Border */}
      <div className="absolute top-0 left-0 w-full h-2 rounded-t-lg"  style={{ backgroundColor: category.color }}></div>

      {/* Content */}
      <div className="p-2">
        <h2 className="text-xl font-semibold">{category.name}</h2>
        <p className="text-gray-500 text-sm">{category.percentage}% of total expenses</p>

        <h1 className="text-3xl font-bold mt-2">${category.value}</h1>
        <p className="text-gray-500 text-sm">per month on average</p>
      </div>

      {/* View Details Button */}
      <div className="flex justify-between items-center mt-4 text-blue-500 font-medium cursor-pointer">
        View Details <RightOutlined className="ml-2" />
      </div>
    </Card>

      </Col>

    ))}

  </Row>



  {/* Category Comparison Chart */}

  <div className="mt-6 bg-white p-5 rounded-lg shadow-lg">

    <Title level={4}>Category Comparison</Title>

    <ResponsiveContainer width="100%" height={500}>

      <BarChart

        data={categoryDataForBar}

        layout="vertical"

        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}

      >

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis type="number" />

        <YAxis dataKey="name" type="category" />

        <Tooltip />

        <Legend />

        <Bar dataKey="value" fill="#8884d8" />

      </BarChart>

    </ResponsiveContainer>
  </div>
</>

)}
        {activeTab === "AI Insights" && (
          <div className="mt-2 py-0">
            <Row gutter={24} className="min-h-full py-0">
              {/* AI-Generated Insights */}
              <Col span={12}>
                <Card className="rounded-lg h-full" bodyStyle={{ padding: '0px' }}>
                  <div className="mb-4">
                    <Title level={4} className="font-bold m-0">AI-Generated Insights</Title>
                    <Text type="secondary">Smart analysis of your financial data</Text>
                  </div>

                  <Space direction="vertical" className="w-full p-0" size="middle">
                    <Card className="rounded-lg p-0" style={{ border: '1px solid #f0f0f0' }}>
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0">
                          <Badge 
                            count={<InfoCircleOutlined style={{ color: '#1890ff' }} />} 
                            style={{ backgroundColor: '#e6f7ff', borderColor: '#e6f7ff' }}
                          />
                        </div>
                        <div>
                          <Paragraph strong className="m-0">Increase in entertainment spending</Paragraph>
                          <Paragraph type="secondary" className="m-0">
                            Your entertainment spending has increased by 12% compared to last month.
                          </Paragraph>
                        </div>
                      </div>
                    </Card>

                    <Card className="rounded-lg" style={{ border: '1px solid #f0f0f0' }}>
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0">
                          <Badge 
                            count={<ExclamationCircleOutlined style={{ color: '#faad14' }} />} 
                            style={{ backgroundColor: '#fffbe6', borderColor: '#fffbe6' }}
                          />
                        </div>
                        <div>
                          <Paragraph strong className="m-0">Shopping anomaly detected</Paragraph>
                          <Paragraph type="secondary" className="m-0">
                            Unusual transaction of $240 at 'Tech Gadgets Store' on July 18.
                          </Paragraph>
                        </div>
                      </div>
                    </Card>

                    <Card className="rounded-lg" style={{ border: '1px solid #f0f0f0' }}>
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0">
                          <Badge 
                            count={<CheckCircleOutlined style={{ color: '#52c41a' }} />} 
                            style={{ backgroundColor: '#f6ffed', borderColor: '#f6ffed' }}
                          />
                        </div>
                        <div>
                          <Paragraph strong className="m-0">Savings opportunity</Paragraph>
                          <Paragraph type="secondary" className="m-0">
                            You could save $45/month by consolidating your subscription services.
                          </Paragraph>
                        </div>
                      </div>
                    </Card>
                  </Space>

                  <Button 
                    type="primary" 
                    className="w-full mt-6" 
                    size="large"
                  >
                    Get More Insights <RightOutlined />
                  </Button>
                </Card>
              </Col>

              {/* Spending Anomalies */}
              <Col span={12}>
                <Card className="rounded-lg h-full" bodyStyle={{ padding: '28px' }}>
                  <div className="mb-4">
                    <Title level={4} className="font-bold m-0">Spending Anomalies</Title>
                    <Text type="secondary">Unusual transactions detected by AI</Text>
                  </div>

                  <div className="flex flex-col items-center justify-center py-10">
                    <div className="bg-blue-50 rounded-full p-4 mb-6">
                      <InfoCircleOutlined style={{ fontSize: '28px', color: '#1890ff' }} />
                    </div>
                    <Title level={4} className="font-medium text-center mb-2">Anomaly Detection Active</Title>
                    <Paragraph className="text-center text-gray-500 mx-auto" style={{ maxWidth: '80%' }}>
                      Our AI is monitoring your transactions for unusual spending patterns. 
                      Any anomalies will be displayed here.
                    </Paragraph>
                  </div>

                  <Button className="w-full">Adjust Sensitivity</Button>
                </Card>
              </Col>
            </Row>
          </div>
        )}

    </Layout>

  );
};

export default Insights;
