import { InputText } from 'primereact/inputtext';

export default function CustomInput({ label }) {
  return (
    <div class="flex justify-content-between w-10">
      <div
        class="flex-initial flex align-items-center justify-content-end flex-wrap font-semibold px-5 py-3 w-5"
        style={{ color: '#626161' }}
      >
        {label}
      </div>
      <div class="flex-initial flex align-items-center justify-content-center  font-bold  px-5 py-3 ml-8">
        <InputText />
      </div>
    </div>
  );
}
