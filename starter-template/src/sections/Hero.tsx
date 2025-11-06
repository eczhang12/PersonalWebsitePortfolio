import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="relative py-32 md:py-48 lg:py-60 z-0 overflow-x-clip">
      {/* background grain */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
        > </div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/* sort these by size */}
        <HeroOrbit size={430} rotation={79} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="">
            <SparkleIcon className="size-5 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}shouldOrbit orbitDuration="33s">
            <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        
        <HeroOrbit size={530} rotation={178}shouldOrbit orbitDuration="36s">
            <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        
        <HeroOrbit size={550} rotation={20}shouldOrbit orbitDuration="39s" shouldSpin spinDuration="16s">
            <StarIcon className="size-12 text-emerald-300"></StarIcon>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}shouldOrbit orbitDuration="41s" shouldSpin spinDuration="13s">
            <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={-14}shouldOrbit orbitDuration="45s">
            <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}shouldOrbit orbitDuration="50s">
            <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        
        <HeroOrbit size={710} rotation={144}shouldOrbit orbitDuration="55s">
            <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}shouldOrbit orbitDuration="63s">
            <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        
        <HeroOrbit size={800} rotation={-72}shouldOrbit orbitDuration="70s" shouldSpin spinDuration="15s">
            <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
            priority
          />
          <div className="mt-6 inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="size-2.5 rounded-full bg-green-500 relative"> 
                <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>

        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            TODO Talking about something
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
