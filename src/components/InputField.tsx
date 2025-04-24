export default function InputField({
  type = "text",
  name,
  id,
  placeholder,
  className,
  required = false,
}: {
  id?: string;
  type?: string;
  name?: string;
  placeholder: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`${className} p-2 rounded-md bg-transparent border-2 border-gray-300 hover:border-gray-400 focus:border-pink-500 dark:focus:border-myPrimary outline-none transition-colors duration-300`}
      required={required}
    />
  );
}
