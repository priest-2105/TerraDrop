import Image from 'next/image'

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-sky to-earth">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
            alt="Contact us"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-header font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto px-6">
            Have questions about our reforestation projects? Want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-header font-bold text-earth mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body font-bold text-soil mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth focus:border-transparent font-body"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-bold text-soil mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth focus:border-transparent font-body"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-body font-bold text-soil mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth focus:border-transparent font-body"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-body font-bold text-soil mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth focus:border-transparent font-body">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Volunteer Information</option>
                    <option>Donation Question</option>
                    <option>Media Request</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-body font-bold text-soil mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth focus:border-transparent font-body resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-earth text-white font-header font-bold rounded-lg hover:bg-soil transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-header font-bold text-earth mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="bg-sky rounded-2xl p-8">
                  <h3 className="text-2xl font-header font-bold text-earth mb-4">
                    General Inquiries
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 mr-4">
                        <Image
                          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop"
                          alt="Email"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-body font-bold text-soil">Email</div>
                        <div className="font-body text-soil">hello@terradrop.org</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 mr-4">
                        <Image
                          src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=100&h=100&fit=crop"
                          alt="Phone"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-body font-bold text-soil">Phone</div>
                        <div className="font-body text-soil">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 mr-4">
                        <Image
                          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop"
                          alt="Address"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-body font-bold text-soil">Address</div>
                        <div className="font-body text-soil">
                          123 Forest Drive<br />
                          San Francisco, CA 94105<br />
                          United States
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-soil text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-header font-bold mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 font-body">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-earth text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-header font-bold mb-4">
                    Follow Our Progress
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 mr-4">
                        <Image
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop"
                          alt="Website"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-body font-bold">Website</div>
                        <div className="font-body">www.terradrop.org</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 mr-4">
                        <Image
                          src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=100&h=100&fit=crop"
                          alt="Social Media"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-body font-bold">Social Media</div>
                        <div className="font-body">@TerraDropGlobal</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 mr-4">
                        <Image
                          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop"
                          alt="Live Dashboard"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-body font-bold">Live Dashboard</div>
                        <div className="font-body">track.terradrop.org</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-6 bg-sky">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-header font-bold text-earth mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-xl font-body text-soil mb-12">
            Can't find what you're looking for? Check out our comprehensive FAQ section.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-header font-bold text-earth mb-2">
                How do you track the trees?
              </h3>
              <p className="font-body text-soil">
                Every tree is planted with GPS coordinates and monitored through regular drone surveys.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-header font-bold text-earth mb-2">
                What species do you plant?
              </h3>
              <p className="font-body text-soil">
                We plant native species specific to each region, ensuring ecological compatibility.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-header font-bold text-earth mb-2">
                Can I volunteer with TerraDrop?
              </h3>
              <p className="font-body text-soil">
                Yes! We offer various volunteer opportunities both in the field and remotely.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-header font-bold text-earth mb-2">
                How can my company partner with you?
              </h3>
              <p className="font-body text-soil">
                We offer corporate partnerships for large-scale reforestation projects and sustainability initiatives.
              </p>
            </div>
          </div>
          <button className="mt-12 px-8 py-4 bg-earth text-white font-header font-bold rounded-lg hover:bg-soil transition-colors">
            View All FAQs
          </button>
        </div>
      </section>
    </main>
  )
} 