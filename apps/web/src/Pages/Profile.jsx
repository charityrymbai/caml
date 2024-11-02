import FormSection from "../Components/profile/FormSection.js";
import Icon from "../Components/profile/Icon.js";
import Form from "../Components/profile/Form.js";
import Input from "../Components/profile/Input.js";
import Button from "../Components/profile/Button.js";

const StudentForm = () => {
  return (
    <div className="wrapper min-h-screen h-fit ">
      <div className=" mx-5 mb-7 flex grid justify-items-center pt-20">
        <div className="overflow-hidden rounded-3xl grid grid-cols-1 w-[95%] md:grid-cols-2 lg:w-[60%] shadow-white shadow-md">
          <div className="p-[30px] bg-[#111d2c] text-white flex flex-col items-center">
            <h2 className="text-4xl font-bold">Your Profile</h2>
            <div className="pt-10 flex flex-col items-center" >
              <p className=" text-xl font-semibold mb-10">Fill your details to get started...</p>
                <Icon>📍</Icon>
                <div className="pb-10 w-72 inline-block text-center">
                Ensure the correctness of the details.
                </div>
            </div>
          </div>
          <FormSection>
            <Form>
              <Input type="text" placeholder="Full Name" />
              <Input type="text" placeholder="Institute Name" />
              <Input type="text" placeholder="Course Name" />
              <Input type="text" placeholder="Branch Name" />
              <Input type="text" placeholder="Current Semester" />
              <Button className="font-bold text-xl" type="submit">Save</Button>
            </Form>
          </FormSection>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
