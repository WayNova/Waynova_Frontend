// import React from 'react';

// const Team = () => {
//   const teamMembers = [
//     {
//       name: "Alex Johnson",
//       role: "CEO & Co-Founder",
//       initials: "AJ",
//       color: "bg-gradient-to-br from-blue-500 to-blue-600",
//       description: "Former federal procurement officer with 15+ years in government contracting and grant management.",
//       links: [
//         { icon: "fab fa-linkedin", href: "#", color: "hover:text-blue-600" },
//         { icon: "fab fa-twitter", href: "#", color: "hover:text-blue-600" }
//       ],
//       delay: 100
//     },
//     {
//       name: "Samara Patel",
//       role: "CTO & Co-Founder",
//       initials: "SP",
//       color: "bg-gradient-to-br from-green-500 to-green-600",
//       description: "AI/ML expert and former principal engineer at major tech companies, specializing in natural language processing.",
//       links: [
//         { icon: "fab fa-linkedin", href: "#", color: "hover:text-green-600" },
//         { icon: "fab fa-github", href: "#", color: "hover:text-green-600" }
//       ],
//       delay: 200
//     },
//     {
//       name: "David Kim",
//       role: "VP of Sales",
//       initials: "DK",
//       color: "bg-gradient-to-br from-purple-500 to-purple-600",
//       description: "20+ years in B2B sales with extensive experience in government and enterprise software solutions.",
//       links: [
//         { icon: "fab fa-linkedin", href: "#", color: "hover:text-purple-600" },
//         { icon: "fab fa-twitter", href: "#", color: "hover:text-purple-600" }
//       ],
//       delay: 300
//     }
//   ];

//   return (
//     <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Vision Statement */}
//         <div className="text-center mb-20">
//           <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-900 mb-8">
//             Our Mission
//           </h2>
//           <div data-aos="fade-up" data-aos-delay="200" className="max-w-4xl mx-auto">
//             <p className="text-2xl text-gray-700 leading-relaxed mb-8">
//               To revolutionize public sector sales by making grant discovery as simple as searching the web, 
//               empowering sales teams to focus on what they do best: building relationships and closing deals.
//             </p>
//             <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
//           </div>
//         </div>
        
//         {/* Team Members */}
//         <div className="text-center mb-16">
//           <h3 data-aos="fade-up" className="text-3xl font-bold text-gray-900 mb-4">
//             Meet Our Team
//           </h3>
//           <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
//             Experienced professionals from government, technology, and sales backgrounds
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <div 
//               key={index}
//               data-aos="fade-up" 
//               data-aos-delay={member.delay} 
//               className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all"
//             >
//               <div className={`w-24 h-24 ${member.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
//                 <span className="text-white text-2xl font-bold">{member.initials}</span>
//               </div>
//               <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
//               <div className={`font-medium mb-4 ${
//                 member.role.includes('CEO') ? 'text-blue-600' :
//                 member.role.includes('CTO') ? 'text-green-600' :
//                 'text-purple-600'
//               }`}>
//                 {member.role}
//               </div>
//               <p className="text-gray-600 mb-4">{member.description}</p>
//               <div className="flex justify-center space-x-3">
//                 {member.links.map((link, linkIndex) => (
//                   <a 
//                     key={linkIndex}
//                     href={link.href} 
//                     className={`text-gray-400 ${link.color} transition-colors`}
//                   >
//                     <i className={`${link.icon} text-xl`}></i>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;