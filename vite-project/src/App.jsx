import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, Button, Typography } from "antd";
import {
  DashboardOutlined,
  UploadOutlined,
  TransactionOutlined,
  BarChartOutlined,
  TagsOutlined,
  UserOutlined,
  SettingOutlined,
  LeftOutlined,
  PieChartOutlined
} from "@ant-design/icons";
import { ChartNoAxesColumnIncreasing, FolderCog, House, Layers,Settings,Upload, User } from 'lucide-react';

import UploadStatement from "./components/UploadFile";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";
import Categories from "./components/Categories";
import Profile from "./components/Profile";

const { Sider, Content } = Layout;
const { Title } = Typography;

function SidebarMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { key: "/", icon: <House />, label: "Dashboard" },
    { key: "/upload", icon: <Upload />, label: "Upload" },
    { key: "/transactions", icon: <Layers />, label: "Transactions" },
    { key: "/insights", icon: <ChartNoAxesColumnIncreasing  />, label: "Insights" },
    { key: "/categories", icon: <FolderCog />, label: "Categories" },
    { key: "/profile", icon: <User />, label: "Profile" },
    { key: "/settings", icon: <Settings />, label: "Settings" },
  ];

  return (
    <Sider theme="light" width={280} className="border-r" collapsible collapsed={collapsed}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b">
      {!collapsed && <Title level={4} className="m-0 text-2xl mt-3">StateSense</Title>}
        <Button
          type="text"
          icon={collapsed ? <PieChartOutlined size={10} style={{ color: "blue" }} /> : <LeftOutlined  />}
          size="large"
          className="flex items-center justify-center"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      <Menu
  mode="inline"
  selectedKeys={[location.pathname]}
  style={{
    borderRight: 0,
    padding: "12px 0px", // Adjust padding
  }}
  className="text-lg mt-3"
  items={menuItems.map((item) => ({
    ...item,
    onClick: () => navigate(item.key), // Navigate on click
    className:
      "flex items-center py-4 mt-5 text-xl font-normal text-gray-200 px-2 rounded-lg transition duration-200 hover:bg-blue-100",
  }))}
/>
    </Sider>
  );
}

function App() {
  return (
    <Router>
      <Layout className="h-screen">
        {/* Sidebar */}
        <SidebarMenu />

        {/* Main Content */}
        <Layout>
          <Content className="px-3 py-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/upload" element={<UploadStatement />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
