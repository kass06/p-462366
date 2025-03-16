import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    services: {
      designBranding: false,
      videographyPhotography: false,
      webDesignDevelopment: false,
      appDevelopment: false,
      marketing: false,
      intellectualProperty: false,
      other: "",
    },
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [name]: checked,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="bg-neutral-50 flex flex-col overflow-hidden items-stretch max-md:max-w-full">
      <Navbar />

      <main className="w-[1778px] max-w-full mt-[200px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[46%] max-md:w-full max-md:ml-0">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col mt-[21px] max-md:max-w-full max-md:mt-10"
            >
              <h1 className="text-[rgba(205,203,192,1)] text-[122px] font-bold max-md:max-w-full max-md:text-[40px]">
                Let's Talk
              </h1>

              <p className="text-[rgba(34,29,38,1)] text-[50px] font-bold ml-5 mt-[134px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                Interested in working with us?
                <br />
                Please feel free to contact us.
              </p>

              <div className="mt-[265px] max-md:text-[40px] max-md:ml-[3px] max-md:mt-10">
                <label
                  htmlFor="fullName"
                  className="text-[rgba(34,29,38,1)] text-[50px] font-light block"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-[rgba(205,203,192,1)] bg-transparent mt-[63px] pb-2 text-[32px] focus:outline-none max-md:mt-10"
                />
              </div>

              <div className="mt-[60px] max-md:text-[40px] max-md:ml-[3px] max-md:mt-10">
                <label
                  htmlFor="email"
                  className="text-[rgba(34,29,38,1)] text-[50px] font-light block"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-[rgba(205,203,192,1)] bg-transparent mt-[63px] pb-2 text-[32px] focus:outline-none max-md:mt-10"
                />
              </div>

              <div className="mt-[60px] max-md:text-[40px] max-md:ml-[3px] max-md:mt-10">
                <label
                  htmlFor="phone"
                  className="text-[rgba(34,29,38,1)] text-[50px] font-light block"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-[rgba(205,203,192,1)] bg-transparent mt-[63px] pb-2 text-[32px] focus:outline-none max-md:mt-10"
                />
              </div>

              <div className="text-[rgba(34,29,38,1)] text-[50px] font-light mt-[60px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                What do you need help with?
              </div>

              <div className="flex w-[515px] max-w-full items-stretch gap-[40px_50px] text-[50px] text-[rgba(34,29,38,1)] font-light flex-wrap mt-[50px] max-md:text-[40px] max-md:mt-10">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="designBranding"
                    name="designBranding"
                    checked={formData.services.designBranding}
                    onChange={handleCheckboxChange}
                    className="w-[50px] h-[50px] border-[rgba(205,203,192,1)] border-solid border-2 appearance-none checked:bg-[rgba(205,203,192,1)]"
                  />
                </div>
                <label
                  htmlFor="designBranding"
                  className="grow shrink w-[405px] basis-auto max-md:text-[40px] cursor-pointer"
                >
                  Design & Branding
                </label>
              </div>

              <div className="flex w-[743px] max-w-full items-stretch gap-[40px_50px] text-[50px] text-[rgba(34,29,38,1)] font-light flex-wrap mt-[21px] max-md:text-[40px]">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="videographyPhotography"
                    name="videographyPhotography"
                    checked={formData.services.videographyPhotography}
                    onChange={handleCheckboxChange}
                    className="w-[50px] h-[50px] border-[rgba(205,203,192,1)] border-solid border-2 appearance-none checked:bg-[rgba(205,203,192,1)]"
                  />
                </div>
                <label
                  htmlFor="videographyPhotography"
                  className="grow shrink w-[633px] basis-auto max-md:max-w-full max-md:text-[40px] cursor-pointer"
                >
                  Videography & Photography
                </label>
              </div>

              <div className="flex w-[749px] max-w-full items-stretch gap-[40px_50px] text-[50px] text-[rgba(34,29,38,1)] font-light flex-wrap mt-[21px] max-md:text-[40px]">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="webDesignDevelopment"
                    name="webDesignDevelopment"
                    checked={formData.services.webDesignDevelopment}
                    onChange={handleCheckboxChange}
                    className="w-[50px] h-[50px] border-[rgba(205,203,192,1)] border-solid border-2 appearance-none checked:bg-[rgba(205,203,192,1)]"
                  />
                </div>
                <label
                  htmlFor="webDesignDevelopment"
                  className="grow shrink w-[639px] basis-auto max-md:max-w-full max-md:text-[40px] cursor-pointer"
                >
                  Web Design & Development
                </label>
              </div>

              <div className="flex w-[518px] max-w-full gap-[40px_50px] flex-wrap mt-[21px]">
                <div className="flex flex-col gap-[25px]">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="appDevelopment"
                      name="appDevelopment"
                      checked={formData.services.appDevelopment}
                      onChange={handleCheckboxChange}
                      className="w-[50px] h-[50px] border-[rgba(205,203,192,1)] border-solid border-2 appearance-none checked:bg-[rgba(205,203,192,1)]"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="marketing"
                      name="marketing"
                      checked={formData.services.marketing}
                      onChange={handleCheckboxChange}
                      className="w-[50px] h-[50px] border-[rgba(205,203,192,1)] border-solid border-2 appearance-none checked:bg-[rgba(205,203,192,1)]"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-stretch text-[50px] text-[rgba(34,29,38,1)] font-light grow shrink-0 basis-0 w-fit mt-[7px] max-md:text-[40px]">
                  <label
                    htmlFor="appDevelopment"
                    className="max-md:text-[40px] cursor-pointer"
                  >
                    App Development
                  </label>
                  <label
                    htmlFor="marketing"
                    className="mt-7 max-md:text-[40px] cursor-pointer"
                  >
                    Marketing
                  </label>
                </div>
              </div>

              <div className="flex w-[555px] max-w-full items-stretch gap-[40px_50px] text-[50px] text-[rgba(34,29,38,1)] font-light flex-wrap mt-[21px] max-md:text-[40px]">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="intellectualProperty"
                    name="intellectualProperty"
                    checked={formData.services.intellectualProperty}
                    onChange={handleCheckboxChange}
                    className="w-[50px] h-[50px] border-[rgba(205,203,192,1)] border-solid border-2 appearance-none checked:bg-[rgba(205,203,192,1)]"
                  />
                </div>
                <label
                  htmlFor="intellectualProperty"
                  className="grow shrink w-[445px] basis-auto max-md:max-w-full max-md:text-[40px] cursor-pointer"
                >
                  Intellectual Property
                </label>
              </div>

              <div className="mt-[45px] max-md:max-w-full max-md:mt-10">
                <input
                  type="text"
                  id="other"
                  name="other"
                  value={formData.services.other}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      services: {
                        ...formData.services,
                        other: e.target.value,
                      },
                    })
                  }
                  placeholder="Other (please specify)"
                  className="w-full border-b-2 border-[rgba(205,203,192,1)] bg-transparent pb-2 text-[32px] focus:outline-none"
                />
              </div>

              <div className="mt-[61px] max-md:text-[40px] max-md:ml-[3px] max-md:mt-10">
                <label
                  htmlFor="message"
                  className="text-[rgba(34,29,38,1)] text-[50px] font-light block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-[rgba(205,203,192,1)] bg-transparent mt-[63px] h-[136px] pb-2 text-[32px] focus:outline-none resize-none max-md:mt-10"
                />
              </div>

              <button
                type="submit"
                className="bg-[rgba(151,161,175,1)] w-[398px] max-w-full text-[50px] text-neutral-50 font-bold whitespace-nowrap text-center mt-[99px] px-[70px] py-[51px] rounded-[20px] max-md:text-[40px] max-md:ml-[3px] max-md:mt-10 max-md:px-5 hover:bg-[rgba(131,141,155,1)] transition-colors"
              >
                SEND
              </button>
            </form>
          </div>

          <div className="w-[54%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9bdb45a4b0e14e9b9af9306aeed654a9/c56ce47b3174229640e36f73a5396a7f1e4e7035edf9aee8f83f83fadc65fb7a?placeholderIfAbsent=true"
              className="aspect-[0.42] object-contain w-full grow max-md:max-w-full max-md:mt-10"
              alt="Contact illustration"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
