import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-dvh place-items-center py-32">
      <Container className="text-center">
        <p className="font-display text-[8rem] leading-none text-ember sm:text-[12rem]">
          404
        </p>
        <h1 className="font-display text-3xl">This page went cold</h1>
        <p className="mx-auto mt-3 max-w-sm text-cream/60">
          The link you followed doesn&apos;t exist — but the oven&apos;s still on.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back home</Button>
          <Button href="/menu" variant="outline">
            See the menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
