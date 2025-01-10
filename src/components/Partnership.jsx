import Popup from "reactjs-popup";
import Bro from "../assets/bro.svg";

const Partnership = () => {
  return (
    <div className="p-20 grid grid-cols-6">
      <div className="col-span-3 w-[521px]">
        <p className="text-godeliver-secondary-black font-semibold text-4xl ">
          Partner with GoDeliver
        </p>
        <p className="font-inter my-4 text-godeliver-grey">
          Simply complete and submit the form to request a partnership with
          GoDeliver. We respond to all partnership requests within 1 - 30 days.{" "}
        </p>
        <p className="font-inter text-godeliver-grey">
          For press enquires, complaints, feedback and suggestions, please
          contact us at{" "}
          <span className="text-godeliver-button">
            {" "}
            contact@fictionallogistics.com
          </span>
        </p>
      </div>

      <div className="col-span-3 bg-white p-10 justify-self-end rounded-3xl font-inter grid gap-6 w-[80%] shadow-md">
        <input
          type="text"
          placeholder="Your company’s name"
          className="w-full focus:outline-none border border-[#6C6E79] rounded-[32px] p-3 placeholder-[#46484F]"
        />
        <input
          type="text"
          placeholder="Company Email address"
          className="w-full focus:outline-none border border-[#6C6E79] rounded-[32px] p-3 placeholder-[#46484F]"
        />
        <input
          type="text"
          placeholder="Company Website (optional)"
          className="w-full focus:outline-none border border-[#6C6E79] rounded-[32px] p-3 placeholder-[#46484F]"
        />
        <Popup
          trigger={
            <button className="bg-godeliver-button text-white rounded-full py-3 font-inter font-bold mt-20">
              Request Partnership
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
                  <img src={Bro} alt="bro" />
                  <p className="mt-10 font-semibold text-4xl mb-2">
                    Request Submitted!{" "}
                  </p>
                  <p className="text-[#636363]">
                    Your request to partner with GoDeliver has been submitted.
                    You will receive a feedback mail within 1 - 30 days.
                  </p>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default Partnership;
