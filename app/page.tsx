"use client";

import { WelcomeAnimation } from "@/components/ui/WelcomeAnimation";
import { AnimatedBox } from "@/components/ui/AnimatedBox";
import { useEffect, useState } from "react";
import { HandWrittenTitle } from "@/components/ui/TitleWithArrow";
import { motion } from "framer-motion";

const projects = [
  {
    project_name: "Emmanuel Luis",
    tech: "Computer Science Graduate",
    description:
      "I'm a software engineer passionate about building efficient, scalable solutions. I have experience in automation, full-stack development, and cloud services, with projects ranging from streamlining on-call processes at AWS to developing web applications. I also enjoy trying out new things especially food :))",
    src: "/image/Emmanuel Luis.png",
  },
  {
    project_name: "Inventory App",
    tech: "React, Jest, Node.js, React Testing Library",
    description:
      "Our inventory app is a full-stack application where users can browse items, search for what they need, add items to a cart, and checkout. We used Jest for both our frontend and backend tests, and we were able to achieve 100% code coverage for our backend, which gives us a lot of confidence in our API.",
    src: "/image/Inventory App.png",
  },
  {
    project_name: "Multicash - Final Bootcamp Project",
    tech: "Java, Spring Boot, PostgreSQL, Docker, Python, Flask",
    description:
      "Multicash is a digital wallet app that simplifies money transfers using an in-service balance. You can make peer-to-peer transfers with anybody who has an account, deposit money from any bank, and withdraw to any bank. The whole system runs on Docker Compose and is deployed on a Google Cloud VM.",
    src: "/image/MultiCash.png",
  },
  {
    project_name: "Horizon - Back End Module",
    tech: "Spring Boot, Spring JPA, Hibernate, H2, Auth0",
    description:
      "Horizon is basically a backend platform where you can manage users and wireless phone plans. We use Auth0 for authentication, Spring JPA with Hibernate for the data layer, and H2 as our in-memory database. I also made a Python script to sort of showcase our service and its different use cases.",
    src: "/image/Horizon Back End.png",
  },
  {
    project_name: "Book Tracker - Front End Module",
    tech: "React, React Router, Zustand, Tailwind CSS, OpenLibrary API",
    description:
      "My Book Tracker app is a React SPA that uses the OpenLibrary API to let users search for books and save them to a collection so they can keep track of what they're reading. It has grid and list views, nested routes with URL parameters, and I used Zustand for global state management which I had to learn from zero.",
    src: "/image/Book Tracker App.png",
  },
  {
    project_name: "MCP Server - Deployment Module",
    tech: "Go, AWS ECS, Terraform, GitHub Actions, Docker",
    description:
      "We built an MCP server in Go deployed to AWS Elastic Container Service using Terraform and GitHub Actions. It's an open source standard for connecting AI applications to external systems. We added tools like a loan APR calculator and a fortune API, with GitHub Actions running linting and security checks on every merge.",
    src: "/image/MCP Server Deployment.png",
  },
];

