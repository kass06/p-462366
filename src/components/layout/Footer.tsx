import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[rgba(48,94,131,1)] flex w-full flex-col items-center justify-center px-[70px] py-[103px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
        <div className="flex mb-[-22px] w-[1582px] max-w-full items-stretch gap-5 flex-wrap justify-between max-md:mb-2.5">
          <div className="mt-1.5 max-md:max-w-full">
            <h2 className="text-white text-[122px] font-bold max-md:max-w-full max-md:text-[40px]">
              Let's Talk
            </h2>
            <Link
              to="/contact"
              className="bg-[rgba(205,203,192,1)] w-[465px] max-w-full mt-28 px-[54px] py-[22px] rounded-[20px] block max-md:mt-10 max-md:px-5"
            >
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[77%] max-md:w-full max-md:ml-0">
                  <div className="text-neutral-50 text-[50px] font-bold self-stretch my-auto max-md:text-[40px] max-md:mt-10">
                    Contact Us
                  </div>
                </div>
                <div className="w-[23%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9bdb45a4b0e14e9b9af9306aeed654a9/61a1809a29d59e54a7230a2fc58d5975b15a565a6d09eb88d3dd01703813c364?placeholderIfAbsent=true"
                    className="aspect-[1.09] object-contain w-[70px] shrink-0 grow max-md:mt-10"
                    alt="Arrow icon"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-stretch max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch pl-1.5 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-6/12 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch text-[50px] text-neutral-50 font-bold whitespace-nowrap underline max-md:text-[40px] max-md:mt-10">
                      <Link to="/services" className="max-md:text-[40px]">
                        Services
                      </Link>
                      <Link
                        to="/work"
                        className="mt-[43px] max-md:text-[40px] max-md:mt-10"
                      >
                        Work
                      </Link>
                    </div>
                  </div>
                  <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch text-[50px] text-neutral-50 font-bold whitespace-nowrap underline max-md:text-[40px] max-md:mt-10">
                      <Link to="/about" className="max-md:text-[40px]">
                        About
                      </Link>
                      <Link
                        to="/contact"
                        className="mt-[45px] max-md:text-[40px] max-md:mt-10"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-neutral-50 text-[50px] font-bold mt-[92px] max-md:text-[40px] max-md:mt-10">
                Location
              </h3>
            </div>
            <address className="text-neutral-50 text-[40px] font-light mt-[33px] not-italic">
              Pretoria, Gauteng,
              <br />
              South Africa
            </address>
          </div>
        </div>
      </div>
      <div className="bg-neutral-50 text-[32px] text-[rgba(34,29,38,1)] font-light text-center px-[70px] py-12 max-md:max-w-full max-md:px-5">
        © 2025. Pixel Enchanters. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
