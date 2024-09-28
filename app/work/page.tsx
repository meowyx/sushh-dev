import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Calendar,
  ExternalLink,
  Cat,
  Book,
  Music,
  Tv,
  Gamepad2,
  Brain,
  Code,
  Trophy,
  Hammer,
} from "lucide-react";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Work - Sushmita",
  description: "Sushmita's work and projects",
};

const aboutItems = [
  {
    icon: Cat,
    title: "Cat Person",
    content: "I'm a cat person and my cat is my love.",
  },
  {
    icon: Code,
    title: "Tech Enthusiast",
    content: "I love learning new freaky concepts about tech when I've time.",
  },
  {
    icon: Book,
    title: "Avid Reader",
    content: "I love reading books, comics, manga and manhwa in my spare time.",
  },
  {
    icon: Music,
    title: "Music I'm Listening To",
    content: "Taylor Swift, Chappel Roan, Fletcher, Sabrina Carpenter",
  },
  {
    icon: Tv,
    title: "Entertainment",
    content: "I like watching anime and playing games also.",
    secondIcon: Gamepad2,
  },
  {
    icon: Brain,
    title: "ADHD",
    content: "I've ADHD so I'm either distracted or hyper focused.",
  },
  {
    icon: Code,
    title: "Currently Learning",
    content: "How to write fun smart contracts",
  },
];

