import React from 'react';
import { Link } from 'react-router-dom';
import { DarkToggle } from '../DarkToggle/DarkToggle';
import { BsClipboard } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import './Home.css';

const Home = () => {
  const [roomName, setRoomName] = React.useState('');
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="container">
      <div className="home-container">
        {isTabletOrMobile && (
          <div className="toggle-button-mobile">
            <DarkToggle />
          </div>
        )}
        <div className="title">Chat Room!</div>
        {isDesktopOrLaptop && (
          <div className="toggle-button">
            <DarkToggle />
          </div>
        )}
        <code className="text-input-field">Create or Join a room</code>
        <input
          type="text"
          placeholder="Room"
          value={roomName}
          onChange={handleRoomNameChange}
          className="text-input-field"
        />
        <Link to={`/room/${roomName}`} className="enter-room-button">
          Join room
        </Link>
        <div className="share-text">
          Share the link with others to start chatting. Click{' '}
          <button className="this" onClick={() => handleShare()}>
            <BsClipboard size={15} style={{ verticalAlign: 'top' }} />
          </button>{' '}
          to copy.
        </div>
      </div>
    </div>
  );
};

export default Home;
