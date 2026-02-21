import Team, { team } from "@/components/shadcn-space/blocks/team-05/team";

const Team05 = () => {
    const teamData: team[] = [
        {
           id: '01',
           img: 'https://images.shadcnspace.com/assets/team/team-5-img-1.jpg',
           since: '2010',
           name: "Kimberly Mastrangelo",
           position: "Senior Sales Manager",
           sale: 52,
           rent: 389,
           stats: [
            '2590+ Buyers Served',
            '30 Verified Properties',
            '48 New Listings This Month'
           ]
        },
        {
           id: '02',
           img: 'https://images.shadcnspace.com/assets/team/team-5-img-2.jpg',
           since: '2014',
           name: "Eleanor Rigby",
           position: "Sales Manager",
           sale: 39,
           rent: 485,
           stats: [
            '6590+ Buyers Served',
            '63 Verified Properties',
            '60 New Listings This Month'
           ]
        },
        {
           id: '03',
           img: 'https://images.shadcnspace.com/assets/team/team-5-img-3.jpg',
           since: '2018',
           name: "Jane Willow",
           position: "Real Estate Broker",
           sale: 14,
           rent: 49,
           stats: [
            '870+ Buyers Served',
            '12 Verified Properties',
            '18 New Listings This Month'
           ]
        },
        {
           id: '04',
           img: 'https://images.shadcnspace.com/assets/team/team-5-img-4.jpg',
           since: '2019',
           name: "Billy Shears",
           position: "Associate Broker",
           sale: 92,
           rent: 730,
           stats: [
            '9940+ Buyers Served',
            '105 Verified Properties',
            '409 New Listings This Month'
           ]
        }
    ]

  return (
    <>
      <Team teamData={teamData}/>
    </>
  );
};

export default Team05;