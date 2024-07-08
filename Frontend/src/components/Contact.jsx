import React from 'react';

function Contact() {
  return (
    <>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='w-full max-w-md mx-auto p-6 bg-gray-600 rounded-lg shadow-md'>
          <h2 className='text-3xl text-center text-pink-600 font-bold mb-6'>Contact Us</h2>
          <form action=''>

            <div className='mb-4'>
              <label className='block text-white text-sm font-semibold mb-2' htmlFor='name'>Your Name</label>
              <input
                placeholder='name' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
                required type='text' id='name' />
            </div>

            <div className='mb-4'>
              <label className='block text-white text-sm font-semibold mb-2' htmlFor='email'>Your Email</label>
              <input
                placeholder='name@example.com' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
                required type='email' id='email' />
            </div>

            <div className='mb-4'>
              <label className='block text-white text-sm font-semibold mb-2' htmlFor='message'>Your message</label>
              <textarea rows='4'
                placeholder='Type your message here...' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
                required id='message' />
            </div>

            <div>
              <button type='submit' className='bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-none'>Send Message</button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;




