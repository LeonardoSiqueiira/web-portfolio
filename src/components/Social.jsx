import { FaLinkedinIn, FaGithub } from "react-icons/fa";


import '../styles/components/socialnet.sass';

const socialnet = [
    {name: "linkedin", icon: <FaLinkedinIn />},
    {name: "github", icon: <FaGithub />},
]

const Social = () => {
    return (
     <section id="social-net">
        {socialnet.map((network) => (
            <a href='#' className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
    )
}
export default Social;