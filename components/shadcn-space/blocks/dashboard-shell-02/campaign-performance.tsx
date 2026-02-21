'use client'

import React, { useRef } from 'react'
import { Separator } from '@/components/ui/separator'
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Card, CardTitle, CardHeader, CardContent, CardAction } from '@/components/ui/card'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Ellipsis } from 'lucide-react'

const DEFAULT_DROPDOWN_ITEMS = [
    { title: 'Action', link: '#' },
    { title: 'Another action', link: '#' },
    { title: 'Something else', link: '#' },
]

const DEFAULT_TRANS_DATA = [
    {
        img: 'https://images.shadcnspace.com/assets/socials/icon-instagram.svg',
        title: 'PayPal Transfer',
        country: '523 new leads',
        platform: 'Instagram',
        badgeData: "Running",
        badgeBG: "bg-teal-400/10"
    },
    {
        img: 'https://images.shadcnspace.com/assets/socials/icon-facebool.svg',
        title: 'Wallet',
        country: '5490 new followers',
        platform: 'Facebook',
        badgeData: "Running",
        badgeBG: "bg-teal-400/10"
    },
    {
        img: 'https://images.shadcnspace.com/assets/socials/icon-adwords.svg',
        title: 'Credit Card',
        country: '790 paid clicks',
        platform: 'Google Adwords',
        badgeData: "Paused",
        badgeBG: "bg-orange-400/10"
    },
    {
        img: 'https://images.shadcnspace.com/assets/socials/icon-youtube.svg',
        title: 'Bank Transfer',
        country: '2763 new Subscribers',
        platform: 'Youtube',
        badgeData: "Paused",
        badgeBG: "bg-orange-400/10"
    },
    {
        img: 'https://images.shadcnspace.com/assets/socials/icon-linkedin.svg',
        title: 'Refund',
        country: '5039 new followers',
        platform: 'Linkedin',
        badgeData: "Paused",
        badgeBG: "bg-orange-400/10"
    },
]

interface TransactionProps {
    img: string
    title: string
    country: string
    platform: string
    badgeData: string
    badgeBG: string
}

interface DropdownItemProps {
    title: string
    link?: string
}

interface WidgetProps {
    recentTransData?: TransactionProps[]
    dropdownItems?: DropdownItemProps[]
}

const CampaignPerformance = ({
    recentTransData = DEFAULT_TRANS_DATA,
    dropdownItems = DEFAULT_DROPDOWN_ITEMS,
}: WidgetProps) => {
    const ref = useRef(null)


    return (

        <Card className='w-full h-full'>
            <CardHeader className='flex items-center justify-between'>
                <CardTitle className='text-lg font-medium text-foreground'>
                    Campaign Performance
                </CardTitle>
                <CardAction>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='rounded-full hover:bg-accent cursor-pointer p-2'>
                            <Ellipsis width={16} height={16} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {dropdownItems.map((item, index) => (
                                <DropdownMenuItem key={index} className='font-normal cursor-pointer'>
                                    {item.link ? (
                                        <a href={item.link} className="w-full">
                                            {item.title}
                                        </a>
                                    ) : (
                                        <span className='w-full justify-start'>
                                            {item.title}
                                        </span>
                                    )}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardAction>
            </CardHeader>
            <CardContent className='px-0'>
                <div

                    className='flex flex-col gap-4'
                >
                    {recentTransData.map((item, index) => (
                        <React.Fragment key={index}>
                            <div
                                className='flex gap-3 items-center px-6'
                            >
                                <div
                                    className={cn(`flex justify-center items-center overflow-hidden p-3 rounded-xl outline outline-border`)}
                                >
                                    <img src={item.img} alt='icon' width={24} height={24} />
                                </div>
                                <div className="flex items-center justify-between flex-1">
                                    <div>
                                        <h5 className='text-base font-medium text-foreground'>{item.platform}</h5>
                                        <p className='text-sm font-normal tracking-wide text-muted-foreground'>
                                            {item.country}
                                        </p>
                                    </div>
                                    <Badge className={cn(`${item.badgeBG}`, "text-muted-foreground")}>
                                        {item.badgeData}
                                    </Badge>
                                </div>
                            </div>
                            {index < recentTransData.length - 1 && <Separator />}
                        </React.Fragment>
                    ))}
                </div>
            </CardContent>
        </Card>

    )
}

export default CampaignPerformance
