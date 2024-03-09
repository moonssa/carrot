import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-5">
      <div>
        <label
          className="mb-1 text-sm font-medium text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <div className="rounded-md relative shadow-sm flex items-center">
          <input
            className="appearance-none w-full pl-7 px-3 py-2 border border-gray-300 rounded-md  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            id="name"
            type="text"
            required
          />
        </div>
      </div>
      <div>
        <label
          className="mb-1 text-sm font-medium text-gray-900"
          htmlFor="price"
        >
          Price
        </label>
        <div className="rounded-md relative shadow-sm flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            className="appearance-none w-full pl-7 px-3 py-2 border border-gray-300 rounded-md  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-3 items-center pointer-events-none">
            <span className="text-gray-500 text-sm">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 text-sm font-medium text-gray-900">
          Description
        </label>
        <div>
          <textarea
            className="mt-1 shadow-sm w-full  focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
            rows={4}
          />
        </div>
      </div>
      <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Go live
      </button>
    </div>
  );
};

export default Create;
