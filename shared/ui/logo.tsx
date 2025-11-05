import Image from "next/image";

type Props = {
  width: number;
  height: number;
};

const Logo = (props: Props) => {
  const { width, height } = props;
  return (
    <Image
      src="/2.png"
      width={width}
      height={height}
      alt="Астера мој дом лого"
    />
  );
};

export default Logo;
