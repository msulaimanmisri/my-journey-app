interface HeadingProps {
    children: React.ReactNode;
    id?: string;
}

export function Heading({ children, id }: HeadingProps) {
    return (
        <h1 id={id} className="text-5xl font-black text-slate-900">
            {children}
        </h1>
    );
}