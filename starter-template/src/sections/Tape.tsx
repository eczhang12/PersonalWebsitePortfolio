import StarIcon from "@/assets/icons/star.svg";

const words = [
    "TODO Fill in words here"
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
            <div className="flex">
                <div className="flex flex-none gap-4 py-3">
                    {words.map(word => (
                        <div key={word} className="inline-flex gap-4 items-center">
                            <span className="text-gray-900 uippercase font-extrabold text-sm">{word}</span>
                            <StarIcon className="size-6 text-gray-900 -rotate-12"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};
