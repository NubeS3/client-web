const LinearProgressBar = ({ label, progressPercentage }) => {
  return (
    <div className="relative pt-1 grid grid-cols-3 items-center w-full">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-600 bg-blueGray-200">
            {label}
          </span>
        </div>
        <div className="text-right"></div>
      </div>
      {/* <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blueGray-200"> */}
      <progress id="file" max="100" value={progressPercentage}></progress>
      <span className="text-xs font-semibold inline-block text-blueGray-600">
        {progressPercentage === 100 ? 'Done' : `${progressPercentage} %`}
      </span>
      {/* </div> */}
    </div>
  );
};

export default LinearProgressBar;
