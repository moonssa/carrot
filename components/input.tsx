interface InputProps {
  label: string;
  kind?: "text" | "phone" | "price";
  name: string;
  [key: string]: any;
}
export default function Input({
  label,
  kind = "text",
  name,
  ...rest
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-gray700">
        {label}
      </label>
      <div className="mt-1">
        {kind === "text" ? (
          <input
            id={name}
            {...rest}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
        ) : null}
        {kind === "phone" ? (
          <div className="flex rounded-md shadow-sm ">
            <span className="flex items-center justify-center px-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id={name}
              type="number"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        ) : null}
        {kind === "price" ? (
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
        ) : null}
      </div>
    </div>
  );
}
