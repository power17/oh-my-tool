import { css, type ClassNamesContent } from '@emotion/react';

export const sidebarNavStyles = css`
  padding: 1rem;

  & > ul {
    margin: 0;
    padding: 0;

    & > li {
      list-style: none;
      margin-bottom: 0.8rem;
    }
  }
`;

export const sidebarNavItemStyles = css`
  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;

    & > span {
      flex: 1;
      font-size: 1.2rem;
    }
  }
`;

export function getNavLinkStyles({ css, cx }: ClassNamesContent) {
  const linkStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.4rem 1rem;
    border: 1px solid transparent;
    border-radius: 0.8rem;

    &:hover {
      border-color: var(--heliotrope-gray);
    }

    & > span {
      flex: 1;
      font-size: 1.2rem;
    }
  `;
  const activeStyles = cx(
    linkStyles,
    css`
      background-color: var(--purple-navy);
    `
  );

  return {
    linkStyles,
    activeStyles,
  };
}
