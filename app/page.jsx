import { Button } from 'antd';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button type="primary">Button</Button>
      <Button type="primary">Button</Button>
    </main>
  );
};

export default Home;
