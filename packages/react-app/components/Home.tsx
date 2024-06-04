import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Recent from "./Recent";
import { ethers } from "ethers";
import JobPostingABI from "@/contracts/abis/JobPostingABI.json";
import { Alfajores, useContractKit } from "@celo-tools/use-contractkit";

const HomePage = () => {
  const { address, network, performActions, kit, connect } = useContractKit();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Job");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [skills, setSkills] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"; // Update to your contract address

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await performActions(async (kit) => {
      const signer = await kit.web3.eth.getAccounts();
      const contract = new kit.web3.eth.Contract(
        JobPostingABI,
        contractAddress
      );

      try {
        const tx = await contract.methods
          .createJob(description, ethers.parseUnits(budget, "wei"))
          .send({ from: signer[0] });
        console.log("Job posted successfully", tx);
        setTitle("");
        setDescription("");
        setBudget("");
        setDuration("");
        setSkills("");
      } catch (error) {
        console.error("Error posting job:", error);
      }
    });
  };

  useEffect(() => {
    const fetchJobs = async () => {
      await performActions(async (kit) => {
        const signer = kit.web3.eth.getAccounts();
        const contract = new kit.web3.eth.Contract(
          JobPostingABI,
          contractAddress
        );

        try {
          const [jobIds, employers, descriptions, budgets, actives] =
            await contract.methods.getAllActiveJobs().call();
          const jobList = jobIds.map((id, index) => ({
            id: id,
            employer: employers[index],
            description: descriptions[index],
            budget: budgets[index],
            active: actives[index],
          }));
          setJobs(jobList);
        } catch (error) {
          console.error("Error fetching jobs:", error);
        }
      });
    };
    fetchJobs();
  }, [performActions]);

  return (
    <>
      <div className="overflow-hidden flex w-full min-h-screen">
        <div className="max-w-2xl w-full mx-auto">
          <div className="bg-white">
            <nav className="flex flex-col sm:flex-row">
              <button className="py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                Recent
              </button>
              <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                Ongoing Jobs
              </button>
              <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                Posted Jobs
              </button>
              <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                Proposals
              </button>
            </nav>
            <Recent jobs={jobs} />

            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{
                overlay: {
                  zIndex: 1000,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
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

              <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
                <h1 className="text-2xl font-semibold mb-6">
                  Post a New Job/Offer
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="title">
                      Job Title
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
                    <label className="block text-gray-700 mb-2" htmlFor="type">
                      Posting as
                    </label>
                    <select
                      value={type}
                      required
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option>Job</option>
                      <option>Offer</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="description"
                    >
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
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="budget"
                    >
                      Budget ($)
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
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="duration"
                    >
                      Duration (Days)
                    </label>
                    <input
                      id="duration"
                      type="number"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="skills"
                    >
                      Required Skills (comma-separated)
                    </label>
                    <input
                      id="skills"
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Post Job
                    </button>
                  </div>
                </form>
              </div>
            </ReactModal>
            <button
              className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={openModal}
            >
              Post a New Job/Offer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
