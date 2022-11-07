import React from 'react'
import BodyProject from './BodyProject'
import SelectedMobile from './SelectedMobile';
import TitleProjects from './TitleProjects'

const SelectedProject = () => {
    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);

        React.useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleWindowResize);
            return () => window.removeEventListener("resize", handleWindowResize);
        }, []);

        return { width };
    };

    const viewPort = useViewport();
    const isMobile = viewPort.width <= 1024;
    return (
        <div>
            <TitleProjects />
            {isMobile ? <SelectedMobile /> : <BodyProject />}
        </div>
    )
}

export default SelectedProject