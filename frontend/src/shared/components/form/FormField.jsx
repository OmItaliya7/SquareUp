const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  textarea = false,
}) => {
  return (
    <div className="flex flex-col gap-3.5 rounded-md border border-subtle bg-bg-form px-6 py-4.5 xl:gap-4 xl:px-7.5 xl:py-5 2xl:gap-5 2xl:px-10 2xl:py-6">

      <label className="text-base font-medium text-primary xl:text-lg 2xl:text-[22px]">
        {label}
      </label>

      {textarea ? (
        <div className="border-b border-subtle pb-8.5 2xl:pb-10"> 
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={1}
          className="w-full resize-none border-b border-subtle bg-transparent pb-1.5 text-muted focus:border-accent-primary focus:outline-none"
        />
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border-b border-strong bg-transparent pb-1.5 text-base text-muted placeholder:text-placeholder transition-colors focus:border-accent-primary focus:outline-none 2xl:text-lg"
        />
      )}

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};

export default FormField;