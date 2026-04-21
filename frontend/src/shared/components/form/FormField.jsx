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
    <div className="flex flex-col gap-3.5 rounded-md border border-border-subtle bg-bg-form px-6 py-4.5 xl:gap-4 xl:px-7.5 xl:py-5 2xl:gap-5 2xl:px-10 2xl:py-6">

      <label className="text-base xl:text-lg 2xl:text-[22px] font-medium text-text-primary">
        {label}
      </label>

      {textarea ? (
        <div className="pb-[34px] 2xl:pb-10 border-b border-border-subtle"> 
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={1}
          className="w-full pb-2 bg-transparent border-b resize-none border-border-subtle text-text-muted focus:border-accent-primary focus:outline-none"
        />
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border-b border-border-strong bg-transparent pb-1.5 text-base text-text-muted placeholder:text-text-placeholder transition-colors focus:border-accent-primary focus:outline-none 2xl:text-lg"
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