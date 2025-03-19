
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <div className="bg-neutral-50 flex flex-col overflow-hidden items-center max-md:max-w-full">
      <Navbar />

      <main className="flex w-[1613px] max-w-full flex-col items-stretch mt-[193px] max-md:mt-10">
        <h1 className="text-[rgba(34,29,38,1)] text-[98px] font-bold max-md:max-w-full max-md:text-[40px]">
          Your Vision, Our Magic
        </h1>

        <p className="text-[rgba(34,29,38,1)] text-[50px] font-light mr-[29px] mt-[118px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5 max-md:mt-10">
          At Pixel Enchanters, we believe that design is more than aesthetics
          it's magic. We take your ideas and transform them into stunning
          visuals, immersive digital experiences, and powerful brand stories
          that leave a lasting impact.
        </p>

        <p className="text-[rgba(34,29,38,1)] text-[50px] font-light mr-[49px] mt-[67px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5 max-md:mt-10">
          With a team of creative spellcasters in graphic design, branding, web
          development, app creation, and marketing, we craft digital
          enchantments that bring your vision to life.
        </p>

        <section className="mt-[100px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[37%] max-md:w-full max-md:ml-0">
              <h2 className="text-[rgba(34,29,38,1)] text-[78px] font-bold max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                Where Creativity Meets Magic.
              </h2>
            </div>
            <div className="w-[63%] ml-5 max-md:w-full max-md:ml-0">
              <p className="text-[rgba(34,29,38,1)] text-[50px] font-light mt-[11px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                Founded on the idea that every brand deserves a touch of
                enchantment, Pixel Enchanters was born to bridge creativity and
                technology. Our journey began with a passion for storytelling,
                digital craftsmanship, and strategic branding. Today, we help
                businesses unleash their full potential through captivating
                design and innovation
              </p>
            </div>
          </div>
        </section>

        <p className="text-[rgba(34,29,38,1)] text-[50px] font-light mr-[38px] mt-[71px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5 max-md:mt-10">
          From startups to established brands, we weave design spells that turn
          concepts into captivating realities.
        </p>

        {/* Mission & Vision */}
        <section className="w-[1636px] max-w-full mt-[100px] max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <div className="bg-[rgba(34,29,38,1)] flex grow flex-col items-stretch text-neutral-50 w-full pt-[92px] pb-[181px] px-[50px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
                <h2 className="text-[122px] font-bold max-md:text-[40px]">
                  Mission
                </h2>
                <p className="text-[50px] font-light border mt-[86px] border-black border-solid max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  To craft powerful, innovative, and visually stunning digital
                  experiences that elevate brands and make them unforgettable.
                </p>
              </div>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-[rgba(151,161,175,1)] flex grow flex-col items-stretch w-full px-12 py-[105px] max-md:max-w-full max-md:mt-10 max-md:pt-[100px] max-md:px-5">
                <h2 className="text-neutral-50 text-[122px] font-bold max-md:text-[40px]">
                  Vision
                </h2>
                <p className="text-[rgba(34,29,38,1)] text-[50px] font-light mt-[92px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  To become the leading creative agency known for blending
                  magic, technology, and strategy to redefine branding and
                  digital storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-[rgba(34,29,38,1)] text-[98px] font-bold mt-[212px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
            Meet the Wizards Behind the Magic!
          </h2>

          <div className="w-[1636px] max-w-full mt-[101px] max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <div className="bg-[rgba(151,161,175,1)] flex w-[793px] shrink-0 max-w-full h-[793px] mx-auto max-md:mt-10 relative overflow-hidden">
                  <img 
                    src="/public/lovable-uploads/28541032-78cf-460b-973f-dddc54d410ce.png" 
                    alt="Bombani Mthombeni" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="bg-[rgba(151,161,175,1)] flex w-[793px] shrink-0 max-w-full h-[793px] mx-auto max-md:mt-10 relative overflow-hidden">
                  <img 
                    src="/public/lovable-uploads/89407e41-ac74-4101-8c0c-d8955a9eeac2.png" 
                    alt="Iketle Maleka" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[1319px] max-w-full items-stretch gap-5 text-[50px] text-[rgba(34,29,38,1)] text-center flex-wrap justify-between mt-[50px] max-md:text-[40px] max-md:mt-10">
            <div className="flex flex-col items-stretch max-md:max-w-full max-md:text-[40px]">
              <h3 className="font-bold self-center max-md:max-w-full max-md:text-[40px]">
                Bombani Mthombeni
              </h3>
              <p className="font-light mt-[30px] max-md:max-w-full max-md:text-[40px]">
                Founder & Creative Director
              </p>
            </div>
            <div className="flex flex-col items-stretch max-md:text-[40px]">
              <h3 className="font-bold self-center max-md:text-[40px]">
                Iketle Maleka
              </h3>
              <p className="font-light mt-[30px] max-md:text-[40px]">
                Lead Designer
              </p>
            </div>
          </div>

          <div className="w-[1636px] max-w-full mt-[91px] max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <div className="bg-[rgba(151,161,175,1)] flex w-[793px] shrink-0 max-w-full h-[793px] mx-auto max-md:mt-10 relative overflow-hidden">
                  <img 
                    src="/public/lovable-uploads/044feab2-f6bd-40c8-83a3-00f4719fbad9.png" 
                    alt="Kass Marame" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="bg-[rgba(151,161,175,1)] flex w-[793px] shrink-0 max-w-full h-[793px] mx-auto max-md:mt-10 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Motheo Mahapa" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[1324px] max-w-full items-stretch gap-5 text-[50px] text-[rgba(34,29,38,1)] text-center flex-wrap justify-between mt-[51px] max-md:text-[40px] max-md:mt-10">
            <div className="flex flex-col items-stretch max-md:max-w-full max-md:text-[40px]">
              <h3 className="font-bold self-center max-md:text-[40px]">
                Kass Marame
              </h3>
              <p className="font-light mt-[30px] max-md:max-w-full max-md:text-[40px]">
                Web & App Developer
              </p>
            </div>
            <div className="flex flex-col items-stretch max-md:max-w-full max-md:text-[40px]">
              <h3 className="font-bold self-center max-md:text-[40px]">
                Motheo Mahapa
              </h3>
              <p className="font-light mt-[22px] max-md:max-w-full max-md:text-[40px]">
                Marketing Strategist
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
