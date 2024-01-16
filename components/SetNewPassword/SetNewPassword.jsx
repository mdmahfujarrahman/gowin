'use cleint';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { gowinImages } from '../../public/assets';
import CustomInput from '../../ui/CustomInput/CustomInput';
import CustomButton from '../../ui/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { manageResetRoute } from '../../store/slices/authSlice/authSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { envConfig } from '../../lib/config';

const SetNewPassword = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const [passShow, setPassShow] = useState(false);
  const [confirmPassShow, setConfirmPassShow] = useState(false);
  const [inputData, setInputData] = useState({
    password: '',
    confirmPassword: '',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleUpdatePassword = async () => {
    if (!auth.resetUser) {
      router.push('/reset');
      return;
    }
    if (!inputData.password || !inputData.confirmPassword) {
      toast.error('Please enter password and confirm password');
      return;
    }
    if (inputData.password !== inputData.confirmPassword) {
      toast.error('Password and confirm password does not match');
      return;
    }
    setIsLoading(true);

    try {
      const updatePassword = await fetch(
        `${envConfig.serverUrl}/auth/resetpassword`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            cookies:
              'token=' +
              auth.resetUser.token +
              '; path=/; domain=.gowin.market; SameSite=None; Secure',
          },
          body: JSON.stringify({
            password: inputData.password,
          }),
        },
      );
      const updatePasswordData = await updatePassword.json();
      if (updatePasswordData.data.success) {
        toast.success(updatePasswordData.data.message);
        dispatch(manageResetRoute('reset'));
        router.push('/');
        setIsLoading(false);
      } else {
        toast.error(updatePasswordData.data.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-2 flex justify-center items-center  flex-col">
      <div className="flex items-center w-full flex-col">
        <h2 className="flexCenter my-2 text-white text-center text-sm md:text-xl">
          Please enter your new password
        </h2>
        <div className="w-full md:w-5/6 flex items-center flex-col relative">
          <div className="w-full flex flex-col relative">
            <label className="text-white" htmlFor="name">
              New Password
            </label>
            <CustomInput
              handleChange={handleChange}
              name="password"
              type={passShow ? 'text' : 'password'}
              placeholder="Please Enter your password"
              value={inputData.password}
              className="my-2 h-10 w-full px-3 py-1 rounded-sm focus:outline-none"
            />
            <div>
              <Image
                src={passShow ? gowinImages.view : gowinImages.hide}
                height={20}
                width={20}
                onClick={() =>
                  setPassShow(prevState => {
                    return !prevState;
                  })
                }
                className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer"
                alt="password show hide"
              />
            </div>
          </div>
          <div className="w-full flex flex-col relative">
            <label className="text-white" htmlFor="name">
              Confim New Password
            </label>
            <CustomInput
              handleChange={handleChange}
              name="confirmPassword"
              type={confirmPassShow ? 'text' : 'password'}
              placeholder="Please Enter your password"
              value={inputData.confirmPassword}
              className="my-2 h-10 w-full px-3 py-1 rounded-sm focus:outline-none"
            />
            <div>
              <Image
                src={confirmPassShow ? gowinImages.view : gowinImages.hide}
                height={20}
                width={20}
                onClick={() =>
                  setConfirmPassShow(prevState => {
                    return !prevState;
                  })
                }
                className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer"
                alt="password show hide"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <CustomButton
              handleClick={handleUpdatePassword}
              // isDisabled={true}
              btnClass={
                ' my-2 h-10 bg-primary-blue w-48 border-none text-white rounded-md'
              }
            >
              {isLoading ? <LoadingOutlined /> : 'Set New Password'}
            </CustomButton>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-white text-sm">
            Back to
            <Link className="text-primary-blue cursor-pointer ms-2" href="/">
              <span
                onKeyDown={() => dispatch(manageResetRoute('reset'))}
                onClick={() => dispatch(manageResetRoute('reset'))}
              >
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
