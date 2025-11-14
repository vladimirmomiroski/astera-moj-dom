import Navbar from "@/app/(client)/components/layout/navbar/navbar";
import Footer from "@/app/(client)/components/layout/footer/footer";

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default ClientLayout;
