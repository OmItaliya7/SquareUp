const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full
        max-w-[1920px]
        mx-auto
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-20
        2xl:px-40.5
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default Container;