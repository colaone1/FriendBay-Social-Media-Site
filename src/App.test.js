import React from 'react';
import { render, screen } from '@testing-library/react';
import Scard from './components/Scard';

test('renders Scard with post data and buttons', () => {
  render(
    <Scard
      profilePic={null}
      id="testuser"
      img={null}
      text="Hello, world!"
      reactions={{ like: 1, love: 2, laugh: 3 }}
      reactAction={() => {}}
      postId={1}
      deleteAction={() => {}}
      onEdit={() => {}}
    />
  );
  expect(screen.getByText('@testuser')).toBeInTheDocument();
  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  expect(screen.getByText('Edit')).toBeInTheDocument();
  expect(screen.getByText('Delete')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument(); // like count
  expect(screen.getByText('2')).toBeInTheDocument(); // love count
  expect(screen.getByText('3')).toBeInTheDocument(); // laugh count
});
