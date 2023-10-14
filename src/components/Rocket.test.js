import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';
import Rockets from './Rockets';
import { getRockets, reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';
import '@testing-library/jest-dom';

// Mock the useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../redux/rockets/rocketsSlice', () => ({
  getRockets: jest.fn(),
  reserveRocket: jest.fn(),
  cancelRocket: jest.fn(),
}));

describe('Rockets component', () => {
  const mockedDispatch = jest.fn();
  const mockRockets = [
    {
      id: '1',
      name: 'Rocket 1',
      description: 'Description for Rocket 1',
      flickr_images: ['image1.jpg'],
      reserved: false,
    },
    {
      id: '2',
      name: 'Rocket 2',
      description: 'Description for Rocket 2',
      flickr_images: ['image2.jpg'],
      reserved: true,
    },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(mockedDispatch);
    useSelector.mockImplementation((selector) => selector({
      rockets: {
        rockets: mockRockets,
        loading: false,
        error: null,
        reserveRockets: ['2'],
      },
    }));
  });

  it('renders loading state', () => {
    useSelector.mockImplementationOnce(() => ({ rockets: [], loading: true, error: null }));

    render(<Rockets />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    const errorMessage = 'Error fetching rockets!';
    useSelector.mockImplementationOnce(() => (
      { rockets: [], loading: false, error: errorMessage }));

    render(<Rockets />);
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  it('renders rockets correctly', async () => {
    render(<Rockets />);

    await waitFor(() => {
      expect(screen.getByText('Rocket 1')).toBeInTheDocument();
      expect(screen.getByText('Rocket 2')).toBeInTheDocument();
    });
  });

  it('handles reserve rocket correctly', async () => {
    render(<Rockets />);

    await waitFor(() => {
      userEvent.click(screen.getByText('Reserve Rocket'));
      expect(reserveRocket).toHaveBeenCalledWith('1');
    });
  });

  it('handles cancel rocket correctly', async () => {
    render(<Rockets />);

    await waitFor(() => {
      userEvent.click(screen.getByText('Cancel Reservation'));
      expect(cancelRocket).toHaveBeenCalledWith('2');
    });
  });

  it('dispatches getRockets action on component mount', async () => {
    render(<Rockets />);

    await waitFor(() => {
      expect(getRockets).toHaveBeenCalled();
    });
  });
});
