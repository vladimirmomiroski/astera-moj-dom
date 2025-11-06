import Image from "next/image";

type PropsLogo = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: PropsLogo) => {

  return (
    <Image
      src="/logo1.png"
      width={width}
      height={height}
      alt="Астера мој дом лого"
    />
  );
};

export default Logo;
