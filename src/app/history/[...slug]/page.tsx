"use client";
import { useEffect, useState } from "react";
import history from "../../../resources/history.json";
import "../../history.css";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {

    const [data, setData] = useState<{
        name: string,
        year: number,
        description: string,
        competitions: { name: string, url: string }[]
        awards: { event: string, award: string }[]
    } | null>(null);

    useEffect(() => {
        const pattern = params.slug[0].match(/\d{4}/);
        const year = pattern ? parseInt(pattern[0]) : null;
        const name = params.slug[0].slice(5);
        setData(history.find((hist) => hist.name == name.replaceAll("%20", ' ') && hist.year == year) as any || null);
    }, [params.slug]);

    return (
        <div className="main">
            <div className="history-hero-section">
                {!data ? (
                    <h2>Not Found</h2>
                ) : (
                    <>
                        <h2>{data.year} - {data.name}</h2>
                        <p>{data.description}</p>
                    </>
                )}
            </div>
            <div className="history-section">
                <h2>Competitions Attended</h2>
                <ul>
                    {data?.competitions.map((comp, index) => (
                        <li key={index}><Link target="_blank" href={comp.url}>{comp.name}</Link></li>
                    ))}
                </ul>
            </div>
            {data && data.awards.length > 0 && (
                <div className="history-section">
                    <h2>Awards Won</h2>
                    <ul>
                        {data?.awards.map((award, index) => (
                            <li key={index}>{award.event} - {award.award}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="fill" />
        </div>
    )
}