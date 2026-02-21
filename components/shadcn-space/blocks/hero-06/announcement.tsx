import { ArrowRight } from "lucide-react"

export default function Announcement() {
    return (
        <div>
            <div className="group relative bg-gray-950 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full bg-[url('https://images.shadcnspace.com/assets/backgrounds/announcementbar-bg.jpg')] bg-cover bg-center bg-no-repeat" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
                    <div className="py-2 flex items-center justify-center gap-2">
                        <p className="text-sm sm:text-base text-white">My new tool is now available on Figma & Code — start customizing your personal site today.</p>
                        <ArrowRight width={24} height={24} className="text-white group-hover:translate-x-1.5 transition-all duration-500 ease-in-out" />
                    </div>
                </div>
            </div>
        </div>
    )
}