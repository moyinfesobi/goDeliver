import Logo from "../assets/logo.svg";
import Popup from "reactjs-popup";
import Envelop from "../assets/rafiki.svg";

const Footer = () => {
  return (
    <div className="p-20 bg-white font-inter">
      <div className=" flex justify-between">
        <p className="font-inter text-godeliver-grey font-semibold text-4xl">
          {" "}
          Subscribe to our newsletter
        </p>

        <div>
          <div className="flex items-center justify-center">
            <div className="flex rounded-full shadow-md overflow-hidden w-[500px]">
              <div className="flex items-center px-4 bg-white border-r border-gray-200">
                <i className="pi pi-envelope text-gray-400"></i>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-gray-700 focus:outline-none"
              />

              <Popup
                trigger={
                  <button className="bg-godeliver-button text-white px-6 py-3 font-semibold hover:bg-[#2563EB]">
                    Subscribe
                  </button>
                }
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(5px)",
                  overflow: "auto",
                  height: "100%",
                  width: "100%",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                modal
              >
                {(close) => (
                  <div className="bg-white h-[65vh] w-[40vw] rounded-3xl p-10 flex justify-center">
                    <div>
                      <div className="flex justify-end ">
                        <button
                          onClick={close}
                          className="outline-none bg-godeliver-grey rounded-full h-6 w-6 flex justify-center items-center"
                        >
                          {" "}
                          <i className="pi pi-times text-white "> </i>{" "}
                        </button>
                      </div>
                      <div className="place-items-center font-inter text-center">
                        <img src={Envelop} alt="bro" />
                        <p className="mt-10 font-semibold text-4xl mb-2">
                          You have Subscribed!{" "}
                        </p>
                        <p className="text-[#636363]">
                          You have successfully subscribed to our weekly
                          newsletter.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-16  border-t-[1px] border-t-[#C5E6FE]" />
      <div className="flex justify-between">
        <div>
          <img src={Logo} alt="logo" />
          <div className="mt-6 flex gap-6">
            <i className="pi pi-facebook text-godeliver-button"></i>
            <i className="pi pi-linkedin text-godeliver-button"></i>
            <i className="pi pi-instagram text-godeliver-button"></i>
            <i className="pi pi-twitter text-godeliver-button"></i>
          </div>
        </div>
        <div>
          <p className="text-[#0035CF] mb-[14px] font-semibold text-xl">
            Company
          </p>
          <div className="text-[#5F606A] font-medium grid gap-6">
            <p>Home</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div>
          <p className="text-[#0035CF] mb-[14px] font-semibold text-xl">
            {" "}
            Partner with Us
          </p>
          <div className="text-[#5F606A] font-medium grid gap-6">
            <p>Apply as a partner</p>
            <p> Register as a Rider</p>
            <p> Apply to rider job vacancies</p>
          </div>
        </div>
        <div>
          <p className="text-[#0035CF] mb-[14px] font-semibold text-xl">
            Contact Us
          </p>
          <div className="text-[#5F606A] font-medium grid gap-6">
            <p>contact@fictionallogistics.com</p>
            <p>+2348000000000</p>
            <p>Lagos, Nigeria.</p>
          </div>
        </div>
      </div>

      <hr className="my-16  border-t-[1px] border-t-[#C5E6FE]" />

      <div className=" flex justify-between font-inter">
        <p className="text-[#5F606A] text-xl">
          {" "}
          © 2025 GoDeliver. All rights reserved.
        </p>
        <p className="text-[#2D93D0] font-bold text-xl">Terms of Use</p>
      </div>
    </div>
  );
};

export default Footer;
