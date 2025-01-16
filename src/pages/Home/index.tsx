import { useUserActions, useUserInfo } from '@/store/useUserStore';
import homeBg from './home-bg.svg';
import styled from 'styled-components';

export default function Home() {
  const { setUserInfo } = useUserActions();
  setUserInfo({
    username: 'test',
    id: '',
    email: '',
  });

  setUserInfo({
    username: 'test',
    id: '',
    email: '',
  });
  const userInfo = useUserInfo();

  console.log(userInfo);

  // console.log(userStore);
  return (
    <StyledHome>
      <hgroup>
        <h1>「哦我的工具箱」</h1>
        <p>
          <code>oh-my-Tool</code>
        </p>
      </hgroup>

      <p>
        <img src={homeBg} alt="Home Background" />
        这是一款集成了大量生产力工具的桌面Web应用软件，可以通过便捷的导航，轻松访问到趁手的、体验一致的工具。
      </p>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;

  & > hgroup {
    margin-top: 2rem;
    & > h1 {
      margin: 0.1rem;
      font-size: 2rem;
    }
    & > p {
      margin: 0.1rem;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.6rem;
    }
  }

  & > p {
    margin: 2rem;
    width: 80%;
    & > img {
      width: 30%;
      float: right;
      margin-left: 1rem;
    }
  }
`;
