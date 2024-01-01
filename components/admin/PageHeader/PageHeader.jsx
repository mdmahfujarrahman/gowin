'use client';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

const PageHeader = ({ title, route }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="text-2xl font-bold text-primaryBlue">{title}</div>

      {title === 'Pending Winners' && (
        <div className="flex items-center">
          <Button
            onClick={() => router.push(route)}
            className="mr-3 bg-primary-blue"
            type="primary"
            style={{ backgroundColor: '#042A3F' }}
          >
            Add New Winner
          </Button>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
