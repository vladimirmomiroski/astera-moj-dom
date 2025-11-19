import Navbar from "@/app/(client)/components/layout/navbar/navbar";
import Footer from "@/app/(client)/components/layout/footer/footer";

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
