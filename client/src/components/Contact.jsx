import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    try {
      // Make a POST request to the backend endpoint
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_HOST}/api/v1/contact`,
        {
          name,
          email,
          message,
        }
      );

      if (response.status === 200) {
        setLoading(false);
        toast.success("Message sent to Nawaz!", {});

        console.log("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error sending message");
    }
  };

  return (
    <div id="#contact" className="relative bg-white py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            className="w-full h-auto object-cover lg:rounded-lg"
            src="contact-me.svg"
            alt="contact-illustration"
          />
        </div>
        <div className="lg:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg mb-8">
            If you&apos;d like to get in touch with me, feel free to reach out
            using the contact information below or by filling out the contact
            form.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="text-black">shaikahmadnawaz@gmail.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Phone</h2>
              <p className="text-black">+91 95029 90520</p>
            </div>
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium text-black mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border-black border-2 rounded-md focus:ring-2 focus:ring-black focus:border-black p-2"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-black mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  className="w-full border-black border-2 rounded-md focus:ring-2 focus:ring-slate focus:border-black p-2"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                className="block text-sm font-medium text-black mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border-black border-2 rounded-md focus:ring-2 focus:ring-black focus:border-black p-2"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                {loading ? (
                  <>
                    Sending{" "}
                    <Loader2 className="w-4 h-4 ml-2 font-semibold animate-spin" />
                  </>
                ) : (
                  <>Send Message</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
