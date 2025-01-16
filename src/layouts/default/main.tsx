import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
const { Content } = Layout;
function Main() {
  return (
    <Content style={{ width: '100%' }} className="flex">
      <div className="flex-grow overflow-auto size-full ">
        <Outlet />
      </div>
    </Content>
  );
}

export default Main;
