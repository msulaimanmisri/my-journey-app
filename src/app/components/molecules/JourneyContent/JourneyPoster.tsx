interface JourneyPosterProps {
    title: string;
    events: string[];
    months: string[];
    posterRef: React.RefObject<HTMLDivElement>;
}

export function JourneyPoster({ title, events, months, posterRef }: JourneyPosterProps) {
    return (
        <div ref={posterRef} className="bg-white h-full rounded-lg shadow-2xl p-16 relative overflow-hidden"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`
            }}>
            <div className="text-center mb-12">
                <h1 className="text-4xl text-slate-500 font-serif mb-4">{title || 'My Journey'}</h1>
                <div className="w-32 h-1 bg-teal-500 mx-auto"></div>
            </div>

            <div className="space-y-6">
                {events.map((event, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="w-24 text-teal-600 font-serif">{months[index]}</div>
                        <div className="flex-1">
                            <div className="h-2 w-2 rounded-full bg-teal-500 mt-2"></div>
                            <div className="ml-4 text-lg font-light">{event}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-8 right-8 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-slate-300"></div>
                <div className="text-sm text-slate-900 font-light gap-4">
                    <a href="https://sulaimanmisri.com">
                        By Muhamad Sulaiman . {new Date().getFullYear()}
                    </a>
                </div>
            </div>
        </div>
    );
}