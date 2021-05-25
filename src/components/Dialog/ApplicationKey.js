import React from 'react';

const AddApplicationKey = ({ open, onSubmit, onCancle }) => {
  return (
    <dialog open={true}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col mx-auto mt-20 justify-center max-w-2xl px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <h1 className="w-full text-center text-2xl py-6">
            Add Application Key
          </h1>
          <hr />
          <form>
            <div className="grid grid-cols-2">
              <div>
                <p>Name of Key:</p>
                <p>(keyName)</p>
              </div>
              <input />
              <div>
                <p>Allow access to Bucket(s):</p>
                <p>(optional)</p>
                <p>(bucketName)</p>
              </div>
              <select>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div>
                <p>Type of Access:</p>
                <p>(optional)</p>
                <p>(capabilities)</p>
              </div>
              <div role="group">
                <input type="radio" defaultChecked />
                <label> Read and Write</label>
                <br />
                <input type="radio" />
                <label> Read Only</label>
                <br />
                <input type="radio" />
                <label> Write Only</label>
                <br />
              </div>
              <div>
                <p>File name prefix:</p>
                <p>(optional)</p>
                <p>(namePrefix)</p>
              </div>
              <div>
                <input />
                <p>Allow access to file names that starts with this.</p>
              </div>
              <div>
                <p>Duration (seconds):</p>
                <p>(optional)</p>
                <p>(validDurationSeconds)</p>
              </div>
              <div>
                <input />
                <p>Positive integer less than 1000 days (in seconds).</p>
              </div>
              <button className="col-span-2">Create New Key</button>
            </div>
          </form>
          <hr />
          <div className="flex justify-end w-full">
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AddApplicationKey;
