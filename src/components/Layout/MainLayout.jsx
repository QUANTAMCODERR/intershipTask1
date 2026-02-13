import Header from "../Headers/Header";
import Filters from "../Filters/Filters";
import BlockSidebar from "../Sidebar/BlockSidebar";
import NumberGrid from "../Grid/NumberGrid";
import QtyAmtPanel from "../Grid/QtyAmtPanel";
import FooterBar from "../Footer/FooterBar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white select-none">
      <Header />
      <Filters />

      {/* ⭐ FIXED MIDDLE SECTION */}
      <div className="flex items-start">

        <div className="w-24 sm:w-54">
          <BlockSidebar />
        </div>

        <div className="flex-1">
          <NumberGrid />
        </div>

        <div className="w-20 sm:w-34">
          <QtyAmtPanel />
        </div>

      </div>

      <FooterBar />
    </div>
  );
}
