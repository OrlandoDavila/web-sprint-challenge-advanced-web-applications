import React from 'react';
import BubblePage from './BubblePage';
import {render, screen} from '@testing-library/react';




const colorData =  [
  {
    color: 'aliceblue',
    code: {
      hex: '#f0f8ff'
    },
    id: 1
  },
  {
    color: 'limegreen',
    code: {
      hex: '#99ddbc'
    },
    id: 2
  },
  {
    color: 'aqua',
    code: {
      hex: '#00ffff'
    },
    id: 3
  },
  {
    color: 'aquamarine',
    code: {
      hex: '#7fffd4'
    },
    id: 4
  }
];

jest.mock(mockGetColors())
test("Fetches data and renders the bubbles", async () => {

  mockGetColors(colorData)
    const { rerender } = render(<BubblePage />);
    const colors = screen.queryAllByTestId(/colors/i);
  expect(colors).toBeInTheDocument();

  const bubbles = getByText(/bubbles/i);
  expect(bubbles).toBeInTheDocument();

});
// Finish the test in `BubblePage.test.js` to test that your app is fetching the bubble data from the API