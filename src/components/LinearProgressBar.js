const LinearProgressBar = ({ label, progressPercentage }) => {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200">
            {label}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-blueGray-600">
            {progressPercentage}
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blueGray-200">
        <div
          style={{ width: '30%' }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blueGray-500"
        ></div>
      </div>
    </div>
  );
};

export default LinearProgressBar;
