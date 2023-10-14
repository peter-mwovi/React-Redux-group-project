import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';
import Missions from './Missions';
import { getMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';
import '@testing-library/jest-dom/extend-expect';

// Mock the useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../redux/missions/missionsSlice', () => ({
  getMissions: jest.fn(),
  joinMission: jest.fn(),
  leaveMission: jest.fn(),
}));

describe('Missions component', () => {
  const mockedDispatch = jest.fn();
  const mockMissions = [
    {
      mission_id: '1',
      mission_name: 'Mission 1',
      description: 'Description for Mission 1',
      joined: false,
    },
    {
      mission_id: '2',
      mission_name: 'Mission 2',
      description: 'Description for Mission 2',
      joined: true,
    },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(mockedDispatch);
    useSelector.mockImplementation((selector) => selector({
      missions: {
        missions: mockMissions,
        loading: false,
        error: null,
        joinedMissions: ['2'],
      },
    }));
  });

  it('renders loading state', () => {
    useSelector.mockImplementationOnce(() => ({ missions: [], loading: true, error: null }));

    render(<Missions />);
    expect(screen.getByText('Loading...')).toBeInTheDocument('Loading...');
  });

  it('renders error state', () => {
    const errorMessage = 'Error fetching missions!';
    useSelector.mockImplementationOnce(() => (
      { missions: [], loading: false, error: errorMessage }));

    render(<Missions />);
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument(`Error: ${errorMessage}`);
  });

  it('renders missions correctly', async () => {
    render(<Missions />);

    await waitFor(() => {
      expect(screen.getByText('Mission 1')).toBeInTheDocument('Mission 1');
      expect(screen.getByText('Mission 2')).toBeInTheDocument('Mission 2');
    });
  });

  it('handles join mission correctly', async () => {
    render(<Missions />);

    await waitFor(() => {
      userEvent.click(screen.getByText('Join Mission'));
      expect(joinMission).toHaveBeenCalledWith('1');
    });
  });

  it('handles leave mission correctly', async () => {
    render(<Missions />);

    await waitFor(() => {
      userEvent.click(screen.getByText('Leave Mission'));
      expect(leaveMission).toHaveBeenCalledWith('2');
    });
  });

  it('dispatches getMissions action on component mount', async () => {
    render(<Missions />);

    await waitFor(() => {
      expect(getMissions).toHaveBeenCalled();
    });
  });
});
