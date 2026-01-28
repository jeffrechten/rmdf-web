import { useEffect } from "react";
import { DONATE_URL } from "../siteConfig";

export default function RedirectToDonate() {
    useEffect(() => {
        window.location.replace(DONATE_URL);
    }, []);

    return null;
}
