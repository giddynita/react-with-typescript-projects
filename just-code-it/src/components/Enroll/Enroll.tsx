import { useState } from 'react'
import { coursesOptions, yesOrNoOptions } from '../../utils/database'
import FormInput from '../form/FormInput'
import FormSelect from '../form/FormSelect'
import { SubmitButton } from '../global/Buttons'
import Container from '../global/Container'
import SectionTitle from '../global/SectionTitle'

function Enroll() {
  const [status, setStatus] = useState({
    success: '',
    failed: '',
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    aboutUs: '',
    tuitionHelp: '',
    laptopOwner: '',
    laptopHelp: '',
    employmentStatus: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      setStatus({
        ...status,
        success: 'Thank you! Your submission has been received.',
      })
      setFormData({
        name: '',
        email: '',
        course: '',
        aboutUs: '',
        tuitionHelp: '',
        laptopOwner: '',
        laptopHelp: '',
        employmentStatus: '',
      })
    } else {
      setStatus({
        ...status,
        failed: 'Oops! There was a problem submitting your form',
      })
    }
  }
  return (
    <div className="text-baseforeground bg-basepurple" id="join">
      <Container display="grid">
        <SectionTitle
          subHeading="Join JCI Today"
          textAlign="text-left"
          setMargin="mx-start"
        />
        <p className="text-md">
          Whether you are looking to enhance your skills as a beginner or a pro,
          we have a place for you. Submit your form now to take the first step
          towards an exciting journing in coding.
        </p>
        <form
          method="POST"
          action="https://formspree.io/f/xeoeyjvl"
          onSubmit={handleSubmit}
          className=" shadow-lg shadow-baseforeground p-6 rounded-lg max-w-3xl mx-auto my-12
          "
        >
          <div className="md:grid grid-cols-2 gap-8">
            <FormInput
              label="Name"
              type="text"
              name="name"
              placeholder="Enter Your First Name and Last Name"
              formValue={formData.name}
              handleChange={handleChange}
            />
            <FormInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              formValue={formData.email}
              handleChange={handleChange}
            />
          </div>
          <FormSelect
            label="Course of choice"
            name="course"
            placeholder="Select your course of choice"
            options={coursesOptions}
            formValue={formData.course}
            handleChange={handleChange}
          />
          <FormInput
            label="Where did you find out about us?"
            type=""
            name="aboutUs"
            placeholder="Where did you find out about us?"
            formValue={formData.aboutUs}
            handleChange={handleChange}
          />
          <FormSelect
            label="Would you need help with paying your tuition?"
            name="tuitionHelp"
            placeholder="Yes/No"
            options={yesOrNoOptions}
            formValue={formData.tuitionHelp}
            handleChange={handleChange}
          />
          <div className="md:grid grid-cols-2 gap-8">
            <FormSelect
              label="Do you have a laptop?"
              name="laptopOwner"
              placeholder="Yes/No"
              options={yesOrNoOptions}
              formValue={formData.laptopOwner}
              handleChange={handleChange}
            />
            <FormSelect
              label="Do you need help acquiring a laptop?"
              name="laptopHelp"
              placeholder="Yes/No"
              options={yesOrNoOptions}
              formValue={formData.laptopHelp}
              handleChange={handleChange}
            />
          </div>

          <FormSelect
            label="Are you currently employed?"
            name="employmentStatus"
            placeholder="Yes/No"
            options={yesOrNoOptions}
            formValue={formData.employmentStatus}
            handleChange={handleChange}
          />
          <SubmitButton text="submit" />
          {status.success && (
            <p className="text-green-500 text-center mt-2 text-md font-semibold">
              Thank you! Your submission has been received.
            </p>
          )}
          {status.failed && (
            <p className="text-red-500 text-center mt-2 text-md font-semibold">
              Oops! There was a problem submitting your form.
            </p>
          )}
        </form>
      </Container>
    </div>
  )
}
export default Enroll
