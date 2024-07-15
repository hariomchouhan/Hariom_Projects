import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function App() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <Dialog>
        <DialogTrigger>
          {" "}
          <Button>Click Me!</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex flex-col gap-6 justify-center items-center">
            <DialogTitle>Welcome to the ShadCN Project With</DialogTitle>
            <DialogDescription>
              <span className="text-[#ea580c] text-4xl font-bold text-center">
                {" "}
                Hari ॐ
              </span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
