// // function BlueBtnDropdown({ optOne, optTwo, optThree }) {
// //   return (
// //     <ul className="bg-gray-700 text-white rounded-lg shadow-lg p-3 absolute top-full left-0 mt-2 w-40">
// //       <li className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">{optOne}</li>
// //       <li className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">{optTwo}</li>
// //       <li className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">{optThree}</li>
// //     </ul>
// //   );
// // }

// // function SidebarItem({ icon, label, dropdown }) {
// //   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

// //   return (
// //     <div className="relative">
// //       {/* Sidebar Item */}
// //       <div className="flex items-center gap-4 px-4 py-3 border-2 border-gray-700 rounded-3xl hover:bg-gray-700 hover:shadow-lg transition-all duration-200 ease-in-out group">
// //         <img src={icon} alt="" className="w-10 h-10" />
// //         <span className="font-bold group-hover:text-yellow-300 cursor-pointer">{label}</span>

// //         {dropdown && (
// //           <img
// //             src={dropdown}
// //             className="w-6 h-6 ml-auto cursor-pointer transition-all duration-200 ease-in-out"
// //             onClick={() => setIsDropdownVisible((prev) => !prev)}
// //             alt=""
// //           />
// //         )}
// //       </div>

// //       {/* Conditionally render dropdown */}
// //       {isDropdownVisible && <BlueBtnDropdown  optOne="Option 1" optTwo="Option 2" optThree="Option 3" />}
// //     </div>
// //   );
// // }

// // export default function Sidebar() {
// //   return (
// //     <div className="bg-gray-800 h-full w-1/4 text-white relative top-20 rounded-3xl font-serif shadow-xl p-4 animate-slide-in">
// //       <div className="space-y-4">
// //         {/* Dashboard */}
// //         <SidebarItem icon={dashboard} label="Dashboard" />

// //         {/* Student Profile */}
// //         <SidebarItem icon={studentProfile} label="Student Profile" />

// //         {/* Certificate */}
// //         <SidebarItem icon={ceritficate} label="Certificate" dropdown={bluePlus} />

// //         {/* Student TrackRecord */}
// //         <SidebarItem icon={student_record} label="Student TrackRecord" dropdown={bluePlus} />

// //         {/* Fee */}
// //         <SidebarItem icon={fee} label="Fee" dropdown={bluePlus} />

// //         {/* LMS */}
// //         <SidebarItem icon={LMS} label="LMS" dropdown={bluePlus} />

// //         {/* Admission Form */}
// //         <SidebarItem icon={admissionForm} label="Admission Form" dropdown={bluePlus} />
// //       </div>
// //     </div>
// //   );
// // }

import PropTypes from 'prop-types';
import { useState } from 'react';
import fee from '/src/assets/bitcoin_94576.png';
import studentProfile from '/src/assets/student_profile.png';
import bluePlus from '/src/assets/blue_plus.png';
import dashboard from '/src/assets/dashboard.png';
import LMS from '/src/assets/LMS.png';
import student_record from '/src/assets/student_trackrecord.png';
import ceritficate from '/src/assets/certificate.png';
import admissionForm from '/src/assets/admission_form.png';

function BlueBtnDropdown({ options }) {
  return (
    <ul className="bg-gray-700 text-white rounded-lg shadow-lg px-4 py-2 border border-gray-600">
      {options.map((option, index) => (
        <li
          key={index}
          className="hover:bg-gray-600 px-4 py-2 rounded cursor-pointer transition-all duration-200 ease-in-out"
        >
          {option}
        </li>
      ))}
    </ul>
  );
}


function SidebarItem({ icon, label, dropdownOptions }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="relative">
      {/* Sidebar Item */}
      <div className="flex items-center gap-4 px-4 py-3 border-2 border-gray-700 rounded-3xl hover:bg-gray-700 hover:shadow-lg transition-all duration-200 ease-in-out group">
        <img src={icon} alt="" className="w-10 h-10" />
        <span className="font-bold group-hover:text-yellow-300 hover:underline cursor-pointer">{label}</span>

        {/* Plus Icon for Dropdown */}
        {dropdownOptions && (
          <img
            src={bluePlus} 
            className={`w-6 h-6 ml-auto cursor-pointer transition-transform duration-200 ease-in-out ${
              isDropdownVisible ? 'rotate-45' : ''
            }`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent click event from propagating to parent
              setIsDropdownVisible((prev) => !prev);
            }}
            alt="Dropdown Icon"
          />
        )}
      </div>

      {/* Dropdown Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isDropdownVisible ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {isDropdownVisible && <BlueBtnDropdown options={dropdownOptions} />}
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="bg-gray-800 h-full w-full sm:w-1/4 text-white relative top-20 rounded-3xl font-serif shadow-xl p-4 animate-slide-in">
      <div className="space-y-4">
        {/* Dashboard */}
        <SidebarItem icon={dashboard} label="Dashboard" />

        {/* Student Profile */}
        <SidebarItem icon={studentProfile} label="Student Profile" />

        {/* Certificate */}
        <SidebarItem icon={ceritficate} label="Certificate" dropdownOptions={['Download', 'Verify', 'Share']} />

        {/* Student TrackRecord */}
        <SidebarItem icon={student_record} label="Student TrackRecord" dropdownOptions={['View', 'Update', 'Export']} />

        {/* Fee */}
        <SidebarItem icon={fee} label="Fee" dropdownOptions={['View Dues', 'Make Payment', 'History']} />

        {/* LMS */}
        <SidebarItem icon={LMS} label="LMS" dropdownOptions={['Assignments', 'Notes', 'Progress']} />

        {/* Admission Form */}
        <SidebarItem icon={admissionForm} label="Admission Form" dropdownOptions={['Apply', 'Check Status', 'Edit']} />
      </div>
    </div>
  );
}

SidebarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  dropdownOptions: PropTypes.arrayOf(PropTypes.string),
};
BlueBtnDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
