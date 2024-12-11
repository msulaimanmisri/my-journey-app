interface JourneyEventsProps {
    events: string[];
    months: string[];
    handleEventChange: (index: number, value: string) => void;
    removeEvent: (index: number) => void;
    addEvent: () => void;
}

export function JourneyEvents({ events, months, handleEventChange, removeEvent, addEvent }: JourneyEventsProps) {
    return (
        <div id="event">
            <h3 className='text-3xl text-slate-900 font-light'>Event</h3>
            <p className='font-thin text-slate-500 my-3'>
                Share your journey events throughout the year.
            </p>

            {events.map((event, index) => (
                <div key={index} className="flex items-center gap-2">
                    <input
                        type="text"
                        value={event}
                        placeholder={months[index]}
                        onChange={(e) => handleEventChange(index, e.target.value)}
                        className='mt-4 border-b border-b-slate-300 bg-slate-100 text-slate-700 text-xl w-full py-3 px-4'
                    />
                    <button
                        onClick={() => removeEvent(index)}
                        className='mt-4 text-red-500 hover:text-red-700 px-2 py-1 rounded'
                    >
                        ✕
                    </button>
                </div>
            ))}

            {events.length < 12 && (
                <button
                    onClick={addEvent}
                    className='mt-4 bg-teal-500 text-white py-2 px-4 rounded'
                >
                    Add More Event
                </button>
            )}
        </div>
    );
}