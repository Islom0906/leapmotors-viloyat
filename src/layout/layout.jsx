import { Footer, Navbar } from "@/components";
import {useEffect} from "react";
import {isShowSidebar} from "@/slice/sidebar";
import {useDispatch, useSelector} from "react-redux";

const Layout = ({ children }) => {
    const dispatch=useDispatch()
    const {show}=useSelector(state => state.sidebar)
    useEffect(() => {
        const handleWindow = () => {
            dispatch(isShowSidebar(false))
        }

        window.addEventListener('click', handleWindow)

        return () => {
            window.removeEventListener('click', handleWindow)
        }

    }, [show]);
  return (
    <div className="relative ">
      <Navbar />
      <div className={"min-h-screen bg-white" }>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
