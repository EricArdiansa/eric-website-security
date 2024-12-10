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
  {
    title: 'Python Keylogger',
    description: `Simple keylogger using python to log all your target information. We can compile the .py file to executable binary using pyinstaller`,
    imgSrc: '/static/images/python.png',
    href: 'https://github.com/EricArdiansa/Python-Keylogger',
  },
  {
    title: 'Simple Webserver',
    description: `Develop a simple web server using socket programming in C on Linux. It can only send web pages (like .html) and files (like .jpg) and can only accept GET requests without parameter`,
    imgSrc: '/static/images/c.png',
    href: 'https://github.com/EricArdiansa/c-program/blob/main/webserver.c',
  },
  {
    title: 'XSS Labs - IDN Pentest+ Bootcamp',
    description: `A vulnerable website to showcase all the commonly found varians from Cross Site Scripting Attack (Stored XSS, DOM XSS, Reflected XSS).`,
    imgSrc: '/static/images/php.jpg',
    href: 'https://github.com/EricArdiansa/IDN-PentestPlus-Bootcamp/tree/main/Week%201%20-%20XSS%20Labs',
  },
  {
    title: 'SQL Injection Labs - IDN Pentest+ Bootcamp',
    description: `A vulnerable website to showcase commonly found of SQL Injection type (Login Bypass via subverting logic, Blind SQL, UNION Attack, and Retrieve Hidden Data).`,
    imgSrc: '/static/images/php.jpg',
    href: 'https://github.com/EricArdiansa/IDN-PentestPlus-Bootcamp/tree/main/Week%202%20-%20SQL%20Injection%20Labs',
  },
]

export default projectsData
