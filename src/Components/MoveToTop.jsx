//MoveToTop.jsx
import { useEffect } from "react";

const MoveToTop = ({location}) => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [location.key]);
}

export default MoveToTop;