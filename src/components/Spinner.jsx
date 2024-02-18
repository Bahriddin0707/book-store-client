function Spinner() {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full">
      <div className="animate-ping w-20 h-20 m-auto rounded-full bg-sky-600"></div>
    </div>
  );
}

export default Spinner;
