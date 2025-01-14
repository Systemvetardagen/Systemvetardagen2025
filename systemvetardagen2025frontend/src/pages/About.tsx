import React from 'react';
import Footer from '../components/footer';
import logoWithShirt from '../assets/2024logoWithShirt.jpg';

const About = () => {
    return (
        <div className="bg-[rgb(var(--background))] text-[rgb(var(--text))] flex flex-col min-h-screen">
            <img
                            src={logoWithShirt}
                            alt="Systemvetardagen Logo shirt"
                            className="max-w-full h-auto"
                            style={{
                                width: '100vw',
                                height: '220px',
                                objectFit: 'cover',
                                objectPosition: '0 -125px'
                              }}
                        />
            <div className="flex-grow max-w-4xl mx-auto px-4 py-8">
                <div className="space-y-12">
                    
                    <section className="space-y-8">
                        
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold mb-3">
                                    What is Systemvetardagen?
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    Systemvetardagen is an annual career fair for students and recent graduates focusing on the IT sector. The fair is hosted by the Student Union DISK, a student union at the Department of Computer and Systems Sciences in Kista at Stockholm University. This event is completely free to attend for all students!
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-3">
                                    Where & when is it?
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    In 2025 the fair is held on the 26th of March between 10-16 in Kista Nod, located at Borgarfjordsgatan 12 in Stockholm. No sign-up is needed, just come as you are!
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-3">
                                    What companies are attending this year?
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    You can find all the displaying companies in our{' '}
                                    <a
                                        href="/companies"
                                        className="text-[rgb(var(--primary))] hover:underline"
                                    >
                                        company catalog
                                    </a>
                                    .
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-3">
                                    How can I as a company display?
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    Email us at{' '}
                                    <a
                                        href="mailto:systemvetardagen@disk.su.se"
                                        className="text-[rgb(var(--primary))] hover:underline"
                                    >
                                        systemvetardagen@disk.su.se
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