export default function WorkPage() {
  return (
    <div className="container max-w-4xl px-4 py-12 lg:py-20">
      <div className="flex flex-col items-center gap-8 text-center mb-12">
        <Avatar className="h-32 w-32 border-4 border-primary">
          <AvatarImage src="/avatar.png" alt={siteConfig.author} />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-bold text-4xl lg:text-5xl mb-2">
            Hey, I&apos;m Sushmita 👋
          </h1>
          <p className="text-xl text-muted-foreground">
            Full-Stack Web3 Developer
          </p>
        </div>
      </div>

      <Tabs defaultValue="about" className="space-y-6">
        <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent p-0">
          {["about", "work", "blogs", "connect"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="flex-grow sm:flex-grow-0 px-4 py-2 text-sm font-medium rounded-md transition-colors data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {tab === "about"
                ? "About Me"
                : tab === "work"
                ? "My Work"
                : tab === "blogs"
                ? "Blogs & Articles"
                : "Connect"}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <Card className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                I&apos;m part of the RAD (Rapid Application Development) Team at
                Consensys, where I mainly focus on building full-stack web3
                applications, use cases, and content using all the Consensys
                products available. I work primarily with Nextjs, TypeScript,
                React, and Solidity. I have over two years of experience in
                building web3 applications and I&apos;m passionate about
                learning new technologies.
              </p>
              <p className="text-muted-foreground">
                I&apos;ve worked on{" "}
                <a
                  href="https://www.udacity.com/course/blockchain-developer--nd1310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline text-primary"
                >
                  Udacity&apos;s Blockchain Nanodegree
                </a>{" "}
                program and been involved with a web3 DAO where I founded and
                led two teams focused on education and inclusivity.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="mt-4 w-full sm:w-auto"
              >
                <a
                  href="https://dub.sh/sushmita-resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full"
                >
                  View Resume <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="py-4 lg:py-6">
            <h2 className="text-3xl font-bold mb-6">More About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutItems.map((item, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <item.icon className="h-6 w-6" />
                      {item.secondIcon && (
                        <item.secondIcon className="h-6 w-6" />
                      )}
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="work" className="mt-6 space-y-8">
          <Card className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardHeader>
              <CardTitle className="text-2xl">Full-Stack Web3 DApps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Form-XChange", "Polis", "EventSea"].map((project) => (
                <a
                  key={project}
                  href={`https://github.com/Consensys/${project}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:underline"
                >
                  <Github className="mr-2 h-5 w-5" /> {project}
                </a>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardHeader>
              <CardTitle className="text-2xl">Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Next-MetaMask-Template", "GasAPI-template"].map((template) => (
                <a
                  key={template}
                  href={`https://github.com/Consensys/${template}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:underline"
                >
                  <Github className="mr-2 h-5 w-5" /> {template}
                </a>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Trophy className="mr-2 h-6 w-6" /> Hackathon Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="https://github.com/cxalem/frameworks-hack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <Github className="mr-2 h-5 w-5" /> Farcaster Frames Hackathon
              </a>
              <a
                href="https://github.com/e-roy/glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <Github className="mr-2 h-5 w-5" /> Glitch (Livepeer bounty)
              </a>
              <a
                href="https://github.com/diegoalzate/building-blocks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <Github className="mr-2 h-5 w-5" /> Building Blocks (Chainlink
                top 40 projects bounty)
              </a>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Hammer className="mr-2 h-6 w-6" /> Open Source Contributions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="https://academy.developerdao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <ExternalLink className="mr-2 h-5 w-5" /> Developer DAO Academy
              </a>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardHeader>
              <CardTitle className="text-2xl">Udacity Course</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="https://www.udacity.com/course/blockchain-developer--nd1310"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <ExternalLink className="mr-2 h-5 w-5" /> Blockchain Developer
                Nanodegree
              </a>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardHeader>
              <CardTitle className="text-2xl">
                Udacity Course Materials
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="https://github.com/udacity/cd13282-blockchain-with-solidity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <Github className="mr-2 h-5 w-5" /> Exercise & Solutions
              </a>
              <a
                href="https://github.com/udacity/cd13282-blockchain-with-solidity-project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <Github className="mr-2 h-5 w-5" /> Solidity Final Project
                Starter
              </a>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blogs" className="mt-6">
          <Card className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardHeader>
              <CardTitle className="text-2xl">Blogs & Articles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "The Importance of Data Availability on Linea",
                  url: "https://linea.mirror.xyz/W1J_-t293AHrFtgLc_SbFD1dOIF4ZosJHI6JVPl0SQ4",
                },
                {
                  title: "The Linea Prover For Dummies",
                  url: "https://linea.mirror.xyz/h_Y_XazAtqDHODCqFMDs3jY2jn4B-Un8fepRP1xStBg",
                },
                {
                  title: "How To Build a Simple Web3 Marketplace Dapp on Linea",
                  url: "https://linea.mirror.xyz/LKD0bDOioJC6oruRiK_1b_QvhbBACaKnUK12o3qxF_Q",
                },
                {
                  title: "Linea Prover in Depth",
                  url: "https://linea.mirror.xyz/zYD75brljMLn8nWudtihqvjd54nLK23P8-cnyvxmvSU",
                },
                {
                  title: "How to Implement MetaMask SDK with Next.js",
                  url: "https://metamask.io/news/developers/how-to-implement-metamask-sdk-with-nextjs/",
                },
                {
                  title:
                    "How to Build a Simple Gas Tracker App with Gas API and Next.js",
                  url: "https://metamask.io/news/developers/how-to-build-a-simple-gas-tracker-app-with-gas-api-and-nextjs/",
                },
                {
                  title:
                    "How to Implement the MetaMask Gas API in an Event Ticketing DApp",
                  url: "https://metamask.io/news/developers/how-to-implement-the-metamask-gas-api-in-an-event-ticketing-dapp/",
                },
                {
                  title: "How to Write and Deploy a Simple Stablecoin on Linea",
                  url: "https://metamask.io/news/developers/how-to-write-and-deploy-a-simple-stablecoin-on-linea/",
                },
                {
                  title: "Developer Guide: Phosphor",
                  url: "https://paragraph.xyz/@phosphor/developer-guide-phosphor",
                },
                {
                  title:
                    "Viem vs. Ethers.js: A Detailed Comparison for Web 3 Developers",
                  url: "https://metamask.io/news/developers/viem-vs-ethers-js-a-detailed-comparison-for-web-3-developers/",
                },
                {
                  title:
                    "Hardhat vs. Foundry: Choosing the Right Ethereum Development Tool",
                  url: "https://metamask.io/news/developers/hardhat-vs-foundry-choosing-the-right-ethereum-development-tool/",
                },
                {
                  title: "A Simple Guide to ERC-1155 Tokens on Ethereum",
                  url: "https://metamask.io/news/developers/a-simple-guide-to-erc-1155-tokens-on-ethereum/",
                },
              ].map((blog) => (
                <a
                  key={blog.title}
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline block"
                >
                  {blog.title}
                </a>
              ))}
              <Button
                variant="outline"
                size="lg"
                className="mt-4 w-full sm:w-auto"
              >
                <a
                  href="https://www.sushh.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full"
                >
                  Visit My Blog <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="connect" className="mt-6">
          <Card className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardHeader>
              <CardTitle className="text-2xl">Connect with Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: Github,
                  text: "GitHub: meowyx",
                  url: "https://github.com/meowyx",
                },
                {
                  icon: Twitter,
                  text: "Twitter: @me256ow",
                  url: "https://twitter.com/me256ow",
                },
                {
                  icon: Linkedin,
                  text: "LinkedIn: sushmitaaar",
                  url: "https://www.linkedin.com/in/sushmitaaar/",
                },
                {
                  icon: Mail,
                  text: "devmeowy@gmail.com",
                  url: "mailto:devmeowy@gmail.com",
                },
                {
                  icon: Calendar,
                  text: "Book a Coffee Chat",
                  url: "https://cal.com/meowy/coffee-chat",
                },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:underline"
                >
                  <item.icon className="mr-2 h-6 w-6" /> {item.text}
                </a>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
