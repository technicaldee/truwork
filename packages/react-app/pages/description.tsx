import { useState } from "react";
import ReactModal from "react-modal";

export default function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [message, setMessage] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ message, deliveryDate, budget });
    closeModal();
  };
  return (
    <>
      <div className="min-h-screen bg-white flex justify-center p-4">
        <div className="p-4">
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="https://via.placeholder.com/70"
              alt="Avatar"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">Andre Yang</h2>
              <p className="text-sm text-gray-600">Professional Voice Actor</p>
              <div className="flex items-center my-2">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-3.09 1.637a1 1 0 0 1-1.451-1.054l.59-3.431-2.49-2.426a1 1 0 0 1 .554-1.705l3.451-.501L9.75 3.276a1 1 0 0 1 1.8 0l1.54 3.144 3.451.501a1 1 0 0 1 .554 1.705l-2.49 2.426.59 3.431a1 1 0 0 1-1.451 1.054L10 15z" />
                  </svg>
                ))}
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-3.09 1.637a1 1 0 0 1-1.451-1.054l.59-3.431-2.49-2.426a1 1 0 0 1 .554-1.705l3.451-.501L9.75 3.276a1 1 0 0 1 1.8 0l1.54 3.144 3.451.501a1 1 0 0 1 .554 1.705l-2.49 2.426.59 3.431a1 1 0 0 1-1.451 1.054L10 15z" />
                </svg>
              </div>
              <button className="text-blue-500 flex items-center">
                See Profile{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-3.09 1.637a1 1 0 0 1-1.451-1.054l.59-3.431-2.49-2.426a1 1 0 0 1 .554-1.705l3.451-.501L9.75 3.276a1 1 0 0 1 1.8 0l1.54 3.144 3.451.501a1 1 0 0 1 .554 1.705l-2.49 2.426.59 3.431a1 1 0 0 1-1.451 1.054L10 15z" />
                </svg>
              </button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-around">
            <div className="text-center">
              <div className="text-2xl font-bold">$250</div>
              <div className="text-sm text-gray-500">Job Budget</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10 days</div>
              <div className="text-sm text-gray-500">Job Duration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-sm text-gray-500">Proposals</div>
            </div>
          </div>
          <p className="my-4 text-gray-600">
            I will provide a professional Arabic voice over for your project,
            whether it's a commercial, narration, or any other type of project.
            I have years of experience in the field and ensure high-quality
            recordings with a fast turnaround time. I look forward to working
            with you and bringing your project to life!
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
              Arabic
            </span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
              Voice Over
            </span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
              Professional
            </span>
          </div>
        </div>

        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: { zIndex: 1000, backgroundColor: "rgba(0, 0, 0, 0.5)" },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <button className="float-right" onClick={closeModal}>
            Close
          </button>

          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Send Proposal</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Proposal Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="deliveryDate"
                >
                  Expected Delivery Date
                </label>
                <input
                  id="deliveryDate"
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="budget">
                  Proposed Budget
                </label>
                <input
                  id="budget"
                  type="number"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Send Proposal
                </button>
              </div>
            </form>
          </div>
        </ReactModal>
        <button
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={openModal}
        >
          Send Proposal
        </button>
      </div>
    </>
  );
}
