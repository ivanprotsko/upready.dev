import Dropdown from "@/components/shadcn-space/blocks/dropdown-02/dropdown";
import { Button } from "@/components/ui/button";
import { BellRing } from "lucide-react";

const page = () => {
  return (
    <Dropdown
      defaultOpen={true}
      align="center"
      trigger={
        <Button className="rounded-full h-9 w-9 flex items-center justify-center">
          <BellRing className="size-4" />
        </Button>
      }
    />
  );
};

export default page;
