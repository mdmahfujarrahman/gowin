import PageHeader from '../../../components/PageHeader/PageHeader';

export const metadata = {
  title: 'Profile',
  description: 'Go win Profile',
};

export default async function RootLayout({ children }) {
  return (
    <>
      <section className="p-5 h-full my-5 flex flex-col bg-primary-blue">
        <PageHeader headerTitle="Account Details" />
        <div className="px-3 flex flex-col md:flex-row items-start p-3 w-full rounded-xl bg-white max-h-screen">
          {children}
        </div>
      </section>
    </>
  );
}
