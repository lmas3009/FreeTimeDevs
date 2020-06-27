import React, {Component} from 'react';
class Footer extends Component{
    render()
    {
        return(
            <footer class="text-gray-500 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Specializations</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-white">Cross Platform App Development</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-white">Web Development</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-white">UI/UX Designs</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-white">PWA Development</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Our Projects</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-white" href="http://www.samsiddhi.klh.edu.in">Samsiddhi(KLUniversity-Hyd Clubs)</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-white" href="http://www.ivarna.klh.edu.in">Ivarna(KLUniversity TechFest)</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-white" href="#">LockDown Mart(Token Generator)</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-white" href="#">Student Management System</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-white" href="#">Save2Wealth</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Menu</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-white">Our Team</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-white">About Us</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-white">Contact Us</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-white"></a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE TO OUR UPCOMING PROJECT UPDATES</h2>
        <div class="flex xl:flex-no-wrap md:flex-no-wrap lg:flex-wrap flex-wrap justify-center md:justify-start">
          <input class="w-40 sm:w-auto bg-gray-800 rounded text-white xl:mr-4 lg:mr-0 sm:mr-4 mr-2 border border-gray-700 focus:outline-none focus:border-indigo-500 text-base py-2 px-4" placeholder="Email" type="text"/>
        </div>
        <p class="text-gray-600 text-sm mt-2 md:text-left text-center">
        <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
        </p>
      </div>
    </div>
  </div>
  <div class="bg-gray-800">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">FreeTimeDevs</span>
      </a>
      <p class="text-sm text-gray-600 sm:ml-6 sm:mt-0 mt-4">© 2020 FreeTimeDevs
        <a href="#" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@FTD</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-600">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-600">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-600">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-600">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
        )
    }
}
export default Footer;