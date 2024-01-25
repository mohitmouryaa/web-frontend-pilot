import CommunityPhotos from './CommunityPhotos';
import Events from './Events';
import './../../../styles/communityChat.scss';
import ChatBox from './ChatBox';

export default function CommunityChat() {
  return (
    <div>
      <div className="grid">
        <div className="col-8 ml-4">
          {/* Community Photos */}
          <CommunityPhotos />
          {/* Upcoming Network Events */}
          <Events />
        </div>
        <div
          className="col-3 p-0 border-left-2 border-300"
          style={{ height: '85vh' }}
        >
          {/* Chats */}
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
