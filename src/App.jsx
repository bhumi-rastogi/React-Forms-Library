import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { register, submit, formState: { errors } } = useForm()

  const submission = (data) => {
   alert("Registration Successfully!")
  }

  return (
    <>
    <h1>
      React Forms
    </h1>
      <form onSubmit={()=>submit(submission)}>
        <div className='box'>
          <div>

            <input type="text" placeholder='Type your First name here....' {...register('firstName', { required: "First name is required feild" })} />

            <p>
              {errors?.firstName?.message}
            </p>

          </div>

          <div>
            
            <input type="text" placeholder='Type your Last name here...' {...register('lastName', { required: "Last name is a required feild" })} />

            <p>
              {errors?.lastName?.message}
            </p>
            
          </div>

          <div>
            
            <input type="email" placeholder='Type your Email here...'  {...register('email',  {required: "Enter a valid email address" },{pattern : {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}, message: "Enter a valid email address"})} />

            <p>
              {errors?.email?.message}
            </p>

          </div>

          <div>
            
            <input type="password" placeholder='Be Secretive!!' {...register('password', {required: "Enter a password containing at least 5 characters" ,  minLength:{value: 5, message: "Password must be at least 5 characters"}
           ,maxLength : {value: 20, message: "Password must be at most 20 characters" }})} />

            <p>
              {errors?.password?.message}
            
            </p>
          </div>

          <button type='submit'>Register</button>
        </div>
        
      </form>
    </>
  )
}

export default App