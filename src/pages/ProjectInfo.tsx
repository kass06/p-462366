import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const ProjectInfo = () => {
  return (
    <div className="bg-neutral-50 self-stretch flex flex-col overflow-hidden items-stretch pb-[106px] max-md:max-w-full max-md:pb-[100px]">
      <Navbar />

      <main>
        <section className="flex flex-col items-stretch text-[rgba(34,29,38,1)] ml-[142px] mt-[189px] max-md:max-w-full max-md:mt-10">
          <h1 className="text-[98px] font-bold max-md:max-w-full max-md:text-[40px]">
            Wizard Works
          </h1>
          <p className="text-[50px] font-light mt-[89px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
            Fueled by a passion for artistry and a touch of magic
          </p>
        </section>

        <div className="bg-[rgba(151,161,175,1)] flex shrink-0 h-[1080px] mt-[111px] max-md:max-w-full max-md:mt-10" />

        <section className="self-center w-[1620px] max-w-full mt-[115px] max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[55%] max-md:w-full max-md:ml-0">
              <p className="text-[rgba(34,29,38,1)] text-[50px] font-light max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                The Pixel Enchanters team developed a new brand identity,
                website design, and web development for Wizard Works, a creative
                graphic design company. Our work encompassed crafting a cohesive
                visual identity, designing stunning graphics, and building a
                dynamic online presence to showcase Wizard Works' innovative
                design solutions. Through strategic branding and seamless web
                development, we brought the company's creative vision to life,
                ensuring a strong and memorable digital footprint.
              </p>
            </div>
            <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch text-[50px] text-[rgba(34,29,38,1)] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                <h2 className="font-bold max-md:text-[40px]">What We Did:</h2>
                <ul className="font-light mt-[130px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  <li>- Naming</li>
                  <li>- Logo Design</li>
                  <li>- Visual Identity</li>
                  <li>- Print Design</li>
                  <li>- Brand Guidelines & Strategy</li>
                  <li>- Web Design</li>
                  <li>- Web Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <div className="bg-[rgba(34,29,38,1)] flex shrink-0 h-[720px] mt-28 max-md:max-w-full max-md:mt-10" />

        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <div className="bg-[rgba(151,161,175,1)] flex w-[962px] shrink-0 max-w-full h-[962px] mx-auto max-md:-mr-1" />
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-[rgba(205,203,192,1)] flex w-[962px] shrink-0 max-w-full h-[962px] mx-auto" />
            </div>
          </div>
        </div>

        <div className="bg-[rgba(34,29,38,1)] flex shrink-0 h-[680px] max-md:max-w-full" />
        <div className="bg-[rgba(151,161,175,1)] flex shrink-0 h-[680px] max-md:max-w-full" />

        {/* More Projects Section */}
        <section className="self-center w-[1640px] max-w-full mt-[226px] max-md:mt-10">
          <div className="flex items-stretch gap-5 text-[122px] text-[rgba(205,203,192,1)] font-bold flex-wrap justify-between max-md:max-w-full max-md:text-[40px]">
            <h2 className="max-md:max-w-full max-md:text-[40px]">OUR WORK</h2>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9bdb45a4b0e14e9b9af9306aeed654a9/33c21b6c724f857d12a783c8b86f3b6b6ae8ac791051a01ac56d5a756dc0c9f9?placeholderIfAbsent=true"
              className="aspect-[1.09] object-contain w-[70px] shrink-0 my-auto"
              alt="Arrow icon"
            />
          </div>

          <div className="mt-[130px] max-md:max-w-full max-md:mt-10">
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

          <div className="flex w-[1295px] max-w-full items-stretch gap-5 font-bold flex-wrap justify-between mt-[54px] max-md:mt-10">
            <div className="flex flex-col items-stretch">
              <div className="text-[rgba(205,203,192,1)] text-[122px] max-md:text-[40px]">
                /03
              </div>
              <h3 className="text-[rgba(34,29,38,1)] text-[78px] mt-[38px] max-md:text-[40px]">
                99 Clothing
              </h3>
            </div>
            <div className="flex flex-col items-stretch max-md:max-w-full">
              <div className="text-[rgba(205,203,192,1)] text-[122px] max-md:text-[40px]">
                /04
              </div>
              <h3 className="text-[rgba(34,29,38,1)] text-[78px] mt-[38px] max-md:max-w-full max-md:text-[40px]">
                Geek Designs
              </h3>
            </div>
          </div>

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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectInfo;
