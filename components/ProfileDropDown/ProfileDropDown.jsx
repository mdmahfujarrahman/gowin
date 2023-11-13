import { Dropdown } from 'antd';
import Image from 'next/image';
import { getCurrentUser } from '../../lib/authOptions/authOptions';
import { items } from './dropItem';

const ProfileDropDown = async () => {
  const session = await getCurrentUser();
  return (
    <Dropdown
      menu={{
        items,
      }}
      arrow
      trigger={'click'}
    >
      <Image
        src={session?.user?.image}
        width={40}
        height={40}
        className="object-contain"
        alt="user Image"
      />
    </Dropdown>
  );
};

export default ProfileDropDown;
