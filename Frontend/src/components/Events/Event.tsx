import { Button } from "@/components/ui/button"; // Import ShadCN button
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Events/carousel";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
  FAST_DIALOG_TRANSITION,
} from "@/components/Events/morphing-dialog";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/Events/hover-card";
import { PlusIcon } from "lucide-react";

import { ScrollArea } from "@/components/Events/scroll-area";

import eventData from "@/components/Events/eventData.json";
import { BorderTrail } from "@/components/Events/border-trail";

export function BorderTrailHr() {
  return (
    <div className="relative h-[4px] w-full max-w-[1200px] mx-auto overflow-hidden ">
      {/* Background line base */}
      <div className="absolute inset-0 " />

      {/* Animated border trail */}
      <BorderTrail
        className="bg-gradient-to-r from-blue via-blue-500 to-blue"
        size={1300}
      />
    </div>
  );
}

// Team members data
const activeEvent = [
  {
    name: "Active Event",
    eventname: "event name",
    date: "dd/mm/yy",
    location: "location",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolorLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor",
    type: "Hackathon/Workshop/Fest",
  },
  {
    name: "Upcoming Event",
    eventname: "event name",
    date: "dd/mm/yy",
    deadline: "last date",
    location: "location",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolorLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor",
    type: "Hackathon/Workshop/Fest",
  },

  {
    name: "Past Event",
    name1: "(Main Board)",
    year: "2023-24",
  },
  {
    name: "DSA Workshop! ",
    detail: "What an incredible experience! Our Code Club just wrapped up a power-packed Data Structures and Algorithms (DSA) workshop, designed especially for 2nd-year students eager to sharpen their coding skills. 💻✨Our two expert speakers from within the club Nasir Nadaf and Vikas Budhyal did a phenomenal job breaking down complex concepts into actionable knowledge, delivering a session filled with insightful tips and real- world problem - solving strategies.The students were fully engaged, asking great questions, and diving deep into algorithmic thinking. 🧠💡The energy in the room was contagious, and it’s inspiring to see how much potential these young coders have! This is just the beginning—more workshops, more learning, and more coding success stories to come. 🚀🔥A massive shoutout to our brilliant speakers and everyone who participated! 🙌 Stay tuned for more events as we continue to build a collaborative and innovative tech community. 👩‍💻👨‍💻",
    image1:
      "https://media.licdn.com/dms/image/v2/D4D22AQHSN6gx-bKRFA/feedshare-shrink_1280/feedshare-shrink_1280/0/1726663683655?e=1746057600&v=beta&t=1O01rHIneJtSo32wVLp_xPUmtls1yPOPGh5HsAyM2m8",
    image2:
      "https://media.licdn.com/dms/image/v2/D4D22AQFPXs8rAnfC6g/feedshare-shrink_1280/feedshare-shrink_1280/0/1726663683265?e=1746057600&v=beta&t=-_ndn5kl3gvo09FPuiSaDByVKGXxlVwam84y5xuge6c",
    image3:
      "https://media.licdn.com/dms/image/v2/D4D22AQGoeE1b7F5DdQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1726663692077?e=1746057600&v=beta&t=bHQN6KJWq_JZ2fjrDnDn_811zdrVq5-aktiFZ00xuGE",
  },
  {
    name: "Launching The Code Club 🚀",
    detail: "This is 2022 we started the new phase, officially launching the Code Club at A G Patil Institute of Technology ! 🎉 Our mission is to create a thriving community of passionate coders, innovators, and problem-solvers who will shape the future of technology. 💻✨With the support of our incredible team, faculty, and students, we aim to provide a platform for learning, collaboration, and hands-on experience in coding, development, and more. From workshops to real-world projects, our journey starts now! 💡🚀Special thanks to Dr. V V Potdar Sir ( Principal Sir ), Prof. Naresh Patil ( TPO sir ) and Shripad Kulkarni ( HOD Sir cse ) for their guidance and support in making this dream a reality. 🙏 A heartfelt thank you to our Founder + Ex-President Ketan Bhogshetti , and Ex-Vice President Sushmita Babanagare for their dedication and vision that brought this club to life. We are excited to embark on this journey and can’t wait to see what the future holds for the Code Club! Date - 13/5/2023",
    image1:
      "https://media.licdn.com/dms/image/v2/D4D22AQEh8GwpWnFRHQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1726827654950?e=1746057600&v=beta&t=fsFBsBgwDb4OCE790VD6LUCmGzEQR1LEDknn7KkRrCY",
    image2:
      "https://media.licdn.com/dms/image/v2/D4D22AQEO3BGNYxegZQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1726827655109?e=1746057600&v=beta&t=1IL9PKOXBnE4VFnbByGQRF-YtPrU84VBuZnbeoPLr9c",
    image3:
      "https://media.licdn.com/dms/image/v2/D4D22AQEh2hadSHZ3FQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726827655077?e=1746057600&v=beta&t=pUY-1Sp_7DhscFONe4H0msmsG9DhZ7ctsIGRBewflWQ",
  },
  {
    name: "JavaScript Workshop! ",
    detail: "We are thrilled to share that Code Club AGPIT has successfully conducted a comprehensive JavaScript workshop for 3rd-year CSE students! 🚀From understanding the fundamentals to exploring advanced concepts, our participants gained valuable insights into one of the most essential programming languages in the world today. 💻✨A huge thanks to our dedicated team Ketan Bhogshetti and Vivek Solapure and all the enthusiastic students who made this workshop a success. ",
    image1:
      "https://media.licdn.com/dms/image/v2/D4D22AQGtYsE292eZzA/feedshare-shrink_1280/feedshare-shrink_1280/0/1727344682900?e=1746057600&v=beta&t=Uo71H_rmMK7oV0Zv3-VBn9yCf-ce6-SdKT0osQ4uBa8",
    image2:
      "https://media.licdn.com/dms/image/v2/D4D22AQENlmcNQVUraw/feedshare-shrink_1280/feedshare-shrink_1280/0/1727344682845?e=1746057600&v=beta&t=qkR60usaJxeAhb3bLrtHaJe30sp91HTIJyUCRnfQDFA",
    image3:
      "https://media.licdn.com/dms/image/v2/D4D22AQGXFFaD8Vxp6w/feedshare-shrink_1280/feedshare-shrink_1280/0/1727344683637?e=1746057600&v=beta&t=pAhBdJQcKM8nOYWuLZiPzGwfvqabZHhSgGk4YMfPnlY",
  },
  {
    name: "Front-End Web Development Workshop! ",
    detail: "We’re thrilled to announce the success of our Front-End Web Development workshop for 2nd-year SCE students! 🎉Participants dived into HTML, CSS, and JavaScript, learning to create responsive and dynamic web pages. Special thanks to our amazing speakers Prachi Nadgir and ARYAN MASKE for leading the session and sharing their valuable insights.",
    image1:
      "https://media.licdn.com/dms/image/v2/D4D22AQHe5lzz1kymYw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727535910214?e=1746057600&v=beta&t=aUdNXcp9-14ST_laV4Nf5Hh7oF4iKe2zGdlViXZ6RZA",
    image2:
      "https://media.licdn.com/dms/image/v2/D4D22AQF5Cwn-CfArfg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727535916522?e=1746057600&v=beta&t=Kw1DE9LeW1wXRM8U4yLLG1fuNKpZeg5SQ3UPgQ-bghE",
    image3:
      "https://media.licdn.com/dms/image/v2/D4D22AQHRiNJhUHIzsw/feedshare-shrink_800/feedshare-shrink_800/0/1727535907542?e=1746057600&v=beta&t=gSC2jqHrtbqxsrmY6wRR1nAw1nLArz5siVCgRweD0ig",
  },
  {
    name: " Web Development Workshop for 2nd-Year Students! ",
    detail: "We’re excited to share that Code Club successfully conducted an engaging and interactive Front-End Web Development workshop for 2nd-year students! 💻✨Participants got hands-on experience with key technologies like HTML and CSS learning the fundamentals of web design and development. It was an inspiring session filled with creativity, collaboration, and coding!A big shoutout to our talented speakers Rehan Mulla and Nasir Nadaf for leading the workshop and sharing their expertise with the next generation of developers.",
    image1:
      "https://media.licdn.com/dms/image/v2/D4D22AQG6KNuFi-aCHA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727536714800?e=1746057600&v=beta&t=eL718EZm6YmPlBWuCBVCmit0zyJyzBlKKNlW6G01NiE",
    image2:
      "https://media.licdn.com/dms/image/v2/D4D22AQEIiR22Ord4RQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1727536703379?e=1746057600&v=beta&t=bF4VrDAo5weof8g-LwcQGR2PmDNpfDsGJ2RkVX2Eoxo",
    image3:
      "https://media.licdn.com/dms/image/v2/D4D22AQG6TGJqIhL4MA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727536715943?e=1746057600&v=beta&t=F--Lv5PCI8CQV4TpB5i1XwRI5RFs0dT7QnTE5RtoNRE",
  },
  {
    name: "DSA Workshop for 3rd-Year Students!",
    detail: "We are thrilled to share that Code Club has just completed an in-depth workshop on Data Structures and Algorithms (DSA) using C++ for 3rd-year students! 🎉The session, led by speakers Suhas Alagi Mrudula Sadafule Samruddhi Kamble Shreya Joshi, provided students with hands-on experience in tackling complex algorithmic challenges and building a strong foundation in DSA. It was a fantastic opportunity for participants to enhance their problem-solving skills and dive deep into advanced C++ concepts.A big thanks to our amazing speakers for their valuable insights and guidance. 🙌",
    image1:
      "https://media.licdn.com/dms/image/v2/D4D22AQEWZ8MaQtw2uA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727962942463?e=1746057600&v=beta&t=5SiwiYU9mgr9cGward_7Bv6q5Nh3Jl4Y5a3wX0gmjCM",
    image2:
      "https://media.licdn.com/dms/image/v2/D4D22AQFLb_x23swyfA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727962993448?e=1746057600&v=beta&t=LEUJ2i8OSCSQCX3h4VmGa6_zLyCvxXaQI949gsRzyIc",
    image3:
      "https://media.licdn.com/dms/image/v2/D4D22AQHC2nfZkA9DtA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727962997709?e=1746057600&v=beta&t=fh-zQ_btkcIhMglcelyQEuWKzxMvb3659jlTT7mkdXw",
  },
  {
    name: "Android Development Session! ",
    detail: "I'm excited to share that our Code Club successfully organized an engaging Android Development Workshop for students interested in mobile app development. 🚀During the session, participants explored the fundamentals of Android Studio, worked on designing intuitive user interfaces, and gained hands-on experience in building their very first Android applications. The enthusiasm and curiosity from all attendees made the workshop truly special! 📱💻A big thank you to our dedicated organizing team for making this event possible and to all the participants for their active involvement. We’re looking forward to hosting more workshops that inspire innovation and foster a strong learning community.",
    image1:
      "https://media.licdn.com/dms/image/v2/D5622AQEgvSw0XbpKYw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729000382552?e=1746057600&v=beta&t=ewmcP29UiAVfNOjLgY3htWA9Ru8dvg6Vjq9Ahi8wF7s",
    image2:
      "https://media.licdn.com/dms/image/v2/D5622AQEcoQoB0dzOTQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729000381523?e=1746057600&v=beta&t=xcS9gbS4SFavKOqzMJ9RbQXfA1RYFQSH9HkWWILrKsY",
    image3:
      "https://media.licdn.com/dms/image/v2/D5622AQF2Qx_PPEWErQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729000381999?e=1746057600&v=beta&t=TzDE08mHQr9EdmaMiqmESe0QMq_tdZQt0uIfp32jh88",
  },
];
const Events = () => {
  const navigate = useNavigate();
  const eventList = activeEvent.slice(3);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBoardChange = (board: string) => {
    navigate(`/members?board=${board}`);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-900 bg-black w-full overflow-x-hidden">
      {/* Navbar with Dropdown */}
      <div className="grid-cols-1 bg-black border-b-0 border-gray-50 sticky top-0 z-50 gradient-to-r flex justify-between flex-nowrap items-start w-full px-10 py-3 outline">
        <div className="flex items-center gap-2">
          <img src="./logo.png" alt="logo" className="w-10 h-8" />
          <div
            className="logo text-white text-xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            CODE CLUB AGPIT
          </div>
        </div>
        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className="nav-links hidden md:flex justify-between items-center w-1/2 pr-40">
          <ul className="flex justify-between items-center w-full  lg:text-3xl text-sm md:text-base">
            <li
              className="text-white text-lg font-semibold cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="text-white text-lg font-semibold cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className="text-white text-lg font-semibold cursor-pointer"
              onClick={() => navigate("/events")}
            >
              Events
            </li>
            {/* Members Dropdown */}
            <li className="text-white text-lg font-semibold">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none hover:text-gray-300">
                  Members <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black border-gray-700 text-white">
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-gray-800"
                    onClick={() => handleBoardChange("TY")}
                  >
                    Main Board
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-gray-800"
                    onClick={() => handleBoardChange("SY")}
                  >
                    Assistant Board
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-gray-800"
                    onClick={() => handleBoardChange("FY")}
                  >
                    Last Year Board
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Side Navigation */}
      <div
        className={`fixed top-0 right-0 h-full bg-black w-64 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-white">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-6">
          <li
            className="text-white text-lg font-semibold cursor-pointer"
            onClick={() => {
              navigate("/");
              toggleMobileMenu();
            }}
          >
            Home
          </li>
          <li
            className="text-white text-lg font-semibold cursor-pointer"
            onClick={() => {
              navigate("/about");
              toggleMobileMenu();
            }}
          >
            About
          </li>
          <li
            className="text-white text-lg font-semibold cursor-pointer"
            onClick={() => {
              navigate("/events");
              toggleMobileMenu();
            }}
          >
            Events
          </li>
          <li className="text-white text-lg font-semibold">
            <div className="flex flex-col space-y-3">
              <span>Members</span>
              <ul className="pl-4 space-y-3">
                <li
                  className="text-gray-300 cursor-pointer hover:text-white"
                  onClick={() => {
                    handleBoardChange("TY");
                    toggleMobileMenu();
                  }}
                >
                  Main Board
                </li>
                <li
                  className="text-gray-300 cursor-pointer hover:text-white"
                  onClick={() => {
                    handleBoardChange("SY");
                    toggleMobileMenu();
                  }}
                >
                  Assistant Board
                </li>
                <li
                  className="text-gray-300 cursor-pointer hover:text-white"
                  onClick={() => {
                    handleBoardChange("FY");
                    toggleMobileMenu();
                  }}
                >
                  Last Year Board
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Past Event */}

      <div className="mt-7 flex w-full px-5 py-2 sm:px-10">
        <p className="bg-black text-white mt-0 w-full text-center py-3">
          <h1 className="text-2xl font-extrabold sm:text-3xl">
            {activeEvent[2].name}
          </h1>
        </p>
      </div>

      {/* add hr line for main board */}
      <div className="text-center my-4 font-semibold text-white ">
        <p className="text-lg font-extralight py-4">{activeEvent[2].name1}</p>
      </div>
      <BorderTrailHr />

      {/* Carousel Section */}
      <div className="flex gap-30 mb-10 px-0 py-4 w-full max-w-[1200px] mx-auto relative">
        {/* Main carousel */}
        <Carousel className="w-full max-w-[1000px] md:max-w-[1200px] h-[400px] relative overflow-visible mx-auto py-10">
          <CarouselContent className="w-full">
            {eventList.map((event, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/2 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-4">
                  <MorphingDialog transition={FAST_DIALOG_TRANSITION}>
                    {/* Clickable Event Card */}
                    <MorphingDialogTrigger
                      style={{ borderRadius: "12px", height: "380px" }}
                      className="flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
                    >
                      {/*  New Carousel for Multiple Images */}
                      <img
                        src={event.image1}
                        alt={event.name}
                        className=" w-full h-[200px] object-cover rounded-md "
                      />
                      <div className="p-3 flex-grow">
                        <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50 font-semibold">
                          {event.name}
                        </MorphingDialogTitle>
                        <div className="event-card flex-grow font-extralight">
                          <p className="line-clamp-3">
                            {event.detail?.substring(0, 100)}...
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="relative -translate-y-2 ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                        aria-label="Open dialog"
                      >
                        <PlusIcon size={12} />
                      </button>
                    </MorphingDialogTrigger>
                    {/* Expanded Dialog Content */}
                    <MorphingDialogContainer>
                      <MorphingDialogContent
                        style={{ borderRadius: "24px" }}
                        className="relative flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[400px] sm:max-h-[600px]"
                      >
                        {/*  New Carousel for Multiple Images */}
                        <Carousel>
                          <CarouselContent>
                            <CarouselItem>
                              <img
                                src={event.image1}
                                alt="Event Image 1"
                                className="h-80 w-full object-cover"
                              />
                            </CarouselItem>
                            <CarouselItem>
                              <img
                                src={event.image2}
                                alt="Event Image 2"
                                className="h-80 w-full object-cover"
                              />
                            </CarouselItem>
                            <CarouselItem>
                              <img
                                src={event.image3}
                                alt="Event Image 3"
                                className="h-80 w-full object-cover"
                              />
                            </CarouselItem>
                          </CarouselContent>
                          <CarouselPrevious className="absolute z-30 left-2 top-1/2 -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-lg bg-black text-white hover:bg-gray-700 transition" />
                          <CarouselNext className="absolute z-30 right-2 top-1/2 -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-lg bg-black text-white hover:bg-gray-700 transition" />
                        </Carousel>
                        <div className="p-6">
                          <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50 ">
                            {event.name}
                          </MorphingDialogTitle>
                          <ScrollArea className="h-[200px] w-full max-w-xs sm:max-w-sm rounded-md border p-4 mx-auto">
                            <MorphingDialogDescription
                              disableLayoutAnimation
                              variants={{
                                initial: {
                                  opacity: 0,
                                  scale: 0.8,
                                  y: 100,
                                },
                                animate: { opacity: 1, scale: 1, y: 0 },
                                exit: { opacity: 0, scale: 0.8, y: 100 },
                              }}
                            >
                              <p className="mt-2 text-zinc-500 dark:text-zinc-500 text-center">
                                {event.detail}
                              </p>
                            </MorphingDialogDescription>
                          </ScrollArea>
                        </div>
                        <MorphingDialogClose className="text-zinc-50" />
                      </MorphingDialogContent>
                    </MorphingDialogContainer>
                  </MorphingDialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute z-30 left-2 top-1/2 -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-lg bg-black text-white hover:bg-gray-700 transition" />
          <CarouselNext className="absolute z-30 right-2 top-1/2 -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-lg bg-black text-white hover:bg-gray-700 transition" />
        </Carousel>
      </div>

      {/* Add hr line for  main board */}

      <div className="text-center mt-16 mb-4 font-semibold text-white py-6">
        <p className="text-lg font-extralight">
          {activeEvent[2].name1} : {activeEvent[2].year}
        </p>
      </div>
      <BorderTrailHr />

      <div className="flex gap-30 mb-10 px-0 w-full max-w-[1200px] mx-auto">
        {/* Carousel Section */}

        <div className="flex flex-col gap-6 mb-10 px-4 sm:px-6 md:px-10 py-4 w-full max-w-[1200px] mx-auto">
          <Carousel className="w-full max-w-full md:max-w-[1200px] h-[400px] overflow-visible relative mx-auto">
            <CarouselContent className="w-full">
              {eventData.events.map((event, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <div className="p-4 h-full">
                    <MorphingDialog
                      transition={FAST_DIALOG_TRANSITION}
                    >
                      {/* Trigger */}
                      <MorphingDialogTrigger
                        style={{ borderRadius: "12px", height: "100%" }}
                        className="flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
                      >
                        <img
                          src={event.image1}
                          alt={event.name}
                          className="w-full h-[200px] object-cover rounded-md"
                        />

                        <div className="p-3 flex-grow">
                          <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50 font-semibold">
                            {event.name}
                          </MorphingDialogTitle>

                          <div className="event-card flex-grow font-extralight">
                            <p className="line-clamp-3">
                              {event.description?.substring(0, 100)}...
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="relative -translate-y-2 ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                          aria-label="Open dialog"
                        >
                          <PlusIcon size={12} />
                        </button>
                      </MorphingDialogTrigger>

                      {/* Dialog Content */}
                      <MorphingDialogContainer>
                        <MorphingDialogContent
                          style={{ borderRadius: "24px" }}
                          className="relative flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 w-full sm:w-[400px] max-h-[600px]"
                        >
                          <Carousel>
                            <CarouselContent>
                              {[
                                event.image1,
                                event.image2,
                                event.image3,
                              ].map((img, i) => (
                                <CarouselItem key={i}>
                                  <img
                                    src={img}
                                    alt={`Event Image ${i + 1}`}
                                    className="h-80 w-full object-cover"
                                  />
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-md bg-white text-black hover:bg-gray-200" />
                            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-md bg-white text-black hover:bg-gray-200" />
                          </Carousel>

                          <div className="p-6">
                            <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                              {event.name}
                            </MorphingDialogTitle>

                            <ScrollArea className="h-[200px] w-full max-w-xs sm:max-w-sm rounded-md border p-4 mx-auto">
                              <MorphingDialogDescription
                                disableLayoutAnimation
                                variants={{
                                  initial: {
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 100,
                                  },
                                  animate: { opacity: 1, scale: 1, y: 0 },
                                  exit: { opacity: 0, scale: 0.8, y: 100 },
                                }}
                              >
                                <p className="mt-2 text-zinc-500 dark:text-zinc-500 text-center">
                                  {event.description}
                                </p>
                              </MorphingDialogDescription>
                            </ScrollArea>
                          </div>
                          <MorphingDialogClose className="text-zinc-50" />
                        </MorphingDialogContent>
                      </MorphingDialogContainer>
                    </MorphingDialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-12 px-4 sm:px-6 md:px-12 py-4 w-full max-w-[1200px] mx-auto">
        {/* Active Event Box */}
        <Card className="p-4 sm:p-6 shadow-md w-full max-w-md transition duration-300 ease-in-out hover:-translate-y-2 text-left mx-auto">
          <h2 className="text-lg font-bold leading-tight">
            {activeEvent[0].name}
          </h2>
          <p className="text-sm">
            <strong>🔹 Event Name: </strong> {activeEvent[0].eventname}
          </p>
          <p className="text-sm">
            <strong>🔹 Date: </strong> {activeEvent[0].date}
          </p>
          <p className="text-sm">
            <strong>🔹 Location: </strong> {activeEvent[0].location}
          </p>

          <div className="flex flex-col items-start space-y-3 mt-2">
            {/* Description HoverCard */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  variant="link"
                  className="text-left p-0 m-0 leading-none"
                >
                  <p className="text-sm">
                    <strong>🔹 Description</strong>
                  </p>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-72 sm:w-80">
                <div className="mt-0">
                  <h4 className="text-sm font-semibold">
                    <strong>🔹 Description</strong>
                  </h4>
                  <p className="text-sm text-gray-600">{activeEvent[0].disc}</p>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Type HoverCard */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  variant="link"
                  className="text-left p-0 m-0 leading-none"
                >
                  <p className="text-sm">
                    <strong>🔹 Type</strong>
                  </p>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-72 sm:w-80">
                <div className="mt-0">
                  <h4 className="text-sm font-semibold">
                    <strong>🔹 Type</strong>
                  </h4>
                  <p className="text-sm text-gray-600">{activeEvent[0].type}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          <div className="mt-4">
            <Button className="w-full sm:w-48 px-4 py-3 text-sm bg-black text-white hover:bg-sky-700">
              Registration [open/close]
            </Button>
          </div>
        </Card>

        {/* New Upcoming Event Box */}

        <Card className="p-4 sm:p-6 shadow-md w-full max-w-md transition duration-300 ease-in-out hover:-translate-y-2 mx-auto text-left">
          <h2 className="text-lg font-bold space-y-0 leading-tight">
            {activeEvent[1].name}
          </h2>
          <p className="text-sm">
            <strong>🔹 Event Name: </strong> {activeEvent[1].eventname}
          </p>
          <p className="text-sm">
            <strong>🔹 Date: </strong> {activeEvent[1].date}
          </p>
          <p className="text-sm">
            <strong>🔹 Deadline: </strong> {activeEvent[1].deadline}
          </p>
          <p className="text-sm">
            <strong>🔹 Location: </strong> {activeEvent[1].location}
          </p>

          <div className="flex flex-col items-start gap-3 mt-2">
            {/* Description HoverCard */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  variant="link"
                  className="text-left p-0 m-0 leading-none"
                >
                  <p className="text-sm">
                    <strong>🔹 Description</strong>
                  </p>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-72 sm:w-80">
                <div className="mt-0">
                  <h4 className="text-sm font-semibold">
                    <strong>🔹 Description</strong>
                  </h4>
                  <p className="text-sm text-gray-600">{activeEvent[1].disc}</p>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Type HoverCard */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  variant="link"
                  className="text-left p-0 m-0 leading-none"
                >
                  <p className="text-sm">
                    <strong>🔹 Type</strong>
                  </p>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-72 sm:w-80">
                <div className="mt-0">
                  <h4 className="text-sm font-semibold">
                    <strong>🔹 Type</strong>
                  </h4>
                  <p className="text-sm text-gray-600">{activeEvent[1].type}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          <div className="mt-4">
            <Button className="w-full sm:w-48 px-4 py-3 text-sm bg-black text-white hover:bg-sky-700">
              Registration / More Details
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Events;