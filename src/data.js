// data.js
const notices = [
  //Sample Notice Data - donot remove this
  // {
  //   noticeName: "Workshop on Quantum Computing",
  //   date: "2025/02/24",
  //   time: "04:14 A.M",
  //   author: "Trinity Computer Council",
  //   description:
  //     "Join us for an exciting workshop on Quantum Computing, where we will explore the fundamentals of quantum mechanics and their applications in computation. Learn from experts and get hands-on experience with quantum programming.",
  //   links: [
  //     { name: "Google Form Link", link: "https://form.google.com" },
  //     { name: "Zoom Link", link: "https://zoom.com" },
  //     { name: "GitHub Repository", link: "https://github.com" },
  //   ],
  //   img: [
  //     "https://picsum.photos/seed/picsum/300/300",
  //     "https://picsum.photos/seed/picsum/300/300",
  //   ],
  // },
];

const members = [
  {
    name: "Arbin Shakya",
    post: "President",
    batch: "2080-2081",
    image: "https://randomuser.me/api/portraits/men/92.jpg", // Replace with actual image URL
    link: "https://www.facebook.com",
  },
  {
    name: "Aagya Tuladhar",
    post: "Vice-President",
    batch: "2080-2081",
    image: "https://randomuser.me/api/portraits/women/32.jpg", // Replace with actual image URL
    link: "https://www.facebook.com",
  },
  {
    name: "Gobinda Prasad Paudel",
    post: "Secretary",
    batch: "2080-2081",
    image: "/src/assets/members/gobinda.jpg", // Replace with actual image URL
    link: "https://www.facebook.com",
  },
  {
    name: "Kastha Suwal",
    post: "Vice-Secretary",
    batch: "2081-2082",
    image: "https://randomuser.me/api/portraits/women/32.jpg", // Replace with actual image URL
    link: "https://www.facebook.com",
  },
  {
    name: "Kastha Suwal",
    post: "Vice-Secretary",
    batch: "2079-2080",
    image: "https://randomuser.me/api/portraits/women/32.jpg", // Replace with actual image URL
    link: "https://www.facebook.com",
  },
  {
    name: "Kastha Suwal",
    post: "Vice-Secretary",
    batch: "2079-2080",
    image: "https://randomuser.me/api/portraits/women/32.jpg", // Replace with actual image URL
    link: "https://www.facebook.com",
  },
];

const magazineData = [
  {
    year: 2024,
    name: "Infinity Magazine",
    authors: ["Manish Adhikari", "Prasun Chapagain", "Bishesh Subedi"],
    clubs: ["Trinity Computer Council"],
    link: "https://www.trinity.edu.np/assets/backend/uploads/Publications/Infinity/Infinity Magazine 2024.pdf",
  },
  {
    year: 2023,
    name: "Infinity Magazine",
    authors: ["Dummy Data"],
    clubs: ["Trinity Computer Council"],
    link: "https://www.trinity.edu.np/assets/backend/uploads/Publications/Infinity/Infinity 2023_web.pdf",
  },
  {
    year: 2022,
    name: "Infinity Magazine",
    authors: ["Dummy Data"],
    clubs: ["Trinity Computer Council"],
    link: "https://www.trinity.edu.np/assets/backend/uploads/Publications/Infinity/INFINITY Magazine 2022 (1).pdf",
  },
  {
    year: 2021,
    name: "Infinity Magazine",
    authors: ["Dummy Data"],
    clubs: ["Trinity Computer Council"],
    link: "https://www.trinity.edu.np/assets/backend/uploads/Publications/Infinity/Infinity 2021.pdf",
  },
  {
    year: 2020,
    name: "Infinity Magazine",
    authors: ["Dummy Data"],
    clubs: ["Trinity Computer Council"],
    link: "/abcd",
  },
  {
    year: 2019,
    name: "Infinity Magazine",
    authors: ["Dummy Data"],
    clubs: ["Trinity Computer Council"],
    link: "https://www.trinity.edu.np/assets/backend/uploads/Publications/Infinity/Infinity2019.pdf",
  },
  {
    year: 2018,
    name: "Infinity Magazine",
    authors: ["Dummy Data"],
    clubs: ["Trinity Computer Council"],
    link: "https://www.trinity.edu.np/assets/backend/uploads/Publications/Infinity/Infinity2018.pdf",
  },
  {
    year: 2017,
    name: "Infinity Magazine",
    authors: ["Dummy Data"],
    clubs: ["Trinity Computer Council"],
    link: "https://www.trinity.edu.np/assets/backend/uploads/Publications/Infinity/Infinity2017.pdf",
  },
  {
    year: 2016,
    name: "Infinity Magazine",
    authors: ["Dummy Data"],
    clubs: ["Trinity Computer Council"],
    link: "https://www.trinity.edu.np/assets/backend/uploads/Publications/Trinity News/Newsletter 2016.pdf",
  },
  {
    year: 2015,
    name: "Infinity Magazine",
    authors: ["Dummy Data"],
    clubs: ["Trinity Computer Council"],
    link: "https://www.trinity.edu.np/assets/backend/uploads/Publications/Infinity/Infinity 2015.pdf",
  },
  {
    year: 2014,
    name: "Infinity Magazine",
    authors: ["Dummy Data"],
    clubs: ["Trinity Computer Council"],
    link: "https://www.trinity.edu.np/assets/backend/uploads/Publications/Infinity/Infinity 2014.pdf",
  },
];

