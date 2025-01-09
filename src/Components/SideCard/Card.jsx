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
              isDropdownVisible ? 'rotate-45' : 'transition-transform duration-200 ease-in-out'
            }`}
            onClick={(e) => {
              e.stopPropagation();
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
        {/* taking an array as a drop down options so that we can use map method to show drop down  */}

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
