interface Props {
  description: String;
  budget: String;
  employer: String;
}

const Card: React.FC<Props> = ({ description, budget, employer }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg my-2 flex p-4">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src="https://via.placeholder.com/70"
          alt="Avatar"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">
            I will do Arabic voice over - ${budget}
          </h2>
          <div className="flex items-center my-2">
            <svg
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-3.09 1.637a1 1 0 0 1-1.451-1.054l.59-3.431-2.49-2.426a1 1 0 0 1 .554-1.705l3.451-.501L9.75 3.276a1 1 0 0 1 1.8 0l1.54 3.144 3.451.501a1 1 0 0 1 .554 1.705l-2.49 2.426.59 3.431a1 1 0 0 1-1.451 1.054L10 15z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-3.09 1.637a1 1 0 0 1-1.451-1.054l.59-3.431-2.49-2.426a1 1 0 0 1 .554-1.705l3.451-.501L9.75 3.276a1 1 0 0 1 1.8 0l1.54 3.144 3.451.501a1 1 0 0 1 .554 1.705l-2.49 2.426.59 3.431a1 1 0 0 1-1.451 1.054L10 15z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-3.09 1.637a1 1 0 0 1-1.451-1.054l.59-3.431-2.49-2.426a1 1 0 0 1 .554-1.705l3.451-.501L9.75 3.276a1 1 0 0 1 1.8 0l1.54 3.144 3.451.501a1 1 0 0 1 .554 1.705l-2.49 2.426.59 3.431a1 1 0 0 1-1.451 1.054L10 15z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-3.09 1.637a1 1 0 0 1-1.451-1.054l.59-3.431-2.49-2.426a1 1 0 0 1 .554-1.705l3.451-.501L9.75 3.276a1 1 0 0 1 1.8 0l1.54 3.144 3.451.501a1 1 0 0 1 .554 1.705l-2.49 2.426.59 3.431a1 1 0 0 1-1.451 1.054L10 15z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-3.09 1.637a1 1 0 0 1-1.451-1.054l.59-3.431-2.49-2.426a1 1 0 0 1 .554-1.705l3.451-.501L9.75 3.276a1 1 0 0 1 1.8 0l1.54 3.144 3.451.501a1 1 0 0 1 .554 1.705l-2.49 2.426.59 3.431a1 1 0 0 1-1.451 1.054L10 15z" />
            </svg>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="text-sm text-gray-400 mt-2">
            2hrs ago - {employer}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
