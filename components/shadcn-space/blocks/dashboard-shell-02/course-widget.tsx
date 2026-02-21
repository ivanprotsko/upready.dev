'use client'

import { Card, CardContent } from '@/components/ui/card'


const userImg = [
    {
        user: 'https://images.shadcnspace.com/assets/profiles/user-4.jpg',
    },
    {
        user: 'https://images.shadcnspace.com/assets/profiles/user-2.jpg',
    },
    {
        user: 'https://images.shadcnspace.com/assets/profiles/user-3.jpg',
    },
]

const CourseWidget = () => {
    return (

        <Card className='p-0  gap-5  h-full w-full '>
            {/* Top Image Animation */}
            <div>

                <img
                    src={
                        'https://images.shadcnspace.com/assets/blog/blog-img12.jpg'
                    }
                    alt='matdash'
                    height={220}
                    width={500}
                    className='rounded-t-xl w-full '
                />
            </div>

            {/* Content Area */}
            <CardContent className='p-6 pt-6'>
                {/* Title + Text fade stagger */}
                <div
                >
                    <h6

                        className='text-lg font-semibold text-foreground'>
                        Figma tips and tricks with Stephan
                    </h6>

                    <p

                        className='text-sm font-medium text-muted-foreground mt-2'>
                        Nullam lobortis sodales dolor vitae viverra.
                        <br />
                        Cras lacinia bibendum metus vel rhoncus.
                    </p>
                </div>

                {/* Avatar Group Animation */}
                <div
                    className='flex mt-8'
                >
                    {userImg.map((item, index) => (
                        <div
                            key={index}

                            className='-ms-2 h-10 w-10'>
                            <img
                                src={item.user}
                                className='outline-2 outline-background rounded-full'
                                alt='icon'
                                width={44}
                                height={44}
                            />
                        </div>
                    ))}


                    <div

                        className='-ms-2'>
                        <div className='bg-primary-foreground outline-2 outline-background h-10 w-10 flex justify-center items-center text-foreground rounded-full text-base font-medium'>
                            +4
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

    )
}

export default CourseWidget
