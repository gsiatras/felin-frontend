import Home1 from "@/components/b2c/homepages/Home-1";
import Home2 from "@/components/b2c/homepages/Home-2";
import Home3 from "@/components/b2c/homepages/Home-3";
import Home4 from "@/components/b2c/homepages/Home-4";

export default function Home() {
  return (
    <div className="felin-sections">
      <section className="felin-section" id="section-1">
        <Home1/>
      </section>
      <section className="felin-section" id="section-2">
        <Home2/>
      </section>
      <section className="felin-section" id="section-3">
        <Home3/>
      </section>
      <section className="felin-section" id="section-4">
        <Home4/>
      </section>
    </div>
  );
}
