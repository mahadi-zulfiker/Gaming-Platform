
const Contact = () => {
    return (
        <div className="bg-white pb-32 text-black text-lg font-medium ">
            <div className="bg-[url('/pic-bg/bg-contact.png')] h-screen px-32 text-white text-center">
                <h1 className="mx-auto w-1/3 text-4xl pt-48 text-white px-20 pb-6 border-b-4  border-white font-semibold">Contact Us</h1>
                <p className="w-1/2 mx-auto mt-10">Get in Touch with Gaming Conventions Central
                    We love to hear from our community! Whether you have questions, feedback, or need assistance, there are multiple ways to reach us. Below you’ll find all the information you need to get in touch with the Gaming Conventions Central team.</p>
            </div>
            <div className="text-center">
                <h1 className=" text-4xl text-bold mb-5 mt-20 " >Contact Information</h1>
                <p className="mb-5">General Inquiries
                    For general questions about our content, conventions, or any other queries, please email us at:</p>
                <p>Email: info@gamingconventionscentral.com</p>


            </div>
            <div className="text-center">
                <p className=" text-4xl text-bold mb-5 mt-20 ">Customer Support</p>

                <h4>Need help with your account, tickets, or any other issues? Our customer support team is here to assist you.
                </h4>
                <h4>Email: support@gamingconventionscentral.com</h4>
                <h4>Phone: +1 (800) 123-4567</h4>
                <h4>
                    Hours: Monday to Friday, 9 AM - 6 PM (EST)</h4>
            </div>
            <div className="text-center">
                <h1 className=" text-4xl text-bold mb-5 mt-20 ">Media Inquiries</h1>
                <h4>For press releases, media partnerships, or interview requests, contact our media relations team.</h4>
                <h4>Email: media@gamingconventionscentral.com</h4>
            </div>

            <div className="text-center">
                <p className=" text-4xl text-bold mb-5 mt-20 ">
                    Partnership Opportunities</p>

                <h1 >

                    Interested in partnering with us for events or sponsorships? Reach out to our partnerships team.
                </h1>

                <h1>Email: partnerships@gamingconventionscentral.com</h1>
                <h3 className="mt-3">Social Media
                    Stay connected with us through our social media channels. Follow us for the latest updates, news, and exclusive content:
                </h3>
            
                    <div className="flex flex-col ">
                        <a href="https://www.facebook.com/" className="mt-3">Facebook: <span className="underline text-sky-500"> facebook.com/gamingconventionscentral</span></a>
                    
                        <a href="https://www.twitter.com/" className="my-3">Twitter: <span className="underline text-sky-500"> twitter.com/gamingcons</span></a>
                   
                        <a href="https://www.instagram.com/">Instagram: <span className="underline text-sky-500">instagram.com/gamingconventionscentral</span></a>
                   
                        <a href="https://www.linkedIn.com/" className="my-3">LinkedIn: <span className="underline text-sky-500">linkedin.com/company/gamingconventionscentral</span></a>
                    </div>
               
            </div>
            <div className="text-center">
                <p className=" text-4xl text-bold mb-5 mt-20 ">Office Location
                </p>
                <p>For those who wish to visit us or send mail, here is our office address:</p>

                <h4>Gaming Conventions Central Headquarters</h4>
                <h4>1234 Gamer Street, Suite 567</h4>
                <h4>Gaming City, GC 89012</h4>
                <h4>United States</h4>
            </div>
        </div>
    );
};

export default Contact;