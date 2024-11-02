import FormSection from "../Components/profile/FormSection.js";
import Icon from "../Components/profile/Icon.js";
import Form from "../Components/profile/Form.js";
import Input from "../Components/profile/Input.js";
import Button from "../Components/profile/Button.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    instituteName: "",
    courseName: "",
    currentSemester: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/data/addProfile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: formData.fullName,
        college: formData.instituteName,
        branch: formData.courseName,
        semester: formData.currentSemester,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/dashboard");
      });
  };

  return (
    <div className="bg-gray-950 min-h-screen h-fit">
      <div className="p-40 grid justify-items-center">
        <div className="overflow-hidden rounded-3xl grid grid-cols-1 w-[95%] md:grid-cols-2 lg:w-[60%] shadow-white shadow-md">
          <div className="p-[30px] bg-[#111d2c] text-white flex flex-col items-center">
            <h2 className="text-4xl font-bold">Your Profile</h2>
            <div className="pt-10 flex flex-col items-center">
              <p className="text-xl font-semibold mb-10">
                Fill your details to get started...
              </p>
              <Icon>📍</Icon>
              <div className="pb-10 w-72 inline-block text-center">
                Ensure the correctness of the details.
              </div>
            </div>
          </div>
          <FormSection>
            <Form>
              <Input
                type="text"
                name="fullName"
                onChange={handleChange}
                placeholder="Full Name"
              />
              <Input
                type="text"
                name="instituteName"
                onChange={handleChange}
                placeholder="Institute Name"
              />
              <Input
                type="text"
                name="courseName"
                onChange={handleChange}
                placeholder="Course Name"
              />
              <Input
                type="text"
                name="currentSemester"
                onChange={handleChange}
                placeholder="Current Semester"
              />
              <Button
                onClick={handleSubmit}
                className="font-bold text-xl"
                type="submit"
              >
                Save
              </Button>
            </Form>
          </FormSection>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
