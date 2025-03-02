import { FiInstagram, FiGithub, FiYoutube } from "react-icons/fi";
import ParallaxText from "../components/ParallaxText";

const Hero = () => {
  return (
    <div className="px-32 magicpattern relative max-h-screen">
      <img
        src="src/assets/banyu_rpl.png"
        alt="me"
        className="pt-12 max-h-screen mx-auto"
      />
      <div className="flex absolute w-[calc(100%_-_256px)] justify-between top-1/4 text-xl">
        <ul className="grid gap-10">
          <ContainerOne>
            <PrimaryText>Full-Stack Web Developer</PrimaryText>
            <br />
            <SecondaryText>Based in Indonesia</SecondaryText>
          </ContainerOne>
          <li className="p-2 bg-gradient-to-r from-slate-300 to-transparent">
            <span className="text-lg font-semibold text-slate-600">
              Say hello to
            </span>
            <br />
            <span className="text-lg font-bold">banyuarfa1122@gmail.com</span>
          </li>
          <li className="flex gap-8 text-2xl">
            <a href="">
              <FiInstagram />
            </a>
            <a href="">
              <FiYoutube />
            </a>
            <a href="">
              <FiGithub />
            </a>
          </li>
        </ul>
        <ul className="text-right grid gap-5">
          <li className="p-2">
            <span className="text-2xl font-bold">50+</span>
            <br />
            <span className="text-lg font-semibold text-slate-600">
              Project Done
            </span>
          </li>
          <hr className="opacity-20" />
          <li className="p-2">
            <span className="text-2xl font-bold">1.5+</span>
            <br />
            <span className="text-lg font-semibold text-slate-600">
              Years Experience
            </span>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="text-[200px] flex text-white absolute z-40 bottom-0 -left-30 overflow-hidden">
        <ParallaxText baseVelocity={1}>Arfa Banyu Santoro —</ParallaxText>
      </div>
    </div>
  );
};

const PrimaryText = ({ children, className }) => (
  <span className={`text-xl font-bold ` + className}>{children}</span>
);
const SecondaryText = ({ children, className }) => (
  <span className={`text-lg font-semibold text-slate-600 ` + className}>
    {children}
  </span>
);
const ContainerOne = ({ children, className }) => (
  <li
    className={
      `p-2 bg-gradient-to-r from-slate-300 to-transparent ` + className
    }
  >
    {children}
  </li>
);
const ContainerTwo = ({ children, className }) => (
  <li
    className={
      `p-2 bg-gradient-to-r from-slate-300 to-transparent ` + className
    }
  >
    {children}
  </li>
);
export default Hero;
