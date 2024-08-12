import React, { Component, CSSProperties } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Table, TableColumnsType } from "antd";
import ProductPage from "./page/ProductPage";
import { Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  // paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const layoutStyle: CSSProperties = {
  overflow: "hidden",
  width: "100%",
  height: "100vh",
};

interface Props {}

interface State {
  collapsed: boolean;
}

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "item01",
    label: "Dashboard",
    icon: <MailOutlined />,
  },
  {
    key: "item02",
    label: "Quản lý sản phẩm",
    icon: <MailOutlined />,
  },
  {
    key: "item03",
    label: "Quản lý người dùng",
    icon: <MailOutlined />,
  },
];

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    return (
      <Layout style={layoutStyle}>
        <Sider
          width={"20%"}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={(value) => this.setState({ collapsed: value })}
        >
          <div>
            {" "}
            <img
              src="https://thietkelogo.mondial.vn/wp-content/uploads/2024/01/symbol-Rolex.jpg "
              alt=""
              width="100%"
            />
          </div>

          <Menu
            theme="dark"
            defaultSelectedKeys={["item01"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          {/* <Outlet>ProductPage</Outlet> */}
          <ProductPage />
        </Layout>
      </Layout>
    );
  }
}
export default App;
