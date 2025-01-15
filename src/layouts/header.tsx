import { HEADER_HEIGHT } from './config'
import { Icon } from '@iconify/react'
import { Breadcrumb } from 'antd'
function Header() {
  return (
    <div className="w-full sticky top-0 right-0 left-auto">
      <div
        className="flex flex-grow items-center justify-between px-4 text-gray backdrop-blur xl:px-6 2xl:px-10"
        style={{
          height: HEADER_HEIGHT,
          transition: 'height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}
      >
        <div className="flex items-baseline">
          {/* <Icon
            icon="solar:basketball-bold"
            width="50"
            height="50"
            className="m-auto text-[#00a76f]"
          /> */}
          <div className="ml-4 hidden md:block">
            <Breadcrumb
              items={[
                {
                  title: 'Home',
                },
                {
                  title: <a href="">Application Center</a>,
                },
                {
                  title: <a href="">Application List</a>,
                },
                {
                  title: 'An Application',
                },
              ]}
            />
          </div>
        </div>

        <div className="flex">
          {/* <SearchBar />
          <LocalePicker />
          <IconButton
            onClick={() =>
              window.open('https://github.com/d3george/slash-admin')
            }
          >
            <Iconify icon="mdi:github" size={24} />
          </IconButton>
          <IconButton
            onClick={() => window.open('https://discord.gg/fXemAXVNDa')}
          >
            <Iconify icon="carbon:logo-discord" size={24} />
          </IconButton>
          <NoticeButton />
          <SettingButton />
          <AccountDropdown /> */}
        </div>
      </div>
    </div>
  )
}

export default Header
