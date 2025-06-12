"use client"

export function BackgroundPattern() {
    return (
        <div
            className="fixed inset-0 pointer-events-none"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='1.25' fill='rgb(156 163 175)' opacity='.25'/%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px',
                backgroundPosition: '0 0',
                maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                zIndex: 1,
            }}
            aria-hidden="true"
        />
    )
} 