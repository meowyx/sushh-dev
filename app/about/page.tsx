import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat, Book, Music, Tv, Gamepad2, Brain, Code } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container max-w-6xl py-4 lg:py-6">
      <h2 className="text-3xl font-bold mb-6">More About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cat className="h-6 w-6" />
              Cat Person
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>I'm a cat person and my cat is my love.</p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-6 w-6" />
              Tech Enthusiast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I love learning new freaky concepts about tech when I've time.
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-6 w-6" />
              Avid Reader
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I love reading books, comics, manga and manhwa in my spare time.
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-6 w-6" />
              Music I'm Listening To
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Taylor Swift, Chappel Roan, Fletcher, Sabrina Carpenter</p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tv className="h-6 w-6" />
              <Gamepad2 className="h-6 w-6" />
              Entertainment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>I like watching anime and playing games also.</p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6" />
              ADHD
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>I've ADHD so I'm either distracted or hyper focused.</p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-6 w-6" />
              Currently Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>How to write fun smart contracts</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
