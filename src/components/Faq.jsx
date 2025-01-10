import Collapsible from "react-collapsible";

const Faq = () => {
  const myFaqs = [
    {
      question: "What kind of Items can I send and recieve",
      answer:
        "You can send various items as long as they comply with our terms and conditions.",
    },
    {
      question: "What kind of Items can I send and recieve",
      answer:
        "You can send various items as long as they comply with our terms and conditions.",
    },
    {
      question: "How do I patner with GoDeliver",
      answer:
        "To patner with GoDeliver, simply sign up on our platform and follow the steps in the patnership section.",
    },
    {
      question: "How much is the shipping fee?",
      answer:
        "The shipping fee is calculated based on requirements such as distance and the weight of your shipment.",
    },
    {
      question: "What are your operating hours",
      answer: "We operate 24/7 to ensure your packages are delivered on time.",
    },
    {
      question: "Can I track my package",
      answer:
        "Yes, you can track your package in real time using our tracking feature.",
    },
  ];

  return (
    <div className="p-20 text-center ">
      <p className="text-godeliver-secondary-black font-semibold text-4xl">
        {" "}
        FAQs
      </p>
      <p className="font-inter text-godeliver-grey text-lg mt-4">
        {" "}
        Quick answers to questions you may have. <br />
        Still have questions?{" "}
        <span className="text-godeliver-button underline "> Contact Us </span>
      </p>

      <div className="bg-white p-10 rounded-3xl mt-8 shadow-md  font-medium text-xl font-inter">
        {myFaqs.map((faq, index) => (
          <>
            <Collapsible
              key={index}
              trigger={
                <>
                  <div className="flex text-godeliver-grey justify-between content-center py-3 focus:text-godeliver-button ">
                    <p> {faq.question}</p>
                    <i className="pi pi-angle-down text-[#222325]"> </i>
                  </div>
                </>
              }
              triggerWhenOpen={
                <>
                  <div className="flex  justify-between content-center py-3 text-godeliver-button ">
                    <p> {faq.question}</p>
                    <i className="pi pi-angle-up text-godeliver-button"> </i>
                  </div>
                </>
              }
            >
              <div className="text-base text-start text-[#6C6E79] py-2">
                {" "}
                {faq.answer}
              </div>
            </Collapsible>
            <hr className="mb-3" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Faq;
