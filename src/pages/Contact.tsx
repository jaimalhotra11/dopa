import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mqaeqkkw"); // Replace "mqaeqkkw" with your Formspree form ID

  return (
    <div className="pt-16">
      <div className="bg-[#116DEC] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl">Get in touch with us for any inquiries or support.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              {state.succeeded ? (
                <p className="text-green-500">Thanks for your message! We'll get back to you soon.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                      placeholder="your@email.com"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC] h-32"
                      placeholder="Your message..."
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-[#116DEC] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#116DEC] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">204 second floor, Vipul Plaza, Sector 81, Faridabad, Haryana 121004</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#116DEC] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 95600-33156, 95600-33157</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#116DEC] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@dopaminegym.in</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-[#116DEC] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-gray-600">Open 19/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Find Us On Map</h3>
                <div className="h-[300px] bg-gray-200 rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.810730698317!2d77.34623757382545!3d28.388817195109382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddeee2ae7687%3A0x6702bf0dbc46a8fe!2sDopamine%20Feel%20Good%20Gym!5e1!3m2!1sen!2sin!4v1733299707386!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
