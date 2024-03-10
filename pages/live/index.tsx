import FloatingButton from "@/components/floating-button";
import Layout from "@/components/layout";
import type { NextPage } from "next";

const Live: NextPage = () => {
  return (
    <Layout hasTabBar title="라이브">
      <div className="py-4 divide-y-2 space-y-4">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div className="pt-4 px-4" key={i}>
            <div className="w-full bg-slate-300 aspect-video rounded-md shadow-md" />
            <h3 className=" text-gray-700 text-lg mt-2">Let's try potato</h3>
          </div>
        ))}

        <FloatingButton href="/live/create">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;
