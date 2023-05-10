import React from 'react';

import * as S from './styled';

export interface TagProps {
  children?: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler;
}

const TagItem: React.FC<TagProps> = ({ children, isActive = false, onClick }) => {
  return (
    <S.TagButton isActive={isActive} onClick={onClick}>
      {children}
    </S.TagButton>
  );
};

const TagList: React.FC<{ children?: React.ReactNode[] }> = ({ children }) => {
  return (
    <S.TagList>
      {React.Children.map(children, (child, i) => (
        <S.TagItem key={i}>{child}</S.TagItem>
      ))}
    </S.TagList>
  );
};

export const Tag = Object.assign(
  {},
  {
    Item: TagItem,
    List: TagList,
  }
);
