interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'NetCat Replacement using python',
    description: `What if during your security assessment, you stumbled on a server, with no netcat installed, but has python
     in it, you can use this netcat replacement,Capable of establishing connection using TCP protocol, tranfer file and send command.`,
    imgSrc: '/static/images/python.png',
    href: 'https://github.com/EricArdiansa/Netthon',
  },
  {
    title: 'Port Scanner using python',
    description: `simple CLI script for scanning open port using python, for learning Purpose.`,
    imgSrc: '/static/images/python.png',
    href: 'https://github.com/EricArdiansa/PortScanner',
  },
]

export default projectsData
