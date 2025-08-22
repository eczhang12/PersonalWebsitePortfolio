import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";


const toolboxItems = [
    {
        title: 'javaScript',
        iconType: JavascriptIcon,
    },
    {
        title: 'GitHub',
        iconType: GithubIcon,
    },
    {
        title: 'React',
        iconType: ReactIcon,
    },
    {
        title: 'HTML',
        iconType: HTMLIcon,
    },

];

const hobbies = [
    {
        title: 'Basketball',
        emoji: '',
        left: '5%',
        top: '5%',
    },
    {
        title: 'Volleyball',
        emoji: '',
        left: '50%',
        top: '5%',
    },
    {
        title: 'Photography',
        emoji: '',
        left: '10%',
        top: '35%',
    },
    {
        title: 'Learning',
        emoji: '',
        left: '35%',
        top: '45%',
    },
    {
        title: 'Fitness',
        emoji: '',
        left: '45%',
        top: '70%',
    },
]



export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
        <div className="container">
            <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="TODO" />
            <div className="mt-20 flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                        <CardHeader title="" description="" />
                        <div className="w-40 mx-auto mt-8">
                            <Image src={bookImage} alt= "Book cover"></Image>
                        </div>
                        
                    </Card>
                    <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                        <CardHeader className = "px-6 pt-6" title="My Toolbox" description="My tools for skills and stuff" />
                        <ToolboxItems items={toolboxItems} className="mt-6" />
                        <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2" />
                    </Card>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
                    <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
                        <CardHeader title="Beyond the Code" description="My hobbies and interests" className="px-6 py-6"/>
                        <div className="relative flex-1">
                            {hobbies.map(hobby => (
                                <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                                    left: hobby.left,
                                    top:hobby.top,
                                }}>
                                    <span className="font-medium text-gray-950">{hobby.title}</span>
                                    <span>{hobby.emoji}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                        <Image src={mapImage} alt="map" className="h-full w-fill object-cover object-left-top"></Image>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] afterLabsolute after:inset-0 afterLoutline after:outline2 after:-outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                            <Image src={smileMemoji} alt = "smiling Memoji" className="size-20 "/>
                        </div>
                        
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
};
