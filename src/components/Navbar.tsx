import Image from "next/image";
import Link from "next/link";
import DropdownLink from "./DropdownLink";

export default function Navbar({ showBackground }: { showBackground: boolean }) {

    return (
        <div className="navbar" style={{ color: showBackground ? "white" : "black", backgroundColor: showBackground ? "#09090b" : "transparent" }}>
            <div className="left-side">
                <Image src={""} width={64} height={64} alt="logo" />
                <h1>Team 7202 - Cyber Orioles</h1>
            </div>
            <div className="right-side">
                <Link href={"/"}>Home</Link>
                <DropdownLink href={"/about-us"} display={[
                    <Link key={0} href={"/about-us#upcoming-events"}>Upcoming Events</Link>
                ]}>About Us</DropdownLink>
                <Link href={"/sponsors"}>Sponsors</Link>
                <Link href={"/past-events"}>Past Events</Link>
                <DropdownLink href={"/history"} display={[
                    <Link key={0} href={"/history/2023-crescendo"}>2024 - Crescendo</Link>,
                    <Link key={0} href={"/history/2023-charged-up"}>2023 - Charged Up</Link>,
                    <Link key={0} href={"/history/2022-rapid-react"}>2022 - Rapid React</Link>,
                    <Link key={0} href={"/history/2019-desination-deep-space"}>2019 - Destination Deep Space</Link>,
                ]}>History</DropdownLink>
                <Link href={"/resources"}>Resources</Link>
            </div>
        </div>
    )
}