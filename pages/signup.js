import AltLayout from '../components/AltLayout'
import ThunderboltSVG from '../components/svg/ThunderboltSVG';
import FormInput from '../components/form/FormInput';

const SignUp =() => {
  return (
    <AltLayout>
      <div className="flex flex-col items-center mt-12">
        <div className="flex" >
          <ThunderboltSVG />
          <h1 className="text-2xl font-medium">Let's Get Started</h1>
        </div>
        <h2 className="text-xl font-extrabold my-4">Sign Up</h2>
      </div>
      <form className="flex flex-col w-full">
        <FormInput
          content="Your Name"
          placeHolder="First and Last Name"
          type="text"
        />
        <FormInput
          content="E-mail"
          placeHolder="email@email.com"
          type="email"
        />
        <FormInput
          content="Password"
          placeHolder="password"
          type="password"
        />
        <FormInput
          content="Verify Password"
          placeHolder="password"
          type="password"
        />
      </form>
      <h3 className="font-bold my-6">You're one step closer to achieving your goals</h3>
      <div className="flex w-full justify-around my-10">
        <button className="text-xs">Cancel</button>
        <button className="text-xs text-white px-6 py-1 bg-indigo-500 border-indigo-500 rounded">Continue</button>
      </div>
    </AltLayout>
  )
}

export default SignUp