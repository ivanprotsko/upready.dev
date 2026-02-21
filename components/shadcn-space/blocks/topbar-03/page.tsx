"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Bell, Globe, LucideIcon, Menu, Moon } from "lucide-react"
import LanguageDropdown from "@/components/shadcn-space/blocks/topbar-03/dropdown-language"
import ProfileDropdown from "@/components/shadcn-space/blocks/topbar-03/dropdown-profile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "@/components/ui/accordion"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import NavData from "@/components/shadcn-space/blocks/topbar-03/data"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"


function Sidebar({ onLinkClick }: { onLinkClick?: () => void }) {
    return (
        <nav className="space-y-1 px-4">
            <Accordion className="w-full">
                {NavData.map((group) => {
                    const hasChildren = Array.isArray(group.items) && group.items.length > 0
                    const GroupIcon = group.icon

                    // SINGLE LINK ITEM
                    if (!hasChildren && group.href) {
                        return (
                            <a
                                key={group.label}
                                href={group.href}
                                onClick={onLinkClick}
                                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-normal
                           hover:bg-accent hover:text-foreground"
                            >
                                <GroupIcon size={16} />
                                <span>{group.label}</span>
                            </a>
                        )
                    }

                    // ACCORDION GROUP
                    return (
                        <AccordionItem
                            key={group.label}
                            value={group.label}
                            className="border-none"
                        >
                            <AccordionTrigger
                                id={`accordion-trigger-${group.label}`}
                                className="flex items-center gap-2 px-2 py-2 text-sm
                           hover:no-underline cursor-pointer"
                                suppressHydrationWarning
                            >
                                <div className="flex items-center gap-2">
                                    <GroupIcon size={16} />
                                    <span className="tracking-normal!">{group.label}</span>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="pl-4" suppressHydrationWarning>
                                <div className="space-y-1">
                                    {group.items?.map((item: any) => {
                                        const ItemIcon = item.icon
                                        return (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                onClick={onLinkClick}
                                                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm
                                     hover:bg-accent hover:text-foreground no-underline!"
                                            >
                                                <ItemIcon size={14} />
                                                <span>{item.label}</span>
                                            </a>
                                        )
                                    })}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </nav>
    )
}


function NavDropdown({
    label,
    icon: Icon,
    items,
}: {
    label: string
    icon: LucideIcon
    items: { label: string; icon: LucideIcon; href: string }[]
}) {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger
                className="
          gap-2 rounded-lg border border-transparent
          hover:bg-accent
          data-[state=open]:border-muted
          data-[state=open]:bg-accent cursor-pointer
        "
            >
                <Icon size={16} />
                <span className="text-sm">{label}</span>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="min-w-48 p-1">
                <ul className="space-y-1">
                    {items.map((item) => {
                        const ItemIcon = item.icon
                        return (
                            <li key={item.label}>
                                <NavigationMenuLink
                                    render={
                                        <a
                                            href={item.href}
                                            className="flex items-left gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-foreground"
                                        >
                                            <div className="flex items-center gap-2">
                                                <ItemIcon size={16} />
                                                <span>{item.label}</span>
                                            </div>
                                        </a>
                                    }
                                />
                            </li>
                        )
                    })}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}


function NavButton({
    label,
    icon: Icon,
}: {
    label: string
    icon: LucideIcon
}) {
    return (
        <Button variant="ghost" className="gap-2 rounded-lg">
            <span className="flex items-center gap-2">
                <Icon size={16} />
                <span className="text-sm">{label}</span>
            </span>
        </Button>
    )
}

/* -------------------------- PAGE --------------------------*/

export default function Page() {
    const [sheetOpen, setSheetOpen] = useState(false)
    const BREAKPOINT = 1024

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= BREAKPOINT) {
                setSheetOpen(false)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return (
        <div className="min-h-screen bg-background">
            {/* HEADER */}
            <header className="sticky top-0 z-50 border-b bg-background">
                {/* TOP BAR */}
                <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                    {/* LEFT */}
                    <div className="flex items-center gap-3">
                        {/* Mobile Sidebar */}
                        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                            <SheetTrigger
                                id="mobile-sidebar-trigger-03"
                                className="lg:hidden"
                                render={
                                    <Button variant="ghost" size="icon" className="cursor-pointer">
                                        <Menu size={20} />
                                    </Button>
                                }
                            />

                            <SheetContent side="left" className="overflow-auto w-75!">
                                <VisuallyHidden>
                                    <SheetTitle>customizer</SheetTitle>
                                </VisuallyHidden>
                                <a href="#" className="p-4 sticky top-0 bg-background z-10">
                                    <img
                                        src="https://images.shadcnspace.com/assets/logo/shadcnspace.svg"
                                        alt="logo"
                                        className="dark:hidden w-[160px] h-10"
                                    />
                                    <img
                                        src="https://images.shadcnspace.com/assets/logo/shadcnspace-white.svg"
                                        alt="logo"
                                        className="hidden dark:block w-[160px] h-10"
                                    />
                                </a>
                                <Sidebar onLinkClick={() => setSheetOpen(false)} />
                            </SheetContent>
                        </Sheet>

                        <a href="#">
                            <img
                                src="https://images.shadcnspace.com/assets/logo/shadcnspace.svg"
                                alt="logo"
                                className="dark:hidden w-[160px] h-10"
                            />
                            <img
                                src="https://images.shadcnspace.com/assets/logo/shadcnspace-white.svg"
                                alt="logo"
                                className="hidden dark:block w-[160px] h-10"
                            />
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className='flex items-center gap-2'>
                        <Moon size={16} className='cursor-pointer' />
                        <div className='relative cursor-pointer'>
                            <Bell size={16} className="ml-2" />
                            <div className='rounded-full absolute -right-1.5 -top-1.5 bg-red-400 text-[8px] px-1 py-0.4 flex justify-center items-center text-white'>2</div>
                        </div>
                        <LanguageDropdown
                            trigger={
                                <Button
                                    id="language-dropdown-trigger-03"
                                    variant='ghost'
                                    size='icon'
                                    className='focus-visible:ring-0! focus-visible:shadow-none! rounded-full! hover:bg-accent/80! cursor-pointer'
                                    suppressHydrationWarning
                                >
                                    <Globe size={16} />
                                </Button>
                            }
                        />
                        <ProfileDropdown
                            trigger={
                                <Button
                                    id="profile-dropdown-trigger-03"
                                    variant='ghost'
                                    size='icon'
                                    className='size-7 rounded-full cursor-pointer'
                                    suppressHydrationWarning
                                >
                                    <Avatar className='size-7 rounded-full'>
                                        <AvatarImage src='https://images.shadcnspace.com/assets/profiles/user-11.jpg' />
                                        <AvatarFallback>NJ</AvatarFallback>
                                    </Avatar>
                                </Button>
                            }
                        />
                    </div>
                </div>

                <div className="h-px w-full bg-border"/>

                {/* NAVIGATION BAR */}
                <div className="hidden lg:flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-0">
                            {NavData.map((item) => {
                                if (item.type === "dropdown") {
                                    return (
                                        <NavDropdown
                                            key={item.label}
                                            label={item.label}
                                            icon={item.icon}
                                            items={item.items}
                                        />
                                    )
                                }
                                return (
                                    <NavigationMenuItem key={item.label}>
                                        <NavigationMenuLink render={<NavButton label={item.label} icon={item.icon} />} />
                                    </NavigationMenuItem>
                                )
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button className="cursor-pointer">Login</Button>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="mx-auto max-w-7xl p-4 md:p-6">
                <div className="h-[500px] rounded-xl border border-border overflow-hidden" >
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={index}
                                className="skeleton bg-muted/50 aspect-video h-12 w-full rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
