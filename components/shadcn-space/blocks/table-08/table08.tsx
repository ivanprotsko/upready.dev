'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table'
import { EllipsisVertical } from 'lucide-react'

const Table08 = () => {
  const dropdownItems = ['Action', 'Another action', 'Something else']

  const TableData = [
    {
      imgBg: 'bg-sky-400/10',
      img: 'https://images.shadcnspace.com/assets/svgs/icon-materialM.svg',
      leadname: 'MaterialM - Admin',
      subtext: 'Dashboard Template',
      statustext: 'Mobile',
      statuscolor: 'bg-sky-400/10 text-sky-400',
      sales: '2,350',
      earnings: '$24,235',
      techicon: [
        {
          id: 1,
          icon: 'https://images.shadcnspace.com/assets/svgs/icon-photoshop.svg',
        },
      ],
    },
    {
      imgBg: 'bg-blue-500/10',
      img: 'https://images.shadcnspace.com/assets/svgs/icon-matdash.svg',
      leadname: 'MatDash - Admin',
      subtext: 'Dashboard Template',
      statustext: 'Web App',
      statuscolor: 'bg-teal-400/10 text-teal-400',
      sales: '1,630',
      earnings: '$13,699',
      techicon: [
        {
          id: 1,
          icon: 'https://images.shadcnspace.com/assets/svgs/icon-figma.svg',
        },
        {
          id: 2,
          icon: 'https://images.shadcnspace.com/assets/svgs/icon-vue.svg',
        },
      ],
    },
    {
      imgBg: 'bg-teal-400/10',
      img: 'https://images.shadcnspace.com/assets/svgs/icon-spike.svg',
      leadname: 'Spike - Admin',
      subtext: 'Dashboard Template',
      statustext: 'Website',
      statuscolor: 'bg-blue-500/10 text-blue-500',
      sales: '480',
      earnings: '$13,699',
      techicon: [
        {
          id: 1,
          icon: 'https://images.shadcnspace.com/assets/svgs/icon-xd.svg',
        },
        {
          id: 2,
          icon: 'https://images.shadcnspace.com/assets/svgs/icon-bootstrap.svg',
        },
      ],
    },
    {
      imgBg: 'bg-amber-300/10',
      img: 'https://images.shadcnspace.com/assets/svgs/icon-modernize.svg',
      leadname: 'Modernize - Admin',
      subtext: 'Dashboard Template',
      statustext: 'Marketing',
      statuscolor: 'bg-red-500/10 text-red-500',
      sales: '874',
      earnings: '$10,250',
      techicon: [
        {
          id: 1,
          icon: 'https://images.shadcnspace.com/assets/svgs/icon-angular.svg',
        },
      ],
    },
    {
      imgBg: 'bg-red-500/10',
      img: 'https://images.shadcnspace.com/assets/svgs/icon-materialpro.svg',
      leadname: 'MaterialPro - Admin',
      subtext: 'Dashboard Template',
      statustext: 'SSM',
      statuscolor: 'bg-amber-300/10 text-amber-300',
      sales: '3715',
      earnings: '$36,400',
      techicon: [
        {
          id: 1,
          icon: 'https://images.shadcnspace.com/assets/svgs/icon-nextjs.svg',
        },
        {
          id: 2,
          icon: 'https://images.shadcnspace.com/assets/svgs/icon-javascript.svg',
        },
      ],
    },
  ]

  return (
    <>
      <div className='lg:py-20 sm:py-16 py-8 max-w-4xl mx-auto'>
        <Card className='w-full max-w-3xl mx-auto p-6'>
          <div className='flex items-center justify-between'>
            <h5 className='text-lg font-semibold text-foreground'>Top Performing Products</h5>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className='outline-none'>
                  <span className='h-9 w-9 flex justify-center items-center rounded-full hover:bg-accent hover:text-accent-foreground cursor-pointer'>
                    <EllipsisVertical  size={22}/>
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {dropdownItems.map((items, index) => {
                    return (
                      <DropdownMenuItem key={index} className='font-normal cursor-pointer'>{items}</DropdownMenuItem>
                    )
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className='overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow className='hover:bg-transparent'>
                  <TableHead className='font-semibold text-sm'>
                    Product Name
                  </TableHead>
                  <TableHead className='font-semibold text-sm'>
                    Category
                  </TableHead>
                  <TableHead className='font-semibold text-sm'>
                    Sales
                  </TableHead>
                  <TableHead className='font-semibold text-sm'>
                    Earnings
                  </TableHead>
                  <TableHead className='font-semibold text-sm text-end'>
                    Technology
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TableData.map((item, index) => (
                  <TableRow key={index} className='border-0 hover:bg-transparent'>
                    <TableCell className='whitespace-nowrap ps-0 px-4 py-3'>
                      <div className='flex gap-3 items-center'>
                        <div
                          className={`h-14 w-14 rounded-md flex justify-center items-center ${item.imgBg}`}>
                          <img
                            src={item.img}
                            alt='icon'
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className='text-[15px]'>
                          <h6 className='text-[15px] font-normal text-foreground'>{item.leadname}</h6>
                          <p className='text-[15px] font-normal text-foreground'>{item.subtext}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`font-semibold ${item.statuscolor}`}>
                        {item.statustext}
                      </Badge>
                    </TableCell>
                    <TableCell className='font-normal text-foreground/80'>
                      {item.sales}
                    </TableCell>
                    <TableCell className='font-normal text-foreground/80'>
                      {item.earnings}
                    </TableCell>
                    <TableCell className='pe-0 text-end'>
                      <div className='flex gap-2 items-center justify-end'>
                        {item.techicon.map((logo, i) => (
                          <img
                            src={logo.icon}
                            alt='icon'
                            key={i}
                            width={24}
                            height={24}
                          />
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Table08
