interface JourneyTitleProps {
  title: string;
  setTitle: (title: string) => void;
}

export function JourneyTitle({ title, setTitle }: JourneyTitleProps) {
  return (
    <div id="title">
      <h3 className='text-3xl text-slate-900 font-light'>Your Journey Title</h3>
      <input
        placeholder="2024 : My Journey"
        type="text"
        value={title || ''}
        onChange={(e) => setTitle(e.target.value)}
        className='mt-4 border-b border-b-slate-300 bg-slate-100 text-slate-700 text-xl w-full py-3 px-4'
      />
    </div>
  );
}