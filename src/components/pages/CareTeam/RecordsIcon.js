import { classNames } from 'primereact/utils';

export default function RecordsIcon({ icon = 'pi-plus' }) {
  return (
    <div className="circular-icon-container p-d-flex p-ai-center p-jc-center p-shadow-2">
      <i
        className={classNames('pi', icon)}
        style={{
          color: 'white',
          backgroundColor: '#3DDD57',
          borderRadius: '50%',
          padding: '5px',
        }}
      ></i>
    </div>
  );
}
