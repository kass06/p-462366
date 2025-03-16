import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="bg-neutral-50 flex flex-col overflow-hidden items-stretch pt-[338px] pb-[77px] max-md:max-w-full max-md:pt-[100px]">
      <Navbar />

      <main className="self-center flex w-[1644px] max-w-full flex-col items-stretch">
        <h1 className="text-[rgba(34,29,38,1)] text-[98px] font-bold max-md:max-w-full max-md:text-[40px]">
          Crafting Magic, One Project at a Time
        </h1>

        <p className="text-[rgba(34,29,38,1)] text-[50px] font-light mr-[29px] mt-[126px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5 max-md:mt-10">
          At Pixel Enchanters, we don't just design we bring visions to life
          through captivating visuals, seamless digital experiences, and
          powerful branding. Our portfolio is a testament to our expertise,
          creativity, and passion for helping businesses shine.
        </p>

        <p className="text-[rgba(34,29,38,1)] text-[50px] font-light mt-[68px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
          Explore our spellbinding projects below.
        </p>

        {/* Projects Grid - Row 1 */}
        <div className="mt-[100px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <Link to="/project/wizard-works">
                <div className="bg-[rgba(151,161,175,1)] flex w-[795px] shrink-0 max-w-full h-[720px] mx-auto max-md:mt-10" />
              </Link>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <Link to="/project/kb-jewelry">
                <div className="bg-[rgba(205,203,192,1)] flex w-[795px] shrink-0 max-w-full h-[720px] mx-auto max-md:mt-10" />
              </Link>
            </div>
          </div>
        </div>

        {/* Project Titles - Row 1 */}
        <div className="flex w-[1272px] max-w-full items-stretch gap-5 font-bold flex-wrap justify-between mt-[54px] max-md:mt-10">
          <div className="flex flex-col items-stretch max-md:max-w-full">
            <div className="text-[rgba(205,203,192,1)] text-[122px] max-md:text-[40px]">
              /01
            </div>
            <h2 className="text-[rgba(34,29,38,1)] text-[78px] mt-[38px] max-md:max-w-full max-md:text-[40px]">
              Wizard Works
            </h2>
          </div>
          <div className="flex flex-col items-stretch max-md:max-w-full">
            <div className="text-[rgba(205,203,192,1)] text-[122px] max-md:text-[40px]">
              /02
            </div>
            <h2 className="text-[rgba(34,29,38,1)] text-[78px] mt-[39px] max-md:max-w-full max-md:text-[40px]">
              KB Jeweleey
            </h2>
          </div>
        </div>

        {/* Project Descriptions - Row 1 */}
        <div className="mr-[29px] mt-[46px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <p className="text-[rgba(34,29,38,1)] text-[50px] font-light max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                Design & Branding / Web Design & Development / Marketing
              </p>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <p className="text-[rgba(34,29,38,1)] text-[50px] font-light max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                Design & Branding / Photography
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid - Row 2 */}
        <div className="mt-[100px] max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <Link to="/project/99-clothing">
                <div className="bg-[rgba(205,203,192,1)] flex w-[795px] shrink-0 max-w-full h-[720px] mx-auto max-md:mt-10" />
              </Link>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <Link to="/project/geek-designs">
                <div className="bg-[rgba(151,161,175,1)] flex w-[795px] shrink-0 max-w-full h-[720px] mx-auto max-md:mt-10" />
              </Link>
            </div>
          </div>
        </div>

        {/* Project Titles - Row 2 */}
        <div className="flex w-[1295px] max-w-full items-stretch gap-5 font-bold flex-wrap justify-between mt-[54px] max-md:mt-10">
          <div className="flex flex-col items-stretch">
            <div className="text-[rgba(205,203,192,1)] text-[122px] max-md:text-[40px]">
              /03
            </div>
            <h2 className="text-[rgba(34,29,38,1)] text-[78px] mt-[38px] max-md:text-[40px]">
              99 Clothing
            </h2>
          </div>
          <div className="flex flex-col items-stretch max-md:max-w-full">
            <div className="text-[rgba(205,203,192,1)] text-[122px] max-md:text-[40px]">
              /04
            </div>
            <h2 className="text-[rgba(34,29,38,1)] text-[78px] mt-[38px] max-md:max-w-full max-md:text-[40px]">
              Geek Designs
            </h2>
          </div>
        </div>

        {/* Project Descriptions - Row 2 */}
        <div className="mt-[45px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <p className="text-[rgba(34,29,38,1)] text-[50px] font-light max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                Design & Branding / Photography / Web Design & Development
              </p>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <p className="text-[rgba(34,29,38,1)] text-[50px] font-light max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                Design & Branding / Photography / Web Design & Development
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