const projects = [
  {
    projectName: "EduCare",
    description:
      "A revolutionary e-learning platform transforming digital education through interactive modules and AI-driven personalization.",
    involvedMembers: ["Ram", "Shyam"],
    image: "https://dummyimage.com/600x400/1f2537/fff&text=Educare",
  },
  // Add more projects as needed
];
const whatWeDo = [
  {
    title: "Battle with Codes",
    description:
      "An annual coding competition where students from Trinity Internaitonal School and College participate to showcase their coding skills.",
  },
  {
    title: "Infinity Magazine",
    description:
      "An annual publication by the Trinity Computer Council showcasing the latest trends in technology and computer science.",
  },
  {
    title: "Workshops and Seminars",
    description:
      "We conduct regular workshops and seminars on various topics to enhance the skills of students.",
  },
  // Add more items
];

const achievements = [
  {
    title: "Trinity Intra College IT Exhibition 2025 Winner",
    project: "EduCare",
    description: "Awarded for innovative approach in educational technology",
    image: "../assets/trinity_it.jpg",
    date: "2081 Magh 16",
    links:
      "https://www.facebook.com/photo/?fbid=1015250983982491&set=pcb.1015252377315685",
  },
  {
    title: "Successfully Organised Battle with Codes 2025",
    project: "EduCare",
    description: "Awarded top competitive coder with various prizes",
    image:
      "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/476109371_1020879213419668_360045725501490852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=80vTpa-Y7O8Q7kNvgFXRCVe&_nc_oc=Adhd0J67hbslTe_53fgo3tZixRI1mXOYMn0zQf9U3VUtts-MPtiMYTrlgEgUUaV7b8W6OLmZQ9SuxEntXOKLsPAm&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=AaQ2f4T_dHkai07lVplbs09&oh=00_AYBKiEiRLNgAdby9ALNgKgVakAT1cLkKvE6gvZLMgVr9eA&oe=67C24FD0",
    date: "2081 Magh 16",
    links:
      "https://www.facebook.com/photo/?fbid=1020879210086335&set=a.556865476487713",
  },
];

const location = {
  address: "Dillibazar Height, Kathmandu, Nepal",
  phone: "+1 800 123 4567",
  email: "tcc@trinity.edu.np",
};
const DeveloperData = {
  name: "Gobinda Prasad Paudel",
  post: "Secretary",
  batch: "2080-2081",
  boards: "A-levels",
  link: [
    "https://www.gobindapoudel.com.np",
    "https://www.linkedin.com/in/gobinda-prasad-paudel-aa9485218/",
  ],
  image:
    "https://media.licdn.com/dms/image/v2/D5603AQGX1mGb8Spw1Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719627753232?e=1746057600&v=beta&t=qtgBV1PvyTxE2T1WM6x8ZDWPzfbAl890h0T3Sbx6mZI",
};
export {
  notices,
  magazineData,
  projects,
  location,
  achievements,
  whatWeDo,
  members,
  DeveloperData,
};
