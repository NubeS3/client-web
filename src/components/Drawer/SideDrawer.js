import React from 'react';

const SideDrawer = ({
  children = (
    <ul>
      <li>
        <a>Menu Item</a>
      </li>
      <li>
        <a>Menu Item</a>
      </li>
    </ul>
  ),
  segmentIncludeTrigger = (
    <>
      <input id="drawer-trigger" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-center drawer-content ">
        <label
          htmlFor="drawer-trigger"
          className="btn btn-primary drawer-button"
        >
          open menu
        </label>
      </div>
    </>
  )
}) => {
  return (
    <div className="rounded-lg shadow  drawer h-full ">
      {segmentIncludeTrigger}
      {/* =>> use this for trigger drawer */}
      <div className="drawer-side  ">
        <label htmlFor="drawer-trigger" className="drawer-overlay"></label>
        <div className="menu p-4 overflow-y-auto h-screen w-80 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
