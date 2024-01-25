import ChatCard from './ChatCard';
import { chats } from './data';

export default function ChatBox() {
  return (
    <div style={{ height: '90vh' }}>
      <div className="font-semibold text-xl bg-black-alpha-60 border-round-right border-round-right">
        <div className="ml-3 flex flex-wrap align-content-center h-3rem text-white ">
          Community Chat
          <i
            className="ml-7 pi pi-align-justify"
            style={{ fontSize: '2rem' }}
          ></i>
        </div>
      </div>
      <div className="mt-4 overflow-scroll" style={{ height: '76vh' }}>
        {chats.map((person) => {
          return <ChatCard {...person} />;
        })}
      </div>
    </div>
  );
}
