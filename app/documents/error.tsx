"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2 className="text-center">
        Something went wrong! <br />
        Error: {error.message}
      </h2>
      <div className="justify-center flex">
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
