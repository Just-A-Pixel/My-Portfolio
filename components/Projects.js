import React from 'react'

const techs = {
    javascript: {
        name: "JavaScript",
        logo: "https://img.icons8.com/?size=512&id=108784&format=png"
    },
    nodejs: {
        name: "NodeJS",
        logo: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png"
    },
    reactjs: {
        name: "ReactJS",
        logo: "https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png"
    },
    nextjs: {
        name: "NextJS",
        logo: "https://img.icons8.com/?size=512&id=MWiBjkuHeMVq&format=png"
    },
    java: {
        name: "Java",
        logo: "https://img.icons8.com/?size=512&id=13679&format=png"
    },
    go: {
        name: "Go",
        logo: "https://img.icons8.com/?size=512&id=44442&format=png" 
    },
    postgresql: {
        name: "PostgreSQL",
        logo: "https://img.icons8.com/?size=512&id=38561&format=png"
    },
    docker: {
        name: "Docker",
        logo: "https://img.icons8.com/?size=512&id=cdYUlRaag9G9&format=png"
    },
    redis: {
        name: "Redis",
        logo: "https://img.icons8.com/?size=512&id=pHS3eRpynIRQ&format=png"
    }
}


const Projects = () => {
    const list = [
        {
            title: "Whatsapp Scheduler",
            desc: "Schedule multiple reminders that get delivered to your whatsapp!",
            link: 'https://github.com/Just-A-Pixel/Whatsapp-Scheduler',
            tech: [
                {...techs.javascript},
                {...techs.nodejs},
                {...techs.postgresql},
                {...techs.docker},
                {...techs.redis}
            ]
        },
        {
            title: "Design Patterns Repo",
            desc: "A bunch of design patterns I come across",
            link: "https://github.com/Just-A-Pixel/Design-Patterns",
            tech: [
                {...techs.java}
            ]
        },
        {
            title: "Automation Scripts",
            link: "https://github.com/Just-A-Pixel/automation-scripts",
            desc: "Scripts I use on my machine to automate stuff",
            tech: [
                {...techs.go}
            ]
        }, {
            title: "My Portfolio",
            link: "https://github.com/Just-A-Pixel/My-Portfolio",
            desc: "The code of this portfolio!",
            tech: [
                {...techs.javascript},
                {...techs.nextjs},
                {...techs.nodejs}
            ]
        }, {
            title: "Meme Generator",
            link: 'https://github.com/Just-A-Pixel/meme-generator-frontend',
            desc: "An image editor for making memes :)",
            tech: [
                {...techs.reactjs},
                {...techs.nodejs}
            ]
        }, {
            title: "Email Service",
            link: "https://github.com/Just-A-Pixel/go-email-service",
            desc: "An api built in Go that facilitates directly sending email from your client side html to your inbox.",
            tech: [
                {...techs.go}
            ]
        }, {
            title: "Authentinator",
            link: "https://github.com/Just-A-Pixel/Authentinator",
            desc: "Implementated JWT tokenization from scratch, with access and refresh tokens. Multiple checks for uniqueness of a user signing in through multiple paths.",
            tech: [
                {...techs.nodejs}
            ]
        }, {
            title: "Charge Tracker",
            link: "",
            desc: "Android app to check how many times phone was in dire need of charge. Implements persistence.",
            tech: [
                {...techs.java}
            ]
        }

    ]
  return (
    <>
        {
            list.map(item => {
                return(
                    <>
                        <Project title={item.title} desc={item.desc} tech={item.tech} link={item.link}/>
                    </>
                )
            })
        }
    </>
  )
}


const Project = ({title, desc, link, tech}) => {
    return (
        <>
            <div
  class="block  bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] opacity-50 hover:opacity-100 hover:scale-125 duration-300">
  {/* <div
    class="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
    Featured
  </div> */}
  <div class="p-6">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800">
      {title}
    </h5>
    <p class="mb-4 text-base text-neutral-600">
      {desc}
    </p>
    <a href = {link} target = "_blank">
    <button
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light"

      >
        
      {link.length != 0 ? "Github" : "In Progress"}

    </button>
      </a>
  </div>
  <div
    class="border-t-2 border-neutral-100 px-6 py-3 flex flex-wrap justify-around">
    {tech.map(item => {
        return (
           <div className='flex'>
            <img height={"20"} width={"20"} src={item.logo} className='mx-1'/>
            {" " + item.name + " "}
           </div> 
        )
    })}
  </div>
</div>
        </>
    )
}

export default Projects