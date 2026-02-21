"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import LanguageDropdown from '@/components/shadcn-space/blocks/topbar-05/dropdown-language'
import ProfileDropdown from '@/components/shadcn-space/blocks/topbar-05/dropdown-profile'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import NavData from '@/components/shadcn-space/blocks/topbar-05/data'
import { Bell, Globe, Icon, LucideIcon, Moon } from 'lucide-react'


function NavDropdown({
    label,
    Icon,
    items,
}: {
    label: string
    Icon: LucideIcon
    items: { label: string; icon: LucideIcon; href: string }[]
}) {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger
                className="gap-2 rounded-lg border border-transparent bg-transparent! cursor-pointer">
                <Icon size={16} />
                <span className="text-sm">{label}</span>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="min-w-48 p-1">
                <ul className="space-y-1">
                    {items.map((item) => (
                        <li key={item.label}>
                            <NavigationMenuLink
                                render={
                                    <a
                                        href={item.href}
                                        className="flex items-left gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-foreground"
                                    >
                                        <div className="flex items-center gap-2">
                                            <item.icon size={16} />
                                            <span>{item.label}</span>
                                        </div>
                                    </a>
                                }
                            />
                        </li>
                    ))}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}


function NavButton({
    label,
    Icon,
}: {
    label: string
    Icon: LucideIcon
}) {
    return (
        <div className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors rounded-lg cursor-pointer">
            <Icon size={16} />
            <span className="text-sm">{label}</span>
        </div>
    )
}

const Header = () => {
    return (
        <div className='flex min-h-dvh w-full'>
            <SidebarProvider>
                <Sidebar>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div
                                key={index}
                                className="skeleton bg-muted/50 aspect-video h-10 w-full rounded-lg"
                            />
                        ))}
                    </div>
                </Sidebar>
                <div className='flex flex-1 flex-col'>
                    <header className='bg-card sticky top-0 z-50 border-b'>
                        <div className='mx-auto flex items-center justify-between gap-6 px-4 py-2 sm:px-6'>
                            <div className='flex items-center gap-4'>
                                <SidebarTrigger className='[&_svg]:size-5!' />
                                <Separator orientation='vertical' className='hidden h-4! sm:block self-center!' />
                                <div className="hidden lg:flex items-center justify-between">
                                    <NavigationMenu>
                                        <NavigationMenuList className="space-x-0">
                                            {NavData.map((item) => {
                                                if (item.type === "dropdown") {
                                                    return (
                                                        <NavDropdown
                                                            key={item.label}
                                                            label={item.label}
                                                            Icon={item.icon}
                                                            items={item.items}
                                                        />
                                                    )
                                                }
                                                return (
                                                    <NavigationMenuItem key={item.label}>
                                                        <NavigationMenuLink
                                                            render={
                                                                <a
                                                                    href="#"
                                                                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors"
                                                                >
                                                                    <item.icon size={16} />
                                                                    <span className="text-sm">{item.label}</span>
                                                                </a>
                                                            }
                                                        />
                                                    </NavigationMenuItem>
                                                )
                                            })}
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                </div>
                            </div>
                            <div className='flex items-center gap-2.5'>
                                <Moon size={16} className='cursor-pointer' />
                                <div className='relative cursor-pointer'>
                                    <Bell size={16} className="ml-2" />
                                    <div className='rounded-full absolute -right-1.5 -top-1.5 bg-red-400 text-[8px] px-1 py-0.4 flex justify-center items-center text-white'>2</div>
                                </div>
                                <LanguageDropdown
                                    trigger={
                                        <Button
                                            id="language-dropdown-trigger-05"
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
                                            id="profile-dropdown-trigger-05"
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
                    </header>
                    <main>
                        <div className="flex flex-1 flex-col gap-4 p-4">
                            {Array.from({ length: 9 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="skeleton bg-muted/50 aspect-video h-11 w-full rounded-lg"
                                />
                            ))}
                        </div>
                    </main>

                    <footer className="bg-card h-10 border-t">
                        <div className="flex flex-1 flex-col gap-4 p-4">
                            <div className="skeleton bg-muted/50 aspect-video h-14 w-full rounded-lg" />
                        </div>
                    </footer>

                </div>
            </SidebarProvider>
        </div>
    )
}

export default Header
