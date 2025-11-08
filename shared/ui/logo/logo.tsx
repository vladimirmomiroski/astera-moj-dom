import Image from "next/image";

type LogoProps = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: LogoProps) => {

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
