'use client'

import React from 'react';
import Container from "../../components/global/container";
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import Icons from '@/components/global/icons';
import Navbar from '@/components/marketing/navbar';
import Footer from '@/components/marketing/footer';
import Image from 'next/image';

function Portfolio() {
  return (
      <div className="relative flex flex-col items-center justify-center w-full py-20">
        <Navbar />
      <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>
      <div className="flex flex-col items-center justify-center gap-y-8 relative">
        <h1>
          <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
            <OrbitingCircles speed={0.5} radius={300}>
              <Icons.circle1 className="size-4 text-foreground/70" />
              <Icons.circle2 className="size-1 text-foreground/80" />
            </OrbitingCircles>
            <OrbitingCircles speed={0.25} radius={400}>
              <Icons.circle2 className="size-1 text-foreground/50" />
              <Icons.circle1 className="size-4 text-foreground/60" />
              <Icons.circle2 className="size-1 text-foreground/90" />
            </OrbitingCircles>
          </Container>

          <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0">
            <Container className="relative hidden lg:block overflow-hidden">
              <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto">
                <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                  <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-[9px] font-medium mr-2 text-white">
                    NEW
                  </span>
                  CHECK OUR UPDATED PORTFOLIO
                </span>
              </button>
            </Container>

            <Container delay={0.15}>
              <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight max-w-4xl mx-auto">
                Check{" "}
                <span className="">Our{" "}</span>
                Portfolio
                <p className="mt-4 text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto">
                  Whether you're looking for a custom website, stunning designs, or impactful video editing, we're here to help. Let's start your project today!
                </p>
              </h1>
            </Container>

            {/* Web Development Portfolio */}
            <section className="mt-10 w-full max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Web Development Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                {
                    title: "Fashion Website",
                    description: "A modern fashion items listing site built with React.js and optimized for conversions.",
                    image: "/images/website1.jpg",
                    alt: "Fashion Website"
                },
                {
                    title: "Design Lab",
                    description: "A dynamic site for a designing company with an interactive portfolio and contact forms.",
                    image: "/images/website2.png",
                    alt: "Design Lab"
                },
                {
                    title: "UI/UX Designer Portfolio",
                    description: "A dynamic site for a person with an interactive portfolio and contact forms.",
                    image: "/images/website3.jpg",
                    alt: "UI/UX Designer Portfolio"
                },
                {
                    title: "Web Dev Tool Web",
                    description: "A dynamic site for a web development tool with an interactive interface.",
                    image: "/images/website4.png",
                    alt: "Web Dev Tool Web"
                }
                ].map((project, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                    <Image src={project.image} alt={project.alt} width={600} height={400} className="rounded-md mb-4" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                </div>
                ))}
            </div>
            </section>

            {/* Graphic Design Portfolio */}
            <section className="mt-10 w-full max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Graphic Designing Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                {
                    title: "📌 Branding & Logo Design",
                    description: "Crafted unique logos and brand identities for multiple clients, enhancing brand recognition.",
                    image: "/images/design-project1.jpg",
                    alt: "Branding & Logo Design"
                },
                {
                    title: "📱 Social Media Graphics",
                    description: "Designed engaging Instagram and Facebook posts to boost audience engagement.",
                    image: "/images/design-project2.jpg",
                    alt: "Social Media Graphics"
                }
                ].map((project, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                    <Image src={project.image} alt={project.alt} width={600} height={400} className="rounded-md mb-4" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                </div>
                ))}
            </div>
            </section>

            {/* Video Editing Portfolio */}
            <section className="mt-10 w-full max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Video Editing Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                {
                    title: "🎥 Gaming Montage Edits",
                    description: "Created high-paced gaming montages with dynamic effects and smooth transitions.",
                    video: "/videos/edit-project1.mp4"
                },
                {
                    title: "📽️ Promotional Videos",
                    description: "Edited high-quality promo videos for brands, increasing engagement by 70%.",
                    video: "/videos/edit-project2.mp4"
                }
                ].map((project, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                    <video controls className="rounded-md mb-4">
                    <source src={project.video} type="video/mp4" />
                    </video>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                </div>
                ))}
            </div>
            </section>

          </div>
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio;
