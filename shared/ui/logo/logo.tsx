import Image from "next/image";

type LogoProps = {
  width: number;
  height: number;
  src: string;
};

const Logo = ({ width, height, src }: LogoProps) => {

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt="Астера мој дом лого"
    />
  );
};

export default Logo;
