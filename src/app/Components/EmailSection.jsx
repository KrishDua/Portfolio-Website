// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import Form from './Form'
// function EmailSection() {
//   return (
// <section id='contact' className='text-white mb-5 scroll-mt-32' >
//     <div className="bg-[#0f172a] border border-cyan-500 
//     rounded-2xl w-full mb-10 shadow-lg p-8 
//     mx-auto transition-transform duration-300 
//     hover:scale-105 hover:shadow-2xl">
//         <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
//             Contact Me
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:px-6 md:px-8">
//         <div>
//         <div className="lg:col-span-5 h-1/2 flex justify-center mt-4 lg:mt-0">
//           <Image 
//             src="/contact.jpeg"
//             alt="Krish Dua"
//             width={500}
//             height={500}
//             className="rounded-xl shadow-lg"
//           />
//         </div>
//             <h5 className="text-xl font-bold text-cyan-500 my-2">
//           Let&apos;s Connect
//         </h5>
//         <p className="text-[#ADB7BE] mb-6 max-w-xl leading-relaxed">
//             Thanks for stopping by! I&apos;m always happy to connect whether you have a job opening, a project idea, or simply want to talk tech. 
//             Drop me a message anytime, and I&apos;ll get back to you as soon as I can.
//         </p>
//         <div className="socials flex flex-row justify-around gap-5">
//         <Link href="https://leetcode.com/u/krish312/" target='_blank'>
//             <Image 
//             height={50}
//             width={50}
//             className="rounded-xl shadow-lg"
//             src="/leetcode.jpg" 
//             alt="Leetcode Icon" />
//           </Link>
//           <Link href="https://codeforces.com/profile/hkrishna" target='_blank'>
//             <Image 
//             height={100}
//             width={80}
//             className="rounded-xl shadow-lg"
//             src="/codeforces.jpg" 
//             alt="Codeforces Icon" />
//           </Link>
//           <Link href="https://www.codechef.com/users/krish_dua_312" target='_blank'>
//             <Image 
//             height={50}
//             width={50}
//             className="rounded-xl shadow-lg"
//             src="/codechef.jpg" 
//             alt="Codechef Icon" />
//           </Link>
//           <Link href="https://github.com/KrishDua" target='_blank'>
//             <Image 
//             height={50}
//             width={50}
//             className="rounded-xl shadow-lg"
//             src="/github.svg" 
//             alt="Github Icon" />
//           </Link>
//           <Link href="https://www.linkedin.com/in/krish-dua-9202a4272/" target='_blank'>
//             <Image 
//             height={50}
//             width={50}
//             className="rounded-xl shadow-lg"
//             src="/linkedin.jpg" 
//             alt="Linkedin Icon" />
//           </Link>
//         </div>
//         </div>
//             <div>
//             <Form />
//             </div>
//         </div>
//     </div> 
// </section>
//   )
// }

// export default EmailSection
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Form from './Form'

function EmailSection() {
  return (
    <section id="contact" className="text-white mb-5 scroll-mt-34">
      <div className="bg-[#0f172a] border border-cyan-500 rounded-2xl w-full mb-10 shadow-lg p-8 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image and Socials */}
          <div className="flex flex-col items-center justify-center text-center">
            <Image
              src="/contact.jpeg"
              alt="Krish Dua"
              width={300}
              height={300}
              className="rounded-xl shadow-lg mb-6"
            />
            <h5 className="text-xl font-bold text-cyan-500 mb-2">
              Let&apos;s Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              Thanks for stopping by! I&apos;m always happy to connect — whether
              it's about a job opening, a project idea, or just tech talk. Drop
              me a message anytime!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="https://leetcode.com/u/krish312/" target="_blank">
                <Image
                  height={40}
                  width={40}
                  className="rounded shadow-md"
                  src="/leetcode.jpg"
                  alt="Leetcode Icon"
                />
              </Link>
              <Link href="https://codeforces.com/profile/hkrishna" target="_blank">
                <Image
                  height={80}
                  width={60}
                  className="rounded shadow-md"
                  src="/codeforces.jpg"
                  alt="Codeforces Icon"
                />
              </Link>
              <Link href="https://www.codechef.com/users/krish_dua_312" target="_blank">
                <Image
                  height={40}
                  width={40}
                  className="rounded shadow-md"
                  src="/codechef.jpg"
                  alt="Codechef Icon"
                />
              </Link>
              <Link href="https://github.com/KrishDua" target="_blank">
                <Image
                  height={40}
                  width={40}
                  className="rounded shadow-md"
                  src="/github.svg"
                  alt="Github Icon"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/krish-dua-9202a4272/" target="_blank">
                <Image
                  height={40}
                  width={40}
                  className="rounded shadow-md"
                  src="/linkedin.jpg"
                  alt="Linkedin Icon"
                />
              </Link>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmailSection
