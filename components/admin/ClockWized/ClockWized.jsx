import DbClock from './DbClock';
import BdClock from './BdClock';
import { Carousel } from 'antd';

const ClockWized = () => {
  return (
    <div className="absolute bottom-4 w-full h-auto mb-4 px-1 rounded-md">
      <Carousel autoplay effect="fade">
        <div>
          <DbClock />
        </div>
        <div>
          <BdClock />
        </div>
      </Carousel>
    </div>
  );
};

export default ClockWized;
