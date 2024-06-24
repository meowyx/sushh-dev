import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-bold text-3xl lg:text-4xl">
            Hey I&apos;m Sushmita 👋
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Full-Stack Web3 Developer
          </p>
        </div>
        <div className="flex-1">
          <p className="text-muted-foreground text-lg py-4">
            I&apos;m a Full-Stack Web3 Developer, tech explorer, and open source
            contributor. Currently, I&apos;m part of the RAD (Rapid Application
            Development) Contractor Team at Consensys where I work on building
            full-stack dapps using all the web3 products (MetaMask, Infura,
            Linea, etc) available.
          </p>
          <p className="text-muted-foreground text-lg py-2">
            Tech is my jam, and I&apos;m always scouting for the next cool tool
            to dive into.
          </p>
          <p className="text-muted-foreground text-lg py-2">
            Here&apos;s my{" "}
            <a
              href="https://github.com/meowyx"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p className="text-muted-foreground text-lg py-2">
            Follow me on{" "}
            <a
              href="https://twitter.com/me256ow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="underline">X (Twitter)</span>
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/sushmitaaar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="underline">LinkedIn.</span>
            </a>
          </p>
          <p className="text-muted-foreground text-lg py-2">
            Book a call with me{" "}
            <a
              href="https://cal.com/meowy/coffee-chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              here 👈
            </a>
            .
          </p>
          <p className="text-muted-foreground text-lg py-2">
            Contact me via email: <a href="mailto:devmeowy@gmail.com">📥</a>
          </p>
        </div>
      </div>
    </div>
  );
}
