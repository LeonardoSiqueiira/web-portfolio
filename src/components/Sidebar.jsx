import Social from './Social';
import Avatar from '../img/eu.jpeg'


import '.././styles/components/sidebar.sass';
import InfoNetwork from './InfoNetwork';



const Sidebar = () => {
    return <aside id="sdebar">
        <img src={Avatar} alt="Leonardo Siqueira" />
        <p className="title">Analista de Sistemas Jr</p>
        <Social />
        <InfoNetwork />
        <a href="" className="btn">Dowload</a>
    </aside>
}

export default Sidebar;