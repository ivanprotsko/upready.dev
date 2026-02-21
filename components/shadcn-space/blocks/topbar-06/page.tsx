import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import LanguageDropdown from '@/components/shadcn-space/blocks/topbar-06/dropdown-language'
import ProfileDropdown from '@/components/shadcn-space/blocks/topbar-06/dropdown-profile'
import Search from '@/components/shadcn-space/blocks/topbar-06/search'
import { Bell, Globe, Moon } from 'lucide-react'

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
                        <div className='mx-auto flex items-center justify-between gap-6 px-4 py-2.5 sm:px-6'>
                            <div className='flex items-center gap-4'>
                                <SidebarTrigger className='[&_svg]:size-5!' />
                                <Separator orientation='vertical' className='hidden h-4! sm:block self-center!' />
                                <a href="#" className="sticky top-0 bg-background z-10 block">
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
                            <div>
                                <Search />
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
                                            id="language-dropdown-trigger-06"
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
                                            id="profile-dropdown-trigger-06"
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
                            <div className="skeleton bg-muted/50 aspect-video h-12 w-full rounded-lg" />
                        </div>
                    </footer>

                </div>
            </SidebarProvider>
        </div>
    )
}

export default Header
