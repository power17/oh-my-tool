import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { NAV_WIDTH } from './config';
import { Icon } from '@iconify/react';
import type { MenuProps } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const { Sider } = Layout;
function Nav() {
  // const navigate = useNavigate();

  const menuList: MenuItem[] = [
    {
      key: 'sub1',
      label: 'Navigation One',
      icon: <MailOutlined />,
      children: [
        { key: '1', label: 'Option 1' },
        { key: '2', label: 'Option 2' },
        { key: '3', label: 'Option 3' },
        { key: '4', label: 'Option 4' },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        { key: '5', label: 'Option 5' },
        { key: '6', label: 'Option 6' },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            { key: '7', label: 'Option 7' },
            { key: '8', label: 'Option 8' },
          ],
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub4',
      label: 'Navigation Three',
      icon: <SettingOutlined />,
      children: [
        { key: '9', label: 'Option 9' },
        { key: '10', label: 'Option 10' },
        { key: '11', label: 'Option 11' },
        { key: '12', label: 'Option 12' },
      ],
    },
    {
      key: 'grp',
      label: 'Group',
      type: 'group',
      children: [
        { key: '13', label: 'Option 13' },
        { key: '14', label: 'Option 14' },
      ],
    },
  ];
  return (
    <Sider
      theme="light"
      trigger={null}
      width={NAV_WIDTH}
      className="!fixed left-0 top-0 h-screen border-r border-dashed border-border"
    >
      <div className="flex h-full flex-col">
        <div className="flex justify-center items-center">
          <NavLink to="/">
            <Icon
              className="text-primary"
              icon="solar:basketball-bold"
              fontSize="50"
            />
          </NavLink>
          <span className="ml-2 text-xl font-bold text-primary">
            Power Admin
          </span>
        </div>

        <Menu mode="inline" items={menuList} className="!border-none" />
      </div>
    </Sider>
  );
}

export default Nav;
