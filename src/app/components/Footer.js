import React from "react";

const Footer = ({ year, fullName, studentId }) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        &copy; {year} {fullName} {studentId}
        {/*copyright © 2023 Chayanin Suatap 12345678*/}
      </p>
    </div>
  );
};

export default Footer;
