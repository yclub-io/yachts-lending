const teamData = [
  {
    fullName: "Denis Suka",
    nickName: "The Yacht Mogul",
    role: "Partner",
    avatarSrc: "images/team/avatar/denis_suka.png",
    socialNetworkImageSrc: "images/team/social_networks/instagram.svg",
    socialNetworkLink: "https://www.instagram.com/theyachtmogul/",
    pastProjectsLogosArr: ["./images/team/past_projects_logos/MY.png"],
    desc: "All passion and love for yachts and their ability to inspire people all around the world. A chosen “Influencial figure in the yachting world” by some of the press such as Forbes, CNN, BOAT, Robb Report.",
  },
  {
    fullName: "Deniz Karakurt",
    nickName: "TerpHeadRick",
    role: "Community Manager",
    avatarSrc: "./images/team/avatar/deniz_karakurt.png",
    desc: "Have been in crypto since 2019 and first got into Discord and community building/managing for stock signals groups. Naturally as I got more into crypto I shifted into that and haven’t looked back since.",
  },
  {
    fullName: "Valentina Tronova",
    nickName: "ValTron",
    role: "Creative Director",
    avatarSrc: "images/team/avatar/valentina_tronova.png",
    pastProjectsLogosArr: ["./images/team/past_projects_logos/Netflix.png"],
    desc: "Creative mastermind! She is the best there is in our eyes and we love what she does. She was the screen writer for Major Grom: Plague Doctor that reached the TOP 10 movies on Netflix in the World in 2021.",
  },
  {
    fullName: "Yuval Hollander",
    nickName: "Mega Skipper",
    role: "Campaign Manager",
    avatarSrc: "images/team/avatar/yuval_hollander.png",
    socialNetworkImageSrc: "images/team/social_networks/linkedin.svg",
    socialNetworkLink: "https://www.linkedin.com/in/yuvalhollander/",
    pastProjectsLogosArr: [
      "./images/team/past_projects_logos/Nike.png",
      "./images/team/past_projects_logos/IBM.png",
      "./images/team/past_projects_logos/Intel.png",
    ],
    desc: "Ex VP of digital in largest Israeli advertising agency with 25 years of experience in online advertising.",
  },
  {
    fullName: "Kennyatta Collins",
    nickName: "Polo Marco",
    role: "Brand Strategists & Communications",
    avatarSrc: "images/team/avatar/kennyatta_collins.jpeg",
    socialNetworkImageSrc: "images/team/social_networks/linkedin.svg",
    socialNetworkLink: "https://www.linkedin.com/in/kennyattacollins11/",
    pastProjectsLogosArr: [
      "./images/team/past_projects_logos/Diesel.png",
      "./images/team/past_projects_logos/CC.png",
    ],
    desc: "Photographer and Strategist, with over 5 years of helping brands strengthen their communications, communities, and lifestyle experiences.",
  },
  {
    fullName: "Anastasiia Panchenko",
    nickName: "Carrara",
    role: "UI/UX",
    avatarSrc: "images/team/avatar/anastasiia_panchenko.png",
    socialNetworkImageSrc: "images/team/social_networks/linkedin.svg",
    socialNetworkLink: "https://www.linkedin.com/in/anastasiia-panchenko",
    pastProjectsLogosArr: ["./images/team/past_projects_logos/YCLUB.png"],
    desc: "Years of experience specializing in designing web & mobile apps, websites and admin portals. Believes that design is not about beautiful pixels but about solving problems & achieving business and user goals.",
  },
  {
    fullName: "Michael Lawrence",
    nickName: "Blade",
    role: "Advisor",
    avatarSrc: "images/team/avatar/michael_lawrence.jpeg",
    socialNetworkImageSrc: "images/team/social_networks/linkedin.svg",
    socialNetworkLink: "https://www.linkedin.com/in/michaellawrence319",
    pastProjectsLogosArr: [
      "./images/team/past_projects_logos/DirectLiquidation.png",
    ],
    desc: "Engineered for several Fortune 500 companies in a variety of technology related roles while building his website into the top 1000 most visited websites in the world.",
  },
  {
    fullName: "Ber Mitchell",
    nickName: "Cobra",
    role: "Product Advisor",
    avatarSrc: "images/team/avatar/ber_mitchell.jpeg",
    socialNetworkImageSrc: "images/team/social_networks/linkedin.svg",
    socialNetworkLink: "https://www.linkedin.com/in/bermitchell",
    pastProjectsLogosArr: [
      "./images/team/past_projects_logos/Vipoutlet.png",
      "./images/team/past_projects_logos/GoTRG.png",
      "./images/team/past_projects_logos/DirectLiquidation.png",
    ],
    desc: "22 years of online marketing experience helping brands launch and scale while generating over a billion dollars in sales for some of the world's retail giants.",
  },
  {
    fullName: "David Shnaiderman",
    nickName: "De Vinchi",
    role: "Financial Analyst",
    avatarSrc: "images/team/avatar/david_shnaiderman.jpeg",
    socialNetworkImageSrc: "images/team/social_networks/linkedin.svg",
    socialNetworkLink: "https://www.linkedin.com/in/david-shnaiderman-81172111",
    desc: "Over 10 years of consulting & building working relationships between customers and their brand partners. Through years of experience in banking, and financial services, managed to institute financial systems to strengthen portfolio health.",
  },
  {
    fullName: "Sagi Mazur",
    nickName: "Poseidon",
    role: "Co-Founder / COO",
    avatarSrc: "images/team/avatar/sagi_mazur.png",
    desc: "Chief Operations Officer in many successful start ups. I always say there is no bad business there is a bad operation.",
  },
  {
    nickName: "CryptoDon",
    role: "Advisor",
    desc: "Early investor in many projects like BAYC and in the ethereum blockchain. Dedicated curator in owned Web3 investment communities.",
  },
  {
    fullName: "Shumov Roman",
    nickName: "SHR",
    role: "Art Director (NFT)",
    avatarSrc: "images/team/avatar/shumov_roman.jpg",
    desc: "Digital Art artist | Grafic designer | Matte Painting | CGI designer. Digital is a partner of the leading retail chains of household appliances in the Russian Federation. CGI designer in the film industry / video games for consoles and PC.",
  },
  {
    nickName: "David",
    role: "CG Artist",
    desc: "Our genius responsible for visual effects.",
  },
  {
    nickName: "IT",
    role: "Full Stack Web3 Developer",
    desc: "Web3 Developer, IT has been developing code since he remembers himself.",
  },
  {
    nickName: "Gypspatonik",
    role: "Executive producer",
    desc: "Former Head of TV production department, Executive producer Previous Clients: AliExpress, Ford, GSK, Unilever, Sony, Nutricia, Bayer, Harley-Davidson, Danone",
  },
  {
    nickName: "Nodia",
    role: "Art Director (video)",
    desc: "Art director and photographer. Worked at WayRay AG and Claustrophobia, worked with BBDO, Leo Burnett, Instinct, Fetish Film, Hype Production.",
  },
  {
    nickName: "Never Sleeper",
    role: "Developers / Designers Team Lead",
    desc: "The non human who manages the teams 24/7. We can’t figure out where he has the energy from but we know its not from this planet.",
  },
  {
    nickName: "Neptune",
    role: "Co-Founder",
    desc: "Basically born on a Super Yacht, years of experience in helping to curate and market extravagant experiences for those chartering these vessels of extravagance.",
  },
];

export default teamData;
