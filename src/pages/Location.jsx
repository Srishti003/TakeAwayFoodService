

// import React from 'react';

// function Location() {
//   return (
//     <div clasName= "flex flex-wrap justify-content">
//         <div className="mt-40 mb-40  bg-slate-700 rounded-xl ">
//       <div className="bg-slate-900/30 w-full text-center rounded-xl text-slate-200 text-xl font-semibold">Store Location</div>
      
//       <iframe
//         // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8772839141143!2d75.5626593760825!3d26.84385517668831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1715778923955!5m2!1sen!2sin"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.2746823508361!2d75.8100967696324!3d26.80498479854451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc960499a3931%3A0x76c79c2be450656f!2s68%2F43%2C%20Pratap%20Nagar%2C%20in%20front%20of%20Haldighati%20Udhyaan%2C%20Sanganer%2C%20Pratap%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302033!5e0!3m2!1sen!2sin!4v1715800481867!5m2!1sen!2sin"
//         width="800"
//         height="600"
//         style={{ border: '3px solid gray', borderRadius: '10px' }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </div>

//     </div>
    
//   );
// }

// export default Location;


import React from 'react';

function Location() { 
  return (
    <div className="flex justify-center mt-20 mb-40 w-full">
      <div className="max-w-screen-md w-full sm:w-50vw">
        <div className="bg-slate-700 rounded-xl overflow-hidden">
          <div className="bg-slate-900/30 w-full text-center rounded-xl text-slate-200 text-xl font-semibold py-2">
            Store Location
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.2746823508361!2d75.8100967696324!3d26.80498479854451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc960499a3931%3A0x76c79c2be450656f!2s68%2F43%2C%20Pratap%20Nagar%2C%20in%20front%20of%20Haldighati%20Udhyaan%2C%20Sanganer%2C%20Pratap%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302033!5e0!3m2!1sen!2sin!4v1715800481867!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: '3px solid gray', borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;


