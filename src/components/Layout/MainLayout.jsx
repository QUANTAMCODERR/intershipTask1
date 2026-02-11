import Header from "../Headers/Header";
import Filters from "../Filters/Filters";
import BlockSidebar from "../Sidebar/BlockSidebar";
import NumberGrid from "../Grid/NumberGrid";
import QtyAmtPanel from "../Grid/QtyAmtPanel";
import FooterBar from "../Footer/FooterBar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200 select-none">

      <Header />
      <Filters />

      {/* Middle Section */}
      <div className="flex flex-1 overflow-hidden
                      flex-col lg:flex-row">

        {/* Sidebar */}
        <div className="lg:w-56 w-full">
          <BlockSidebar />
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-x-auto">
          <NumberGrid />
        </div>

        {/* Qty / Amt Panel */}
        <div className="lg:w-32 w-full">
          <QtyAmtPanel />
        </div>

      </div>

      <FooterBar />
    </div>
  );
}
