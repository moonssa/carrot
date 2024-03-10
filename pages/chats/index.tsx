import Layout from "@/components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title="채팅">
      <div className="py-4 divide-y-[1px]">
        {[1, 2, 2, 2, 2, 1].map((_, i) => (
          <Link
            href={`/chats/${i}`}
            key={i}
            className="flex mb-3 px-4 cursor-pointer py-3    items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-full bg-slate-300" />
            <div>
              <p className="text-gray-700">Steve Jebs</p>
              <p className="text-sm f text-gray-500">
                See you tomorrow in the corner at 2pm
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
export default Chats;
