import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Button from '../App';

describe('<Button />', () => {
  it('Calls onPress', async () => {
    const onPress = jest.fn();

    const testID = 'button';

    const {getByTestId} = await render(
      <Button testID={testID} onPress={onPress} label="Button" />,
    );

    const button = getByTestId(testID);

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(0);
  });
});
