import Image from "next/image";
import Link from "next/link";
import DropdownLink from "./DropdownLink";
import history from "../resources/history.json";

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
                <DropdownLink href={"/history"} display={history.map((hist) => <Link href={`${hist.year}-${hist.name}`} key={hist.year}>{`${hist.year} - ${hist.name}`}</Link>)}>History</DropdownLink>
                <Link href={"/resources"}>Resources</Link>
            </div>
        </div>
    )
}