type LogoProps = React.SVGAttributes<SVGElement>;

const Logo = (props: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="60"
      viewBox="0 0 100 100"
    >
      <text
        x="50%"
        y="50%"
        fontFamily="Poppins, sans-serif"
        fontSize="40"
        fill="black"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        harke.
      </text>
    </svg>
  );
};

export { Logo };
