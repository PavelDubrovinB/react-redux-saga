import React from 'react';
import { Button } from 'antd';
import {
  HeartOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { ThemesState } from '../../../store/interface';
import './style.css';

interface ThemeCardProps {
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
  themes: ThemesState['themes'];
}

export const ThemeCard = ({ themes, onLike, onDelete }: ThemeCardProps): JSX.Element => (
  <>
    {themes.map((item) => (
      <div
        className="themeCard__item"
        key={item.id}
      >
        <Button
          type="text"
          onClick={() => onDelete(item.id)}
        >
          <DeleteOutlined />
        </Button>
        <Button
          type="text"
          className={item.like ? 'themesCard__item_button_like' : ''}
          onClick={() => onLike(item.id)}
        >
          <HeartOutlined />
        </Button>
        <a
          target="_blank"
          href={item.url}
        >
          {item.url}
        </a>
      </div>
    ))}
  </>
);
