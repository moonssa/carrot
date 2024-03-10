import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
      <div className="py-4 px-4 space-y-4">
        <Input label="Name" name="name" />
        <Input label="Price" name="price" placeholder="0.00" />
        <TextArea label="Description" name="description" />
        <Button text="Go live" />
      </div>
    </Layout>
  );
};

export default Create;
