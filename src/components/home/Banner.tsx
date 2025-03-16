const Banner = () => {
  return (
    <section className="bg-[rgba(48,94,131,1)] z-10 mt-[-19px] pl-20 max-md:max-w-full max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[45%] max-md:w-full max-md:ml-0">
          <h1 className="text-neutral-50 text-[98px] font-bold self-stretch my-auto max-md:max-w-full max-md:text-[40px] max-md:mt-10">
            Unleash the Magic of Design. Where Creativity Meets Enchantment!
          </h1>
        </div>
        <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[1235px] self-stretch items-center justify-center my-auto px-20 py-[312px] max-md:max-w-full max-md:mt-[-91px] max-md:px-5 max-md:py-[100px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9bdb45a4b0e14e9b9af9306aeed654a9/a2bf7ccd363d409b2ce38c7c770cb229ac19f6f4d4891e275d53ce5f57de733f?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Background design"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9bdb45a4b0e14e9b9af9306aeed654a9/cbb781bb0067785211f144e4276c5b6704dd127f63f40001d077bacbeb330827?placeholderIfAbsent=true"
              className="aspect-[0.6] object-contain w-[367px] max-w-full relative z-10"
              alt="Featured design"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
