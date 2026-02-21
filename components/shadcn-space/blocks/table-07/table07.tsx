'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const basicTable: any[] = [
  {
    avatar:
      'https://images.shadcnspace.com/assets/profiles/user-1.jpg',
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    status: 'Active',
    statuscolor: 'bg-teal-400/10 text-teal-400',
    teams: [
      {
        id: '1',
        color: 'bg-red-500',
        text: 'S',
      },
      {
        id: '2',
        color: 'bg-teal-400',
        text: 'D',
      },
    ],
    budget: '$3.9',
  },
  {
    avatar:
      'https://images.shadcnspace.com/assets/profiles/user-8.jpg',
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    status: 'Pending',
    statuscolor: 'bg-amber-300/10 text-amber-300',
    teams: [
      {
        id: '1',
        color: 'bg-teal-400',
        text: 'N',
      },
      {
        id: '2',
        color: 'bg-amber-300',
        text: 'X',
      },
      {
        id: '3',
        color: 'bg-blue-500',
        text: 'A',
      },
    ],
    budget: '$24.5k',
  },
  {
    avatar:
      'https://images.shadcnspace.com/assets/profiles/user-3.jpg',
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    status: 'Completed',
    statuscolor: 'bg-blue-500/10 text-blue-500',
    teams: [
      {
        id: '1',
        color: 'bg-teal-400',
        text: 'X',
      },
    ],
    budget: '$12.8k',
  },
  {
    avatar:
      'https://images.shadcnspace.com/assets/profiles/user-7.jpg',
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    status: 'Active',
    statuscolor: 'bg-teal-400/10 text-teal-400',
    teams: [
      {
        id: '1',
        color: 'bg-blue-500',
        text: 'X',
      },
      {
        id: '2',
        color: 'bg-red-500',
        text: 'Y',
      },
    ],
    budget: '$2.4k',
  },
  {
    avatar:
      'https://images.shadcnspace.com/assets/profiles/user-5.jpg',
    name: 'Micheal Doe',
    post: 'Content Writer',
    pname: 'Helping Hands WP Theme',
    status: 'Cancel',
    statuscolor: 'bg-red-500/10 text-red-500',
    teams: [
      {
        id: '1',
        color: 'bg-sky-400',
        text: 'S',
      },
    ],
    budget: '$9.3k',
  },
]

const Table02 = () => {
  return (
    <div className='lg:py-20 sm:py-16 py-8 max-w-4xl mx-auto'>
      <Card className='max-w-4xl w-full rounded-md border-0 py-2 px-2 overflow-hidden'>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow className='hover:bg-transparent!'>
                <TableHead className='text-base'>User</TableHead>
                <TableHead className='text-base'>Project Name</TableHead>
                <TableHead className='text-base'>Team</TableHead>
                <TableHead className='text-base'>Status</TableHead>
                <TableHead className='text-base'>Budget</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {basicTable.map((item, index) => (
                <TableRow
                  key={index}
                  className='group/row bg-transparent odd:bg-transparent even:bg-accent/50 dark:odd:bg-dark dark:even:bg-accent/50 '>
                  <TableCell className='whitespace-nowrap'>
                    <div className='flex gap-3 items-center'>
                      <img
                        src={item.avatar}
                        alt='icon'
                        className='h-10 w-10 rounded-full'
                        width={40}
                        height={40}
                      />
                      <div className='truncate line-clamp-2 max-w-56'>
                        <h6 className='text-base! font-medium!'>{item.name}</h6>
                        <p className='text-sm text-muted-foreground'>
                          {item.post}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className='whitespace-nowrap'>
                    <p className='text-sm! font-normal!'>{item.pname}</p>
                  </TableCell>

                  <TableCell className='whitespace-nowrap'>
                    <div className='flex'>
                      {item.teams.map((teamtbl: any, index: number) => (
                        <div className='-ms-2' key={index}>
                          <div
                            className={`${teamtbl.color} text-white border-2 border-border h-10 w-10 flex justify-center items-center text-xl font-medium rounded-full`}>
                            {teamtbl.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TableCell>

                  <TableCell className='whitespace-nowrap'>
                    <Badge
                      className={`text-xs font-medium ${item.statuscolor}`}>
                      {item.status}
                    </Badge>
                  </TableCell>

                  <TableCell className='whitespace-nowrap'>
                    <h6 className='text-base! font-normal!'>{item.budget}</h6>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}

export default Table02
