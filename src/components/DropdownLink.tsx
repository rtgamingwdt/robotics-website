"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function DropdownLink({ href, children, display }: { href: string, children: any, display: JSX.Element[] }) {

    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open && ref.current) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.right > window.innerWidth) ref.current.style.left = `${(window.innerWidth - 15) - rect.right}px`;
        }
    }, [open]);

    return (
        <div className="dropdown-link" onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
            <Link href={href}>{children}<IoMdArrowDropdown /></Link>
            {open && <div ref={ref} className="dropdown-card">{display.map((el, i) => <div className="item" key={i}>{el}</div>)}</div>}
        </div>
    )
}