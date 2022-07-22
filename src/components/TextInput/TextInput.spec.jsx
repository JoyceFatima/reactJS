/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

const props = {
  placeholder: 'test1',
};

describe('<TextInput />', () => {
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput {...props} handleChange={fn} searchValue={''} />);

    const input = screen.getAllByRole('input', {
      name: /placeholder/i,
    });

    expect(input.value).toBe('test');
  });

  it('should call handleChange on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput {...props} handleChange={fn} searchValue={'test'} />);

    const input = screen.getAllByRole('input', {
      name: /placeholder/i,
    });

    const value = 'value';

    userEvent.type(input, value);

    expect(input.value).toBe('test');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
});
