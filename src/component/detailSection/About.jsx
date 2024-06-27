import { FaBiohazard } from "react-icons/fa";


const About = () => {
    return (
        <div className="bg-white pb-24 pt-5 text-black px-20">



            <div className="bg-[url('/pic-bg/bg-pic-1.jpg')] h-screen px-32 text-white">
                <img src="" alt="" />

                <h1 className="text-4xl text-center font-bold mb-16 mt-44 ">About Us</h1>
                <p className=" text-lg font-medium mb-16 flex "> <FaBiohazard className="w-20 mt-1.5" /> At Gaming Conventions Central, our mission is to unite gamers worldwide by providing a comprehensive, up-to-date resource for all things related to gaming conventions. Whether you are a veteran attendee or a newcomer, our platform is here to guide you in discovering, planning, and making the most of the best gaming events around the globe.</p>

                <p className="mb-5  text-lg font-medium flex gap-1"> <FaBiohazard className="w-24 mt-1.5" />  Our Story
                    Gaming Conventions Central was born from a shared love of gaming and a recognition of the need for a dedicated hub to connect the community with the myriad of conventions happening each year. Our founders, passionate gamers and industry veterans, experienced firsthand the challenges of keeping track of events, finding detailed information, and deciding which conventions to attend. We launched Gaming Conventions Central to fill this gap, aiming to provide a single, user-friendly platform where gamers can find everything they need to know about gaming conventions.</p>
            </div>



            <div className="bg-[url('/pic-bg/bg-3.jpg')] mt-10  py-12 px-32 text-white" style={{ height: 1420 }}>

                <p className="mb-12 mt-16 text-3xl font-bold text-center underline"> What We Offer</p>

                <ul className=" text-lg font-medium list-disc w-2/3 mx-auto">

                    <li>
                        <p className="mb-3 font-bold text-xl"> Comprehensive Event Listings</p>

                        <ul className="mb-5 text-lg font-medium list-disc ms-7">
                            <li>
                            <span className="font-bold text-slate-200">  Global Coverage :</span> From massive expos like E3 and Gamescom to local fan gatherings, our event calendar covers conventions worldwide.
                            </li>
                            <li className="mt-3">
                            <span className="font-bold text-slate-200">  Detailed Information :</span> Each event listing includes dates, locations, ticket prices, schedules, and links to official sites for easy access.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <p className="mb-3 font-bold text-xl">In-Depth Reviews</p>

                        <ul className="mb-5 text-lg font-medium list-disc ms-7">
                            <li>
                            <span className="font-bold text-slate-200">  Firsthand Experiences :</span> Our team and community members attend conventions and provide detailed reviews, complete with photos and videos.
                            </li>
                            <li className="mt-3">
                            <span className="font-bold text-slate-200">  Event Highlights :</span> Discover what made each convention special, from exclusive game reveals to unique panel discussions.

                            </li>
                        </ul>
                    </li>

                    <li>
                        <p className="mb-3 font-bold text-xl">Exclusive News and Updates</p>

                        <ul className="mb-5 text-lg font-medium list-disc ms-7">
                            <li>
                            <span className="font-bold text-slate-200">  Latest Announcements :</span> Stay ahead of the curve with breaking news on upcoming conventions, special guests, and game previews.
                            </li>

                            <li className="mt-3">
                            <span className="font-bold text-slate-200">  Insider Info :</span> Get the scoop on behind-the-scenes details and insider tips from our network of industry contacts.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <p className="mb-3 font-bold text-xl">Community Connection</p>

                        <ul className="mb-5 text-lg font-medium list-disc ms-7">
                            <li>
                            <span className="font-bold text-slate-200">  Forums and Discussions :</span> Engage with other gamers, share your convention experiences, ask questions, and find tips.
                            </li>
                            <li className="mt-3">
                            <span className="font-bold text-slate-200">  Meetups and Networking :</span> Organize meetups with fellow attendees and make lasting connections within the gaming community.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <p className="mb-3 font-bold text-xl">Tips and Guides</p>

                        <ul className="mb-5 text-lg font-medium list-disc ms-7">
                            <li>
                            <span className="font-bold text-slate-200">  Preparation Tips :</span> Learn how to prepare for conventions, from what to pack to how to navigate large event spaces.
                            </li>
                            <li className="mt-3">
                               <span className="font-bold text-slate-200"> Survival Guides :</span> Our guides cover everything you need to know to have a smooth and enjoyable convention experience, including managing schedules, budgeting, and finding accommodations.
                            </li>

                        </ul>
                    </li>
                </ul>
               <h3 className="text-2xl underline text-center mt-10 mb-7 font-bold"> Our Vision</h3>
                <p className="text-xl text-semibold text-center">At Gaming Conventions Central, we envision a world where every gamer has the opportunity to experience the excitement and community spirit of gaming conventions. We aim to support and grow the global gaming community by providing resources that enhance the convention experience for everyone, from casual gamers to industry professionals.</p>
            </div>




            <div className="bg-gray-300 p-10 mt-16 rounded">


                <h2 className=" text-3xl font-bold mb-8 text-center underline"> Meet the Team  </h2>
                <div className="grid grid-cols-3 gap-10 ">
                    <div className=" bg-white p-5 rounded-lg">
                        <p className="text-lg font-bold mb-2"> <span className=" text-xl font-bold "># John Doe </span>- Founder & CEO</p>

                        <p className="mb-5 text-lg font-medium ">
                            A lifelong gamer and industry veteran, John has over 20 years of experience in game development and event management. His vision and leadership drive the mission of Gaming Conventions Central.</p>
                    </div>

                    <div className=" bg-white p-5 rounded-lg">

                        <p className="text-lg font-bold  mb-2"> <span className=" text-xl font-bold"># Jane Smith </span>-   Chief Content Officer</p>

                        <p className="mb-5 text-lg font-medium">Jane brings a wealth of knowledge in gaming journalism and community engagement. She oversees all content, ensuring that our reviews, guides, and news updates are informative and engaging.</p>
                    </div>

                    <div className=" bg-white p-5 rounded-lg">

                        <p className="text-lg font-bold mb-2"> <span className="text-xl font-bold"># Alex Johnson </span>-   Technical Lead</p>

                        <p className="mb-5 text-lg font-medium">With a background in web development and IT, Alex ensures that our platform is user-friendly, secure, and always up-to-date with the latest technological advancements.</p>
                    </div>

                    <div className=" bg-white p-5 rounded-lg">

                        <p className="text-lg font-bold mb-2"> <span className=" text-xl font-bold"># Emily Davis </span>-   Community Manager</p>

                        <p className="mb-5 text-lg font-medium">Emily is the heart of our community, managing forums, social media, and customer support. She fosters a welcoming and inclusive environment for all gamers.</p>
                    </div>

                    <div className=" bg-white p-5 rounded-lg">
                        <p className="text-lg font-bold mb-2"> <span className=" text-xl font-bold"># Mark Wilson</span>-   Events Coordinator</p>

                        <p className="mb-5 text-lg font-medium"> Mark is extensive experience in event planning helps us maintain comprehensive and accurate event listings. He liaises with convention organizers to bring you the latest information.</p>
                    </div>
                </div>
            </div>




            <div>
                <h2 className="text-3xl mt-20 mb-10 font-bold ">  Frequently Asked Questions (FAQ)</h2>

                <div className="text-black font-semibold w-2/3" >

                    <div className="collapse collapse-plus bg-slate-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl ">
                            Q : How do you choose which conventions to feature?
                        </div>
                        <div className="collapse-content">
                            <p className="mb-5 text-lg font-medium"> A : We select conventions based on their popularity, uniqueness, and relevance to the gaming community. Our goal is to cover a diverse range of events to cater to various interests.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-slate-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl ">
                            Q : Can I submit a convention to be listed on your site?
                        </div>
                        <div className="collapse-content">
                            <p className="mb-5 text-lg font-medium">A : Absolutely! We welcome submissions from event organizers and the community. Please visit our submission page for guidelines and to share details about your event.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-slate-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl ">
                            Q : How often is your site updated?
                        </div>
                        <div className="collapse-content">
                            <p className="mb-5 text-lg font-medium">A : Our team works tirelessly to keep our site current, with regular updates to event listings, reviews, and news sections. We strive to provide the latest information as soon as it becomes available.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-slate-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl ">
                            Q : Do you offer tickets for sale?
                        </div>
                        <div className="collapse-content">
                            <p className="mb-5 text-lg font-medium">A : While we don’t sell tickets directly, we provide links to official ticket vendors and event pages where you can purchase tickets securely.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-slate-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl ">
                            Q : How can I join your community?
                        </div>
                        <div className="collapse-content">
                            <p className="mb-5 text-lg font-medium">A : Joining our community is easy! Simply sign up on our website to participate in forums, receive newsletters, and stay updated on the latest conventions.</p>

                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-slate-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl ">
                            Q : Can I write a review for a convention I attended?
                        </div>
                        <div className="collapse-content">
                            <p className="mb-5 text-lg font-medium">A : Yes! We encourage community contributions. Please visit our review submission page to share your experiences with other gamers.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <p className="mt-20 text-xl font-semibold bg-orange-200 p-5 text-center rounded-2xl"> Our Commitment
                    At Gaming Conventions Central, we are committed to fostering a safe, inclusive, and enjoyable environment for all gamers. We adhere to the highest standards of integrity and transparency in all our operations, ensuring that our content is accurate, unbiased, and helpful.</p>
            </div>


        </div>
    );
};

export default About;
