import { Image } from 'primereact/image';
import CustomInput from './CustomInput';
import { Button } from 'primereact/button';

export default function EmployersForm() {
  return (
    <div>
      {/* Header */}
      <div
        className="flex justify-content-center flex-wrap py-5 border-bottom-1"
        style={{ borderColor: 'gray' }}
      >
        <Image src="/img/logo.svg" alt="Image" height="40" className="mr-2" />
      </div>
      {/* BODY */}
      <div>
        <div class="flex flex-column">
          <div class="flex align-items-center justify-content-center font-normal border-round m-2 text-4xl mt-3">
            Employer Form
          </div>
          <div
            class="flex align-items-center justify-content-center font-semibold border-round m-2 line-height-1"
            style={{ color: '#BBBBBB' }}
          >
            Please Fill The Form Below And Our Sales Team Will Be In Touch With
            You.
          </div>
          <div class="flex align-items-center justify-content-center font-bold border-round m-2">
            {/* FORM */}
            <div>
              <form>
                <div>
                  <CustomInput label={'Name'} />
                  <CustomInput label={'Email'} />
                  <CustomInput label={'Phone'} />
                  <CustomInput label={'Affilated Hospital'} />
                  <CustomInput label={'Dr. in Team'} />
                  <CustomInput label={'In Network Insurance'} />
                  <CustomInput label={'Number of MSK Patient'} />
                  <CustomInput label={'Affilated Workers Compensation Group'} />
                  <CustomInput label={'Total Number of Employees'} />
                </div>
                <div class="flex-initial flex align-items-center justify-content-end font-bold py-3 w-9">
                  <Button
                    label="Submit"
                    className="w-4 border-none text-sm mt-3"
                    style={{ backgroundColor: '#B3ECF2', color: '#3C868E' }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
