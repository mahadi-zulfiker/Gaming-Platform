import { FaBiohazard } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-white text-black pb-24 pt-5 px-4 sm:px-6 lg:px-20">

            {/* Hero Section */}
            <div className="bg-[url('/pic-bg/bg-pic-1.jpg')] bg-cover bg-center px-4 sm:px-8 lg:px-32 text-white flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl lg:text-5xl font-bold mb-8 lg:mb-16 mt-12">About Us</h1>
                <p className="text-lg lg:text-xl font-medium mb-8 flex items-start gap-4">
                    <FaBiohazard className="w-6 lg:w-14 mt-1" />
                    At Gaming Conventions Central, our mission is to unite gamers worldwide by providing a comprehensive, up-to-date resource for all things related to gaming conventions. Whether you are a veteran attendee or a newcomer, our platform is here to guide you in discovering, planning, and making the most of the best gaming events around the globe.
                </p>
            </div>

            {/* Offerings Section */}
            <div className="bg-[url('/pic-bg/bg-3.jpg')] bg-cover bg-center mt-10 py-12 px-4 sm:px-8 lg:px-32 text-white">
                <p className="mb-12 mt-16 text-3xl lg:text-4xl font-bold text-center underline">What We Offer</p>
                <ul className="text-lg lg:text-xl font-medium list-disc mx-auto max-w-3xl">
                    <li className="mb-8">
                        <p className="mb-3 font-bold text-xl lg:text-2xl">Comprehensive Event Listings</p>
                        <ul className="list-disc ml-5 lg:ml-7">
                            <li className="mt-3"><span className="font-bold text-slate-200">Global Coverage:</span> From massive expos like E3 and Gamescom to local fan gatherings, our event calendar covers conventions worldwide.</li>
                            <li className="mt-3"><span className="font-bold text-slate-200">Detailed Information:</span> Each event listing includes dates, locations, ticket prices, schedules, and links to official sites for easy access.</li>
                        </ul>
                    </li>
                    <li className="mb-8">
                        <p className="mb-3 font-bold text-xl lg:text-2xl">In-Depth Reviews</p>
                        <ul className="list-disc ml-5 lg:ml-7">
                            <li className="mt-3"><span className="font-bold text-slate-200">Firsthand Experiences:</span> Our team and community members attend conventions and provide detailed reviews, complete with photos and videos.</li>
                            <li className="mt-3"><span className="font-bold text-slate-200">Event Highlights:</span> Discover what made each convention special, from exclusive game reveals to unique panel discussions.</li>
                        </ul>
                    </li>
                    <li className="mb-8">
                        <p className="mb-3 font-bold text-xl lg:text-2xl">Exclusive News and Updates</p>
                        <ul className="list-disc ml-5 lg:ml-7">
                            <li className="mt-3"><span className="font-bold text-slate-200">Latest Announcements:</span> Stay ahead of the curve with breaking news on upcoming conventions, special guests, and game previews.</li>
                            <li className="mt-3"><span className="font-bold text-slate-200">Insider Info:</span> Get the scoop on behind-the-scenes details and insider tips from our network of industry contacts.</li>
                        </ul>
                    </li>
                    <li className="mb-8">
                        <p className="mb-3 font-bold text-xl lg:text-2xl">Community Connection</p>
                        <ul className="list-disc ml-5 lg:ml-7">
                            <li className="mt-3"><span className="font-bold text-slate-200">Forums and Discussions:</span> Engage with other gamers, share your convention experiences, ask questions, and find tips.</li>
                            <li className="mt-3"><span className="font-bold text-slate-200">Meetups and Networking:</span> Organize meetups with fellow attendees and make lasting connections within the gaming community.</li>
                        </ul>
                    </li>
                    <li className="mb-8">
                        <p className="mb-3 font-bold text-xl lg:text-2xl">Tips and Guides</p>
                        <ul className="list-disc ml-5 lg:ml-7">
                            <li className="mt-3"><span className="font-bold text-slate-200">Preparation Tips:</span> Learn how to prepare for conventions, from what to pack to how to navigate large event spaces.</li>
                            <li className="mt-3"><span className="font-bold text-slate-200">Survival Guides:</span> Our guides cover everything you need to know to have a smooth and enjoyable convention experience, including managing schedules, budgeting, and finding accommodations.</li>
                        </ul>
                    </li>
                </ul>
                <h3 className="text-2xl lg:text-3xl underline text-center mt-10 mb-7 font-bold">Our Vision</h3>
                <p className="text-xl lg:text-2xl font-semibold text-center">At Gaming Conventions Central, we envision a world where every gamer has the opportunity to experience the excitement and community spirit of gaming conventions. We aim to support and grow the global gaming community by providing resources that enhance the convention experience for everyone, from casual gamers to industry professionals.</p>
            </div>

            {/* Team Section */}
            <div className="bg-gray-300 p-5 sm:p-10 mt-16 rounded-lg">
                <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center underline">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "John Doe",
                            title: "Founder & CEO",
                            description: "A lifelong gamer and industry veteran, John has over 20 years of experience in game development and event management. His vision and leadership drive the mission of Gaming Conventions Central."
                        },
                        {
                            name: "Jane Smith",
                            title: "Chief Content Officer",
                            description: "Jane brings a wealth of knowledge in gaming journalism and community engagement. She oversees all content, ensuring that our reviews, guides, and news updates are informative and engaging."
                        },
                        {
                            name: "Alex Johnson",
                            title: "Technical Lead",
                            description: "With a background in web development and IT, Alex ensures that our platform is user-friendly, secure, and always up-to-date with the latest technological advancements."
                        },
                        {
                            name: "Emily Davis",
                            title: "Community Manager",
                            description: "Emily is the heart of our community, managing forums, social media, and customer support. She fosters a welcoming and inclusive environment for all gamers."
                        },
                        {
                            name: "Mark Wilson",
                            title: "Events Coordinator",
                            description: "Mark's extensive experience in event planning helps us maintain comprehensive and accurate event listings. He liaises with convention organizers to bring you the latest information."
                        }
                    ].map((member, index) => (
                        <div key={index} className="bg-white p-4 sm:p-5 rounded-lg shadow-lg">
                            <p className="text-lg lg:text-xl font-bold mb-2">
                                <span className="text-xl lg:text-2xl font-bold"># {member.name}</span> - {member.title}
                            </p>
                            <p className="text-base lg:text-lg font-medium">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Commitment Section */}
            <div className="mt-20">
                <p className="text-lg lg:text-xl font-semibold bg-orange-200 p-5 text-center rounded-2xl">
                    Our Commitment: At Gaming Conventions Central, we are committed to fostering a safe, inclusive, and enjoyable environment for all gamers. We adhere to the highest standards of integrity and transparency in all our operations, ensuring that our content is accurate, unbiased, and helpful.
                </p>
            </div>

        </div>
    );
};

export default About;


