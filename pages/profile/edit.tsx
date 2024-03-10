import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import type { NextPage } from "next";
const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack title="Edit Profile">
      <div className="py-4 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2  focus: ring-orange-500 text-gray-700"
          >
            Change Photo
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>

        <Input label="Email address" name="email" type="email" />
        <Input label="Phone number" name="phone" kind="phone" />
        <Button text="Update profile" />
      </div>
    </Layout>
  );
};

export default EditProfile;
