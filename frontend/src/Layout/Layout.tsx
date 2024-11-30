import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Main children={children}/>
      <Footer />
    </>
  );
}
