import React, { useState, useEffect } from 'react';
import { Label, TextInput, Button } from 'flowbite-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [referral, setReferral] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, error } = await signUp(email, password, name, country, phone);
    if (error) {
      console.error('Error signing up:', error);
    } else {
      console.log('User signed up:', user);
      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setCountry('');
      setPhone('');
      setReferral('');
      setTermsAccepted(false);
    }
  };

  return (
    <div className="bg-primary-600 w-full  h-full flex justify-center items-center cover  relative gap-5">
      <img src="/image/wigglynet3.png" alt="" className='absolute top-0 left-0 w-full h-full object-cover'/>
      <div className=" flex flex-col h-full justify-center items-center w-2/5 z-10 ">
     <a href="/"><img src="/image/footer-logo.png" alt="" loading="lazy" className='h-16 absolute top-5 left-0 pl-8'/></a>
      <div className='bg-paysparq/40 rounded-lg p-10 px-24'>
        <img src="/image/main-screen-left.png" alt="" loading="lazy" width={300} />
        </div>
      </div>
      <div className=" bg-paysparq p-20 flex justify-center items-center w-3/5 flex-col border">
        <div className=' justify-start items-center  border-primary-600 border p-10  rounded-lg'>
          <h2 className='text-xl text-secondary font-interSB pb-6 text-center'>Create Account</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Full Name" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="Paysparq Limited"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="example@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput
                id="password"
                type="password"
                placeholder="********"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="country" value="Country" />
              </div>
              <select
                id="country"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="form-select"
              >
                <option value="">Select a country</option>
                {countries
                  .sort((a, b) => a.name.common.localeCompare(b.name.common))
                  .map(country => (
                    <option key={country.cca3} value={country.name.common}>
                      {country.flag} {country.name.common}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone" />
              </div>
              <PhoneInput
                country={'ng'}
                onlyCountries={['ng', 'us', 'gb', 'ca', 'au']}
                id="phone"
                type="text"
                placeholder="Phone"
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true
                }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="referral" value="Referral Code" />
              </div>
              <TextInput
                id="referral"
                type="text"
                placeholder="Referral Code"
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
              />
            </div>
            <div>
              <input
                id="termsAccepted"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <Label htmlFor="termsAccepted" value="I have read and agree to Cleva’sTerms of Service and  Privacy Policy." />
            </div>
            <Button type="submit" className='bg-secondary'>Sign Up</Button>
          </form>

          <div className='pt-8 flex items-center justify-center gap-4 relative'><span className='text-secondary text-base'>Do have an account?</span><a href="/auth/sign-in" className='text-primary-600 text-base relative z-10 font-interSB'>Sign In</a></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;