import homeBg from './home-bg.svg';
import { homeStyles } from './Home.styles';

export default function Home() {
  return (
    <div css={homeStyles}>
      <hgroup>
        <h1>「哦我的工具箱」</h1>
        <p>
          <code>oh-my-kit</code>
        </p>
      </hgroup>

      <p>
        <img src={homeBg} alt="Home Background" />
        这是一款集成了大量生产力工具的桌面Web应用软件，可以通过便捷的导航，轻松访问到趁手的、体验一致的工具。
      </p>
    </div>
  );
}
