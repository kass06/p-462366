import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Services = () => {
  return (
    <div className="bg-neutral-50 flex flex-col overflow-hidden items-stretch max-md:max-w-full">
      <Navbar />

      <main className="self-center flex w-[1658px] max-w-full flex-col items-stretch ml-[11px] mt-[182px] max-md:mt-10">
        <h1 className="text-[rgba(34,29,38,1)] text-[98px] font-bold max-md:max-w-full max-md:text-[40px]">
          We Create Magic, One Pixel at a Time
        </h1>

        <p className="text-[rgba(34,29,38,1)] text-[50px] font-light mr-[46px] mt-[126px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5 max-md:mt-10">
          At Pixel Enchanters, we don't just design we craft immersive
          experiences that captivate, engage, and leave a lasting impression.
          From stunning visuals to cutting-edge digital solutions, our services
          are tailored to help your brand stand out in a crowded world.
        </p>

        <p className="text-[rgba(34,29,38,1)] text-[50px] font-light mr-[61px] mt-[67px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5 max-md:mt-10">
          Explore our enchanted offerings below and discover how we can bring
          your vision to life
        </p>

        {/* Service 1: Design & Branding */}
        <section className="bg-[rgba(151,161,175,1)] mr-[22px] mt-[100px] px-[50px] py-20 max-md:max-w-full max-md:mr-2.5 max-md:mt-10 max-md:px-5">
          <div className="flex w-[803px] max-w-full items-stretch gap-[40px_74px] text-[78px] text-neutral-50 font-bold flex-wrap max-md:text-[40px]">
            <div className="max-md:text-[40px]">/01</div>
            <h2 className="grow shrink w-[602px] basis-auto max-md:max-w-full max-md:text-[40px]">
              Design & Branding
            </h2>
          </div>

          <div className="mt-[63px] max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <p className="text-[rgba(34,29,38,1)] text-[50px] font-light max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  We create memorable, visually striking brand identities that
                  leave a lasting impression. From logos and typography to full
                  brand guidelines, we ensure consistency across all
                  touchpoints.
                </p>
              </div>
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <ul className="text-[rgba(34,29,38,1)] text-[50px] font-bold max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  <li>Logo Design & Visual Identity</li>
                  <li>Brand Guidelines & Strategy</li>
                  <li>Packaging & Print Design</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Web Design & Development */}
        <section className="mt-[110px] max-md:text-[40px] max-md:mt-10">
          <div className="flex w-[1119px] max-w-full items-stretch gap-[40px_74px] text-[78px] text-[rgba(34,29,38,1)] font-bold flex-wrap ml-[51px] max-md:text-[40px]">
            <div className="max-md:text-[40px]">/02</div>
            <h2 className="grow shrink w-[918px] basis-auto max-md:max-w-full max-md:text-[40px]">
              Web Design & Development
            </h2>
          </div>

          <div className="w-[1434px] max-w-full ml-[51px] mt-[61px] max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <p className="text-[rgba(34,29,38,1)] text-[50px] font-light max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  We craft sleek, user-friendly, and responsive websites that
                  blend aesthetics with functionality. Whether it's an
                  e-commerce store, portfolio, or corporate site, we create web
                  experiences that convert and inspire.
                </p>
              </div>
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <ul className="text-[rgba(34,29,38,1)] text-[50px] font-bold max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  <li>Custom Website Design</li>
                  <li>E-Commerce Development</li>
                  <li>Website Optimization & SEO</li>
                  <li>Maintenance & Support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: App Development */}
        <section className="bg-[rgba(151,161,175,1)] flex w-full flex-col mr-[18px] mt-[100px] px-[50px] py-[81px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10 max-md:px-5">
          <div className="flex w-[792px] max-w-full items-stretch gap-[40px_75px] text-[78px] text-neutral-50 font-bold flex-wrap max-md:text-[40px]">
            <div className="max-md:text-[40px]">/03</div>
            <h2 className="grow shrink w-[590px] basis-auto max-md:max-w-full max-md:text-[40px]">
              App Development
            </h2>
          </div>

          <div className="w-[1432px] max-w-full mt-[51px] max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <p className="text-[rgba(34,29,38,1)] text-[50px] font-light mt-3.5 max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  Turn ideas into seamless, high-performing applications with
                  our custom app development services. We build apps that
                  enhance user experience and drive engagement across platforms.
                </p>
              </div>
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <ul className="text-[rgba(34,29,38,1)] text-[50px] font-bold max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  <li>iOS & Android Development</li>
                  <li>UI/UX for Mobile Apps</li>
                  <li>Custom Software Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: Marketing */}
        <section className="mt-[110px] max-md:text-[40px] max-md:mt-10">
          <div className="flex w-[523px] max-w-full items-stretch gap-[40px_73px] text-[78px] text-[rgba(34,29,38,1)] font-bold whitespace-nowrap flex-wrap ml-[58px] max-md:text-[40px]">
            <div className="grow shrink w-[85px] max-md:text-[40px]">/04</div>
            <h2 className="grow shrink w-[321px] basis-auto max-md:text-[40px]">
              Marketing
            </h2>
          </div>

          <div className="w-[1466px] max-w-full ml-[58px] mt-[61px] max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <p className="text-[rgba(34,29,38,1)] text-[50px] font-light max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  We develop strategic marketing campaigns that amplify your
                  brand's reach. From social media marketing and SEO to content
                  creation and advertising, we help your brand stand out in the
                  digital landscape.
                </p>
              </div>
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <ul className="text-[rgba(34,29,38,1)] text-[50px] font-bold max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  <li>Social Media Strategy & Management</li>
                  <li>SEO & Content Marketing</li>
                  <li>Paid Advertising (Google Ads, Social Ads)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 5: Intellectual Property */}
        <section className="bg-[rgba(151,161,175,1)] flex w-full flex-col ml-5 mt-[100px] px-[50px] py-[83px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="flex w-[892px] max-w-full items-stretch gap-[40px_75px] text-[78px] text-neutral-50 font-bold flex-wrap max-md:text-[40px]">
            <div className="max-md:text-[40px]">/05</div>
            <h2 className="grow shrink w-[690px] basis-auto max-md:max-w-full max-md:text-[40px]">
              Intellectual Property
            </h2>
          </div>

          <div className="w-[1380px] max-w-full mt-[43px] max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <p className="text-[rgba(34,29,38,1)] text-[50px] font-light mt-[22px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  Protecting your creative assets is just as important as
                  creating them. We guide businesses through trademarking,
                  copyrighting, and safeguarding brand identity, ensuring your
                  intellectual property stays secure and uniquely yours.
                </p>
              </div>
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <ul className="text-[rgba(34,29,38,1)] text-[50px] font-bold max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  <li>Trademark Registration</li>
                  <li>Copyright Protection</li>
                  <li>Brand Asset Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
