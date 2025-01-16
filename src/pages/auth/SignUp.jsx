import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function SignUp() {
  return (
    <div className="bg-paysparq w-full p-24 h-full flex justify-center items-center gap-5">
      <div className="bg-primary-600 flex justify-center items-center">jajshhshsjskdjjffh</div>
      <div className="flex justify-center items-center flex-col">
       <div>
       <h2>Create Account</h2>
        <form className="flex max-w-md flex-col gap-4">
        <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Full Name" />
            </div>
            <TextInput id="name" type="name" placeholder="Paysparq Limited" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput id="email" type="email" placeholder="example@gmail.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Phone Number" />
            </div>
            <PhoneInput
              country={'ng'}
              onlyCountries={['ng', 'us', 'gb', 'ca', 'au']}
              value={''}
              onChange={phone => console.log(phone)}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true
              }}
              class
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="country" value="" />
            </div>
            <TextInput id="country" type="country" required/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Referral code (Optional)" />
            </div>
            <TextInput id="password" type="password" required placeholder="Optional" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" className="bg-secondary">Create Account</Button>
        </form>
       </div>
      </div>
    </div>
  );
}

export default SignUp;