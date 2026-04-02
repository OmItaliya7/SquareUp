
//   Mobile   390px  → 16px each side  → px-4
//   Tablet   768px  → 24px each side  → px-6
//   Laptop  1440px  → 80px each side  → xl:px-20
//   Desktop 1920px  → handled by max-w clamping
//
// Max widths:
//   Default → 1440px
//   2xl+    → 1620px

//  const Container = ({ children, className = "" }) => {
//   return (
//     <div
//       className={`
//         w-full
//         max-w-[1440px] 2xl:max-w-[1680px]
//         mx-auto
//         px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-[42px]
//         ${className}
//       `.trim()}
//     >
//       {children}
//     </div>
//   )
// }

// export default Container;









const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full
        max-w-[1920px]
        mx-auto
        px-4
        md:px-20
        2xl:px-40.5
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default Container;