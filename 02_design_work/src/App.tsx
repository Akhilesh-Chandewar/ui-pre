import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function App() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center justify-center mt-10">
        <h1 className="text-4xl font-bold text-blue-600 border-2 border-blue-600 p-2 rounded-xl">
          Hello, Tailwind CSS with Vite and React!
        </h1>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Card title="Card Title" description="Card Description" />
        <Card title="Card Title" description="Card Description" />
      </div>
      <div>
        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button>Click me</Button>
        </div>
      </div>
    </>
  );
}

export default App;
