import About from './About';
import ProjectContainer from './ProjectContainer';
import TecContainer from './TecContainer';

import '.././styles/components/maincontent.sass'

const MainContent = () => {
    return(
    <main id="main-content">
        <About />
        <TecContainer />
        <ProjectContainer />
    </main>
    )
}

export default MainContent;