import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link href={"https://www.firstinspires.org/"} target="_blank"><img src={"https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/first-horz-rgb.png"} width={128} alt="first-logo" /></Link>
        </footer>
    )
}