// db connection
import MianLayout from '../../components/admin/MianLayout/MianLayout';
import { getCurrentUser } from '../../lib/authOptions/authOptions';
import dbConnect from '../../lib/db/db.connect';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

// Meta data
export const metadata = {
  title: 'Dashboard - Go win',
  description: 'Go win dashboard',
};

export default async function AdminLayout({ children }) {
  const userInfo = await getCurrentUser();
  await dbConnect();
  if (userInfo?.user?.role === 'user') {
    redirect('/result');
    return;
  }
  return (
    <section className="w-full h-screen flex flex-col">
      <MianLayout>{children}</MianLayout>
      {/* <>{children}</> */}
    </section>
  );
}
