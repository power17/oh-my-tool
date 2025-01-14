import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { ClassNames } from '@emotion/react';
import { getNavLinkStyles, sidebarNavStyles } from './SidebarNav.styles';
import type { NavItem } from '#types/routeTypes';

type SidebarNavProps = {
  navItems: NavItem[];
};

const SidebarNav: React.FC<SidebarNavProps> = ({ navItems = [] }) => {
  return (
    <nav css={sidebarNavStyles}>
      <ClassNames>
        {(props) => {
          const { linkStyles, activeStyles } = getNavLinkStyles(props);

          return (
            <ul>
              {navItems.map((nav) => (
                <li key={nav.displayName}>
                  <NavLink
                    to={nav.pathForLink}
                    end={nav.end}
                    className={({ isActive }) => (isActive ? activeStyles : linkStyles)}
                  >
                    <FontAwesomeIcon icon={nav.icon} />
                    <span>{nav.displayName}</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </NavLink>
                </li>
              ))}
              {/* <li>
                <NavLink to="/abc" className={({ isActive }) => isActive ? activeStyles : linkStyles}>
                  <FontAwesomeIcon icon={faHome} />
                  <span>首页</span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </NavLink>
              </li> */}
            </ul>
          );
        }}
      </ClassNames>
    </nav>
  );
};

export default SidebarNav;
