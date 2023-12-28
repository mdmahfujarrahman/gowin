import { Dropdown } from 'antd';
import Image from 'next/image';
import { items } from './dropItem';
import { useSession } from 'next-auth/react';

const ProfileDropDown = () => {
  const { data: session, status } = useSession();

  return (
    <Dropdown
      menu={{
        items,
      }}
      arrow
      trigger={'click'}
    >
      {status === 'loading' ? (
        <div className="h-10 w-10 rounded-full animate-pulse" />
      ) : (
        <Image
          src={session?.user?.image}
          width={40}
          height={40}
          className="object-contain"
          alt="user Image"
        />
      )}
    </Dropdown>
  );
};

export default ProfileDropDown;
