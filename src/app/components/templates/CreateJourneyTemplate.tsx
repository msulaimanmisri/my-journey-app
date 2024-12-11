"use client"

import { useState, useRef, useEffect } from 'react';
import { JourneyTitle } from '@/app/components/molecules/JourneyContent/JourneyTitle';
import { JourneyEvents } from '@/app/components/molecules/JourneyContent/JourneyEvents';
import { JourneyPoster } from '@/app/components/molecules/JourneyContent/JourneyPoster';
import html2canvas from 'html2canvas';

export function CreateJourneyTemplate() {
  const [title, setTitle] = useState<string>('');
  const [events, setEvents] = useState<string[]>(['']);
  const posterRef = useRef<HTMLDivElement>(null);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Load data from localStorage on mount
  useEffect(() => {
    const savedTitle = localStorage.getItem('journeyTitle');
    const savedEvents = localStorage.getItem('journeyEvents');

    if (savedTitle) setTitle(savedTitle);
    if (savedEvents) setEvents(JSON.parse(savedEvents));
  }, []);

  // Save title changes to localStorage
  useEffect(() => {
    localStorage.setItem('journeyTitle', title);
  }, [title]);

  // Save events changes to localStorage
  useEffect(() => {
    localStorage.setItem('journeyEvents', JSON.stringify(events));
  }, [events]);

  const addEvent = () => {
    if (events.length < 12) {
      setEvents([...events, '']);
    }
  };

  const removeEvent = (indexToRemove: number) => {
    setEvents(events.filter((_, index) => index !== indexToRemove));
  };

  const handleEventChange = (index: number, value: string) => {
    const newEvents = [...events];
    newEvents[index] = value;
    setEvents(newEvents);
  };

  const downloadPoster = async () => {
    if (posterRef.current) {
      const canvas = await html2canvas(posterRef.current);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `${title || 'my-journey'}-${new Date().getFullYear()}.png`;
      link.click();
    }
  };

  return (
    <div className='flex h-[130vh]'>
      <div className="bg-slate-100 w-full">
        <div className="p-8 space-y-16">
          <JourneyTitle title={title} setTitle={setTitle} />
          <JourneyEvents
            events={events}
            months={months}
            handleEventChange={handleEventChange}
            removeEvent={removeEvent}
            addEvent={addEvent}
          />
        </div>
      </div>

      <div className="bg-teal-500 w-full p-36 relative">
        <button
          onClick={downloadPoster}
          className="absolute top-4 right-4 bg-white text-teal-500 px-4 py-2 rounded-lg shadow-lg hover:bg-teal-50 transition-colors"
        >
          Download Poster
        </button>
        <JourneyPoster
          title={title}
          events={events}
          months={months}
          posterRef={posterRef}
        />
      </div>
    </div>
  );
}