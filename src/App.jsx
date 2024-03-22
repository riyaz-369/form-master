import './App.css'
import GrandFather from './components/GrandFather/GrandFather';
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'

function App() {
  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
  }
  const handleUpdateProfile = data => {
    console.log('update profile data', data)
}


  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={'Sign up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h3>Sign up</h3>
          <p>Please sign up right now!</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile update'} handleSubmit={handleUpdateProfile} button= {'Update'}>
        <div>
          <h3>Update profile</h3>
          <p>Always keep update your profile.</p>
        </div>
      </ReuseableForm> */}

      <GrandFather></GrandFather>
    </>
  )
}

export default App
