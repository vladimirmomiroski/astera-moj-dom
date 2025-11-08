import Navbar from "@/app/(client)/components/ui/navbar/navbar";
import Footer from "@/app/(client)/components/ui/footer/footer";

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
