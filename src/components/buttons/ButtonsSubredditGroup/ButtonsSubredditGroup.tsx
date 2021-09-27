import React from 'react';
import { Button } from 'antd';
import { SubredditType } from '../../../store/interface';
import { ButtonsState } from '../../../store/buttons/reduser';
import './style.css';

interface ButtonsProps {
  onClick: (id: SubredditType) => void;
  buttons: ButtonsState;
}

export const ButtonsSubredditGroup = ({ buttons, onClick }: ButtonsProps): JSX.Element => (
  <>
    {buttons.buttons.map((item) => (
      <Button
        onClick={() => onClick(item.id)}
        className={item.loading ? 'button_paused' : ''}
        key={item.id}
      >
        {item.name}
      </Button>
    ))}
  </>
);
