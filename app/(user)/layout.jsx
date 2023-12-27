import Navbar from '../../components/Navbar/Navbar';
import dbConnect from '../../lib/db/db.connect';
import { getCurrentUser } from '../../lib/authOptions/authOptions';
import { redirect } from 'next/navigation';

export default async function RootLayout({ children }) {
  const userInfo = await getCurrentUser();
  await dbConnect();
  if (userInfo?.user?.role === 'admin') {
    redirect('/dashboard');
    return;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