const multiverseProjects = [
  {
    title: "Inventory App",
    subtitle: "Full Stack Application",
    overview:
      "A full-stack inventory management app with a React frontend and Node.js backend. Users can browse items, search for what they need, add items to a cart, and checkout. We used Jest for both our frontend and backend tests, along with React Testing Library to mimic real UI interactions.",
    features: [
      "CRUD operations for inventory items (get, post, put, delete)",
      "Search functionality with dynamic queries",
      "Shopping cart with add, remove, and checkout",
      "Frontend tests that mimic real UI interactions",
      "Backend route tests for success and failure cases (server failures, database failures)",
      "Mocked database to isolate the server from its database dependency",
      "Single Jest config to set the right testing environment for both frontend and backend",
    ],
    skills: [
      "Full-Stack Development",
      "Test-Driven Development",
      "Jest & React Testing Library",
      "API Design",
      "Team Collaboration",
      "Problem Solving",
    ],
    skillDemo:
      "On the backend, we tested all the CRUD operations, not just on success but also failures like server errors or database issues where an item might not be found. We mocked the database to isolate the server from its database dependency, and also wrote unit tests for the database individually. On the frontend, we tested fetching correct items on load, search query results, and cart interactions like adding, removing, and checking out. We achieved 100% code coverage on our backend tests, which gave us a lot of confidence in our API.",
    takeaways:
      "Nobody on the team was familiar with frontend tests going in, so Bhavik had to learn React Testing Library to write those, which helped us out a lot. We also couldn't initially run both our frontend and backend tests with a single script, so we wrote a Jest config file to set the right environment for both. That ended up being a big win for us.",
    contribution:
      "I led the backend testing effort, writing unit tests for all server routes with mocked database dependencies. I also presented the testing overview for the team, walking through both our frontend and backend test strategies.",
  },
  {
    title: "Multicash",
    subtitle: "Final Bootcamp Project",
    overview:
      "Multicash is a digital wallet app that simplifies money transfers using an in-service balance. Users can make peer-to-peer transfers with anyone who has an account, deposit money from any bank, and withdraw to any bank as well.",
    features: [
      "Secure user accounts with Spring Security and JSON Web Tokens",
      "Instant peer-to-peer transfers",
      "Deposits and withdrawals to and from any bank account",
      "Two mock bank services (multi-bank in Spring Boot, versebank in Python Flask) to simulate real-world bank interactions",
      "Docker Compose file that starts the entire system just by running docker compose up",
      "Deployed on a Google Cloud Virtual Machine",
      "Interactive terminal client that crafts requests for you",
      "Python load-testing script using threads to simulate concurrent users",
      "Comprehensive logging across authentication and database layers",
    ],
    skills: [
      "Java & Spring Boot",
      "PostgreSQL",
      "Docker & Docker Compose",
      "Spring Security & JWT",
      "Python & Flask",
      "Google Cloud Platform",
      "Concurrency & Load Testing",
      "Debugging & Problem Solving",
    ],
    skillDemo:
      "The core cash transfer service manages user accounts and transfers. When a withdrawal is made, it creates the request and forwards it to the appropriate bank service. I wrote the Docker Compose YAML that starts the entire system with a single command, and deployed it all on a Google Cloud VM. I also wrote a Python load-testing script using threads to simulate multiple users logging in, making withdrawals, and doing peer transfers concurrently.",
    takeaways:
      "We ran into issues early on with the data persistence layer alongside business logic bugs, and it was hard to figure out where problems were coming from. The authentication layer added another layer of complexity since I couldn't always tell if failures were auth-related or logic-related. I simplified things by swapping in Spring Boot's H2 embedded database for development, which let us focus on business logic. Once everything was integrated, I added comprehensive logging so we could pinpoint whether issues were in the auth phase or the database phase, which made debugging a lot easier.",
  },
  {
    title: "Horizon",
    subtitle: "Back End Module Project",
    overview:
      "Horizon is a backend platform for managing users and wireless phone plans. Authentication is handled through Auth0 with Google login. The core service is built with Spring Boot, using Spring JPA with Hibernate for the data layer and H2 as the in-memory database.",
    features: [
      "User management with full CRUD operations",
      "Wireless plan management and assignment",
      "Auth0 integration for authentication (continue with Google)",
      "Spring JPA with Hibernate for the data layer",
      "H2 in-memory database",
      "Python script to showcase the API and its use cases",
      "Manual API testing with Postman",
      "GitHub for repository management and project workflows",
    ],
    skills: [
      "Spring Boot",
      "RESTful API Design",
      "Authentication & Security",
      "ORM & Database Design",
      "Java",
      "Team Collaboration",
      "Project Management",
    ],
    skillDemo:
      "The core service is built with Spring Boot, with Spring JPA and Hibernate handling the data layer and H2 for the database. We used Auth0 for authentication and GitHub to manage our repository and project workflows. I also built a Python script to showcase the API and its use cases, including the error handling for things like assigning plans. We used Postman for manual testing throughout development.",
    takeaways:
      "Getting to work with the Spring Boot ecosystem was really interesting, especially seeing how Auth0 integrates for authentication. Building the Python demo script was a cool way to showcase what our API can do, including the error handling. It was also good practice using GitHub to manage the project workflows and keep track of everything the team was working on.",
    contribution:
      "I introduced the project and demonstrated the application, including the Auth0 login flow and the Python API demo script I built. I worked on the core service layer and the API endpoints for user and plan management. I then handed it over to Boogie for his part of the presentation.",
  },
  {
    title: "Book Tracker",
    subtitle: "Front End Module Project",
    overview:
      "Book Tracker is a React SPA that uses the OpenLibrary API to let users search for books and save them to a personal collection. It features client-side routing with React Router, including nested routes and URL parameters for individual book pages.",
    features: [
      "Book search powered by OpenLibrary API",
      "Detailed book pages with descriptions and subjects (all coming from the API)",
      "Personal collection with add and remove, with immediate feedback",
      "Grid and list view options (grid for blocks with info, list for quick scrolling)",
      "Book count badge on the top right showing how many books you have saved",
      "Nested routing with URL parameters for individual books",
      "Responsive UI built with Tailwind CSS",
    ],
    skills: [
      "React & React Router",
      "API Integration",
      "Zustand State Management",
      "Tailwind CSS",
      "Unit Testing",
      "Responsive Design",
      "Single Page Applications",
    ],
    skillDemo:
      "I built the UI with React components, implemented client-side routing with React Router (nested routes and URL parameters for specific books), and used Zustand for global state management across components. Tailwind CSS let me embed styling directly into the JSX, which made it really quick to develop the UI. I also wrote tests for the components using React Testing Library.",
    takeaways:
      "Zustand was completely new to me, so I had to learn it from zero, which was a good challenge. This was also the first time I wrote unit tests for an application, which changed how I think about building components. Tailwind CSS was really interesting to work with for quickly developing responsive styling. For next steps, I'd want to add theme customization like dark mode, reading status tracking, and persistent storage so the data survives page refreshes.",
  },
  {
    title: "MCP Server",
    subtitle: "Deployment Module Project",
    overview:
      "An MCP (Model Context Protocol) server built in Go and deployed to AWS Elastic Container Service using Terraform and GitHub Actions. MCP is an open source standard for connecting AI applications to external systems. We used built-in Go libraries including net/HTTP along with the MCP Go SDK.",
    features: [
      "MCP server built with Go and the MCP Go SDK",
      "GitHub OAuth authentication (sign in with GitHub right from VS Code)",
      "Loan APR calculator tool",
      "Fortune API tool that calls a backend API",
      "CI/CD pipeline with GitHub Actions (builds Docker images on merge to main)",
      "Terraform to create the AWS resources",
      "HTTPS with Route 53 and AWS Certificate Manager",
      "Docker images pushed to Docker Hub",
      "Linting and security checks on Go, Terraform, and Docker files",
    ],
    skills: [
      "Go",
      "AWS (ECS, Route 53, ACM, Load Balancer)",
      "Terraform",
      "GitHub Actions",
      "Docker",
      "CI/CD Pipelines",
      "Team Collaboration",
      "Infrastructure as Code",
    ],
    skillDemo:
      "Terraform handles creating the AWS resources, and GitHub Actions builds and pushes Docker images to Docker Hub whenever a PR is merged to main. GitHub Actions also runs linting and security checks on our Go, Terraform, and Docker files. On the AWS side, we used ECS with a load balancer in front of it, and set up HTTPS through Route 53 and the AWS Certificate Manager. The tools we built include a loan APR calculator, a fortune API that calls a backend endpoint, and the Hello World tool from the SDK.",
    takeaways:
      "Deployment was both easy and hard at times. We learned a lot about setting up a deployment pipeline, and in the future we'd have a much easier time with the parts that tripped us up. Our three main takeaways: we needed more tests to make deployments more robust, we could have added more complex tools to the server, and we came out with a solid foundation we could keep building on.",
    contribution:
      "I worked on this with Justin and Damien. We introduced the project together, talked about the technology, showed a demo, and gave a retrospective of what went right and what went wrong.",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen overflow-y-auto">
      <section className="h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center gap-x-[-20]">
          <div className="w-[50%] relative">
            <div className="z-50 translate-x-[-26%] translate-y-[30%]">
              <HandWrittenTitle title="Click me to make me bigger!" />
            </div>
            <AnimatedBox projects={projects} />
          </div>
          <div className="w-[42%] -ml-16 z-20">
            <WelcomeAnimation />
          </div>
        </div>
        <motion.div
          className="flex justify-center pb-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-lg font-computer_handwritten text-[#0A3409]/60">
            scroll down
          </span>
        </motion.div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-computer_handwritten text-foreground mb-12 text-center">
            My Apprenticeship
          </h2>
          <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12 space-y-6">
            <p className="text-lg font-computer_handwritten text-muted-foreground leading-relaxed">
              Hey, I&apos;m Emmanuel Luis, a Computer Science graduate and
              software engineer. I completed my apprenticeship through
              Multiverse where I got hands-on experience in full-stack
              development, cloud services, and a lot of the modern software
              engineering practices I use today. I enjoy building things
              and figuring out how to make them work well, and I&apos;m always
              eager to pick up new technologies. During my apprenticeship
              alone I went from React and Node.js to Spring Boot, Go,
              Terraform, and AWS services.
            </p>
            <p className="text-lg font-computer_handwritten text-muted-foreground leading-relaxed">
              Throughout my apprenticeship, I worked on team projects that
              really helped me grow. We achieved 100% backend test coverage
              on our inventory app which gave us a lot of confidence. I
              built a digital wallet system with Docker and deployed it to
              Google Cloud. I created a React SPA with technologies I had
              to learn from zero. And we deployed an MCP server to AWS
              with a full CI/CD pipeline. Each project helped me get better
              at collaborating, presenting, and delivering.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-computer_handwritten text-foreground mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Multiverse Projects
        </motion.h2>

        <div className="space-y-16">
          {multiverseProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
                <div
                  className={`absolute top-0 ${index % 2 === 0 ? "left-0" : "right-0"} w-1 h-full bg-[#0A3409]/20 rounded-full`}
                />
                <div className="mb-8">
                  <p className="text-sm font-computer_handwritten text-[#0A3409]/60 uppercase tracking-widest mb-2">
                    {project.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-computer_handwritten text-foreground mb-4">
                    {project.title}
                  </h3>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-computer_handwritten text-foreground mb-3">
                    Overview
                  </h4>
                  <p className="text-lg font-computer_handwritten text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-computer_handwritten text-foreground mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-lg font-computer_handwritten text-muted-foreground"
                      >
                        <span className="text-[#0A3409] mt-1">-</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-computer_handwritten text-foreground mb-3">
                    Skills Demonstrated
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-computer_handwritten rounded-full bg-[#0A3409]/10 text-[#0A3409]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-lg font-computer_handwritten text-muted-foreground leading-relaxed">
                    {project.skillDemo}
                  </p>
                </div>

                {project.contribution && (
                  <div className="mb-8">
                    <h4 className="text-xl font-computer_handwritten text-foreground mb-3">
                      My Contribution
                    </h4>
                    <p className="text-lg font-computer_handwritten text-muted-foreground leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xl font-computer_handwritten text-foreground mb-3">
                    Takeaways
                  </h4>
                  <p className="text-lg font-computer_handwritten text-muted-foreground leading-relaxed italic">
                    {project.takeaways}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-computer_handwritten text-foreground mb-12 text-center">
            Reflection on My Learning
          </h2>
          <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12 space-y-8">
            <p className="text-lg font-computer_handwritten text-muted-foreground leading-relaxed">
              When I started this apprenticeship I had a CS degree and some
              experience from my AWS internship, but the Multiverse program
              pushed me to grow in ways I wasn&apos;t expecting. Coming in, I
              knew I liked building things and solving problems. What I
              didn&apos;t know was how much I&apos;d enjoy the full range of
              software engineering, from writing frontend components to
              setting up cloud infrastructure to debugging across multiple
              services at once.
            </p>
            <p className="text-lg font-computer_handwritten text-muted-foreground leading-relaxed">
              The biggest thing I learned is that I can pick up new
              technologies quickly and figure things out. Every single
              project had something I&apos;d never worked with before,
              whether it was Zustand, Spring Boot, Go, or Terraform, and
              each time I was able to get up to speed and deliver. That
              pattern of learning from zero and making it work is something
              I now trust about myself as an engineer.
            </p>
            <p className="text-lg font-computer_handwritten text-muted-foreground leading-relaxed">
              I also grew a lot in how I work with others. Early on I was
              mostly focused on my own code, but by the end I was leading
              testing efforts, presenting for the team, and thinking about
              how to make the whole project better, not just my part. Working
              with teammates like Bhavik, Boogie, Justin, and Damien taught
              me that good communication matters just as much as good code.
            </p>
            <p className="text-lg font-computer_handwritten text-muted-foreground leading-relaxed">
              Looking back, the projects that challenged me the most are the
              ones I got the most out of. Debugging across authentication
              and database layers on Multicash taught me how to isolate
              problems. Writing my first unit tests on Book Tracker changed
              how I think about building components. And deploying to AWS
              with a full CI/CD pipeline showed me what it takes to ship
              something for real, not just get it running locally.
            </p>
            <p className="text-lg font-computer_handwritten text-muted-foreground leading-relaxed">
              Going forward, I&apos;m most interested in full-stack
              development, cloud infrastructure, and building tools that
              make people&apos;s work easier. That&apos;s what got me into
              engineering in the first place, and this apprenticeship gave
              me the skills and confidence to actually do it well. I&apos;m
              excited for whatever comes next.
            </p>
          </div>
        </motion.div>
      </section>

      <footer className="py-12 text-center">
        <p className="text-lg font-computer_handwritten text-muted-foreground">
          Emmanuel Luis - Multiverse Apprenticeship Portfolio
        </p>
      </footer>
    </main>
  );
}
