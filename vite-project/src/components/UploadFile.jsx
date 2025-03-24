import React, { useState } from "react";
import axios from "axios";
import {
  Layout,
  Menu,
  Typography,
  Button,
  Card,
  List,
  Progress,
  notification,
  Upload,
} from "antd";
import {
  DashboardOutlined,
  UploadOutlined,
  TransactionOutlined,
  BarChartOutlined,
  TagsOutlined,
  UserOutlined,
  SettingOutlined,
  InboxOutlined,
  CheckCircleFilled,
  LeftOutlined,
  FileTextOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Dragger } = Upload;

const UploadStatement = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (info) => {
    const file = info.fileList[0]?.originFileObj;
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      notification.error({
        message: "No File Selected",
        description: "Please select a file before uploading.",
        placement: "bottomRight",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setUploading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      notification.success({
        message: "File Uploaded Successfully",
        description: `${selectedFile.name} has been uploaded successfully.`,
        placement: "bottomRight",
      });

      console.log("Upload response:", response.data);
      setSelectedFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      notification.error({
        message: "Upload Failed",
        description:
          error.response?.data?.error || "An error occurred while uploading.",
        placement: "bottomRight",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleFileCancel = () => {
    setSelectedFile(null);
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  return (
    <Layout className="min-h-screen">
      <Layout>
        <Content className="bg-white">
          <div className="py-5 px-8">
            <Title
              level={2}
              className="m-0 text-3xl font-semibold tracking-tight"
            >
              Upload Statement
            </Title>
            <Paragraph type="secondary" className="m-0">
              Upload your bank statement for AI-powered analysis and
              categorization.
            </Paragraph>
          </div>

          <div className="flex gap-6">
            <Card
              className="flex-1 border shadow-sm"
              bodyStyle={{ padding: "24px" }}
            >
              <Title
                level={3}
                className="text-2xl font-semibold"
                style={{ marginBottom: "8px" }}
              >
                Upload File
              </Title>
              <Text type="secondary">
                Drag and drop your file here or click to browse
              </Text>
              <Dragger
                name="file"
                multiple={false}
                fileList={[]}
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleFileSelect}
                className="mt-4 p-2 bg-white"
                style={{
                  padding: selectedFile ? "20px 0" : "40px 0",
                  background: "#FFFFFF",
                  borderColor: "#D1D5DB",
                  borderStyle: "dashed",
                  borderWidth: "1px",
                  borderRadius: "8px",
                  minHeight: selectedFile ? "180px" : "250px",
                }}
              >
                <div className="flex flex-col items-center justify-center">
                  <UploadOutlined style={{ fontSize: 80, color: "#6B7280" }} />
                  <p className="text-center text-gray-600 mt-2 mb-0">
                    Drag and drop your file here
                  </p>
                  <p className="text-center text-gray-500 text-sm mt-1 mb-4">
                    Supports CSV, Excel, and PDF files
                  </p>
                  <Button
                    type="primary"
                    size="middle"
                    className="inline-flex rounded-lg items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
                  >
                    Choose File
                  </Button>
                </div>
              </Dragger>
              {selectedFile && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileTextOutlined className="text-gray-500 mr-2" />
                      <div>
                        <div>{selectedFile.name}</div>
                        <div className="text-xs text-gray-500">
                          {formatFileSize(selectedFile.size)}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        danger
                        type="text"
                        icon={<CloseOutlined />}
                        onClick={handleFileCancel}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="primary"
                        icon={<UploadOutlined />}
                        onClick={handleFileUpload}
                        loading={uploading}
                      >
                        {uploading ? "Uploading..." : "Upload"}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            <Card className="w-96 border rounded-lg">
              <Title level={4} className="mb-4">
                Supported Formats
              </Title>
              <Text type="secondary">
                The following file formats are supported
              </Text>
              <List
                itemLayout="horizontal"
                className="mt-4"
                dataSource={[
                  {
                    title: "CSV Files",
                    description: "Comma-separated values exported from banks",
                  },
                  {
                    title: "Excel Files",
                    description: ".xlsx and .xls spreadsheet files",
                  },
                  {
                    title: "PDF Statements",
                    description: "Bank statements in PDF format",
                  },
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <CheckCircleFilled style={{ color: "#10B981" }} />
                      }
                      title={item.title}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UploadStatement;
