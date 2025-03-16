const TestimonialsSection = () => {
  return (
    <section className="self-center flex w-[1646px] max-w-full flex-col items-stretch">
      <div className="flex items-stretch gap-5 text-[122px] text-[rgba(205,203,192,1)] font-bold whitespace-nowrap flex-wrap justify-between mt-[219px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5 max-md:mt-10">
        <h2 className="max-md:max-w-full max-md:text-[40px]">Testimonials</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9bdb45a4b0e14e9b9af9306aeed654a9/1e4cfa66d60be314f6b052c08f89ee5503c6fb3a87a02dd43e13d456b64d8f1f?placeholderIfAbsent=true"
          className="aspect-[1.09] object-contain w-[70px] shrink-0 my-auto"
          alt="Arrow icon"
        />
      </div>

      <div className="flex items-center gap-5 text-[50px] text-[rgba(34,29,38,1)] font-light flex-wrap justify-between mt-[130px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5 max-md:mt-10">
        <button
          className="aspect-[1.09] object-contain w-[109px] self-stretch shrink-0 max-w-full my-auto"
          aria-label="Previous testimonial"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9bdb45a4b0e14e9b9af9306aeed654a9/2708c05fc9217b45133d0eba0f73b5cff86891d69644faab326873b7fbf0c554?placeholderIfAbsent=true"
            alt="Previous arrow"
            className="w-full h-full"
          />
        </button>

        <div className="bg-[rgba(205,203,192,1)] self-stretch flex flex-col px-[38px] py-[58px] rounded-[31px] max-md:max-w-full max-md:text-[40px] max-md:px-5">
          <blockquote className="ml-3 max-md:text-[40px] max-md:ml-2.5">
            Message
          </blockquote>
          <div className="border-neutral-50 self-stretch shrink-0 h-0.5 mt-[243px] border-solid border-2 max-md:max-w-full max-md:mt-10" />
          <cite className="text-[78px] font-bold mt-[57px] max-md:max-w-full max-md:text-[40px] max-md:mt-10 not-italic">
            Bombani Mthombeni
          </cite>
          <div className="mt-[50px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
            Founder & Creative Director, Pixel Enchanters
          </div>
        </div>

        <button
          className="aspect-[1.09] object-contain w-[109px] self-stretch shrink-0 max-w-full my-auto"
          aria-label="Next testimonial"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9bdb45a4b0e14e9b9af9306aeed654a9/b9986e4250ec9633faf232510b0ad1fa286f5d69090c5ae4e1677d9ab837747a?placeholderIfAbsent=true"
            alt="Next arrow"
            className="w-full h-full"
          />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
