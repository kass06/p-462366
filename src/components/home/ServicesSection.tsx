import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="self-center flex w-[1646px] max-w-full flex-col items-stretch mt-[213px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5 max-md:mt-10">
      <div className="flex items-stretch gap-5 text-[122px] text-[rgba(205,203,192,1)] font-bold whitespace-nowrap flex-wrap justify-between max-md:max-w-full max-md:text-[40px]">
        <h2 className="max-md:max-w-full max-md:text-[40px]">SERVICES</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9bdb45a4b0e14e9b9af9306aeed654a9/1e4cfa66d60be314f6b052c08f89ee5503c6fb3a87a02dd43e13d456b64d8f1f?placeholderIfAbsent=true"
          className="aspect-[1.09] object-contain w-[70px] shrink-0 my-auto"
          alt="Arrow icon"
        />
      </div>

      {/* First row of services */}
      <div className="ml-2.5 mt-[130px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <Link to="/services" className="block">
              <div className="bg-[rgba(151,161,175,1)] flex grow flex-col w-full px-20 py-[59px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-neutral-50 text-[122px] font-bold max-md:text-[40px]">
                  /01
                </div>
                <div className="text-[rgba(34,29,38,1)] text-[50px] font-light w-[616px] mt-[69px] max-md:text-[40px] max-md:mt-10">
                  Design &<br />
                  Branding
                </div>
              </div>
            </Link>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <Link to="/services" className="block">
              <div className="bg-[rgba(34,29,38,1)] flex grow flex-col text-neutral-50 w-full px-20 py-[59px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-[122px] font-bold max-md:text-[40px]">
                  /02
                </div>
                <div className="text-[50px] font-light mt-[69px] max-md:text-[40px] max-md:mt-10">
                  Web Design & Development
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Second row of services */}
      <div className="ml-2.5 mt-[50px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[29%] max-md:w-full max-md:ml-0">
            <Link to="/services" className="block">
              <div className="bg-[rgba(34,29,38,1)] flex grow flex-col text-neutral-50 w-full px-[50px] py-[59px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-[122px] font-bold max-md:text-[40px]">
                  /03
                </div>
                <div className="text-[50px] font-light mt-[70px] max-md:text-[40px] max-md:mt-10">
                  App Development
                </div>
              </div>
            </Link>
          </div>
          <div className="w-[29%] ml-5 max-md:w-full max-md:ml-0">
            <Link to="/services" className="block">
              <div className="bg-[rgba(151,161,175,1)] flex grow flex-col whitespace-nowrap w-full pt-[68px] pb-[115px] px-[50px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
                <div className="text-neutral-50 text-[122px] font-bold max-md:text-[40px]">
                  /04
                </div>
                <div className="text-[rgba(34,29,38,1)] text-[50px] font-light mt-[63px] max-md:text-[40px] max-md:mt-10">
                  Marketing
                </div>
              </div>
            </Link>
          </div>
          <div className="w-[42%] ml-5 max-md:w-full max-md:ml-0">
            <Link to="/services" className="block">
              <div className="bg-[rgba(151,161,175,1)] flex grow flex-col w-full pt-[68px] pb-[115px] px-[49px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
                <div className="text-neutral-50 text-[122px] font-bold max-md:text-[40px]">
                  /05
                </div>
                <div className="text-[rgba(34,29,38,1)] text-[50px] font-light mt-[63px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  Intellectual Property
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
