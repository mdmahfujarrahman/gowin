const ContactStateLoderBig = () => {
  return (
    <div className="hidden md:flex lg:flex w-full flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-between">
        <div>
          <div className="flex  items-center">
            <div className="h-10 w-10 rounded-full bg-[#D2EAFF] flexCenter mr-2">
              <div className="h-5 w-5 rounded-full bg-slate-400 animate-pulse" />
            </div>
            <div className="h-5 w-20 rounded-md bg-slate-400 animate-pulse" />
          </div>
        </div>
        <div>
          <div className="flex  items-center">
            <div className="h-10 w-10 rounded-full bg-[#D2EAFF] flexCenter mr-2">
              <div className="h-5 w-5 rounded-full bg-slate-400 animate-pulse" />
            </div>
            <div className="h-5 w-20 rounded-md bg-slate-400 animate-pulse" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="h-10 w-10 rounded-full bg-[#D2EAFF] flexCenter mr-2">
            <div className="h-5 w-5 rounded-full bg-slate-400 animate-pulse" />
          </div>
          <div className="h-5 w-20 rounded-md bg-slate-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ContactStateLoderBig;

export const ContactStateLoderSmall = () => {
  return (
    <div className="flex-col flexCenterImportant">
      <div className="h-12 w-12 rounded-full bg-[#D2EAFF] flexCenter mb-4">
        <div className="h-5 w-5 rounded-full bg-slate-400 animate-pulse" />
      </div>
      <div className="h-5 w-28 rounded-md bg-slate-400 animate-pulse" />
    </div>
  );
};
