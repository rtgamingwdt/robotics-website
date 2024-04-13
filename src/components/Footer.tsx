import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={"https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/first-horz-rgb.png"} width={128} alt="first-logo" />
        </footer>
    )
}