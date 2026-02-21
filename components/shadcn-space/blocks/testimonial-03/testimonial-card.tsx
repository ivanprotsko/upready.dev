import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

export type TestimonialType = {
  id: number;
  type: "text" | "media";
  quote?: string;
  image?: string;
  name: string;
  role: string;
  theme?: "light" | "dark";
  youtubeId?: string;
};

type TestimonialCardProps = {
  data: TestimonialType;
  className?: string;
};

function VideoDialog({ youtubeId }: { youtubeId: string }) {
  return (
    <DialogContent className="p-0 overflow-hidden h-full max-h-96">
      <div className="w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </DialogContent>
  );
}

export function TestimonialCard({ data, className }: TestimonialCardProps) {
  const isText = data.type === "text";

  const MainTextClass =
    data.theme === "dark"
      ? "text-white dark:text-background"
      : "text-foreground";

  const SubTextClass =
    data.theme === "dark"
      ? "text-white/50 dark:text-background/50"
      : "text-muted-foreground";

  return isText ? (
    <Card
      className={cn(
        "w-full h-full aspect-[4/5] rounded-3xl sm:p-8 sm:pt-10 p-6 pt-8 ring-0 shadow-none",
        data.theme === "dark" ? "bg-primary dark:bg-white" : "bg-teal-400/20",
        className,
      )}
    >
      <CardContent className="p-0 flex flex-col justify-between flex-1 h-full">
        <div className="shrink-0 flex items-start">
          <img
            src="https://images.shadcnspace.com/assets/svgs/icon-quote-muted.svg"
            alt="muted quote"
            className={cn(
              data.theme === "dark" ? "hidden dark:block" : "block dark:hidden",
            )}
          />
          <img
            src="https://images.shadcnspace.com/assets/svgs/icon-quote-white-muted.svg"
            alt="muted quote"
            className={cn(
              data.theme === "dark" ? "block dark:hidden" : "hidden dark:block",
            )}
          />
        </div>

        <div className="flex flex-col sm:gap-8 gap-6">
          <p className={cn("sm:text-2xl text-xl", MainTextClass)}>
            {data.quote}
          </p>

          <div className="flex items-center gap-1.5">
            <img
              src={data.image!}
              alt={data.name}
              width={48}
              height={48}
              className="object-cover rounded-full"
            />
            <div>
              <p className={cn("text-lg font-medium", MainTextClass)}>
                {data.name}
              </p>
              <p className={cn("text-base", SubTextClass)}>{data.role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : (
    <Card
      className={cn(
        "relative w-full h-full aspect-[4/5] rounded-3xl sm:p-8 sm:pt-10 p-6 pt-8 overflow-hidden ring-0 shadow-none",
        className,
      )}
    >
      <img
        src={data.image}
        alt={data.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-50% to-gray-950/0" />

      <CardContent className="relative z-10 flex items-end h-full p-0 flex-1">
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="text-lg font-medium text-white">{data.name}</p>
            <p className="text-base text-white/70">{data.role}</p>
          </div>
          <Dialog>
            <DialogTrigger
              render={
                <Button className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                  <Play size={16} className=" text-gray-950 shrink-0" />
                </Button>
              }
            />
            <DialogContent>
              <VideoDialog youtubeId={data.youtubeId!} />
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
