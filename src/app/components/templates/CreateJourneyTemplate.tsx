"use client"

import { JourneyInput } from '@/app/components/organisms/Journey/JourneyInput';
import { useState } from "react";

export function CreateJourneyTemplate() {
  const [events, setEvents] = useState<string[]>(['']);

  const addEvent = () => {
    if (events.length < 12) {
      setEvents([...events, '']);
    }
  };

  const removeEvent = (indexToRemove: number) => {
    setEvents(events.filter((_, index) => index !== indexToRemove));
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className='flex h-[1500px]'>
      <div className="bg-slate-100 w-full">
        <div className="p-8 space-y-16">

          <div id="title" className=''>
            <h3 className='text-3xl text-slate-900 font-light'>
              Your Journey Title
            </h3>

            <input type="text" className='mt-4 border-b-4 border-b-slate-500 bg-slate-100 text-slate-700 text-xl w-full py-3 px-4' />
          </div>

          <div id="event">
            <h3 className='text-3xl text-slate-900 font-light'>
              Event
            </h3>

            <p className='font-thin text-slate-500 my-3'>
             Share your journey events throughout the year.
            </p>

            {events.map((event, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={months[index]}
                  className='mt-4 border-b-2 border-b-slate-500 bg-slate-100 text-slate-700 text-xl w-full py-3 px-4'
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

        </div>
      </div>

      <div className="bg-teal-500 w-full">
        Journey Preview
      </div>
    </div>
  );
}