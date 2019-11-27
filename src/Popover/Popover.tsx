import * as React from 'react';
import { FormatOption, FormatList } from './Popover.styles';

export interface Props {
  options: {
    label: string;
  }[];
  variant?: string;
}

export const Popover = (props: Props): JSX.Element => {
  const { options, variant } = props;
  return (
    <FormatList>
      {options.map(option => {
        return (
          <FormatOption key={option.label} variant={variant}>
            <span>{option.label}</span>
          </FormatOption>
        );
      })}
    </FormatList>
  );
};
