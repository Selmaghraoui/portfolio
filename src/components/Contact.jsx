import {
  Maximize2,
  Minus,
  X,
  Send,
  RotateCcw,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useContext, useState } from "react";
import AppContext from "./AppContext.ts";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const {
    commands,
    setCommands,
    currentCommand,
    setCurrentCommand,
    currentRepo,
    setCurrentRepo,
  } = useContext(AppContext);

  const close = () => {
    setCommands([...commands, `${currentRepo} close`]);
    setCurrentCommand("close");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/s_elmaghraoui/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/elmaghraoui.soufiane",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/soufiane-el-maghraoui/",
    },
    { name: "Twitter", icon: Twitter, url: "https://x.com/soufianeelmag11" },
  ];

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: "600px" }}
    >
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md border overflow-hidden flex flex-col">
        {/* Top bar */}
        <div className="bg-gray-200 p-2 flex justify-between items-center">
          <div className="text-sm font-semibold text-gray-700">Contact</div>
          <div className="flex space-x-2">
            <button
              className="p-1 hover:bg-red-500 rounded-md group"
              onClick={close}
            >
              <X className="h-4 w-4 text-gray-700 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <RotateCcw className="h-4 w-4 inline-block mr-2" />
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Send className="h-4 w-4 inline-block mr-2" />
                Send Message
              </button>
            </div>
          </form>

          {/* Social Media Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Connect socially with Me
            </h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <social.icon className="h-6 w-6 text-gray-700" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
