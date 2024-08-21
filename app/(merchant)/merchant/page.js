import Home2 from "@/components/merchant/homepages/Home-2";
import Home1 from "@/components/merchant/homepages/Home-1";
import Home3 from "@/components/merchant/homepages/Home-3";
import Home4 from "@/components/merchant/homepages/Home-4";
import Home5 from "@/components/merchant/homepages/Home-5";
import Home6 from "@/components/merchant/homepages/Home-6";

export default function Merchant() {
  return (
    <div className="felin-sections">
      <section className="felin-section" id="section-1">
        <Home2/>        
      </section>
      <section className="felin-section" id="section-2">
        <Home1/>        
      </section>
      <section className="felin-section" id="section-3">
        <Home3/>        
      </section>
      <section className="felin-section" id="section-4">
        <Home4/>        
      </section>
      <section className="felin-section" id="section-6">
        <Home6/>        
      </section>
      <section className="felin-section" id="section-5">
        <Home5/>        
      </section> 
    </div>
  );
}
  