import React, { useState } from "react";

const DisputeScreen = () => {
  const [disputes, setDisputes] = useState([
    {
      id: 1,
      title: "Payment Issue",
      description: "Payment not received for the completed project.",
      status: "Pending",
    },
    {
      id: 2,
      title: "Scope Creep",
      description: "Client requested additional work beyond the agreed scope.",
      status: "Resolved",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newDispute = {
      id: disputes.length + 1,
      title,
      description,
      status: "Pending",
    };
    setDisputes([...disputes, newDispute]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-semibold mb-6">Dispute Center</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Submit a Dispute</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="title">
                Dispute Title
              </label>
              <input
                id="title"
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit Dispute
              </button>
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Your Disputes</h2>
          <div className="space-y-4">
            {disputes.map((dispute) => (
              <div key={dispute.id} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{dispute.title}</h3>
                <p className="text-gray-700 mb-2">{dispute.description}</p>
                <p className="text-gray-600">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      dispute.status === "Pending"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {dispute.status}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputeScreen;
