"use client";

import Image from "next/image";

export default function SunflowerLogo({
    size = 40,
    className = "",
}: {
    size?: number;
    className?: string;
}) {
    return (
        <Image
            src="/logo-sunflower.png"
            alt="Il Girasole"
            width={size}
            height={size}
            className={className}
            priority
        />
    );
}
