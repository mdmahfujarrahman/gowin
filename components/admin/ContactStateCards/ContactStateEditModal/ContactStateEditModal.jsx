import CustomModal from '../../../../ui/CustomModal/CustomModal';
import PhoneInputs from '../../../PhoneInputs/PhoneInputs';
import CustomInput from '../../../../ui/CustomInput/CustomInput';
import { Button } from 'antd';

const ContactStateEditModal = ({
  open,
  handleClose,
  handleChange,
  inputData,
  handleEdit,
  isLoading,
}) => {
  return (
    <CustomModal
      customClass="actionModal"
      open={open}
      handleCancel={handleClose}
    >
      <div className="flex flex-col rounded mb-6">
        <div className="flex w-full h-8 ">
          <h5 className="text-2xl">Edit Contact Info</h5>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3">
        <div className="w-full  flex flex-col relative">
          <label className="text-primary-blue" htmlFor="name">
            WhatsApp Number
          </label>
          <PhoneInputs
            handleChange={e => {
              const updatePayload = {
                target: {
                  type: 'whatsapp',
                  data: e?.target?.value,
                },
              };
              handleChange(updatePayload);
            }}
            className="border-[1px] border-slate-400 rounded"
            type="contactEdit"
            inputData={inputData?.find(item => item.type === 'whatsapp')}
          />
        </div>
        <div className="w-full  flex flex-col relative">
          <label className="text-primary-blue" htmlFor="name">
            Imo Number
          </label>
          <PhoneInputs
            handleChange={e => {
              const updatePayload = {
                target: {
                  type: 'imo',
                  data: e.target.value,
                },
              };
              handleChange(updatePayload);
            }}
            className="border-[1px] border-slate-400 rounded"
            type="contactEdit"
            inputData={inputData?.find(item => item.type === 'imo')}
          />
        </div>
        <div className="w-full  flex flex-col relative">
          <label className="text-primary-blue" htmlFor="name">
            Email
          </label>
          <CustomInput
            handleChange={e => {
              const payload = {
                target: {
                  type: 'email',
                  data: e.target.value,
                },
              };
              handleChange(payload);
            }}
            name="email"
            value={inputData?.find(item => item.type === 'email')?.data}
            placeholder="Please Enter your name"
            className="my-2 h-10 w-full px-3 py-1 border-[1px] border-slate-400 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex w-full justify-end items-center mt-4">
          <Button
            onClick={() => handleEdit()}
            className="mr-3 w-24 bg-[#1677ff]"
            loading={isLoading}
            type="primary"
          >
            Update
          </Button>
          <Button className="w-24" onClick={handleClose} type="primary" danger>
            No
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

export default ContactStateEditModal;
