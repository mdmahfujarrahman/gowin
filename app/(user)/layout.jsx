import Navbar from '../../components/Navbar/Navbar';
import dbConnect from '../../lib/db/db.connect';

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
