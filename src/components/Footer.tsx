import Link from "next/link";
import * as ReactIcons from 'react-icons/fa';
import socials from "../resources/socials.json";

export default function Footer() {
    return (
        <footer>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link href={"https://www.firstinspires.org/"} target="_blank"><img src={"https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/first-horz-rgb.png"} width={128} alt="first-logo" /></Link>
            <span className="icons">
                {socials.map((social, i) => {
                    const Icon = ReactIcons[social.icon as keyof typeof ReactIcons];
                    return <Link href={social.url} target="_blank" key={i}><Icon /></Link>
                })}
            </span>
            <div />
        </footer>
    )
}