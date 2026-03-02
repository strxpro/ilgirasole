"use client";

import { useState, useEffect, useCallback } from "react";

const EVENT_DATE = new Date("2026-03-21T18:00:00+01:00");
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

const COLORS = [
    "#C75B39", // terracotta
    "#C4A35A", // gold
    "#FAF3E8", // cream
    "#5C6B4F", // olive
    "#D4B872", // gold-light
    "#D4795E", // terracotta-light
    "#FF6B6B", // festive red
    "#FFD93D", // festive yellow
    "#6BCB77", // festive green
    "#4D96FF", // festive blue
];

interface ConfettiPiece {
    id: number;
    x: number;
    y: number;
    color: string;
    size: number;
    rotation: number;
    rotationSpeed: number;
    speedX: number;
    speedY: number;
    opacity: number;
    shape: "square" | "circle" | "strip";
    fallDuration: number;
    swayDuration: number;
}

function isConfettiActive(): boolean {
    const now = new Date();
    const eventTime = EVENT_DATE.getTime();
    const diff = now.getTime() - eventTime;
    // Active from 7 days before to 7 days after the event
    return diff > -SEVEN_DAYS_MS && diff < FIVE_DAYS_MS;
}

export default function Confetti() {
    const [active, setActive] = useState(false);
    const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

    useEffect(() => {
        setActive(isConfettiActive());
    }, []);

    const createBurst = useCallback(() => {
        const newPieces: ConfettiPiece[] = [];
        const count = 25;

        for (let i = 0; i < count; i++) {
            newPieces.push({
                id: Date.now() + i + Math.random(),
                x: Math.random() * window.innerWidth,
                y: -20 - Math.random() * 40,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                size: 4 + Math.random() * 8,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                speedX: (Math.random() - 0.5) * 4,
                speedY: 1.5 + Math.random() * 3,
                opacity: 0.8 + Math.random() * 0.2,
                shape: (["square", "circle", "strip"] as const)[Math.floor(Math.random() * 3)],
                fallDuration: 5 + Math.random() * 3,
                swayDuration: 1.5 + Math.random(),
            });
        }

        setPieces((prev) => [...prev, ...newPieces]);

        // Remove pieces after they fall
        setTimeout(() => {
            setPieces((prev) => prev.filter((p) => !newPieces.find((np) => np.id === p.id)));
        }, 8000);
    }, []);

    useEffect(() => {
        if (!active) return;
        createBurst();
    }, [active, createBurst]);

    if (!active) return null;

    return (
        <div className="fixed inset-0 z-[55] pointer-events-none overflow-hidden">
            {pieces.map((piece) => (
                <ConfettiPieceEl key={piece.id} piece={piece} />
            ))}
        </div>
    );
}

function ConfettiPieceEl({ piece }: { piece: ConfettiPiece }) {
    const shapeStyle: React.CSSProperties = {
        width: piece.shape === "strip" ? piece.size * 0.4 : piece.size,
        height: piece.shape === "strip" ? piece.size * 2 : piece.size,
        borderRadius: piece.shape === "circle" ? "50%" : piece.shape === "strip" ? "2px" : "1px",
        backgroundColor: piece.color,
    };

    return (
        <div
            style={{
                position: "absolute",
                left: piece.x,
                top: piece.y,
                opacity: piece.opacity,
                animation: `confettiFall ${piece.fallDuration}s linear forwards, confettiSway ${piece.swayDuration}s ease-in-out infinite alternate`,
                transform: `rotate(${piece.rotation}deg)`,
            }}
        >
            <div style={shapeStyle} />
        </div>
    );
}
