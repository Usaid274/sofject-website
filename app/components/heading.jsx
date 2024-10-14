export default function Heading({ children, headingText }) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-[1fr_max-content_1fr] gap-4 items-center">
        <div className="w-full h-full flex items-center before:bg-primary before:w-full before:h-0.5 after:bg-primary after:size-4 after:rounded-full max-w-96 justify-self-end after:shrink-0 max-sm:after:size-2" />
        <h2 className="max-w-3xl text-6xl font-serif max-lg:text-5xl max-md:text-4xl max-sm:text-3xl mx-auto block">
          {children}
        </h2>
      </div>

      <div className="grid grid-cols-[1fr_max-content_1fr] gap-4 items-center mt-4">
        <h3 className="col-start-2 text-center max-w-96 block mx-auto font-medium italic max-lg:text-xs max-lg:max-w-64">
          {headingText}
        </h3>
        <div className="w-full h-full flex items-center after:bg-primary after:w-full after:h-0.5 before:bg-primary before:size-4 before:rounded-full max-w-96 justify-self-start before:shrink-0 max-sm:before:size-2" />
      </div>
    </div>
  );
}
