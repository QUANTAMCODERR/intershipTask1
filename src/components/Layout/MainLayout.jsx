import Header from "../Headers/Header";
import Filters from "../Filters/Filters";
import BlockSidebar from "../Sidebar/BlockSidebar";
import NumberGrid from "../Grid/NumberGrid";
import QtyAmtPanel from "../Grid/QtyAmtPanel";
import FooterBar from "../Footer/FooterBar";
import MiddleBody from "../Grid/MiddleBody"


export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white select-none">
      <Header />
      <Filters />
      {/* <MiddleBody/> */}

      {/* ⭐ FIXED MIDDLE SECTION */}
      <div className="flex items-start">

        <div className="w-24 sm:min-w-40 xs:min-w-30 md:min-w-46 lg:min-w-46">
          <BlockSidebar />
        </div>

        <div className="flex-1 min-w-">
          <NumberGrid />
        </div>

        <div className="w-20 sm:w-34">
          <QtyAmtPanel />
        </div>
        {/* <MiddleBody/> */}

      </div>

      <FooterBar />
    </div>
  );
}
