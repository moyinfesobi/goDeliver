import Popup from "reactjs-popup";
import Bro from "../assets/bro.svg";

const Partnership = () => {
  return (
    <section className="p-10 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {" "}
      <div className="space-y-4 md:w-[70%]">
        {" "}
        <p className="text-godeliver-secondary-black font-semibold text-2xl md:text-3xl lg:text-4xl">
          {" "}
          Partner with GoDeliver{" "}
        </p>{" "}
        <p className="font-inter text-godeliver-grey text-sm md:text-base lg:text-lg">
          {" "}
          Simply complete and submit the form to request a partnership with
          GoDeliver. We respond to all partnership requests within 1 - 30 days.{" "}
        </p>{" "}
        <p className="font-inter text-godeliver-grey text-sm md:text-base lg:text-lg">
          {" "}
          For press inquiries, complaints, feedback, and suggestions, please
          contact us at{" "}
          <span className="text-godeliver-button">
            contact@fictionallogistics.com
          </span>{" "}
        </p>{" "}
      </div>{" "}
      <div className="bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-md space-y-4 md:w-[80%] md:justify-self-end">
        {" "}
        <input
          type="text"
          placeholder="Your company’s name"
          className="w-full border border-[#6C6E79] rounded-[32px] p-3 placeholder-[#46484F] focus:outline-none"
        />{" "}
        <input
          type="text"
          placeholder="Company Email address"
          className="w-full border border-[#6C6E79] rounded-[32px] p-3 placeholder-[#46484F] focus:outline-none"
        />{" "}
        <input
          type="text"
          placeholder="Company Website (optional)"
          className="w-full border border-[#6C6E79] rounded-[32px] p-3 placeholder-[#46484F] focus:outline-none"
        />{" "}
        <Popup
          trigger={
            <button className="bg-godeliver-button text-white rounded-full py-3 font-bold w-full">
              {" "}
              Request Partnership{" "}
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
            <div className="bg-white h-[65vh] w-[90vw] md:w-[40vw] rounded-3xl p-6  md:p-10 flex justify-center">
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
                  <img src={Bro} alt="bro" className="mx-auto" />
                  <p className="mt-6 md:mt-10 font-semibold text-2xl md:text-4xl mb-2">
                    Request Submitted!
                  </p>
                  <p className="text-[#636363]">
                    Your request to partner with GoDeliver has been submitted.
                    You will receive a feedback mail within 1 - 30 days.
                  </p>
                </div>
              </div>
            </div>
          )}
        </Popup>{" "}
      </div>{" "}
    </section>
  );
};

export default Partnership;
