

const Contact = () => {
    return (
        <div className="bg-gray-50 text-gray-800 text-lg font-medium">
            {/* Header Section */}
            <div className="bg-gray-800 bg-cover bg-center px-6 lg:px-32 text-white text-center flex flex-col justify-center items-center py-20">
                <h1 className="w-full lg:w-1/3 text-3xl lg:text-4xl py-20 px-4 lg:px-20 pb-8 border-b-4 border-white font-semibold">
                    Contact Us
                </h1>
                <p className="w-full lg:w-1/2 mt-8 lg:mt-10 text-sm lg:text-base">
                    Get in Touch with Gaming Conventions Central. We love to hear from our community! Whether you have questions, feedback, or need assistance, there are multiple ways to reach us. Below you’ll find all the information you need to get in touch with the Gaming Conventions Central team.
                </p>
            </div>

            {/* Contact Information Section */}
            <div className="text-center mt-16 lg:mt-20 px-6 lg:px-32">
                <h1 className="text-2xl lg:text-4xl font-bold mb-5">Contact Information</h1>
                <p className="mb-5 text-sm lg:text-base">
                    For general questions about our content, conventions, or any other queries, please email us at:
                </p>
                <p className="text-lg lg:text-xl font-semibold">Email: info@gamingconventionscentral.com</p>
            </div>

            {/* Customer Support Section */}
            <div className="text-center mt-16 lg:mt-20 px-6 lg:px-32">
                <h1 className="text-2xl lg:text-4xl font-bold mb-5">Customer Support</h1>
                <p className="mb-5 text-sm lg:text-base">
                    Need help with your account, tickets, or any other issues? Our customer support team is here to assist you.
                </p>
                <p className="text-lg lg:text-xl font-semibold">Email: support@gamingconventionscentral.com</p>
                <p className="text-lg lg:text-xl font-semibold">Phone: +1 (800) 123-4567</p>
                <p className="text-sm lg:text-base">Hours: Monday to Friday, 9 AM - 6 PM (EST)</p>
            </div>

            {/* Media Inquiries Section */}
            <div className="text-center mt-16 lg:mt-20 px-6 lg:px-32">
                <h1 className="text-2xl lg:text-4xl font-bold mb-5">Media Inquiries</h1>
                <p className="mb-5 text-sm lg:text-base">
                    For press releases, media partnerships, or interview requests, contact our media relations team.
                </p>
                <p className="text-lg lg:text-xl font-semibold">Email: media@gamingconventionscentral.com</p>
            </div>

            {/* Partnership Opportunities Section */}
            <div className="text-center mt-16 lg:mt-20 px-6 lg:px-32">
                <h1 className="text-2xl lg:text-4xl font-bold mb-5">Partnership Opportunities</h1>
                <p className="mb-5 text-sm lg:text-base">
                    Interested in partnering with us for events or sponsorships? Reach out to our partnerships team.
                </p>
                <p className="text-lg lg:text-xl font-semibold">Email: partnerships@gamingconventions.com</p>
            </div>

            {/* Social Media Section */}
            <div className="text-center mt-16 lg:mt-20 px-6 lg:px-32">
                <h1 className="text-2xl lg:text-4xl font-bold mb-5">Social Media</h1>
                <p className="text-sm lg:text-base">
                    Stay connected with us through our social media channels. Follow us for the latest updates, news, and exclusive content:
                </p>
                <div className="flex flex-col lg:flex-row lg:justify-center gap-4 mt-6">
                    <a href="https://www.facebook.com/" className="text-sky-600 underline">Facebook</a>
                    <a href="https://www.twitter.com/" className="text-sky-600 underline">Twitter</a>
                    <a href="https://www.instagram.com/" className="text-sky-600 underline">Instagram</a>
                    <a href="https://www.linkedin.com/" className="text-sky-600 underline">LinkedIn</a>
                </div>
            </div>

            {/* Office Location Section */}
            <div className="text-center mt-16 lg:mt-20 px-6 lg:px-32">
                <h1 className="text-2xl lg:text-4xl font-bold mb-5">Office Location</h1>
                <p className="mb-5 text-sm lg:text-base">
                    For those who wish to visit us or send mail, here is our office address:
                </p>
                <p className="text-lg lg:text-xl font-semibold">Gaming Conventions Central Headquarters</p>
                <p className="text-lg lg:text-xl">1234 Gamer Street, Suite 567</p>
                <p className="text-lg lg:text-xl">Gaming City, GC 89012</p>
                <p className="text-lg lg:text-xl">United States</p>
            </div>

            {/* Footer Padding */}
            <div className="pb-32" />
        </div>
    );
};

export default Contact;
