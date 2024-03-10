import { cls } from "@/libs/utils";

interface ButtonProps {
  text: string;
  large?: boolean;
}
export default function Button({ text, large = false, ...rest }: ButtonProps) {
  return (
    <div>
      <button
        {...rest}
        className={cls(
          large ? "text-base py-3" : "text-sm py-2",
          "mt-5 w-full  bg-orange-500 hover:bg-orange-600 text-white px-4  border border-transparent rounded-md shadow-sm  font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
        )}
      >
        {text}
      </button>
    </div>
  );
}
