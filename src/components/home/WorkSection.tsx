import { Link } from "react-router-dom";

const WorkSection = () => {
  return (
    <section className="self-center flex w-[1646px] max-w-full flex-col items-stretch mt-[226px] max-md:mt-10">
      <div className="flex items-stretch gap-5 text-[122px] text-[rgba(205,203,192,1)] font-bold flex-wrap justify-between ml-2.5 max-md:max-w-full max-md:text-[40px]">
        <h2 className="max-md:max-w-full max-md:text-[40px]">OUR WORK</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9bdb45a4b0e14e9b9af9306aeed654a9/42e01638fee4e8a7416e14fe98a9e8b198ff23d13531893630d0e40a2865ac98?placeholderIfAbsent=true"
          className="aspect-[1.09] object-contain w-[70px] shrink-0 my-auto"
          alt="Arrow icon"
        />
      </div>

      {/* Project 1 */}
      <Link to="/project/wizard-works" className="block">
        <div className="bg-[rgba(151,161,175,1)] flex w-full shrink-0 h-[720px] ml-2.5 mt-[130px] max-md:mt-10" />
        <h3 className="text-[rgba(34,29,38,1)] text-[78px] font-bold ml-2.5 mt-[68px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
          Wizard Works
        </h3>
        <p className="text-[rgba(34,29,38,1)] text-[50px] font-light ml-2.5 mt-[47px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
          Design & Branding / Web Design & Development / Marketing
        </p>
      </Link>

      {/* Project 2 */}
      <Link to="/project/kb-jewelry" className="block">
        <div className="bg-[rgba(34,29,38,1)] flex w-full shrink-0 h-[720px] ml-2.5 mt-[87px] max-md:mt-10" />
        <h3 className="text-[rgba(34,29,38,1)] text-[78px] font-bold ml-2.5 mt-[69px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
          KB Jeweleey
        </h3>
        <p className="text-[rgba(34,29,38,1)] text-[50px] font-light ml-2.5 mt-[33px] max-md:max-w-full max-md:text-[40px]">
          Design & Branding / Photography
        </p>
      </Link>

      {/* Project 3 */}
      <Link to="/project/99-clothing" className="block">
        <div className="bg-[rgba(151,161,175,1)] flex w-full shrink-0 h-[720px] ml-2.5 mt-[87px] max-md:mt-10" />
        <h3 className="text-[rgba(34,29,38,1)] text-[78px] font-bold ml-2.5 mt-[68px] max-md:text-[40px] max-md:mt-10">
          99 Clothing
        </h3>
        <p className="text-[rgba(34,29,38,1)] text-[50px] font-light ml-2.5 mt-8 max-md:max-w-full max-md:text-[40px]">
          Design & Branding / Photography / Web Design & Development
        </p>
      </Link>
    </section>
  );
};

export default WorkSection;
