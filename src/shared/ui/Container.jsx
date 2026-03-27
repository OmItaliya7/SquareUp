// Container.jsx
//
// Figma gutter system:
//   Mobile   390px  → 16px each side  → px-4
//   Tablet   768px  → 24px each side  → px-6
//   Laptop  1440px  → 80px each side  → xl:px-20
//   Desktop 1920px  → handled by max-w clamping
//
// Max widths:
//   Default → 1440px
//   2xl+    → 1620px

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full
        max-w-[1440px] 2xl:max-w-[1680px]
        mx-auto
        px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-10.5
        ${className}
      `.trim()}
    >
      {children}
    </div>
  )
}

export default Container











// const Container = ({ children, className = "" }) => {
//   return (
//     <div
//       className={`
//         w-full
//         mx-auto

//         /* Mobile → Tablet padding */
//         px-4
//         sm:px-6
//         md:px-10
//         lg:px-12

//         /* Laptop (1440 design frame) */
//         xl:max-w-[1440px]
//         xl:px-20

//         /* Between 1440 → 1919 (fluid breathing space) */
//         2xl:max-w-[1600px]
//         2xl:px-20

//         /* EXACT Desktop frame 1920 */
//         3xl:max-w-[1596px]
//         3xl:px-0

//         ${className}
//       `}
//     >
//       {children}
//     </div>
//   )
// }

// export default Container