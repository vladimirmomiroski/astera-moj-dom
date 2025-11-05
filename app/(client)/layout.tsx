import Navbar from "@/app/(client)/components/navbar/navbar";
import Footer from "@/app/(client)/components/footer/footer";

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
