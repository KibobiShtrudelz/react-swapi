import { render } from '@testing-library/react';

import Person from './person';

describe('Person', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Person />);
    expect(baseElement).toBeTruthy();
  });
});
